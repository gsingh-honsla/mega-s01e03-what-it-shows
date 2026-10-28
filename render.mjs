import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const npmRoot=execFileSync('npm',['root','--global'],{encoding:'utf8'}).trim();
const viteRoot=path.join(execFileSync('brew',['--prefix','vite'],{encoding:'utf8'}).trim(),'libexec/lib/node_modules/vite');
const {build}=await import(pathToFileURL(path.join(viteRoot,'dist/node/index.js')));
const {default:compiler}=await import(pathToFileURL(path.join(npmRoot,'svelte/compiler/index.js')));
const {mdsvex}=await import(pathToFileURL(path.join(npmRoot,'mdsvex/dist/main.js')));
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.join(here,'support-kb');
const css=new Map();
const pre=mdsvex({layout:{runbook:path.join(root,'src/lib/layouts/runbook.svelte')}});
const entry=path.join(here,'.render-entry.mjs');
await fs.writeFile(entry,`import Page from './support-kb/src/routes/kb/incidents/4471-review/+page.svx';\nimport {render} from 'svelte/server';\nexport default render(Page);\n`);
try {
 await build({root,configFile:false,logLevel:'warn',resolve:{alias:[{find:'#lib',replacement:path.join(root,'src/lib')},{find:'svelte/internal/server',replacement:path.join(npmRoot,'svelte/src/internal/server/index.js')},{find:'svelte/server',replacement:path.join(npmRoot,'svelte/src/server/index.js')}]},plugins:[{name:'course-svelte-render',async transform(code,id){if(!/\.(svelte|svx)$/.test(id))return; if(id.endsWith('.svx'))code=(await pre.markup({content:code,filename:id})).code;const result=compiler.compile(code,{filename:id,generate:'server',css:'external'});if(result.css)css.set(id,result.css.code);return {code:result.js.code,map:result.js.map};}}],ssr:{noExternal:true},build:{ssr:entry,outDir:path.join(here,'.render-build'),emptyOutDir:true,rollupOptions:{output:{entryFileNames:'page.mjs'}}}});
 const {default:rendered}=await import(pathToFileURL(path.join(here,'.render-build/page.mjs')));
 await fs.mkdir(path.join(here,'preview'),{recursive:true});
 await fs.writeFile(path.join(here,'preview/index.html'),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">${rendered.head}<style>${[...css.values()].join('\n')}</style></head><body>${rendered.body}</body></html>`);
 console.log('Rendered real Svelte components to preview/index.html');
} finally {await fs.rm(entry,{force:true});await fs.rm(path.join(here,'.render-build'),{recursive:true,force:true});}

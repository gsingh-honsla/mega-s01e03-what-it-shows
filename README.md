# What it shows

Proposed public submission for MEGA.dev Challenge S01E03. Prepared by Gurasees Bajaj with Codex. Not submitted or accepted yet.

## Findings

The October 4 course export has 427 rows and 412 unique report IDs. The supplied classifier produces two groups.

| Problem | Reports | Tenants |
| --- | ---: | ---: |
| Shared month-first parser for day-first tenants | 379 | 11 |
| booking-v3 hint contradicts the tenant parser | 33 | 3 |

Both issue drafts include their complete report ID lists. The lists are disjoint and cover all 412 reports. Intake labels disagree with the classifier for 38 reports. All five one-day-move desk notes remain in the parser group under the supplied classifier.

## Files

- [Parser issue draft](issue-parser.md)
- [Form hint issue draft](issue-hint.md)
- [Signed KB source](support-kb/src/routes/kb/incidents/4471-review/+page.svx)
- [Rendered page](preview/index.html)
- [Desktop screenshot](preview/desktop.png)
- [Mobile screenshot](preview/mobile.png)

The rendered HTML uses the supplied Svelte components and layout, compiled through mdsvex, Svelte and Vite. It is a static snapshot of the export. The table, timeline and signature stamp are computed during rendering. Original KB files are preserved in support-kb. The page's inherited KB breadcrumb points to /kb and requires the full KB host; this standalone snapshot does not provide that route.

## Reproduce

The current renderer uses global npm Svelte 5.57.3 and mdsvex 0.12.8, plus Homebrew Vite 8.3.5. It discovers their install locations through npm and brew. It adds no project dependencies.

Run `node render.mjs` from this directory. Open `preview/index.html` in a browser. The renderer writes no public endpoint and does not publish anything.

## Proposed publication

Create one dedicated public GitHub repository, gsingh-honsla/mega-s01e03-what-it-shows. Publish only this deliverables directory, then create two GitHub issues from the drafts. Do not publish the Personal Orchestration repository, other lessons, private course receipts, sign-in data or unrelated files. Public readers can see the course-provided fictional support data and the author's name. The course only reads the repository. Delete the repository after acceptance if desired.

Obtain explicit approval before repository creation, push or issue publication. Refresh the course export and recompute before final submission. This draft contains no course acceptance or earned-card claim.

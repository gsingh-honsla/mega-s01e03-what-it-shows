# What it shows

Public submission for MEGA.dev Challenge S01E03. Prepared by Gurasees Bajaj with Codex. The course accepted the tickets and signed page on October 28, 2026. Challenge S01E03 is solved. [Course debrief](https://hq.mega.dev/challenges/what-it-shows#debrief).

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

## Publication and resolution

Published with Gurasees's approval to [gsingh-honsla/mega-s01e03-what-it-shows](https://github.com/gsingh-honsla/mega-s01e03-what-it-shows). The course accepted both issue classifications, then exposed an engineering update that records #4471 closed October 5, 2026.

- [Parser issue #1](https://github.com/gsingh-honsla/mega-s01e03-what-it-shows/issues/1) is closed as completed. The desk fixed the parser with `fix(dates): parse dd/mm for eu locales`.
- [Hint issue #2](https://github.com/gsingh-honsla/mega-s01e03-what-it-shows/issues/2) is closed as not planned. The desk retired booking-v3 and marked the hint won't fix.

The signed page distinguishes those outcomes and labels the rendered table as the historical October 4 snapshot. The fresh export matched the original SHA-256 exactly before publication.

This dedicated repository contains only the reviewed Challenge package. Public readers can see the course-provided fictional support data and the author's name. The course only reads it. Delete the repository after acceptance if desired.

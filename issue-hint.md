# booking-v3 date hint contradicts the tenant date parser

Covers 33 of the 412 unique reports merged into #4471 in the October 4 export.

The booking-v3 form prints MM/DD/YYYY while reading input in the tenant locale. A day-first tenant follows the displayed hint and the form reverses the date. This affects form reports for Alder Physio, Copper Studio and Pale Harbour.

First report: 2026-04-17. Last report: 2026-09-22. Affected tenants: 3.

Classification follows `causeOf` in `src/lib/kb/causes.ts`, using tenant locale and actual form version. Intake tags and browser locale do not determine the cause. Deduplicate by report ID before counting.

Split these reports from #4471 into their own issue. A parser-only fix does not correct this hint.

Make the displayed hint agree with the tenant parser. Verify day-first booking-v3 forms and confirm booking-v2 behavior is unchanged.

## Covered report IDs

R-41230, R-41241, R-41251, R-41259, R-41262, R-41275, R-41294, R-41305, R-41308, R-41366, R-41372, R-41384, R-41387, R-41396, R-41400, R-41406, R-41415, R-41416, R-41418, R-41428, R-41439, R-41441, R-41449, R-41453, R-41456, R-41460, R-41472, R-41485, R-41493, R-41539, R-41572, R-41582, R-41584

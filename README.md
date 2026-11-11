# Redflag website

Astro static output with the existing CRE site faithfully preserved. The only visible CRE change is the For CRE / For Government control in the original nav. Government borrows the same light brand styles, navigation, footer, contact modal, fonts, and buttons.

## Development

Use Node 22.22.0 or later. Run `npm ci`, `npm run build`, and `npm run preview -- --host 127.0.0.1 --port 4327`. Production output is `dist/`.

## Structure

- `src/content/cre.ts` and `developer.ts` expose the original page sections. `src/content/original/*.json` retains original head, section markup, nav/footer variants, modal, and scripts from `origin/main`.
- `src/content/government.ts` provides government hero, features, steps, outcomes, and CTA content. `citations.ts` preserves the six Hemet source excerpts, annotation IDs, and deep-link construction.
- `src/components/`: Nav, Hero, FeatureGrid, SplitSection, Steps, Stats, CTA, Footer, DemoModal, CodeCitation, WorkspaceMock, and GovernmentExamples. CRE and Government compose these shared primitives; preserved CRE sections render their original markup without adding wrapper DOM.
- `src/layouts/Layout.astro` shares the original page shell and runtime. GA4 G-6T9PJ2V6HJ remains present on all pages.
- `public/css/{normalize,webflow,redflagdata.webflow}.css` and `public/js/webflow.js` are byte-for-byte copies of the original export. `audience.css` adds only the toggle/light color scheme/focus/reduced-motion rules. `government.css` scopes unique government layouts and reuses the original design tokens. CRE has no dark theme.

Original CSS classes, data attributes, and locally hosted Webflow interactions are deliberately retained at the user's correction. Replacing that runtime is a separate task. This favors visual and behavioral fidelity over rewriting the original section internals. Original placeholder links, hidden copy, image variants, footer variants, and modal styles are also preserved.

`/` serves CRE and `/government` serves Government. The toggle is real links; explicit choices are remembered locally but never redirect shared URLs. Astro file output preserves `/about-us.html`, `/developer.html`, `/401.html`, and `/404.html` as well as GitHub Pages extensionless URLs. `public/CNAME` retains `www.redflagdata.com`.

## Contact and demo behavior

The original modal, field names, Activepieces endpoint, Basic Auth header, reCAPTCHA gate, Cal.com embed, success/error copy, and Webflow opening/closing interactions are preserved. The endpoint can be configured through `src/content/site.ts`. Auth remains in the original public script at the user's explicit request. The form handler is limited to `#wf-form-Presale-Form`, so it does not intercept Government's illustrative ArcGIS search. The about page uses the same authenticated form handler.

No test leads were sent. Browser-local jQuery AJAX stubs verified the request header shape and field names and confirmed missing reCAPTCHA blocks submission. The existing reCAPTCHA key rejects localhost; production delivery/CORS/domain validation still needs an authorized live release check.

Government's workspace search/add controls are local illustrations. RFI replies and outcome targets are labeled illustrative; citation links open real Hemet document annotations.

## Verification and comparisons

`npm run build` passes; `npm audit` reports zero vulnerabilities. The original `origin/main` export is served on port 4328 for comparison; the Astro preview stays on 4327. Desktop 1440 and mobile 375 comparisons cover `/`, `/about-us`, `/developer`, and the original contact modal. All three CRE content trees match the original after asset URLs are normalized. Page heights and heading positions match. Home/about desktop screenshots are pixel-identical below the nav; mobile and developer captures have small browser rasterization differences with matching structure and layout. Side-by-side screenshots and browser logs are in `/tmp/redflag-comparison/`.

Government search, native citation popovers, nav-menu/modal interactions, real-link audience switching, and 375px layout were checked. Government and CRE home fit 375px. The original developer page has horizontal overflow at 375px, present identically in the comparison export; it is retained for fidelity.

See `docs/webflow-assets.md` for external Webflow-hosted references still present.

## Deployment

`.github/workflows/deploy.yml` builds/uploads `dist/` and deploys with `actions/deploy-pages`. A repository administrator must select **Settings → Pages → Build and deployment → Source: GitHub Actions** if still branch-based. Keep the custom domain and DNS unchanged. No workflow has run and no repository settings were changed.

All changes remain uncommitted. No pushes, PRs, merges, main changes, DNS changes, database changes, or release metadata changes were made.

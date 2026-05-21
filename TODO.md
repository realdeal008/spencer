# TODO

- [ ] Fix React Hooks eslint error (react-hooks/purity): remove impure `Date.now()` usage during render in `app/component/cartSidebar.jsx` by generating orderId/time inside the click handler (handleProceedToWhatsApp).
- [ ] Remove unused variable `err` in `app/component/cartSidebar.jsx` catch block.
- [ ] Resolve (or intentionally suppress) Next.js eslint `no-img-element` warnings in `app/component/cartSidebar.jsx` by switching to `next/image` or adding justified `/* eslint-disable @next/next/no-img-element */`.
- [ ] Update cspell errors in `app/component/cartSidebar.jsx` (e.g., add terms to `cspell.json` or correct wording) so it stops reporting unknown words.
- [ ] Run lint/build/tests (npm run lint / npm run build) to confirm zero errors.


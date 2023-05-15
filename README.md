# Docs CDN

This repository is to act as CDN via jsdeliver for the doc sites remote stylesheets and scripts.

## Docs Site

The docs site is currently viewable in preview at https://developers.beta.deepgram.com.

## CSS

Customising the CSS is done by making styles with a higher specificity than the default styling.
Readme provides a wide selection of CSS variables, but overriding class styling is acceptable
where necessary. Please Readme's docs on [customizing docs using CSS variables](https://docs.readme.com/main/docs/customizing-docs-using-css-variables)

## Publishing changes

The editing CSS-in-Readme process should be as follows:

1. Use Devtools to determine what CSS changes need to be made/added
2. New branch on this repo for your changes.
3. Add your changes to the [style.css](./style.css) file.
4. Make a PR for your changes.
5. Get it reviewed and approved.
6. Merge it.

## Contributing

Contributions should be made via PRs. Pushes directly to main are blocked. Please tag the DX/DevRel team as reviewers.

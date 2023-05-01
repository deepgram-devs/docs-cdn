# Docs CDN

This repository is to act as CDN via jsdeliver for the doc sites remote stylesheets and scripts.

## Docs Site

The docs site is currently viewable in preview at https://api-beta-deepgram.readme.io/

## CSS

Customising the CSS is done by making styles with a higher specificity than the default styling.
Readme provides a wide selection of CSS variables, but overriding class styling is acceptable
where necessary. Please Readme's docs on [customizing docs using CSS variables](https://docs.readme.com/main/docs/customizing-docs-using-css-variables)

## Publishing changes

The editing CSS-in-Readme process should be as follows:

1. Edit in Readme [Custom CSS](https://dash.readme.com/project/api-beta-deepgram/v1.0/appearance-stylesheet) until you reach the desired changes.
2. New branch on this repo for your changes.
3. Copy it to the [style.css](./style.css) file.
4. Make a PR for your changes.
5. Get it reviewed and approved.
6. Merge it.
7. Purge the cache - using the public URL for the CDN file `https://cdn.jsdelivr.net/gh/deepgram-devs/docs-cdn@latest/style.css`, submit a purge on the CDN.

Temporary extra steps:

1. Leave the changes in Readme [Custom CSS](https://dash.readme.com/project/api-beta-deepgram/v1.0/appearance-stylesheet)
2. Review after 7 days to see if the merged CSS has propagated to `https://cdn.jsdelivr.net/gh/deepgram-devs/docs-cdn@latest/style.css`.
3. Remove CSS from Readme Custom CSS once you know the changes are live on the CDN.

## Contributing

Contributions should be made via PRs. Pushes directly to main are blocked. Please tag the DX/DevRel team as reviewers.

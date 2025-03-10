> This repo is now archived. For all Deepgram Docs CSS and styles see https://github.com/deepgram/deepgram-docs

# Docs CDN

This repository is to act as CDN for the doc sites remote stylesheets and scripts.

## Docs Site

The docs site is currently viewable in preview at https://developers.deepgram.com. CDN url is https://deepgram-devs.github.io/docs-cdn/.

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

## Meta tags

```html
<link rel="apple-touch-icon" sizes="57x57" href="https://deepgram-devs.github.io/docs-cdn/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="https://deepgram-devs.github.io/docs-cdn/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="https://deepgram-devs.github.io/docs-cdn/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="https://deepgram-devs.github.io/docs-cdn/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="https://deepgram-devs.github.io/docs-cdn/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="https://deepgram-devs.github.io/docs-cdn/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="https://deepgram-devs.github.io/docs-cdn/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="https://deepgram-devs.github.io/docs-cdn/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="https://deepgram-devs.github.io/docs-cdn/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="https://deepgram-devs.github.io/docs-cdn/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="https://deepgram-devs.github.io/docs-cdn/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="https://deepgram-devs.github.io/docs-cdn/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="https://deepgram-devs.github.io/docs-cdn/favicon-16x16.png">
<link rel="manifest" href="https://deepgram-devs.github.io/docs-cdn/manifest.json">
<meta name="msapplication-TileImage" content="https://deepgram-devs.github.io/docs-cdn/ms-icon-144x144.png">
<meta name="theme-color" content="#000">
```

## Contributing

Contributions should be made via PRs. Pushes directly to main are blocked. Please tag the DX/DevRel team as reviewers.

# Oligofren 2.0
> Netlify hosted 11ty blog

[![Netlify Status](https://api.netlify.com/api/v1/badges/95e7d55b-d422-4e46-8607-a38751299693/deploy-status)](https://app.netlify.com/projects/resonant-duckanoo-c5215e/deploys)


## Tech basis
Based on Phil Hawksworth [Eleventyone]](https://github.com/philhawksworth/eleventyone) template.
This project scaffold includes:

- [Eleventy](https://11ty.io) with a skeleton site
- A date format filter for Nunjucks based on [Luxon](https://moment.github.io/luxon)
- A tiny CSS pipeline with PostCSS
- A tiny inline JS pipeline
- JS search index generator
- [Netlify Dev](https://www.netlify.com/products/dev) for testing [Netlify redirects](https://netlify.com/docs/redirects/)
- Serverless (FaaS) development pipeline with [Netlify Dev](https://www.netlify.com/products/dev) and [Netlify Functions](https://www.netlify.com/products/functions)


## Running locally

```bash
# External data sources can be stashed locally
npm run seed

# It will then be available locally for building with
npm start
```

## Add some Netlify helpers
Netlify Dev adds the ability to use Netlify redirects, proxies, and serverless functions.

```bash
# install the Netlify CLI in order to get Netlify Dev
npm install -g netlify-cli

# run a local server with some added Netlify sugar in front of Eleventy
netlify dev
```

A serverless functions pipeline is included via Netlify Dev. By running `netlify dev` you'll be able to execute any of your serverless functions directly like this:

- /.netlify/functions/hello
- /.netlify/functions/fetch-joke


### Redirects and proxies

Netlify's Redirects API can provide friendlier URLs as proxies to these URLs.

- /api/hello
- /api/fetch-joke


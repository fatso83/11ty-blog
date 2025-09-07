const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (config) {
  // A useful way to reference the context we are running eleventy in
  //let env = process.env.ELEVENTY_ENV;

  // Layout aliases can make templates more portable
  config.addLayoutAlias("default", "layouts/base.njk");

  // Add some utility filters
  config.addFilter("squash", require("./src/utils/filters/squash.js"));
  config.addFilter("dateDisplay", require("./src/utils/filters/date.js"));
  config.addFilter("exclude", (arr, excludeList) => [
    ...new Set(arr).difference(new Set(excludeList)),
  ]);

  // add support for syntax highlighting
  config.addPlugin(syntaxHighlight);

  // pass some assets right through
  config.addPassthroughCopy("./src/site/images");

  // Create tag categories
  // Build a unique list of tags (skip Eleventy’s utility tags)
  config.addCollection("tagList", (collectionApi) => {
    const skip = new Set(["all", "nav", "post", "posts"]);
    const tags = new Set();

    collectionApi.getAll().forEach((item) => {
      (item.data.tags || [])
        .filter((t) => !skip.has(t))
        .forEach((t) => tags.add(t));
    });

    return [...tags].sort();
  });

  return {
    dir: {
      input: "src/site",
      output: "dist",
      data: "_data",
    },
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};

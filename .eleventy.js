module.exports = function(eleventyConfig) {
  // Copy assets to output directory
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Add collections for blog posts
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("posts").sort(function(a, b) {
      return b.date - a.date; // sort by date descending
    });
  });
  
  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    // Generate .html files directly instead of directory structure
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};

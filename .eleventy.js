module.exports = function(eleventyConfig) {
  // Copy assets to output directory
  eleventyConfig.addPassthroughCopy("src/assets");
  
  // Set input and output directories
  return {
    dir: {
      input: "src",
      output: "_site"
    },
    // Generate .html files directly instead of directory structure
    htmlTemplateEngine: "njk"
  };
};

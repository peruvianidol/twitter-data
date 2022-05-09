module.exports = function(eleventyConfig) {
  return {
    dir: {
      input: '_src',
      output: '_site'
    },
 
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk'
  };
};
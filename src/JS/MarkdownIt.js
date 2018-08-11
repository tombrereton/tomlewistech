var hljs = require('highlight.js'); // https://highlightjs.org/
hljs.initHighlighting();

// Actual default values
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typography: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
});

md.use(require('markdown-it-imsize'));
md.use(require("markdown-it-anchor")); 
md.use(require("markdown-it-table-of-contents"));
md.use(require('markdown-it-highlightjs'))

export default md

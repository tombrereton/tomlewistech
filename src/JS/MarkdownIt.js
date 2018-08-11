import markdownIt from "markdown-it";
import imSize from "markdown-it-imsize";
import markdownItTocAndAnchor from "markdown-it-toc-and-anchor-with-slugid";
import uslug from "uslug";

var markdown = markdownIt({
  html: true,
  linkify: true,
  typography: true
});

markdown.use(imSize);
markdown.use(markdownItTocAndAnchor, {
  slugify: header => {
    return encodeURIComponent(uslug(header));
  }
});

export default markdown;

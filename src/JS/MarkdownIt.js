import markdownIt from "markdown-it";
import imSize from "markdown-it-imsize";
import markdownItTocAndAnchor from "markdown-it-toc-and-anchor-with-slugid";
import figCaption from 'mdfigcaption';
import uslug from "uslug";

var markdown = markdownIt({
  html: true,
  linkify: true,
  typography: true
});

markdown.use(imSize);
markdown.use(figCaption);
markdown.use(markdownItTocAndAnchor, {
  slugify: header => {
    return encodeURIComponent(uslug(header));
  }
});
export default markdown;

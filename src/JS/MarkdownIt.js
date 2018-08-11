import markdownIt from "markdown-it";
import imSize from "markdown-it-imsize";
import markdownItTocAndAnchor from "markdown-it-toc-and-anchor-with-slugid";
import implicitFigures from "markdown-it-implicit-figures"
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
markdown.use(implicitFigures, {
  dataType: false,  // <figure data-type="image">, default: false
  figcaption: true,  // <figcaption>alternative text</figcaption>, default: false
  tabindex: false, // <figure tabindex="1+n">..., default: false
  link: false // <a href="img.png"><img src="img.png"></a>, default: false
});

export default markdown;

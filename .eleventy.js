const fs = require('fs');
const glob = require('glob');
const CleanCSS = require("clean-css");

const cssPath = "source/static/css";
const jsPath = "source/static/js";

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("cssIncludes", function () {
    let cssIncludes = "";

    glob.sync(`${cssPath}/*.css`).forEach(function (cssFile) {
      if (cssFile.indexOf('inline') > 0) {
        let fileContent = fs.readFileSync(cssFile, 'UTF-8');
        cssIncludes +=
          `<style type="text/css">/*<![CDATA[*/<!-- ${new CleanCSS({}).minify(fileContent).styles} -->/*]]>*/</style>`;
      } else {
        cssFile = cssFile.replace(cssPath, "/css");
        cssIncludes +=
          `<link rel="stylesheet" href="${cssFile}" media="print" onload="this.media='all'">` +
          `<noscript><link rel="stylesheet" href="${cssFile}"></noscript>`;
      }
    });

    return cssIncludes;
  });

  eleventyConfig.addFilter("jsIncludes", function () {
    let jsIncludes = "";

    glob.sync(`${jsPath}/*.js`).forEach(function (jsFile) {
      jsFile = jsFile.replace(jsPath, "/js");
      jsIncludes += `<script src="${jsFile}" defer></script>`;
    });

    return jsIncludes;
  });

  eleventyConfig.addPassthroughCopy({ "source/admin": "admin" });

  eleventyConfig.addPassthroughCopy({ "source/static/css": "css" });
  eleventyConfig.addPassthroughCopy({ "source/static/js": "js" });
  eleventyConfig.addPassthroughCopy({ "source/static/images": "images" });
  eleventyConfig.addPassthroughCopy({ "source/static/fonts": "fonts" });
  eleventyConfig.addPassthroughCopy({ "source/static/patternlab": "patternlab" });

  return {
    dir: {
      // These values are both relative to the input directory.
      includes: "_includes",
      layouts: "_layouts"
    }
  };
}

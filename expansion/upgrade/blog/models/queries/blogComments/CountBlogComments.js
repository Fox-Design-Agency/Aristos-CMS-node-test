const fs = require("fs-extra");
const BlogComment = fs.readJSONSync(
  "./expansion/upgrade/blog/routes/checkers/blogModelCommentRoute.json"
).route;
const BlogComments = require(BlogComment);
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * counts the blog comments in the Blog Comment collection.
 * @return {promise} A promise that resolves with the Comment that was created
 */
module.exports = () => {
  return BlogComments.estimatedDocumentCount({})
    .then(c => {
      return c;
    })
    .catch(err => {
      errorAddEvent(err, "blog comment query error");
    });
};

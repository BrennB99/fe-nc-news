const axios = require("axios");

export const fetchArticles = (filter) => {
  return axios
    .get(`https://nc-news-bb.herokuapp.com/api/articles?${filter}`)
    .then((res) => {
      return res.data;
    });
};

export const fetchArticle = (article_id) => {
  return axios
    .get(`https://nc-news-bb.herokuapp.com/api/articles/${article_id}`)
    .then((res) => {
      return res.data;
    });
};

export const changeVotes = (article_id, voteChange) => {
  return axios
    .patch(
      `https://nc-news-bb.herokuapp.com/api/articles/${article_id}`,
      voteChange
    )
    .then((res) => {
      return res.data;
    });
};

export const fetchComments = (article_id) => {
  return axios
    .get(`https://nc-news-bb.herokuapp.com/api/articles/${article_id}/comments`)
    .then((res) => {
      return res.data;
    });
};

export const postComment = (article_id, comment) => {
  return axios.post(
    `https://nc-news-bb.herokuapp.com/api/articles/${article_id}/comments`,
    comment
  );
};

export const deleteComment = (comment_id) => {
  return axios.delete(
    `https://nc-news-bb.herokuapp.com/api/comments/${comment_id}`
  );
};

const axios = require("axios");

export const fetchArticles = () => {
  return axios
    .get("https://nc-news-bb.herokuapp.com/api/articles")
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

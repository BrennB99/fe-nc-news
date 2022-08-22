export const fetchArticles = () => {
  return fetch("https://nc-news-bb.herokuapp.com/api/articles").then((res) => {
    return res.json();
  });
};

import { useState, useEffect } from "react";
import { fetchArticles } from "../api.js";

export default function Articles({ topic }) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then(({ articles }) => {
      if (topic) {
        const filteredArticles = articles.filter(
          (article) => article.topic === topic
        );
        setArticles(filteredArticles);
      } else {
        setArticles(articles);
      }
      setIsLoading(false);
    });
  }, [topic]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return articles.map((article) => {
    return (
      <div key={article.article_id} class="article">
        <h5>{article.title}</h5>
        <p>Topic: {article.topic}</p>
        <p>Author: {article.author}</p>
        <p>Created at: {article.created_at}</p>
      </div>
    );
  });
}

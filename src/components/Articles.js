import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticles } from "../api.js";

export default function Articles({ setArticle_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState();
  let { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then(({ articles }) => {
      if (topic !== "home") {
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
      <Link
        to={`/article/${article.article_id}`}
        onClick={() => setArticle_id(article.article_id)}
      >
        <div key={article.article_id} className="article">
          <h5>{article.title}</h5>
          <p>Topic: {article.topic}</p>
          <p>Author: {article.author}</p>
          <p>Created at: {article.created_at}</p>
        </div>
      </Link>
    );
  });
}

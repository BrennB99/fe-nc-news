import { fetchArticle } from "../api.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Article() {
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticle(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="article-page">
        <div className="article-header">
          <h1>{article.title}</h1>
        </div>
        <div className="article-info">
          <p>Written By: {article.author}</p>
          <p>Created: {new Date(article.created_at).toUTCString()}</p>

          <p>Votes: {article.votes}</p>
          <p>comments: {article.comment_count}</p>
        </div>
        <div className="article-body">
          <p>{article.body}</p>
        </div>
      </div>
    </>
  );
}

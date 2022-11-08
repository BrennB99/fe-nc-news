import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticles } from "../api.js";

export default function Articles({ setArticle_id }) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState("");
  const [query, setQuery] = useState("sort_by=created_at");
  const [order, setOrder] = useState("order=DESC");
  const [filter, setFilter] = useState("sort_by=created_at&order=DESC");
  let { topic } = useParams();

  const handleSortBy = (event) => {
    setQuery(`sort_by=${event.target.value}`);
  };

  const handleOrder = (event) => {
    setOrder(`order=${event.target.value}`);
  };

  const handleSubmit = (event, query, order) => {
    event.preventDefault();
    const filterParams = query + "&" + order;
    setFilter(filterParams);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(filter).then(({ articles }) => {
      if (topic !== "home" && topic !== undefined) {
        const filteredArticles = articles.filter(
          (article) => article.topic === topic
        );
        setArticles(filteredArticles);
      } else {
        setArticles(articles);
      }
      setIsLoading(false);
    });
  }, [topic, filter]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event, query, order);
        }}
        className="parameters"
      >
        <label>
          Sort By:
          <select
            onChange={(event) => {
              handleSortBy(event);
            }}
          >
            <option value={"created_at"}>Date</option>
            <option value={"title"}>Title</option>
            <option value={"votes"}>Votes</option>
            <option value={"author"}>Author</option>
          </select>
          <select
            onChange={(event) => {
              handleOrder(event);
            }}
          >
            <option value={"DESC"}>Descending</option>
            <option value={"ASC"}>Ascending</option>
          </select>
        </label>
        <input type="submit" value="Filter!" />
      </form>

      {articles.map((article) => {
        return (
          <Link
            className="articles-link"
            to={`/article/${article.article_id}`}
            onClick={() => setArticle_id(article.article_id)}
          >
            <div key={article.article_id} className="article">
              <h5>{article.title}</h5>
              <p>Topic: {article.topic}</p>
              <p>Author: {article.author}</p>
              <p>Created at: {new Date(article.created_at).toUTCString()}</p>
              <p>Votes: {article.votes}</p>
            </div>
          </Link>
        );
      })}
    </>
  );
}

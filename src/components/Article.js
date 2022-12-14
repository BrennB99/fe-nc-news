import { fetchArticle, changeVotes } from "../api.js";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "./Comments.js";

export default function Article() {
  const [article, setArticle] = useState();
  const [currentVotes, setCurrentVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);
  let { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticle(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleVotes = (article_id, vote) => {
    setCurrentVotes((currentVotes) => currentVotes + vote.inc_votes);
    setErr(null);
    changeVotes(article_id, vote).catch((err) => {
      setCurrentVotes((currentVotes) => currentVotes - vote.inc_votes);
      setErr("Something went wrong, please try again!");
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (err) {
    return <p>{err}</p>;
  }
  return (
    <>
      <div className="article-page">
        <div className="article-header">
          <h1>{article.title}</h1>
        </div>
        <div className="article-info">
          <p className="author">Written By: {article.author}</p>
          <p className="created">
            Created: {new Date(article.created_at).toUTCString()}
          </p>
          <div className="votes">
            <p>Votes: {article.votes + currentVotes}</p>
            <button
              onClick={(event) => {
                handleVotes(article_id, { inc_votes: 1 });
              }}
              className="btn-vote"
            >
              <i className="fa-solid fa-thumbs-up"></i>
            </button>
            <button
              onClick={() => {
                handleVotes(article_id, { inc_votes: -1 });
              }}
              className="btn-vote"
            >
              <i class="fa-solid fa-thumbs-down"></i>
            </button>
          </div>
          <p className="comments">comments: {article.comment_count}</p>
        </div>
        <div className="article-body">
          <p>{article.body}</p>
        </div>
      </div>
      <div className="CommentContainer">
        <Comments />
      </div>
    </>
  );
}

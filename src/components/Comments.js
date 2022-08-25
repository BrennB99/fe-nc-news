import { useEffect, useState } from "react";
import { fetchComments } from "../api";
import { useParams } from "react-router-dom";

export default function Comments() {
  const [comments, setComments] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchComments(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  console.log(comments);
  return (
    <>
      <h5>Comments</h5>

      {comments.map((comment) => {
        return (
          <div className="singleComment">
            <p className="commentBody">{comment.body}</p>
            <p className="commentAuthor">By: {comment.author}</p>
            <p className="commentVotes">votes: {comment.votes}</p>
          </div>
        );
      })}
    </>
  );
}

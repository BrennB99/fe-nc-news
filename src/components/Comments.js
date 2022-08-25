import { useEffect, useState, useContext } from "react";
import { fetchComments, postComment } from "../api";
import { useParams } from "react-router-dom";
import { UserContext } from "../contexts/User";

export default function Comments() {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [newComment, setNewComment] = useState({
    username: user,
    body: undefined,
  });
  let { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchComments(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id]);

  const handleChange = (event) => {
    const comment = { ...newComment };
    comment[event.target.id] = event.target.value;
    setNewComment(comment);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newComment);
    postComment(article_id, newComment).then(() => {
      fetchComments(article_id).then(({ comments }) => {
        setComments(comments);
      });
    });
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h5>Comments</h5>

      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label htmlFor="body">
          Share Your Thoughts:
          <input
            type="text"
            id="body"
            value={newComment.body}
            onChange={(event) => {
              handleChange(event);
            }}
          />
        </label>
        <input type="submit" value="Submit!"></input>
      </form>

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

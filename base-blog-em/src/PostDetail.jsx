import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "./api";
import "./PostDetail.css";

export function PostDetail({ post }) {
  // replace with useQuery
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["commets", post.id],
    // Anonymous Fn
    queryFn: () => fetchComments(post.id),
  });

  if (isLoading) {
    return <div>loading ...</div>;
  }
  if (isError) {
    return <h3>{error}</h3>;
  }
  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}

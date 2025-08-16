import { useFetch } from "./useFetch";
import { BeatLoader } from "react-spinners";

export default function App() {
  const { posts, loading, error } = useFetch();

  if (loading) {
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          right: "50%",
          transform: "translate(-50%;-50%)",
        }}
      >
        <BeatLoader speedMultiplier={2} color="#000" />
      </div>
    );
  }
  return (
    <div className="App">
      {error ? (
        <h1>{error}</h1>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h1>{post.id}</h1>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

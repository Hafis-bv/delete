import { useFetch } from "./useFetch";

export default function App() {
  const { posts } = useFetch();

  return (
    <div className="App">
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.id}</h1>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

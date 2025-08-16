import { useEffect, useState } from "react";

export function useFetch() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getPro() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.log(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    getPro();
  }, []);

  return {
    error,
    loading,
    posts,
  };
}

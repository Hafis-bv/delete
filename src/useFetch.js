import { useEffect, useState } from "react";

export function useFetch() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPro() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data);
      } catch (e) {
        console.log(e);
      }
    }

    getPro();
  }, []);
  return {
    posts,
  };
}

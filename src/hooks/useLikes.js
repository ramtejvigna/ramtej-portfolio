import { useCallback, useEffect, useState } from "react";
import { api } from "../lib/api";

const LIKED_KEY = "portfolio_liked";

function readLocalLiked() {
  try {
    return localStorage.getItem(LIKED_KEY) === "1";
  } catch {
    return false;
  }
}

// Global heart counter. The server dedupes by cookie; localStorage only keeps the UI honest offline.
export default function useLikes() {
  const [count, setCount] = useState(null);
  const [liked, setLiked] = useState(readLocalLiked);
  const [pending, setPending] = useState(false);

  useEffect(() => {
    let alive = true;
    api("/likes")
      .then((data) => {
        if (!alive) return;
        setCount(data.count);
        if (data.liked) setLiked(true);
      })
      .catch((err) => console.error("Failed to load likes:", err));
    return () => {
      alive = false;
    };
  }, []);

  const like = useCallback(async () => {
    if (liked || pending) return;
    setLiked(true);
    setCount((c) => (c == null ? c : c + 1));
    setPending(true);
    try {
      localStorage.setItem(LIKED_KEY, "1");
    } catch {
      /* storage blocked: the cookie still dedupes */
    }
    try {
      const data = await api("/likes", { method: "POST" });
      setCount(data.count);
    } catch (err) {
      console.error("Failed to save like:", err);
    } finally {
      setPending(false);
    }
  }, [liked, pending]);

  return { count, liked, like };
}

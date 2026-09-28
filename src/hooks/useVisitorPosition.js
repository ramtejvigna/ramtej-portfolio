import { useEffect, useState } from "react";

export default function useVisitorPosition() {
  const [position, setPosition] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const apiBase = import.meta.env.VITE_API_BASE_URL || import.meta.env.VITE_BACKEND_PROXY_TARGET || "/api";
        const response = await fetch(`${apiBase}/visitor`, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error(`Visitor API failed with status ${response.status}`);
        }

        const payload = await response.json();
        const value = Number(payload?.position);
        if (!Number.isFinite(value) || value <= 0) {
          throw new Error("Visitor API response did not include a valid position");
        }

        localStorage.setItem("portfolio_visitor_position_fallback", String(value));
        if (isMounted) {
          setPosition(value);
          setFailed(false);
        }
      } catch (error) {
        console.error("Failed to load visitor position:", error);
        const fallback = Number(localStorage.getItem("portfolio_visitor_position_fallback"));
        if (isMounted && Number.isFinite(fallback) && fallback > 0) {
          setPosition(fallback);
        }
        if (isMounted) {
          setFailed(true);
        }
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  return { position, failed };
}

import { useEffect, useState } from "react";
import { api } from "../lib/api";

export default function useVisitorPosition() {
  const [position, setPosition] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const payload = await api("/visitor");
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

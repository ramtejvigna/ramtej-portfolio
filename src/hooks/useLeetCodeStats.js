import { useEffect, useState } from "react";
import { DSA_CONFIG } from "../data/dsa";

export default function useLeetCodeStats(username) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const BASE = "https://alfa-leetcode-api.onrender.com";
    Promise.allSettled([
      fetch(`${BASE}/${username}/solved`).then((r) => r.json()),
      fetch(`${BASE}/${username}/contest`).then((r) => r.json()),
    ]).then(([solvedRes, contestRes]) => {
      const solved  = solvedRes.status  === "fulfilled" ? solvedRes.value  : null;
      const contest = contestRes.status === "fulfilled" ? contestRes.value : null;
      if (solved && typeof solved.solvedProblem === "number") {
        setData({
          solved:        solved.solvedProblem,
          easy:          solved.easySolved   ?? 0,
          medium:        solved.mediumSolved ?? 0,
          hard:          solved.hardSolved   ?? 0,
          contestRating: contest?.contestRating  ?? null,
          contestRank:   contest?.contestRanking ?? null,
        });
      } else {
        setData(DSA_CONFIG.leetcode.fallback);
      }
      setLoading(false);
    }).catch(() => {
      setData(DSA_CONFIG.leetcode.fallback);
      setLoading(false);
    });
  }, [username]);

  return { data, loading };
}

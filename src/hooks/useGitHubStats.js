import { useEffect, useState } from "react";
import { DSA_CONFIG } from "../data/dsa";

export default function useGitHubStats(username) {
  const [data, setData]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.allSettled([
      fetch(`https://api.github.com/users/${username}`).then((r) => r.json()),
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`).then((r) => r.json()),
    ]).then(([userRes, contribRes]) => {
      const user   = userRes.status   === "fulfilled" ? userRes.value   : null;
      const contrib = contribRes.status === "fulfilled" ? contribRes.value : null;
      const year   = new Date().getFullYear().toString();
      const contribList = contrib?.contributions ?? [];
      const totalContribs =
        contrib?.total?.[year] ??
        (contribList.length
          ? contribList
              .filter((d) => d.date?.startsWith(year))
              .reduce((sum, d) => sum + (d.count || 0), 0)
          : DSA_CONFIG.github.fallback.contributions);
      const contribData = contribList;
      if (user && user.public_repos != null) {
        setData({ repos: user.public_repos, followers: user.followers, contributions: totalContribs, contribData });
      } else {
        setData({ ...DSA_CONFIG.github.fallback, contributions: totalContribs, contribData });
      }
      setLoading(false);
    }).catch(() => {
      setData({ ...DSA_CONFIG.github.fallback, contribData: [] });
      setLoading(false);
    });
  }, [username]);

  return { data, loading };
}

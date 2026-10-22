const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api";

// JSON fetch against the portfolio backend; cookies are sent so the server can dedupe visitors/likes.
export async function api(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, { credentials: "include", ...options });
  if (!response.ok) throw new Error(`${path} failed with status ${response.status}`);
  return response.json();
}

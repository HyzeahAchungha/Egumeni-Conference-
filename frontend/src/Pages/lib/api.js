// src/lib/api.js
export const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:5000";

export async function postJson(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(body),
  });

  let data = null;
  try { data = await res.json(); } catch {}
  if (!res.ok) {
    const message = data?.error || "Request failed";
    const fieldErrors = data?.details?.fieldErrors || {};
    const formErrors = data?.details?.formErrors || [];
    const issues = data?.details?.issues || [];
    const error = new Error(message);
    error.fieldErrors = fieldErrors;
    error.formErrors = formErrors;
    error.issues = issues;
    throw error;
  }
  return data;
}

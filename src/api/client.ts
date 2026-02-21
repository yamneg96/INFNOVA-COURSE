import axios from 'axios';

export const API_BASE = import.meta.env.API_BASE || "http://localhost:5000/api";

export const api = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
});

export async function fetcher<T>(endpoint: string): Promise<T> {
  const res = await api.get(endpoint);

  if (res.status < 200 || res.status >= 300) {
    throw new Error("Network response was not ok");
  }

  return res.data as T;
}
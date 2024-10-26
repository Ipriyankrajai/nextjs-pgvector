"use client";

import { useEffect, useState } from "react";
import { SearchResult } from "@/types/search";

// Simulated API call - replace with your actual API endpoint
const searchAPI = async (query: string): Promise<SearchResult[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (query.length === 0) return [];

  // Simulate search results
  return Array.from({ length: 6 }, (_, i) => ({
    id: `result-${i}`,
    title: `Result ${i + 1} for "${query}"`,
    description: `This is a detailed description for the search result ${
      i + 1
    }. It provides more information about the item that matched the search query "${query}".`,
  }));
};

export function useSearchQuery(query: string) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await searchAPI(query);
        setResults(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Failed to fetch results")
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [query]);

  return { results, isLoading, error };
}

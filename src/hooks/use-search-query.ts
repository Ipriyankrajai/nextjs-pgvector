"use client";

import { useEffect, useState } from "react";
import { searchUsersthroughEmbedding } from "@/utils/actions/user";
import { User } from "@prisma/client";

// Simulated API call - replace with your actual API endpoint
const searchAPI = async (query: string) => {
  // return await getUsers({ query });
  return await searchUsersthroughEmbedding({ query });
};

export function useSearchQuery(query: string) {
  const [results, setResults] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await searchAPI(query);
        setResults(data as User[]);
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

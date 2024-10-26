"use client";

import { useState } from "react";
import { SearchResults } from "./search-results";
// import { SearchResult } from "@/types/search";
import { useDebounce } from "@/hooks/use-debounce";
import { useSearchQuery } from "@/hooks/use-search-query";
import { SearchInput } from "./search-input";

export default function SearchContainer() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const { results, isLoading, error } = useSearchQuery(debouncedQuery);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Search Everything
          </h1>
          <SearchInput value={query} onChange={setQuery} />
        </div>
        <SearchResults results={results} isLoading={isLoading} error={error} />
      </div>
    </div>
  );
}

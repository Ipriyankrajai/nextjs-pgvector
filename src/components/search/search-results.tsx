import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { User } from "@prisma/client";

interface SearchResultsProps {
  results: User[];
  isLoading: boolean;
  error: Error | null;
}

export function SearchResults({
  results,
  isLoading,
  error,
}: SearchResultsProps) {
  if (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Error loading results: {error.message}
        </AlertDescription>
      </Alert>
    );
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="space-y-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-24 w-full" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center text-muted-foreground py-12">
        No results found. Try a different search term.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {results.map((result) => (
        <Card
          key={result.id}
          className="overflow-hidden hover:shadow-lg transition-shadow group"
        >
          <CardHeader>
            <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
              {result.id}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground line-clamp-3">{result.name}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

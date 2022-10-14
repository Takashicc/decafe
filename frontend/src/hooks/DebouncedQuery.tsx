import React, { useState } from "react";
import { useDebounce } from "react-use";

const useDebouncedQuery = (
  onChange: (query: string) => void,
  defaultValue: string = "",
  timeoutMs: number = 400
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [searchQuery, setSearchQuery] = useState<string>(defaultValue);

  useDebounce(
    () => {
      onChange(searchQuery);
    },
    timeoutMs,
    [searchQuery]
  );

  return [searchQuery, setSearchQuery];
};

export default useDebouncedQuery;

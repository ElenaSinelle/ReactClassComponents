import { useEffect, useState } from "react";

type UseLSHook = [string, (query: string) => void];

const useLS = (lsKey: string): UseLSHook => {
  const [searchQuery, setSearchQuery] = useState<string>(
    () => {
      const storedQuery = localStorage.getItem(lsKey);
      return storedQuery ? storedQuery : "";
    },
  );

  useEffect(() => {
    localStorage.setItem(lsKey, searchQuery);
  }, [searchQuery, lsKey]);

  return [searchQuery, setSearchQuery];
};

export default useLS;

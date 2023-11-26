"use client";

import qs from "query-string";
import useDebounce from "@/hooks/useDebounce";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { UIInput } from ".";

interface SearchInputProps {}

const SearchInput: React.FC<SearchInputProps> = ({}) => {
  const router = useRouter();

  const [value, setValue] = useState<string>("");

  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: "/search",
      query,
    });

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <UIInput
      placeholder="Search song"
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(e.target.value)
      }
    />
  );
};

export default SearchInput;

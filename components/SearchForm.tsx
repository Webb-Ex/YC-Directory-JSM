import React from "react";
import SearchFormReset from "@/components/SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {

  return (
    <form action="/" scroll={false} className="search-form">
      <input
        type="text"
        className="search-input"
        placeholder="Search Startups"
        defaultValue={query}
        name="query"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <Search className="size-5"/>
        </button>
      </div>
    </form>
  );
};

export default SearchForm;

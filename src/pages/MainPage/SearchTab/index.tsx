import React from "react";
import SearchItem from "../../../components/SearchItem";
import { User } from "../../../models/user";

export interface SearchTabProps {
    searchResultUsers: User[];
}

const SearchTab = ({ searchResultUsers }: SearchTabProps) => {
    return (
        <>
            {searchResultUsers.map((user) => (
                <SearchItem key={`search-item-${user.id}`} user={user} />
            ))}
        </>
    );
};

export default SearchTab;

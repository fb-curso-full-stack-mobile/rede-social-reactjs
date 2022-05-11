import { User } from "../../models/user";
import UserPhoto from "../UserPhoto";
import icDropdown from "../../assets/ic_dropdown.svg";
import logo from "../../assets/logo_small.svg";
import styles from "./styles.module.css";
import { useAuth } from "../../contexts/auth-context";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
type HeaderProps = {
    onSearchResult?: (users: User[]) => void;
};

export default function Header({ onSearchResult }: HeaderProps) {
    const { logout } = useAuth();
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchText, setSearchText] = useState("");
    const { request, error } = useFetch<any>();

    const handleKeyPress = async (e: any) => {
        if (e.key === "Enter") {
            setSearchText("");
            const response = await request(`/api/v1/user/0/20`, "POST", {
                searchTerm: searchText,
            });
            if (onSearchResult) {
                onSearchResult(response.users);
            }
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerLogo}>
                <img src={logo} />
                <label>
                    <span
                        className={
                            searchFocused ? styles.containerLogoSpan : ""
                        }
                    >
                        <svg
                            fill="currentColor"
                            viewBox="0 0 16 16"
                            width="1em"
                            height="1em"
                        >
                            <g
                                fillRule="evenodd"
                                transform="translate(-448 -544)"
                            >
                                <g fillRule="nonzero">
                                    <path
                                        d="M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z"
                                        transform="translate(448 544)"
                                    ></path>
                                    <path
                                        d="M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z"
                                        transform="translate(448 544)"
                                    ></path>
                                    <path
                                        d="M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z"
                                        transform="translate(448 544)"
                                    ></path>
                                    <path
                                        d="m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z"
                                        transform="translate(448 544)"
                                    ></path>
                                </g>
                            </g>
                        </svg>
                    </span>
                    <input
                        type="text"
                        placeholder="Pesquisar na Rede"
                        onBlur={() => setSearchFocused(false)}
                        onFocus={() => setSearchFocused(true)}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </label>
            </div>
            <div className={styles.containerUser}>
                <UserPhoto small />
                <span>Nome do Usuário</span>
                <img
                    style={{ cursor: "pointer" }}
                    src={icDropdown}
                    onClick={() => logout()}
                />
            </div>
        </div>
    );
}

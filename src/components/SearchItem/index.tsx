import { User, fullname } from "../../models/user";
import { useEffect, useState } from "react";

import Box from "../Box";
import Button from "../Button";
import { Friend } from "../../models/friend";
import UserPhoto from "../UserPhoto";
import styles from "./styles.module.css";
import { useFetch } from "../../hooks/useFetch";

type SearchItemProps = {
    user: User;
};

export default function SearchItem({ user }: SearchItemProps) {
    const [friend, setFriend] = useState<Friend | undefined | null>(undefined);
    const { request, response, clear } = useFetch<any>();

    useEffect(() => {
        console.log("request");
        // verificar se já existe uma solitação
        if (friend === undefined) {
            request(`/api/v1/friend/${user.id}`);
        }
    }, [friend, request, user.id]);

    useEffect(() => {
        console.log("response: ", response);
        if (response) {
            setFriend(response.friend);
            clear();
        }
    }, [clear, response]);

    const sendFriendRequest = () => {
        request("/api/v1/friend", "POST", { friendId: user.id });
    };

    return (
        <Box className={styles.container}>
            <div className={styles.userData}>
                <UserPhoto />
                <div>
                    <div>{fullname(user) || "-"}</div>
                </div>
            </div>
            {friend ? (
                friend.accepted ? (
                    <div>Amigos!</div>
                ) : (
                    <div>Solicitação enviada!</div>
                )
            ) : friend === null ? (
                <Button onClick={sendFriendRequest}>Solicitar Amizade</Button>
            ) : null}
        </Box>
    );
}

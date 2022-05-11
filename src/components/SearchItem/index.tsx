import { User, fullname } from "../../models/user";

import Box from "../Box";
import Button from "../Button";
import UserPhoto from "../UserPhoto";
import styles from "./styles.module.css";

type SearchItemProps = {
    user: User;
};

export default function SearchItem({ user }: SearchItemProps) {
    return (
        <Box className={styles.container}>
            <div className={styles.userData}>
                <UserPhoto />
                <div>
                    <div>{fullname(user) || "-"}</div>
                </div>
            </div>
            <Button onClick={() => {}}>Solicitar Amizade</Button>
        </Box>
    );
}

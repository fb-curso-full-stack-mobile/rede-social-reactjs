// type RoutesProps = {}

import {
    BrowserRouter,
    Navigate,
    Route,
    Routes as RoutesDom,
} from "react-router-dom";

import MainPage from "../pages/MainPage";
import SignInPage from "../pages/SignInPage";
import { useAuth } from "../contexts/auth-context";

export default function Routes() {
    const { token } = useAuth();
    return (
        <BrowserRouter>
            <RoutesDom>
                {!token ? (
                    <>
                        <Route path="/" element={<SignInPage />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </>
                ) : (
                    <>
                        <Route path="/feed" element={<MainPage />} />
                        <Route path="/" element={<Navigate to="/feed" />} />
                    </>
                )}
            </RoutesDom>
        </BrowserRouter>
    );
}

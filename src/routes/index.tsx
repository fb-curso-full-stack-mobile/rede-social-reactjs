// type RoutesProps = {}

import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as RoutesDom,
} from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import FeedPage from "../pages/FeedPage";
import SignInPage from "../pages/SignInPage";

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
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/" element={<Navigate to="/feed" />} />
          </>
        )}
      </RoutesDom>
    </BrowserRouter>
  );
}

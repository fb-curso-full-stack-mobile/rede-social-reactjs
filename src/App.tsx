import { BrowserRouter, Route, Routes } from "react-router-dom";

import FeedPage from "./pages/FeedPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

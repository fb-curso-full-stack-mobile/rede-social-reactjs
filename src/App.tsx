import { AuthContextProvider } from "./contexts/auth-context";

import Routes from "./routes";

function App() {
  return (
    <AuthContextProvider>
      <Routes />
    </AuthContextProvider>
  );
}

export default App;

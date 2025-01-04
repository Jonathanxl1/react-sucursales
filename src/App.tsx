import { useEffect } from "react";
import "./App.css";
import Layout from "./layouts";
import { getBearerToken } from "./storage/localStorage.storage";
import { setAuthorizationToken } from "./services/init.service";

function App() {
  useEffect(() => {
    let token = getBearerToken();
    if (token) {
      setAuthorizationToken(token);
    }
  }, []);
  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;

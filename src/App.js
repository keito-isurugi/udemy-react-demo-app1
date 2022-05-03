import "./styles.css";
import { Router } from "./router/Router";
import { UserProviders } from "./providers/UserProviders";

export default function App() {
  return (
    <UserProviders>
      <Router />
    </UserProviders>
  );
}

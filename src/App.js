import { AuthGithubProvider } from "./contexts/AuthGithubContext";
import { PublicacoesProvider } from "./contexts/PublicacoesContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <AuthGithubProvider>
      <PublicacoesProvider>
        <AppRoutes />
      </PublicacoesProvider>
    </AuthGithubProvider>
  );
}

export default App;

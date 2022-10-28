import { PublicacoesProvider } from "./contexts/PublicacoesContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <PublicacoesProvider>
      <AppRoutes />
    </PublicacoesProvider>
  );
}

export default App;

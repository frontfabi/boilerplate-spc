import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const AppContent = () => {
  return (
    <div>
      <header><h1>Título</h1></header>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export { AppContent }
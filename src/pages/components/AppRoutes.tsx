import Cadastro from 'pages/Cadastro';
import Comunicacao from 'pages/Cadastro/Comunicacao';
import { Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/cadastro-positivo" element={<Cadastro />}>
        <Route path="comunicacao" element={<Comunicacao />} />
      </Route>

    </Routes>
  );
}

function Home() {
  return (
    <div>
      <h2>Home novamente</h2>
    </div>
  );
}

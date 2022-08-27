import {Route, Routes} from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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

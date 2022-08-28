import { Container } from 'components/Container';
import { Outlet } from 'react-router-dom';

export default function Cadastro() {
  return <Container>
    <h1>Cadastro Positivo / </h1>
    <Outlet />
  </Container>;
}

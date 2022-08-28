import { Container, Text } from 'components';
import { Outlet } from 'react-router-dom';

export default function Cadastro() {
  return <Container>
    <Text>Cadastro Positivo / </Text>
    <Outlet />
  </Container>;
}

import { Container, Text } from 'components';
import { BoxHighlight, StyledContainer, StyledKeyValue, TextContent } from './styles';


type KeyValueProps = {
  textKey: string
  textVal: string
}
const KeyValue = ({ textKey, textVal }: KeyValueProps) => (
  <StyledKeyValue>
    <Text weight={2} size={1}>{textKey}: {' '}</Text>
    <Text size={1}>{textVal}</Text>
  </StyledKeyValue>
);

export default function Comunicacao() {
  return (
    <Container fluid>
      <StyledContainer>
        <Text tag="h3" size={2} weight={3} color="title">Dados de Comunicação</Text>

        <BoxHighlight>
          <img src="/images/dados-comunicacao-1.png" />
          <TextContent>
            <Text tag="h4" size={1} weight={3} lineHeight={1} color="text">
              Aqui, você pode visualizar os dados referentes as comunicações enviadas a
              você em relação à abertura do Cadastro Positivo. </Text>
            <Text color="text" lineHeight={1}>
              Os seus dados de comunicação estão indicados abaixo e podem ser utilizados
              para te ajudar a consultar <strong>informações importantes</strong> sobre o seu cadastro.</Text>
          </TextContent>
        </BoxHighlight>

        <Text tag="h4" size={2} weight={3} lineHeight={1} color="text">
          Seus dados de comunicação
        </Text>
        <KeyValue textKey="Status da Comunicação" textVal="Realizada" />
        <KeyValue textKey="Data da Comunicação" textVal="22/09/2021" />
        <KeyValue textKey="Meio da Comunicação" textVal="E-mail (enderecodeemail@dominio.com)" />
      </StyledContainer>
    </Container>
  );
}

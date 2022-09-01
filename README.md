# Portal do Consumidor

Este projeto foi gerado com [Create React App](https://github.com/facebook/create-react-app).

## Scripts de execução

In the project directory, you can run:

### `npm start`

Roda a aplicação em modo desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para ver no browser.

A página recarrega automaticamente quando você altera.\

### `npm test`

Executa os testes unitários em modo watch.

### `npm run build`

Executa o build do projeto, resultando na pasta `build` com os arquivos prontos para deploy.

### `npm run gen`

Ao executar `npm run gen [NOME_DO_COMPONENTE]`, Você cria uma pasta de componentes dentro de `components`, com a estrutura padrão dos demais componentes.

Esta estrutura possui:
- `index.tsx`: o componente React
- `stories.tsx`: a documentação no storybook
- `styles.ts`: a folha de estilos (Styled components)
- `test.tsx`: os testes de unidade
- `types/[NOME_DO_COMPONENTE].types.ts`: tipagem do componente

Além disso, também modifica os arquivos de index das pastas `components` e `types` para adicionar os arquivos referentes ao novo componente.

### `npm run sb`

Executa a documentação dos componentes, utilizando `storybook`.\

Você pode acessá-la localmente pelo endereço `http://localhost:6006`

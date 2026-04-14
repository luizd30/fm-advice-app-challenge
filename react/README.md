# Advice Generator App - React Implementation

Esta é a implementação em **React + TypeScript** do desafio Advice Generator App do Frontend Mentor.

---

## 🚀 Desafio

[Frontend Mentor - Advice Generator App](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db)

---

## Sobre a implementação

Esta versão foi construída utilizando React com foco em:

- Gerenciamento de estado assíncrono (loading, error, success)
- Uso de hooks customizados para fetch de dados (useQuote)
- Componentização por responsabilidade
- CSS puro para estilização

O app consome a API pública de conselhos e exibe um novo advice sempre que o usuário interage com o botão.

---

## Fluxo da aplicação

- Ao carregar a aplicação, uma advice é buscada automaticamente
- O usuário pode gerar uma nova advice clicando no botão
- Estados da requisição são tratados:
  - loading
  - error
  - success

---

## API utilizada

[Advice Slip API](https://api.adviceslip.com/advice)

Exemplo de resposta:

```json
{
  "slip": {
    "id": 117,
    "advice": "It always seems impossible until it's done."
  }
}
```

---

## Estrutura da implementação

### Hook principal

A lógica de fetch foi encapsulada em um hook customizado:

```tsx
useQuote();
```

Responsável por:

- Buscar dados da API
- Controlar estado de loading
- Tratar erros
- Expor função de refetch
- Cancelar requests anteriores com AbortController

---

## Componentização

A UI foi separada em componentes com responsabilidades claras:

- Card → exibição do advice (success state)
- CardLoading → estado de carregamento
- CardError → estado de erro

---

## Decisões de arquitetura

### Por que não usar bibliotecas externas (React Query, etc.)?

O objetivo deste projeto é entender e praticar:

- Controle manual de fetch
- Estados assíncronos no React
- Hooks customizados
- Padrões de organização de componentes

---

### Por que separar componentes por estado?

Essa abordagem foi escolhida para:

- Melhor legibilidade
- Separação clara de responsabilidades
- Evitar lógica condicional complexa dentro de um único componente

---

## Tecnologias utilizadas

- React
- TypeScript
- CSS puro (BEM)
- Vite

---

## Como rodar

1. Clone o repositório principal:

```bash
git clone https://github.com/luizd30/fm-advice-app-challenge.git
```

2. Entre na pasta React:

```bash
cd react
```

3. Instale as dependências:

```bash
npm install
```

4. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

---

## Conclusão

Este projeto explora conceitos fundamentais de React como gerenciamento de estado assíncrono, hooks customizados e separação de responsabilidades.

Mesmo sendo uma aplicação simples, ele serve como base para entender padrões que escalam para aplicações mais complexas.

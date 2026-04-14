# Advice Generator App - Multi Framework Challenge

Este repositório contém múltiplas implementações do desafio **Advice Generator App** do Frontend Mentor, utilizando diferentes frameworks e bibliotecas frontend.

## Desafio

[Frontend Mentor - Advice Generator App](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db)

---

## Estrutura do projeto

O projeto está organizado em diferentes implementações:

- React
- Solid
- Svelte
- Vue

---

## Funcionalidade do projeto

O objetivo do projeto é consumir a API pública de conselhos e exibir uma nova advice sempre que o usuário interagir com o botão.

### Fluxo principal:

- Buscar um advice aleatório da API
- Exibir ID + texto do advice
- Permitir gerar um novo advice via botão

## API utilizada

[Advice Slip API](https://api.adviceslip.com/advice)

Exemplo de resposta:

```json
{
  "slip": {
    "slip_id": "2",
    "advice": "Smile and the world smiles with you. Frown and you're on your own."
  }
}
```

## 🎯 Objetivo do desafio

O objetivo deste repositório é demonstrar como a **mesma UI e lógica de fetch podem ser construídas com diferentes filosofias de frontend**, evidenciando trade-offs entre:

- Simplicidade
- Escalabilidade
- Estrutura de componentes
- Gerenciamento de estado
- Experiência de desenvolvimento

## 📌 Observação

Cada implementação possui seu próprio README com detalhes técnicos específicos, decisões de arquitetura e padrões utilizados.

Este README serve apenas como visão geral do projeto.

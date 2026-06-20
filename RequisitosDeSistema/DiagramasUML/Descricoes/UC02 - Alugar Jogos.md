# UC02 - Alugar Jogos

## Objetivo

Permitir que o usuário realize o aluguel de um ou mais jogos disponíveis no catálogo.

## Atores

- Usuário
- Gateway de Pagamento

## Pré-condições

- O usuário deve estar autenticado.
- Deve existir pelo menos um jogo disponível para aluguel.

## Fluxo Principal

1. O usuário navega pelo catálogo.
2. O usuário seleciona um ou mais jogos.
3. O usuário define o período de aluguel.
4. O sistema calcula o valor total da locação.
5. O usuário seleciona um endereço de entrega.
6. O usuário escolhe a forma de pagamento.
7. O sistema envia os dados para o gateway de pagamento.
8. O pagamento é aprovado.
9. O sistema registra o pedido.
10. O sistema atualiza o estoque dos jogos.
11. O sistema envia a confirmação do pedido ao usuário.

## Fluxo de Exceção

### FE01 - Pagamento recusado

8.1 O gateway informa que o pagamento foi recusado.

8.2 O sistema exibe uma mensagem de erro.

8.3 O usuário pode escolher outra forma de pagamento.

### FE02 - Jogo indisponível

2.1 O sistema identifica indisponibilidade de estoque.

2.2 O sistema informa ao usuário que o jogo não pode ser alugado no momento.

## Pós-condições

- O pedido de aluguel é registrado com sucesso.
- O estoque é atualizado.

# UC03 - Agendar Devolução

## Objetivo

Permitir que o usuário agende a devolução dos jogos alugados.

## Atores

- Usuário

## Pré-condições

- O usuário deve possuir um pedido ativo.

## Fluxo Principal

1. O usuário acessa seus pedidos ativos.
2. O usuário seleciona o pedido desejado.
3. O usuário escolhe a data para devolução.
4. O usuário seleciona a forma de devolução (coleta ou ponto parceiro).
5. O sistema verifica a disponibilidade da data escolhida.
6. O sistema registra o agendamento.
7. O sistema envia a confirmação ao usuário.

## Fluxo de Exceção

### FE01 - Data indisponível

5.1 O sistema identifica indisponibilidade para a data selecionada.

5.2 O sistema informa o problema ao usuário.

5.3 O usuário seleciona uma nova data.

### FE02 - Pedido inválido

2.1 O pedido selecionado não possui devolução pendente.

2.2 O sistema impede o agendamento e exibe uma mensagem informativa.

## Pós-condições

- A devolução fica registrada no sistema.
- O usuário recebe a confirmação do agendamento.

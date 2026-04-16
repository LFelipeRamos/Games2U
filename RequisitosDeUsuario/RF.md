# 1. Requisitos Funcionais

<p align="justify">
A <i>Tabela 1</i> a seguir contém os Requisitos Funcionais (RF) elicitados utilizando a técnica de brainstorming, considerando as funcionalidades descritas para o projeto Games2U.
</p>

| ID   | Requisito                                                                 | Prioridade | Requisitos Relacionados |
| :--: | ------------------------------------------------------------------------- | :--------: | :----------------------: |
| RF01 | O sistema deve permitir o cadastro de usuários.                          | Alta       | -                        |
| RF02 | O sistema deve permitir login e autenticação de usuários.                | Alta       | RF01                     |
| RF03 | O sistema deve exibir um catálogo de jogos disponíveis.                  | Alta       | -                        |
| RF04 | O usuário deve poder buscar jogos por nome, categoria ou tipo.           | Alta       | RF03                     |
| RF05 | O usuário deve visualizar detalhes de cada jogo (descrição, regras etc). | Alta       | RF03                     |
| RF06 | O usuário deve poder adicionar jogos ao carrinho.                        | Alta       | RF03                     |
| RF07 | O sistema deve permitir aluguel de jogos por período (dia/fim de semana).| Alta       | RF06                     |
| RF08 | O sistema deve permitir assinatura mensal de aluguel.                    | Média      | RF07                     |
| RF09 | O sistema deve calcular automaticamente o valor do aluguel.              | Alta       | RF07                     |
| RF10 | O sistema deve permitir pagamento online.                                 | Alta       | RF06                     |
| RF11 | O sistema deve permitir seleção de endereço para entrega.                | Alta       | RF01                     |
| RF12 | O sistema deve gerenciar pedidos de delivery.                             | Alta       | RF10, RF11               |
| RF13 | O sistema deve permitir acompanhamento do status do pedido.              | Alta       | RF12                     |
| RF14 | O sistema deve permitir agendamento de devolução.                        | Alta       | RF12                     |
| RF15 | O sistema deve oferecer opção de devolução via coleta ou ponto parceiro. | Média      | RF14                     |
| RF16 | O sistema deve gerenciar hubs logísticos regionais.                      | Média      | RF12                     |
| RF17 | O administrador deve poder cadastrar e gerenciar jogos.                  | Alta       | RF03                     |
| RF18 | O administrador deve gerenciar estoque de jogos.                         | Alta       | RF17                     |
| RF19 | O administrador deve visualizar pedidos e status de entregas.            | Alta       | RF12                     |
| RF20 | O sistema deve permitir avaliação dos jogos pelos usuários.              | Baixa      | RF05                     |

<div style="text-align: center">
<p>Tabela 1: Requisitos Funcionais</p>
</div>
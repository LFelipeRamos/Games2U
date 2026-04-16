# 1. História de Usuário

A Tabela 3 a seguir contém as Histórias de Usuário elicitadas.

<p align="justify">
A <i>Tabela 3</i> apresenta as Histórias de Usuário do sistema Games2U, incluindo critérios de aceitação, prioridade, requisitos relacionados e story points.
</p>

|  ID  | História de Usuário                                                               | Critérios de Aceitação                                                                                  | Prioridade | RF/RNF relacionado | Story Points |
| :--: | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | :--------: | :----------------: | :----------: |
| US01 | Como usuário, eu quero me cadastrar na plataforma para poder utilizar os serviços | Cadastro com nome, email e senha; email único; senha ≥ 6 caracteres; mensagem de sucesso                |    Alta    |        RF01        |       3      |
| US02 | Como usuário, eu quero fazer login na plataforma para acessar minha conta         | Login com email/senha; validação de credenciais; erro para dados inválidos; redirecionamento após login |    Alta    |        RF02        |       3      |
| US03 | Como usuário, eu quero sair da minha conta para garantir segurança                | Sessão encerrada; redirecionamento para home; bloqueio de rotas protegidas                              |    Média   |        RF02        |       2      |
| US04 | Como usuário, eu quero visualizar o catálogo de jogos para conhecer opções        | Lista com nome, imagem e preço; apenas disponíveis; paginação                                           |    Alta    |        RF03        |       5      |
| US05 | Como usuário, eu quero buscar jogos por nome para encontrá-los facilmente         | Busca por nome; case insensitive; mensagem sem resultados                                               |    Alta    |        RF04        |       3      |
| US06 | Como usuário, eu quero filtrar jogos por categoria para refinar minha busca       | Listar categorias; filtrar corretamente; opção de limpar filtros                                        |    Média   |        RF04        |       3      |
| US07 | Como usuário, eu quero visualizar detalhes de um jogo para entender como funciona | Exibir descrição, regras, preço e disponibilidade                                                       |    Alta    |        RF05        |       3      |
| US08 | Como usuário, eu quero adicionar jogos ao carrinho para alugá-los                 | Adicionar itens disponíveis; atualizar carrinho; confirmação visual                                     |    Alta    |        RF06        |       3      |
| US09 | Como usuário, eu quero remover jogos do carrinho para ajustar meu pedido          | Remover itens; atualizar total; exibir carrinho vazio                                                   |    Alta    |        RF06        |       2      |
| US10 | Como usuário, eu quero escolher o período de aluguel para definir tempo de uso    | Seleção dia/fim de semana; atualização de preço; bloquear inválidos                                     |    Alta    |        RF07        |       5      |
| US11 | Como usuário, eu quero visualizar o valor total para saber quanto pagar           | Cálculo automático; atualização dinâmica; formatação correta                                            |    Alta    |        RF09        |       3      |
| US12 | Como usuário, eu quero pagar online para concluir o pedido                        | Método de pagamento; confirmação de sucesso; erro em falha; bloqueio sem pagamento                      |    Alta    |        RF10        |       5      |
| US13 | Como usuário, eu quero cadastrar endereço para receber pedidos                    | Campos obrigatórios validados; múltiplos endereços permitidos                                           |    Alta    |        RF11        |       3      |
| US14 | Como usuário, eu quero selecionar endereço de entrega para definir destino        | Listar endereços; seleção única; obrigatório para finalizar                                             |    Alta    |        RF11        |       2      |
| US15 | Como usuário, eu quero finalizar o pedido para receber jogos                      | Validar carrinho/pagamento/endereço; gerar ID; confirmação                                              |    Alta    |        RF12        |       5      |
| US16 | Como usuário, eu quero acompanhar o pedido para saber status                      | Exibir status; atualização; histórico do pedido                                                         |    Alta    |        RF13        |       3      |
| US17 | Como usuário, eu quero ver meus pedidos para consultar histórico                  | Listagem; detalhes; ordenação por data                                                                  |    Média   |        RF13        |       3      |
| US18 | Como usuário, eu quero agendar devolução para devolver corretamente               | Escolher data; validar disponibilidade; confirmação                                                     |    Alta    |        RF14        |       3      |
| US19 | Como usuário, eu quero escolher forma de devolução para comodidade                | Escolher coleta/ponto parceiro; obrigatório; instruções exibidas                                        |    Média   |        RF15        |       3      |
| US20 | Como usuário, eu quero avaliar jogos para ajudar outros                           | Nota 1–5; comentário opcional; apenas jogos alugados                                                    |    Baixa   |        RF20        |       2      |
| US21 | Como administrador, eu quero cadastrar jogos para disponibilizá-los               | Inserir dados; validação; exibir no catálogo                                                            |    Alta    |        RF17        |       5      |
| US22 | Como administrador, eu quero editar jogos para manter atualizados                 | Alterar dados; salvar corretamente; refletir no catálogo                                                |    Alta    |        RF17        |       3      |
| US23 | Como administrador, eu quero remover jogos para retirar indisponíveis             | Exclusão com confirmação; remover do catálogo                                                           |    Média   |        RF17        |       2      |
| US24 | Como administrador, eu quero gerenciar estoque para controlar disponibilidade     | Definir quantidade; bloquear sem estoque; atualizar após pedidos                                        |    Alta    |        RF18        |       5      |
| US25 | Como administrador, eu quero visualizar pedidos para gerenciar entregas           | Listar pedidos; ver detalhes; exibir status                                                             |    Alta    |        RF19        |       3      |
| US26 | Como entregador, eu quero ver pedidos disponíveis para realizar entregas          | Listar pedidos; exibir endereço/detalhes; permitir ação                                                 |    Média   |        RF12        |       3      |
| US27 | Como entregador, eu quero atualizar status da entrega para informar progresso     | Marcar “em entrega” e “entregue”; refletir ao usuário                                                   |    Alta    |     RF12, RF13     |       3      |
| US28 | Como administrador, eu quero gerenciar hubs logísticos para otimizar entregas     | Cadastrar hubs; editar/remover; associar pedidos                                                        |    Média   |        RF16        |       5      |
| US29 | Como sistema, eu quero associar pedidos ao hub mais próximo para eficiência       | Calcular hub; associação automática; permitir override                                                  |    Média   |        RF16        |       5      |
| US30 | Como usuário, eu quero receber confirmação do pedido para segurança               | Confirmação na tela; envio de notificação/email; resumo do pedido                                       |    Alta    |        RF12        |       2      |

<div style="text-align: center">
<p>Tabela 3: História de Usuário</p>
</div>

# UC01 - Fazer Login

## Objetivo

Permitir que um usuário autenticado acesse o sistema Games2U.

## Atores

- Usuário

## Pré-condições

- O usuário deve possuir cadastro ativo no sistema.

## Fluxo Principal

1. O usuário acessa a tela de login.
2. O sistema solicita e-mail e senha.
3. O usuário informa suas credenciais.
4. O sistema valida os dados informados.
5. O sistema autentica o usuário.
6. O sistema redireciona o usuário para a página inicial.

## Fluxo de Exceção

### FE01 - Credenciais inválidas

4.1 O sistema identifica que o e-mail ou senha estão incorretos.

4.2 O sistema exibe uma mensagem de erro.

4.3 O usuário permanece na tela de login para nova tentativa.

## Pós-condições

- O usuário está autenticado e apto a utilizar as funcionalidades do sistema.

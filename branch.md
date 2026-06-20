# Integração Contínua (CI) — Atividade 09

## O que é Integração Contínua?

Integração Contínua (Continuous Integration) é uma prática de desenvolvimento ágil em que os 
desenvolvedores integram suas alterações de código a um repositório compartilhado com 
frequência, várias vezes ao dia. Cada integração é validada automaticamente (build, testes, 
lint), permitindo detectar erros e conflitos rapidamente, antes que se acumulem e se tornem 
mais difíceis de resolver.

## Qual é o papel das branches nesse processo?

As branches permitem que cada integrante do time trabalhe de forma isolada em uma nova 
funcionalidade ou correção, sem impactar o código estável que está na branch principal 
(`main`). No projeto Games2U, usamos a branch `develop` para integrar o trabalho em 
andamento e a `main` para o código estável, o que evita que alterações incompletas ou com 
erro afetem o restante do time enquanto o desenvolvimento ainda está em progresso.

## Por que o Pull Request é importante?

O Pull Request (PR) é o mecanismo que formaliza a integração entre branches. Ele permite que 
os demais integrantes revisem o código antes do merge, identifiquem problemas, sugiram 
melhorias e validem se a alteração está de acordo com o esperado. Isso aumenta a qualidade 
do código entregue e reduz a chance de bugs chegarem até a branch principal, além de manter 
um histórico claro de todas as mudanças incorporadas ao projeto.
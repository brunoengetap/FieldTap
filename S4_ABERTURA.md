\# Sprint S4 — Kit e escala personalizada no FieldTap



Data de abertura: 03/05/2026  

Agente principal: Codex  

Status: Em preparação / Aguardando implementação



\---



\## BLOCO PADRÃO — CONTROLE DO SPRINT



Você está executando apenas o Sprint S4.



Não implemente funcionalidades fora do escopo.  

Não antecipe S5, R1 ou refinamentos visuais futuros.  

Não reescreva arquivos inteiros quando a alteração puder ser cirúrgica.  

Preserve tudo que já funciona no S0, S1, S2 e S3.



Se encontrar bug FORA do escopo:



→ Registre em "Bugs encontrados" com descrição e classificação sugerida.  

→ NÃO corrija. Aguarde classificação do usuário.



Se encontrar bug que BLOQUEIA o critério de aceite:



→ Sinalize como BLOQUEADOR.  

→ Pare e aguarde instrução antes de continuar.



Ao final, entregue obrigatoriamente:



1\. Resumo do que foi feito

2\. Arquivos alterados/criados

3\. Funções criadas/alteradas

4\. O que não foi feito e por quê

5\. Bugs encontrados: BLOQUEADOR ou BACKLOG

6\. Instruções exatas de teste manual

7\. Confirmação se o S4 pode ir para teste



\---



\## Objetivo



Evoluir o `FieldTap\_Beta.html` para consumir corretamente os catálogos e kits geridos no TapParts, permitir seleção mais clara de kits de instalação e implementar escala personalizada para manômetros/vacuômetros/manovacuômetros, sem alterar o TapParts.



\---



\## Contexto relevante



O projeto está no seguinte estágio:



\- S0 fechado: GAS + Sheets base funcional.

\- S1 fechado: FieldTap conectado ao GAS real e enviando levantamentos.

\- S2 fechado: TapParts conectado ao GAS e exibindo levantamentos reais.

\- S3 fechado: TapParts passou a gerir catálogo de manômetros e kits.

\- O GAS atual possui endpoints para catálogos, kits, levantamentos e atualização de status.

\- O S4 deve atuar principalmente no FieldTap.

\- Refinamento visual amplo ficou para sprint futuro.

\- TapParts não deve ser alterado neste sprint.



\---



\## Endpoints atuais do GAS



\### GET



\- `validarPIN`

\- `getOS`

\- `getVasosByOS`

\- `getCatalogos`

\- `getKitsByBitola`

\- `getLevantamentosByCliente`

\- `getItensByLevantamento`

\- `getCatalogoByTipo`



\### POST



\- `enviarLevantamento`

\- `atualizarStatusItem`

\- `salvarItemCatalogo`

\- `toggleAtivoItem`



\---



\## Arquivos autorizados para alteração



\- `FieldTap\_Beta.html`

\- `S4\_ABERTURA.md`

\- `S4\_LOG.md`

\- `S4\_FECHAMENTO.md`



\---



\## Arquivo que só pode ser alterado se for estritamente necessário



\- `GAS\_Code.js`



Qualquer alteração em `GAS\_Code.js` deve ser justificada no resumo final.



\---



\## Arquivos de referência — não alterar



\- `GAS\_Code\_S3\_FECHADO.js`

\- `TapParts\_Beta\_S3\_FECHADO.html`

\- `FieldTap\_Beta\_S1\_Fechado.html`

\- `TapParts\_Beta.html`

\- `TapParts\_Beta\_S2\_Fechado.html`

\- Backups fechados em geral



\---



\## Escopo permitido



\### 1. Preservar o fluxo existente do FieldTap



Preservar:



\- Tela de PIN.

\- Autenticação via `validarPIN`.

\- Carregamento de OS via `getOS`.

\- Carregamento de vasos via `getVasosByOS`.

\- Carregamento de catálogos via `getCatalogos`.

\- Seleção de OS.

\- Seleção de vaso.

\- Seleção de manômetro.

\- Revisão.

\- Envio via `enviarLevantamento`.

\- Tela de confirmação.



Não quebrar o envio atual de levantamento.



\---



\### 2. Melhorar consumo dos catálogos do S3



O FieldTap deve continuar usando `getCatalogos`.



Regras:



\- Exibir apenas manômetros ativos retornados pelo GAS.

\- Exibir apenas kits ativos retornados pelo GAS.

\- Manômetros criados no TapParts devem aparecer no FieldTap.

\- Manômetros inativados no TapParts não devem aparecer no FieldTap.

\- Kits criados no TapParts devem aparecer no FieldTap quando a bitola/rosca corresponder.

\- Kits inativados no TapParts não devem aparecer no FieldTap.



\---



\### 3. Seleção de kit mais clara



Na tela de configuração do item, após selecionar um manômetro:



\- Filtrar kits pela bitola/rosca do manômetro.

\- Mostrar sempre uma opção explícita: `Sem kit de instalação`.



Se houver kits compatíveis, mostrar também:



\- Kit simples.

\- Kit DCBI.

\- Outros kits cadastrados, se existirem.



Cada card de kit deve mostrar:



\- Nome.

\- Bitola.

\- Tipo do kit.

\- Componentes resumidos.

\- Indicação se inclui formalização RS.



O usuário deve conseguir alternar entre:



\- Sem kit.

\- Um kit específico.



O item enviado deve conter:



\- `id\_kit` vazio quando “Sem kit”.

\- `id\_kit` preenchido quando kit selecionado.

\- `componentes\_kit` preenchido quando kit selecionado.

\- `requer\_lacre` igual a `true` se o kit incluir formalização RS.

\- `requer\_lacre` igual a `false` quando sem kit ou kit sem formalização RS.



\---



\### 4. Ajuste do kit em campo



Adicionar campo opcional:



\- `Ajuste do kit / observação de instalação`



Exemplos:



\- “usar joelho extra”

\- “adaptar rosca BSP para NPT”

\- “sem alteração”



Esse campo deve ser enviado no payload como:



\- `ajuste\_kit`



Não substituir a observação geral do item.  

Manter também o campo `observacao` existente.



\---



\### 5. Escala personalizada



Na tela de configuração do item, adicionar uma seção:



`Escala do instrumento`



Opções:



\- Usar escala padrão do catálogo.

\- Informar escala personalizada.



Quando usar escala padrão:



\- Usar `m.escala\_padrao`.

\- Preencher `escala\_inicio`, `escala\_fim` e `escala\_unidade` a partir da escala padrão quando possível.

\- Manter comportamento atual se a escala não puder ser interpretada automaticamente.



Quando usar escala personalizada, mostrar campos:



\- `escala\_inicio`

\- `escala\_fim`

\- `escala\_unidade`



A unidade pode ser select ou input, com opções mínimas:



\- `kgf/cm²`

\- `bar`

\- `psi`

\- `kPa`

\- `MPa`

\- `°C`

\- `outro`



Validações:



\- `escala\_inicio` obrigatório.

\- `escala\_fim` obrigatório.

\- `escala\_unidade` obrigatória.

\- `escala\_fim` deve ser maior que `escala\_inicio`, quando ambos forem numéricos.



Atualizar prévia da escala:



Exemplo:



`0-16 kgf/cm²`



O item enviado deve conter:



\- `escala\_inicio`

\- `escala\_fim`

\- `escala\_unidade`

\- `descricao\_curta` refletindo a escala personalizada, se usada.



\---



\### 6. Descrição curta enviada pelo FieldTap



Ao adicionar item ao levantamento, a `descricao\_curta` deve ser coerente com o que o técnico selecionou.



Regra:



\- Se usar escala padrão, pode usar `m.desc\_curta` do catálogo.

\- Se usar escala personalizada, gerar `descricao\_curta` local substituindo a escala pela personalizada.



Formato recomendado:



`\[Tipo] \[Fluido] \[Caixa]mm · \[Rosca] \[TipoRosca] · \[Entrada] · \[Escala personalizada] · \[Marca]`



Exemplo:



`Manômetro Glicerinado 63mm · 1/4" NPT · Reta · 0-16 kgf/cm² · Pressure`



Não usar valores fixos.  

Não usar cache antigo.  

Não usar escala padrão quando o usuário escolheu escala personalizada.



\---



\### 7. Revisão do levantamento



Na tela de revisão, exibir em cada item:



\- Descrição curta final.

\- Vaso.

\- Quantidade.

\- Kit selecionado ou “Sem kit”.

\- Escala final.

\- Ajuste do kit, se preenchido.

\- Observação geral, se preenchida.



\---



\### 8. Payload final para `enviarLevantamento`



Cada item enviado no payload deve preservar os campos:



\- `id\_vaso`

\- `tag\_vaso`

\- `nome\_vaso`

\- `tipo\_acessorio`

\- `id\_item\_catalogo`

\- `descricao\_curta`

\- `quantidade`

\- `escala\_inicio`

\- `escala\_fim`

\- `escala\_unidade`

\- `id\_kit`

\- `componentes\_kit`

\- `ajuste\_kit`

\- `requer\_calibracao`

\- `requer\_lacre`

\- `observacao`

\- `tipo`



Não mudar o contrato do endpoint `enviarLevantamento` se não for necessário.



\---



\## Fora do escopo



Não implementar:



\- Alterações no TapParts.

\- Redesign visual amplo.

\- Pipeline administrativo completo.

\- Exportação ERP.

\- Aprovação parcial.

\- Compra.

\- Recebimento.

\- Calibração administrativa.

\- Retorno ao FieldTap.

\- Faturamento.

\- Integração com Omie.

\- Upload real de fotos.

\- Modo offline completo.

\- IndexedDB completo.

\- Tela completa de válvulas, purgadores, placas e DCBI.

\- Autenticação nova.

\- Controle de permissões por perfil.



\---



\## Critérios de aceite



O S4 só pode fechar se:



\- \[ ] FieldTap\_Beta.html abrir no celular.

\- \[ ] PIN 1234 continuar autenticando via GAS.

\- \[ ] PIN incorreto continuar sendo recusado.

\- \[ ] Lista de OS continuar carregando via `getOS`.

\- \[ ] Seleção de OS continuar carregando vasos via `getVasosByOS`.

\- \[ ] Manômetros ativos criados no TapParts aparecerem no FieldTap via `getCatalogos`.

\- \[ ] Manômetros inativos no TapParts não aparecerem no FieldTap.

\- \[ ] Kits ativos criados no TapParts aparecerem no FieldTap quando a bitola/rosca corresponder.

\- \[ ] Kits inativos não aparecerem no FieldTap.

\- \[ ] Opção “Sem kit de instalação” aparecer claramente.

\- \[ ] Usuário conseguir selecionar “Sem kit”.

\- \[ ] Usuário conseguir selecionar kit simples quando disponível.

\- \[ ] Usuário conseguir selecionar kit DCBI quando disponível.

\- \[ ] Componentes do kit aparecerem resumidos no card.

\- \[ ] Campo `ajuste\_kit` aparecer e ser opcional.

\- \[ ] Usuário conseguir usar escala padrão.

\- \[ ] Usuário conseguir escolher escala personalizada.

\- \[ ] Campos `escala\_inicio`, `escala\_fim` e `escala\_unidade` aparecerem quando escala personalizada for selecionada.

\- \[ ] Validação impedir `escala\_fim` menor ou igual à `escala\_inicio`.

\- \[ ] `descricao\_curta` refletir a escala personalizada quando usada.

\- \[ ] Revisão mostrar kit, escala final, ajuste do kit e observação.

\- \[ ] Envio do levantamento gravar corretamente na aba ITENS:

&#x20; - `escala\_inicio`

&#x20; - `escala\_fim`

&#x20; - `escala\_unidade`

&#x20; - `id\_kit`

&#x20; - `componentes\_kit`

&#x20; - `ajuste\_kit`

&#x20; - `requer\_calibracao`

&#x20; - `requer\_lacre`

&#x20; - `observacao`

&#x20; - `descricao\_curta`

\- \[ ] TapParts conseguir abrir o levantamento enviado pelo FieldTap.

\- \[ ] TapParts mostrar o item com escala e kit.

\- \[ ] TapParts\_Beta.html não ser alterado.

\- \[ ] Backups fechados não serem alterados.

\- \[ ] S4\_ABERTURA.md, S4\_LOG.md e S4\_FECHAMENTO.md serem criados ou atualizados como documentos de controle.



\---



\## Testes manuais previstos



Após a entrega, o usuário testará:



1\. Abrir FieldTap no celular.

2\. Autenticar com PIN 1234.

3\. Confirmar que OS aparecem.

4\. Selecionar `OS-2025-001`.

5\. Selecionar um vaso.

6\. Selecionar um manômetro criado ou editado no TapParts.

7\. Confirmar que existe opção “Sem kit de instalação”.

8\. Adicionar item sem kit usando escala padrão.

9\. Voltar ao mesmo vaso.

10\. Selecionar manômetro `1/4"`.

11\. Selecionar um kit `1/4"` simples ou DCBI.

12\. Preencher `ajuste\_kit`: “Teste S4 — ajuste do kit”.

13\. Escolher escala personalizada.

14\. Preencher:

&#x20;   - início: `0`

&#x20;   - fim: `16`

&#x20;   - unidade: `kgf/cm²`

15\. Adicionar item.

16\. Ir para revisão.

17\. Confirmar que os itens mostram:

&#x20;   - kit ou sem kit

&#x20;   - escala final

&#x20;   - ajuste do kit

&#x20;   - observação, se houver

18\. Enviar levantamento.

19\. Conferir na aba ITENS:

&#x20;   - `escala\_inicio`

&#x20;   - `escala\_fim`

&#x20;   - `escala\_unidade`

&#x20;   - `id\_kit`

&#x20;   - `componentes\_kit`

&#x20;   - `ajuste\_kit`

&#x20;   - `requer\_lacre`

&#x20;   - `descricao\_curta`

20\. Abrir TapParts.

21\. Abrir o levantamento recém-enviado.

22\. Confirmar que o TapParts mostra os itens com escala e kit.



\---



\## Entrega esperada do Codex



Ao final, entregar:



1\. Resumo das alterações no `FieldTap\_Beta.html`.

2\. Lista de funções criadas/alteradas.

3\. Confirmação de que `TapParts\_Beta.html` não foi alterado.

4\. Confirmação de que backups fechados não foram alterados.

5\. Indicação se `GAS\_Code.js` foi alterado ou não.

6\. Caso `GAS\_Code.js` tenha sido alterado:

&#x20;  - listar funções alteradas;

&#x20;  - instruir o usuário a copiar o GAS atualizado para Apps Script;

&#x20;  - instruir o usuário a atualizar implantação do Web App.

7\. Passo a passo de testes manuais.

8\. Bugs encontrados classificados como BLOQUEADOR ou BACKLOG.

9\. Confirmação se o S4 pode ir para teste.


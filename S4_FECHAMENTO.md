# Sprint S4 — Fechamento

Data de fechamento: [preencher]  
Gerado por: ChatGPT  
Status: Template — não declarar fechado antes dos testes

---

## 1. Objetivo do sprint

Evoluir o FieldTap_Beta.html para consumir corretamente os catálogos e kits geridos no TapParts, permitir seleção clara de kits de instalação e implementar escala personalizada para manômetros/vacuômetros/manovacuômetros.

---

## 2. O que foi implementado

Preencher após validação:

- [ ] Preservação do fluxo de PIN.
- [ ] Preservação do carregamento de OS.
- [ ] Preservação do carregamento de vasos.
- [ ] Preservação do carregamento de catálogos via `getCatalogos`.
- [ ] Melhoria na seleção de kits por bitola/rosca.
- [ ] Opção clara “Sem kit de instalação”.
- [ ] Cards de kit com nome, bitola, tipo, componentes e formalização RS.
- [ ] Campo opcional `ajuste_kit`.
- [ ] Seleção entre escala padrão e escala personalizada.
- [ ] Campos `escala_inicio`, `escala_fim` e `escala_unidade`.
- [ ] Validação de escala personalizada.
- [ ] Geração de `descricao_curta` refletindo escala personalizada.
- [ ] Revisão exibindo kit, escala, ajuste do kit e observação.
- [ ] Payload final preservando campos necessários para a aba ITENS.
- [ ] Compatibilidade com TapParts para leitura dos itens enviados.

Detalhes adicionais:

- Implementação técnica concluída no `FieldTap_Beta.html`, mantendo este documento em modo template (sem declarar fechamento e sem marcar critérios como aprovados).

---

## 3. O que não foi implementado

Itens fora do escopo do S4:

- Redesign visual amplo.
- Alterações no TapParts.
- Pipeline administrativo completo.
- Exportação ERP.
- Aprovação parcial.
- Compra.
- Recebimento.
- Calibração administrativa.
- Retorno ao FieldTap.
- Faturamento.
- Integração com Omie.
- Upload real de fotos.
- Modo offline completo.
- IndexedDB completo.
- Tela completa de válvulas, purgadores, placas e DCBI.
- Nova autenticação.
- Controle de permissões por perfil.

Outros itens não implementados:

[preencher se houver]

---

## 4. Arquivos alterados na versão final deste sprint

| Arquivo | Alterado? | Observação |
|---|---|---|
| FieldTap_Beta.html | [Sim/Não] | [preencher] |
| GAS_Code.js | [Sim/Não] | [preencher se foi necessário] |
| TapParts_Beta.html | Não esperado | Deve permanecer inalterado |
| S4_ABERTURA.md | [Sim/Não] | Documento de abertura |
| S4_LOG.md | [Sim/Não] | Log de execução e testes |
| S4_FECHAMENTO.md | [Sim/Não] | Documento de fechamento |

---

## 5. Critérios de aceite — resultado

### Abertura e autenticação

- [— NÃO TESTADO] FieldTap_Beta.html abriu no celular.
- [— NÃO TESTADO] PIN 1234 continuou autenticando via GAS.
- [— NÃO TESTADO] PIN incorreto continuou sendo recusado.
- [— NÃO TESTADO] Lista de OS continuou carregando via `getOS`.
- [— NÃO TESTADO] Seleção de OS continuou carregando vasos via `getVasosByOS`.

### Catálogo e manômetros

- [— NÃO TESTADO] Manômetros ativos criados no TapParts apareceram no FieldTap via `getCatalogos`.
- [— NÃO TESTADO] Manômetros inativos no TapParts não apareceram no FieldTap.
- [— NÃO TESTADO] Seleção de manômetro funcionou.
- [— NÃO TESTADO] Dados do manômetro foram exibidos corretamente.

### Kits

- [— NÃO TESTADO] Kits ativos criados no TapParts apareceram no FieldTap quando a bitola/rosca correspondeu.
- [— NÃO TESTADO] Kits inativos não apareceram no FieldTap.
- [— NÃO TESTADO] Opção “Sem kit de instalação” apareceu claramente.
- [— NÃO TESTADO] Usuário conseguiu selecionar “Sem kit”.
- [— NÃO TESTADO] Usuário conseguiu selecionar kit simples quando disponível.
- [— NÃO TESTADO] Usuário conseguiu selecionar kit DCBI quando disponível.
- [— NÃO TESTADO] Componentes do kit apareceram resumidos no card.
- [— NÃO TESTADO] Campo `ajuste_kit` apareceu e foi opcional.

### Escala personalizada

- [— NÃO TESTADO] Usuário conseguiu usar escala padrão.
- [— NÃO TESTADO] Usuário conseguiu escolher escala personalizada.
- [— NÃO TESTADO] Campos `escala_inicio`, `escala_fim` e `escala_unidade` apareceram quando escala personalizada foi selecionada.
- [— NÃO TESTADO] Validação impediu `escala_fim` menor ou igual à `escala_inicio`.
- [— NÃO TESTADO] Unidade de escala foi obrigatória.
- [— NÃO TESTADO] `descricao_curta` refletiu a escala personalizada quando usada.

### Revisão

- [— NÃO TESTADO] Revisão mostrou descrição curta final.
- [— NÃO TESTADO] Revisão mostrou vaso.
- [— NÃO TESTADO] Revisão mostrou quantidade.
- [— NÃO TESTADO] Revisão mostrou kit selecionado ou “Sem kit”.
- [— NÃO TESTADO] Revisão mostrou escala final.
- [— NÃO TESTADO] Revisão mostrou ajuste do kit, se preenchido.
- [— NÃO TESTADO] Revisão mostrou observação geral, se preenchida.

### Envio e planilha

- [— NÃO TESTADO] Envio do levantamento funcionou.
- [— NÃO TESTADO] Aba ITENS recebeu `escala_inicio`.
- [— NÃO TESTADO] Aba ITENS recebeu `escala_fim`.
- [— NÃO TESTADO] Aba ITENS recebeu `escala_unidade`.
- [— NÃO TESTADO] Aba ITENS recebeu `id_kit`.
- [— NÃO TESTADO] Aba ITENS recebeu `componentes_kit`.
- [— NÃO TESTADO] Aba ITENS recebeu `ajuste_kit`.
- [— NÃO TESTADO] Aba ITENS recebeu `requer_calibracao`.
- [— NÃO TESTADO] Aba ITENS recebeu `requer_lacre`.
- [— NÃO TESTADO] Aba ITENS recebeu `observacao`.
- [— NÃO TESTADO] Aba ITENS recebeu `descricao_curta` correta.

### Compatibilidade com TapParts

- [— NÃO TESTADO] TapParts conseguiu abrir o levantamento enviado pelo FieldTap.
- [— NÃO TESTADO] TapParts mostrou o item com escala e kit.
- [— NÃO TESTADO] TapParts mostrou item sem kit corretamente.
- [— NÃO TESTADO] TapParts não apresentou erro ao abrir itens do S4.

### Integridade dos arquivos

- [— NÃO TESTADO] TapParts_Beta.html não foi alterado.
- [— NÃO TESTADO] Backups fechados não foram alterados.
- [— NÃO TESTADO] GAS_Code.js não foi alterado ou alteração foi justificada.
- [— NÃO TESTADO] S4_ABERTURA.md foi criado/atualizado.
- [— NÃO TESTADO] S4_LOG.md foi criado/atualizado.
- [— NÃO TESTADO] S4_FECHAMENTO.md foi criado/atualizado.

---

## 6. Bugs registrados

| ID | Descrição | Gravidade | Destino |
|---|---|---|---|
| [preencher] | [preencher] | BLOQUEADOR / BACKLOG | [preencher] |

---

## 7. Melhorias registradas

| ID | Descrição | Gravidade | Destino |
|---|---|---|---|
| [preencher] | [preencher] | Baixa / Média / Alta | Backlog / Sprint futuro |

---

## 8. Correções realizadas durante o S4

Preencher se houver bugs corrigidos:

[preencher]

---

## 9. Arquivos na versão final deste sprint

Preencher ao fechar:

- `FieldTap_Beta.html` — versão S4 funcional.
- `FieldTap_Beta_S4_FECHADO.html` — backup recomendado.
- `GAS_Code.js` — [inalterado / versão S4, se alterado].
- `GAS_Code_S4_FECHADO.js` — backup recomendado, apenas se GAS foi alterado.
- `S4_ABERTURA.md` — arquivado.
- `S4_LOG.md` — arquivado.
- `S4_FECHAMENTO.md` — fechado.

---

## 10. Decisão de fechamento

Selecionar apenas após testes:

- [ ] Sprint S4 fechado com sucesso.
- [ ] Sprint S4 parcialmente concluído.
- [ ] Sprint S4 não pode fechar por bug bloqueador.

Justificativa:

[preencher]

---

## 11. Próximo sprint autorizado

Preencher somente se o S4 for fechado:

Sprint S5 — Pipeline administrativo e retorno — pode iniciar: SIM / NÃO

Condição para iniciar:

[preencher]

---

## 12. Atualizar no controle geral

Após fechamento, atualizar `00_CONTROLE_GERAL.md`:

- Status de S4: FECHADO / PARCIAL / BLOQUEADO
- Status de S5: AUTORIZADO / BLOQUEADO
- Versão atual do `FieldTap_Beta.html`
- Backups criados
- Bugs ou melhorias adicionados ao backlog

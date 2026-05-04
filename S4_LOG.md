# Sprint S4 — Log de execução

Data de abertura: 03/05/2026  
Agente principal: Codex  
Status: Em execução / Em teste

---

## 1. Objetivo do sprint

Evoluir o FieldTap para consumir melhor os catálogos e kits geridos no TapParts e permitir escala personalizada no lançamento de manômetros/vacuômetros/manovacuômetros.

---

## 2. Arquivos autorizados para alteração

- [ ] FieldTap_Beta.html
- [ ] S4_ABERTURA.md
- [ ] S4_LOG.md
- [ ] S4_FECHAMENTO.md

---

## 3. Arquivo que só pode ser alterado se necessário

- [ ] GAS_Code.js

Justificativa, caso tenha sido alterado:

[preencher se aplicável]

---

## 4. Arquivos que NÃO devem ser alterados

- [ ] TapParts_Beta.html
- [ ] TapParts_Beta_S3_FECHADO.html
- [ ] FieldTap_Beta_S1_Fechado.html
- [ ] GAS_Code_S3_FECHADO.js
- [ ] Backups fechados em geral

Confirmação após entrega:

[preencher após conferir diff]

---

## 5. Alterações feitas

Preencher após entrega do Codex:

- [ ] Preservado fluxo de PIN.
- [ ] Preservado carregamento de OS.
- [ ] Preservado carregamento de vasos.
- [ ] Preservado carregamento de catálogos.
- [ ] Melhorada seleção de kits por bitola/rosca.
- [ ] Adicionada opção clara “Sem kit de instalação”.
- [ ] Adicionado campo `ajuste_kit`.
- [ ] Adicionada opção de escala padrão.
- [ ] Adicionada opção de escala personalizada.
- [ ] Adicionada validação de escala personalizada.
- [ ] Atualizada geração de `descricao_curta` para escala personalizada.
- [ ] Revisão passou a exibir kit, escala e ajuste do kit.
- [ ] Payload final preserva campos necessários para ITENS.
- [ ] Documentos de controle criados/atualizados.

Notas:

- Implementado no `FieldTap_Beta.html`: seleção explícita de kit com opção fixa "Sem kit de instalação", campo opcional `ajuste_kit`, seção de escala padrão/personalizada com validação e prévia, revisão detalhada com kit/escala/ajuste e tratamento de erro de catálogo com botão de retentativa.
- `GAS_Code.js` não foi alterado nesta execução.

---

## 6. Funções criadas ou alteradas

Preencher após entrega do Codex:

| Função | Arquivo | Criada/Alterada | Finalidade |
|---|---|---|---|
| [preencher] | FieldTap_Beta.html | [preencher] | [preencher] |

---

## 7. Decisões tomadas durante o sprint

| ID | Decisão | Justificativa |
|---|---|---|
| DEC-S4-001 | Priorizar funcionalidade sobre refinamento visual | Decisão geral do controle: layout amplo ficará para sprint futuro |
| DEC-S4-002 | Não alterar TapParts no S4 | TapParts foi congelado no S3 e deve servir como consumidor dos dados enviados pelo FieldTap |
| DEC-S4-003 | Evitar alteração no GAS, salvo necessidade técnica real | O contrato atual já possui campos suficientes em ITENS |

Adicionar novas decisões, se surgirem:

| ID | Decisão | Justificativa |
|---|---|---|
| [preencher] | [preencher] | [preencher] |

---

## 8. Bugs encontrados

| ID | Descrição | Classificação | Status | Destino |
|---|---|---|---|---|
| [preencher] | [preencher] | BLOQUEADOR / BACKLOG | Aberto / Corrigido / Pendente | [preencher] |

---

## 9. Testes realizados

Marcar após teste manual do usuário.

### Abertura e autenticação

- [ ] FieldTap_Beta.html abriu no celular.
- [ ] PIN 1234 autenticou via GAS.
- [ ] PIN incorreto foi recusado.
- [ ] Lista de OS carregou via `getOS`.
- [ ] Seleção de OS carregou vasos via `getVasosByOS`.

### Catálogo e manômetros

- [ ] Manômetros ativos criados no TapParts apareceram no FieldTap.
- [ ] Manômetros inativos no TapParts não apareceram no FieldTap.
- [ ] Seleção de manômetro funcionou.
- [ ] Dados do manômetro foram exibidos corretamente.

### Kits

- [ ] Kits ativos apareceram quando a bitola/rosca correspondeu.
- [ ] Kits inativos não apareceram.
- [ ] Opção “Sem kit de instalação” apareceu claramente.
- [ ] Foi possível selecionar “Sem kit”.
- [ ] Foi possível selecionar kit simples.
- [ ] Foi possível selecionar kit DCBI.
- [ ] Componentes do kit apareceram resumidos no card.
- [ ] Campo `ajuste_kit` apareceu.
- [ ] Campo `ajuste_kit` aceitou texto opcional.

### Escala personalizada

- [ ] Foi possível usar escala padrão.
- [ ] Foi possível escolher escala personalizada.
- [ ] Campos `escala_inicio`, `escala_fim` e `escala_unidade` apareceram.
- [ ] Validação impediu `escala_fim` menor ou igual à `escala_inicio`.
- [ ] Unidade de escala foi obrigatória.
- [ ] Prévia da escala foi exibida corretamente.
- [ ] `descricao_curta` refletiu a escala personalizada.

### Revisão

- [ ] Revisão mostrou descrição curta final.
- [ ] Revisão mostrou vaso.
- [ ] Revisão mostrou quantidade.
- [ ] Revisão mostrou kit ou “Sem kit”.
- [ ] Revisão mostrou escala final.
- [ ] Revisão mostrou `ajuste_kit`, se preenchido.
- [ ] Revisão mostrou observação geral, se preenchida.

### Envio e planilha

- [ ] Envio do levantamento funcionou.
- [ ] Aba ITENS recebeu `escala_inicio`.
- [ ] Aba ITENS recebeu `escala_fim`.
- [ ] Aba ITENS recebeu `escala_unidade`.
- [ ] Aba ITENS recebeu `id_kit`.
- [ ] Aba ITENS recebeu `componentes_kit`.
- [ ] Aba ITENS recebeu `ajuste_kit`.
- [ ] Aba ITENS recebeu `requer_calibracao`.
- [ ] Aba ITENS recebeu `requer_lacre`.
- [ ] Aba ITENS recebeu `observacao`.
- [ ] Aba ITENS recebeu `descricao_curta` correta.

### Compatibilidade com TapParts

- [ ] TapParts abriu o levantamento enviado pelo FieldTap.
- [ ] TapParts mostrou o item com escala e kit.
- [ ] TapParts mostrou item sem kit corretamente.
- [ ] TapParts não apresentou erro ao abrir itens do S4.

### Integridade de arquivos

- [ ] TapParts_Beta.html não foi alterado.
- [ ] Backups fechados não foram alterados.
- [ ] GAS_Code.js não foi alterado ou alteração foi justificada.
- [ ] S4_ABERTURA.md foi criado/atualizado.
- [ ] S4_LOG.md foi criado/atualizado.
- [ ] S4_FECHAMENTO.md foi criado/atualizado.

---

## 10. Resultado parcial dos testes

Preencher depois dos testes:

[preencher resumo: passou / falhou / pendente]

---

## 11. Pendências

| ID | Pendência | Tipo | Impacto | Destino |
|---|---|---|---|---|
| [preencher] | [preencher] | Bug / Melhoria / Dúvida | Baixo / Médio / Alto / Crítico | Corrigir agora / Backlog |

---

## 12. Conclusão provisória

Status provisório do S4:

- [ ] Em implementação
- [ ] Em teste
- [ ] Bloqueado por bug
- [ ] Pronto para fechamento
- [ ] Fechado

Observação:

[preencher]

\# 00 · CONTROLE GERAL



Fonte da verdade do projeto — atualizar a cada sprint fechado



Projeto: FieldTap · TapParts · GAS/Sheets  

Empresa: Engetap  

Versão do controle: 1.5  

Última atualização: 03/05/2026



\---



\## 1. Objetivo do sistema



Desenvolver o ecossistema FieldTap + TapParts + GAS/Sheets da Engetap, sistema de gestão de acessórios de vasos de pressão com rastreabilidade desde o levantamento em campo até o tratamento administrativo, retorno ao campo e faturamento.



Fluxo geral previsto:



FieldTap → GAS/Sheets → TapParts → ERP externo → TapParts → FieldTap retorno → faturamento



\---



\## 2. Situação executiva atual



O projeto já possui uma base funcional ponta a ponta nos três blocos principais:



\- GAS/Sheets funcionando como backend intermediário.

\- FieldTap conectado ao GAS e enviando levantamentos reais.

\- TapParts conectado ao GAS, exibindo levantamentos reais, itens por levantamento, catálogo de manômetros e kits de instalação.

\- Catálogos e kits já podem ser cadastrados, editados, ativados e inativados pelo TapParts.

\- O S4 foi fechado funcionalmente, evoluindo o FieldTap para consumir melhor os kits e permitir escala personalizada.

\- O próximo passo autorizado é o S5, desde que seja feita uma conferência rápida do fluxo FieldTap → Planilha → TapParts.



Decisão estratégica atual:



\- Priorizar conclusão dos sprints funcionais principais.

\- Refinamento visual amplo ficará para sprint futuro.

\- Ajustes visuais só serão antecipados se impedirem teste, uso ou entendimento do fluxo.



\---



\## 3. Status dos sprints



| Sprint | Nome | Status | Agente principal | Arquivos afetados | Observação |

|---|---|---|---|---|---|

| S0 | GAS + Sheets base | ✅ FECHADO | Claude → usuário cola no GAS | GAS\_Code.js / Google Sheets | Backend mínimo criado, implantado e testado sem bugs |

| S1 | FieldTap com dados reais | ✅ FECHADO | Claude + ajuste manual | FieldTap\_Beta.html | FieldTap conectado ao GAS real e enviando levantamentos |

| S2 | TapParts agrupado por levantamento | ✅ FECHADO | Claude + testes do usuário | TapParts\_Beta.html | TapParts conectado ao GAS, exibindo levantamentos reais e itens por levantamento |

| S3 | Catálogos e kits no TapParts | ✅ FECHADO | Claude + testes do usuário | TapParts\_Beta.html / GAS\_Code.js | TapParts passou a gerir manômetros e kits com persistência no GAS |

| S4 | Kit e escala personalizada no FieldTap | ✅ FECHADO FUNCIONALMENTE | Codex | FieldTap\_Beta.html | FieldTap evoluído com kits, opção sem kit, ajuste\_kit e escala personalizada. Fechamento documental ainda pode ser consolidado |

| S5 | Pipeline administrativo e retorno | ✅ AUTORIZADO / PRÓXIMO | Claude + Codex | TapParts\_Beta.html / FieldTap\_Beta.html / GAS\_Code.js | Iniciar após conferência rápida do fluxo FieldTap → Planilha → TapParts |

| R1 | Refinamento visual e unificação de identidade | 🔒 BACKLOG | Claude | FieldTap\_Beta.html / TapParts\_Beta.html | Tratar após sprints funcionais principais, salvo bloqueio de usabilidade |



\---



\## 4. Versão atual dos arquivos



| Arquivo | Versão atual | Última alteração | Sprint de origem | Status | Observação |

|---|---|---|---|---|---|

| GAS\_Code.js | S3 funcional | 03/05/2026 | S3 | ✅ Atual | Backend com endpoints de base, levantamentos, status, catálogos e kits |

| GAS\_Code\_S0\_Fechado.js | Backup S0 | 03/05/2026 | S0 | ✅ Backup | Ponto de retorno do backend mínimo |

| GAS\_Code\_S3\_FECHADO.js | Backup S3 | 03/05/2026 | S3 | ✅ Backup recomendado | Ponto de retorno do GAS pós-catálogo |

| FieldTap\_Beta.html | S4 funcional | 03/05/2026 | S4 | ✅ Atual | Conectado ao GAS real, com seleção de kits, ajuste\_kit e escala personalizada |

| FieldTap\_Beta\_S1\_Fechado.html | Backup S1 | 03/05/2026 | S1 | ✅ Backup | Ponto de retorno do FieldTap antes do S4 |

| FieldTap\_Beta\_S4\_Fechado.html | Backup S4 | 03/05/2026 | S4 | ✅ Backup recomendado | Ponto de retorno do FieldTap após kit e escala personalizada |

| TapParts\_Beta.html | S3 funcional | 03/05/2026 | S3 | ✅ Atual | Levantamentos, itens, catálogo de manômetros e kits funcionando |

| TapParts\_Beta\_S2\_Fechado.html | Backup S2 | 03/05/2026 | S2 | ✅ Backup | Ponto de retorno antes da gestão de catálogo |

| TapParts\_Beta\_S3\_FECHADO.html | Backup S3 | 03/05/2026 | S3 | ✅ Backup recomendado | Ponto de retorno do TapParts pós-catálogo |

| 00\_CONTROLE\_GERAL.md | v1.5 | 03/05/2026 | Governança | ✅ Atual | Fonte da verdade do projeto |

| 01\_DIVISAO\_DE\_PAPEIS.md | v1.0 | 03/05/2026 | Governança | ✅ Arquivado | Papéis dos agentes |

| 02\_BACKLOG.md | v1.0 | 03/05/2026 | Governança | ✅ Atualizar conforme bugs | Bugs e melhorias fora de escopo |

| S0\_ABERTURA.md | S0 | 03/05/2026 | S0 | ✅ Arquivado | Documento de abertura do Sprint 0 |

| S0\_LOG.md | S0 | 03/05/2026 | S0 | ✅ Arquivado | Log de execução e testes do Sprint 0 |

| S0\_FECHAMENTO.md | S0 | 03/05/2026 | S0 | ✅ Arquivado | Fechamento formal do Sprint 0 |

| S1\_ABERTURA.md | S1 | 03/05/2026 | S1 | ✅ Arquivado | Documento de abertura do Sprint 1 |

| S1\_LOG.md | S1 | 03/05/2026 | S1 | ✅ Arquivado | Log de execução e testes do Sprint 1 |

| S1\_FECHAMENTO.md | S1 | 03/05/2026 | S1 | ✅ Arquivado | Fechamento formal do Sprint 1 |

| S2\_ABERTURA.md | S2 | 03/05/2026 | S2 | ✅ Arquivado | Documento de abertura do Sprint 2 |

| S2\_LOG.md | S2 | 03/05/2026 | S2 | ✅ Arquivado | Log de execução e testes do Sprint 2 |

| S2\_FECHAMENTO.md | S2 | 03/05/2026 | S2 | ✅ Arquivado | Fechamento formal do Sprint 2 |

| S3\_ABERTURA.md | S3 | 03/05/2026 | S3 | ✅ Arquivado | Documento de abertura do Sprint 3 |

| S3\_LOG.md | S3 | 03/05/2026 | S3 | ✅ Arquivado | Log de execução e testes do Sprint 3 |

| S3\_FECHAMENTO.md | S3 | 03/05/2026 | S3 | ✅ Arquivado | Fechamento formal do Sprint 3 |

| S4\_ABERTURA.md | S4 | 03/05/2026 | S4 | ✅ Arquivado | Documento de abertura do Sprint 4 |

| S4\_LOG.md | S4 | 03/05/2026 | S4 | ✅ Arquivado | Log de execução e testes do Sprint 4 |

| S4\_FECHAMENTO.md | S4 | 03/05/2026 | S4 | ⚠️ Consolidar | Fechamento funcional recebido, mas documento ainda pode conter campos em template/não testados |



\---



\## 5. Decisões já tomadas



\- Backend escolhido: Google Sheets + Google Apps Script.

\- Deploy do GAS será sempre manual pelo usuário, colando o código no editor online do Google Apps Script.

\- Não usar clasp.

\- Frontend em HTML/CSS/JS puro, sem framework.

\- Arquivos principais continuam sendo HTML único para cada app.

\- FieldTap é o app de campo.

\- TapParts é o sistema administrativo de escritório.

\- ERP externo continuará responsável pela emissão formal dos orçamentos ao cliente.

\- TapParts deve futuramente exportar CSV/JSON para o ERP.

\- Agrupamento principal no TapParts será por cliente/levantamento, e não por acessório isolado.

\- Pipeline será individual por acessório, mas a visão principal será agrupada por levantamento.

\- Kits serão pré-cadastrados no TapParts por bitola e tipo.

\- Escala de manômetro terá lista fixa e personalização de início, fim e unidade a partir do S4.

\- S0 criou apenas o backend mínimo.

\- S1 conectou o FieldTap ao backend real.

\- S2 conectou o TapParts ao backend real e criou a visão por levantamento.

\- S3 criou gestão funcional de catálogos de manômetros e kits no TapParts.

\- S4 evoluiu o FieldTap para usar melhor kits e escala personalizada.

\- S5 deve iniciar o pipeline administrativo e retorno.

\- Decisão: priorizar conclusão dos sprints funcionais principais antes de refinamento visual amplo.

\- Ajustes visuais só serão tratados antes do fim se afetarem usabilidade, legibilidade ou teste dos critérios de aceite.

\- A URL real do GAS deve aparecer apenas na constante `GAS\_URL` de cada HTML. Textos de aviso devem manter o placeholder `COLE\_AQUI\_A\_URL\_DO\_GAS`.

\- Ao alterar GAS\_Code.js, o usuário deve atualizar manualmente a implantação do Web App no Apps Script.



\---



\## 6. Restrições permanentes



\- Não usar clasp ou automação de deploy do GAS.

\- Não reescrever HTML inteiro quando a alteração puder ser cirúrgica.

\- Não implementar funcionalidade de sprint futuro durante o sprint atual.

\- Não criar novo sprint sem fechar formalmente o sprint atual.

\- Não corrigir bug sem classificação prévia como BLOQUEADOR ou BACKLOG.

\- Não misturar desenvolvimento de TapParts com FieldTap no mesmo sprint sem autorização.

\- Não implementar ERP completo antes do sprint previsto.

\- Não implementar upload real de fotos antes do sprint previsto.

\- Não implementar modo offline completo antes do sprint previsto.

\- Não implementar retorno de instalação antes do sprint previsto.

\- Não mexer em backup fechado, salvo para consulta.

\- Não alterar arquivos fechados diretamente:



&#x20; - `GAS\_Code\_S0\_Fechado.js`

&#x20; - `GAS\_Code\_S3\_FECHADO.js`

&#x20; - `FieldTap\_Beta\_S1\_Fechado.html`

&#x20; - `FieldTap\_Beta\_S4\_Fechado.html`

&#x20; - `TapParts\_Beta\_S2\_Fechado.html`

&#x20; - `TapParts\_Beta\_S3\_FECHADO.html`



\---



\## 7. Endpoints atuais do GAS



\### GET existentes



\- `validarPIN`

\- `getOS`

\- `getVasosByOS`

\- `getCatalogos`

\- `getKitsByBitola`

\- `getLevantamentosByCliente`

\- `getItensByLevantamento`

\- `getCatalogoByTipo`



\### POST existentes



\- `enviarLevantamento`

\- `atualizarStatusItem`

\- `salvarItemCatalogo`

\- `toggleAtivoItem`



\### Observação importante



Depois do S3, o GAS\_Code.js deixou de ser apenas S0.1.  



A versão atual do arquivo de trabalho é S3 funcional.



O backup S0 deve ser mantido apenas como ponto de retorno histórico.



\---



\## 8. Sprint S0 — GAS + Sheets base



\### Status



✅ FECHADO



\### Data



Abertura: 03/05/2026  

Fechamento: 03/05/2026



\### Objetivo



Criar a estrutura mínima de backend com Google Sheets + Google Apps Script para que FieldTap e TapParts pudessem deixar de depender de dados mockados em sprints futuros.



\### Arquivos afetados



\- GAS\_Code.js

\- Google Sheets: Engetap\_FieldTap\_TapParts\_DB



\### O que foi implementado



\- Função `setupPlanilha()` para criação das abas mínimas.

\- Criação das abas:



&#x20; - LEVANTAMENTOS

&#x20; - ITENS

&#x20; - HISTORICO\_STATUS

&#x20; - CAT\_INSPETORES

&#x20; - CAT\_OS

&#x20; - CAT\_VASOS

&#x20; - CAT\_MANOMETROS

&#x20; - CAT\_KITS



\- Dados de teste:



&#x20; - 2 inspetores

&#x20; - 2 OS

&#x20; - 4 vasos

&#x20; - 5 manômetros

&#x20; - 2 kits



\- Roteador GET via `doGet()`.

\- Roteador POST via `doPost()`.

\- Endpoints GET:



&#x20; - `validarPIN`

&#x20; - `getOS`

&#x20; - `getVasosByOS`

&#x20; - `getCatalogos`

&#x20; - `getKitsByBitola`

&#x20; - `getLevantamentosByCliente`

&#x20; - `getItensByLevantamento`



\- Endpoints POST:



&#x20; - `enviarLevantamento`

&#x20; - `atualizarStatusItem`



\- Geração de IDs:



&#x20; - `LEV-YYYY-NNN`

&#x20; - `ACE-YYYY-NNN`

&#x20; - `HST-NNNNN`



\- Uso de `LockService` nas operações de escrita.

\- PIN armazenado e validado por hash SHA-256.

\- Respostas JSON padronizadas com `status: ok` ou `status: erro`.

\- Inspetores retornados sem exposição do `pin\_hash`.



\### Critérios de aceite — resultado



\- \[✔ PASSOU] `?action=getOS` retornou 2 OS.

\- \[✔ PASSOU] `?action=validarPIN\&pin=1234` retornou PIN válido para João Silva.

\- \[✔ PASSOU] `?action=validarPIN\&pin=0000` retornou `{valido:false}`.

\- \[✔ PASSOU] `?action=getVasosByOS\&os=OS-2025-001` retornou vasos da OS.

\- \[✔ PASSOU] `?action=getCatalogos` retornou manômetros e kits ativos.

\- \[✔ PASSOU] `?action=getKitsByBitola\&bitola=1/4"` retornou kits filtrados.

\- \[✔ PASSOU] POST `enviarLevantamento` criou levantamento e itens.

\- \[✔ PASSOU] Abas LEVANTAMENTOS e ITENS foram preenchidas.

\- \[✔ PASSOU] `?action=getLevantamentosByCliente` retornou o levantamento criado.

\- \[✔ PASSOU] `?action=getItensByLevantamento` retornou os itens do levantamento.

\- \[✔ PASSOU] POST `atualizarStatusItem` atualizou status e criou linha em HISTORICO\_STATUS.



\### Bugs encontrados



Nenhum bug encontrado nos testes do S0.



\### O que ficou fora do S0



\- Alteração do FieldTap.

\- Alteração do TapParts.

\- Upload de fotos.

\- Pipeline completo administrativo.

\- Integração com ERP.

\- Retorno do FieldTap.

\- Módulos completos de válvulas, purgadores, conexões, placas e DCBI.

\- Interface visual.



\### Decisão de fechamento



Sprint S0 fechado com sucesso.  

GAS\_Code.js congelado como versão S0.1.  

S1 autorizado.



\---



\## 9. Sprint S1 — FieldTap com dados reais



\### Status



✅ FECHADO



\### Data



Abertura: 03/05/2026  

Fechamento: 03/05/2026



\### Objetivo



Conectar o FieldTap\_Beta.html ao backend real GAS/Sheets criado no Sprint 0, substituindo os dados mockados principais por chamadas reais ao GAS.



\### Arquivos afetados



\- FieldTap\_Beta.html



\### Arquivos que permaneceram intocados



\- GAS\_Code.js

\- TapParts\_Beta.html



\### O que foi implementado



\- Configuração central da URL do GAS em `const GAS\_URL`.

\- Validação de PIN via endpoint `validarPIN`.

\- Carregamento de OS reais via endpoint `getOS`.

\- Carregamento de vasos/equipamentos via endpoint `getVasosByOS`.

\- Carregamento de catálogos de manômetros e kits via endpoint `getCatalogos`.

\- Seleção de:



&#x20; - OS

&#x20; - vaso/equipamento

&#x20; - manômetro

&#x20; - kit opcional

&#x20; - quantidade

&#x20; - observação



\- Envio de levantamento real via endpoint `enviarLevantamento`.

\- Exibição de confirmação com:



&#x20; - ID do levantamento

&#x20; - IDs dos itens criados



\- Tratamento básico de erro de conexão.

\- Preservação visual do FieldTap.



\### Critérios de aceite — resultado



\- \[✔ PASSOU] FieldTap abriu no celular.

\- \[✔ PASSOU] PIN aceitou digitação e preencheu os pontos visuais.

\- \[✔ PASSOU] PIN 1234 autenticou via GAS.

\- \[✔ PASSOU] PIN incorreto foi recusado.

\- \[✔ PASSOU] Lista de OS apareceu via `getOS`.

\- \[✔ PASSOU] Seleção de OS carregou vasos via `getVasosByOS`.

\- \[✔ PASSOU] Catálogo de manômetros apareceu via `getCatalogos`.

\- \[✔ PASSOU] Fluxo permitiu selecionar OS, vaso, manômetro, kit e quantidade.

\- \[✔ PASSOU] Botão final enviou levantamento real para `enviarLevantamento`.

\- \[✔ PASSOU] A planilha recebeu o novo levantamento em LEVANTAMENTOS.

\- \[✔ PASSOU] A planilha recebeu os novos itens em ITENS.

\- \[✔ PASSOU] TapParts\_Beta.html não foi alterado.

\- \[✔ PASSOU] GAS\_Code.js não foi alterado.



\### Bugs encontrados



| ID | Descrição | Classificação | Status |

|---|---|---|---|

| BUG-S1-001 | URL do GAS foi inicialmente inserida sem aspas em `const GAS\_URL`, quebrando o JavaScript e impedindo o teclado PIN de funcionar | BLOQUEADOR | Corrigido |



\### Correção realizada no BUG-S1-001



A linha incorreta estava sem aspas:



`const GAS\_URL = https://script.google.com/.../exec;`



Foi corrigida para:



`const GAS\_URL = 'https://script.google.com/.../exec';`



Após a correção, o teclado PIN voltou a funcionar e o app autenticou corretamente.



\### O que ficou fora do S1



\- Upload real de fotos.

\- Modo offline completo.

\- IndexedDB completo.

\- Campo livre estruturado.

\- Escala personalizada avançada.

\- Válvulas, purgadores, conexões, placas e DCBI como módulos completos.

\- Retorno/instalação pelo FieldTap.

\- Alterações no TapParts.

\- Alterações no GAS.



\### Decisão de fechamento



Sprint S1 fechado com sucesso.  

FieldTap\_Beta.html congelado como versão S1 funcional.  

S2 autorizado.



\---



\## 10. Sprint S2 — TapParts agrupado por levantamento



\### Status



✅ FECHADO



\### Data



Abertura: 03/05/2026  

Fechamento: 03/05/2026



\### Objetivo



Conectar o TapParts\_Beta.html ao GAS real e transformar a tela principal em uma visão de levantamentos agrupados por cliente/OS, consumindo os dados reais enviados pelo FieldTap.



\### Arquivos afetados



\- TapParts\_Beta.html



\### Arquivos que permaneceram intocados



\- FieldTap\_Beta.html

\- GAS\_Code.js



\### O que foi implementado



\- Configuração central da URL do GAS no TapParts.

\- Funções de comunicação:



&#x20; - `gasGet()`

&#x20; - `gasPost()`



\- Tela principal de levantamentos via `getLevantamentosByCliente`.

\- Exibição de cards por levantamento.

\- Exibição de:



&#x20; - cliente

&#x20; - OS

&#x20; - inspetor

&#x20; - data/hora do envio

&#x20; - total de itens

&#x20; - resumo de status



\- Botão “Ver levantamento”.

\- Visão interna com itens reais via `getItensByLevantamento`.

\- Agrupamento visual dos itens por vaso/equipamento.

\- Modal simples de detalhe do item.

\- Atualização simples de status via `atualizarStatusItem`.

\- Registro de histórico na aba HISTORICO\_STATUS.

\- Preservação do FieldTap sem alterações.



\### Critérios de aceite — resultado



\- \[✔ PASSOU] TapParts\_Beta.html abriu sem erro no navegador.

\- \[✔ PASSOU] URL do GAS ficou configurada em variável única.

\- \[✔ PASSOU] Tela principal carregou levantamentos reais via `getLevantamentosByCliente`.

\- \[✔ PASSOU] Levantamento enviado pelo FieldTap apareceu como card.

\- \[✔ PASSOU] Card mostrou cliente, OS, inspetor, data, total de itens e resumo de status.

\- \[✔ PASSOU] Botão “Ver levantamento” carregou itens reais via `getItensByLevantamento`.

\- \[✔ PASSOU] Itens exibiram ID, vaso, descrição, quantidade e status.

\- \[✔ PASSOU] Modal/detalhe do item abriu sem erro.

\- \[✔ PASSOU] Atualização simples de status funcionou via `atualizarStatusItem`.

\- \[✔ PASSOU] HISTORICO\_STATUS recebeu registro.

\- \[✔ PASSOU] FieldTap\_Beta.html não foi alterado.

\- \[✔ PASSOU] GAS\_Code.js não foi alterado.

\- \[✔ PASSOU] Dados mockados não apareceram como dados reais.



\### Bugs encontrados



Nenhum bug bloqueador mantido ao final do S2.



\### Melhoria registrada



| ID | Descrição | Classificação | Destino |

|---|---|---|---|

| MEL-S2-001 | Layout do FieldTap/TapParts ficou visualmente distante da primeira versão beta visual aprovada | BACKLOG | Refinamento visual pós-sprints principais |



\### O que ficou fora do S2



\- Módulo completo de catálogo.

\- Tela completa de kits.

\- Criação/edição de manômetros.

\- Endpoint `salvarItemCatalogo`.

\- Upload ou visualização real de fotos.

\- Exportação ERP completa.

\- Aprovação parcial completa.

\- Pipeline completo de compra, recebimento, calibração, retorno e faturamento.

\- Alterações no FieldTap.

\- Alterações no GAS.

\- Criação de novos endpoints.



\### Decisão de fechamento



Sprint S2 fechado com sucesso.  

TapParts\_Beta.html congelado como versão S2 funcional.  

S3 autorizado.



\---



\## 11. Sprint S3 — Catálogos e kits no TapParts



\### Status



✅ FECHADO



\### Data



Abertura: 03/05/2026  

Fechamento: 03/05/2026



\### Objetivo



Implementar no TapParts\_Beta.html a gestão administrativa de catálogos técnicos e kits de instalação, permitindo cadastrar, editar, ativar e inativar itens usados pelo FieldTap, com persistência no GAS/Sheets.



\### Arquivos afetados



\- TapParts\_Beta.html

\- GAS\_Code.js



\### Arquivos que permaneceram intocados



\- FieldTap\_Beta.html

\- FieldTap\_Beta\_S1\_Fechado.html

\- TapParts\_Beta\_S2\_Fechado.html

\- GAS\_Code\_S0\_Fechado.js



\### O que foi implementado no GAS



\- Endpoint GET `getCatalogoByTipo`.

\- Endpoint POST `salvarItemCatalogo`.

\- Endpoint POST `toggleAtivoItem`.

\- Suporte a catálogo de manômetros.

\- Suporte a catálogo de kits.

\- Leitura de itens ativos e inativos para gestão administrativa no TapParts.

\- Persistência em CAT\_MANOMETROS.

\- Persistência em CAT\_KITS.

\- Geração de ID para novos itens de catálogo:



&#x20; - MAN-006, MAN-007, etc.

&#x20; - KIT-003, KIT-004, etc.



\- Geração de `desc\_curta` para manômetros a partir dos valores atuais enviados pelo formulário.

\- Manutenção dos endpoints anteriores:



&#x20; - `validarPIN`

&#x20; - `getOS`

&#x20; - `getVasosByOS`

&#x20; - `getCatalogos`

&#x20; - `getKitsByBitola`

&#x20; - `getLevantamentosByCliente`

&#x20; - `getItensByLevantamento`

&#x20; - `enviarLevantamento`

&#x20; - `atualizarStatusItem`



\### O que foi implementado no TapParts



\- Navegação superior com:



&#x20; - Levantamentos FieldTap

&#x20; - Catálogo

&#x20; - Kits de Instalação



\- Preservação da tela de levantamentos criada no S2.

\- Tela “Catálogo de Manômetros”.

\- Listagem de manômetros reais via `getCatalogoByTipo\&tipo=manometros`.

\- Formulário/modal de novo manômetro.

\- Formulário/modal de edição de manômetro.

\- Preview automático da descrição curta.

\- Salvar manômetro via `salvarItemCatalogo`.

\- Ativar/inativar manômetro via `toggleAtivoItem`.

\- Tela “Kits de Instalação”.

\- Listagem de kits reais via `getCatalogoByTipo\&tipo=kits`.

\- Formulário/modal de novo kit.

\- Formulário/modal de edição de kit.

\- Adição e remoção de componentes no kit.

\- Salvar kit via `salvarItemCatalogo`.

\- Ativar/inativar kit via `toggleAtivoItem`.

\- Mensagens de erro e sucesso via toast.

\- Recarregamento das listas após salvar, editar, ativar ou inativar.



\### Critérios de aceite — resultado



\- \[✔ PASSOU] TapParts\_Beta.html abriu sem erro.

\- \[✔ PASSOU] Tela de Levantamentos FieldTap do S2 continuou funcionando.

\- \[✔ PASSOU] Botão/menu Catálogo abriu a tela de catálogo.

\- \[✔ PASSOU] Tela de catálogo carregou manômetros reais via `getCatalogoByTipo\&tipo=manometros`.

\- \[✔ PASSOU] Botão Novo manômetro abriu formulário.

\- \[✔ PASSOU] Preview da `desc\_curta` do manômetro atualizou em tempo real.

\- \[✔ PASSOU] Salvar novo manômetro gravou linha em CAT\_MANOMETROS.

\- \[✔ PASSOU] Editar manômetro existente atualizou a linha correta em CAT\_MANOMETROS.

\- \[✔ PASSOU] `desc\_curta` salva refletiu os valores atuais dos campos selecionados.

\- \[✔ PASSOU] Inativar manômetro alterou `ativo=false` sem apagar a linha.

\- \[✔ PASSOU] Reativar manômetro alterou `ativo=true`.

\- \[✔ PASSOU] `getCatalogos` continuou retornando apenas manômetros ativos.

\- \[✔ PASSOU] Botão/menu Kits de Instalação abriu a tela de kits.

\- \[✔ PASSOU] Tela de kits carregou kits reais via `getCatalogoByTipo\&tipo=kits`.

\- \[✔ PASSOU] Botão Novo kit abriu formulário.

\- \[✔ PASSOU] Adicionar/remover componentes no formulário de kit funcionou.

\- \[✔ PASSOU] Salvar novo kit gravou linha em CAT\_KITS.

\- \[✔ PASSOU] Editar kit existente atualizou a linha correta em CAT\_KITS.

\- \[✔ PASSOU] Inativar kit alterou `ativo=false` sem apagar linha.

\- \[✔ PASSOU] Reativar kit alterou `ativo=true`.

\- \[✔ PASSOU] `getKitsByBitola` continuou funcionando.

\- \[✔ PASSOU] GAS\_Code.js manteve endpoints antigos funcionando.

\- \[✔ PASSOU] FieldTap\_Beta.html não foi alterado.

\- \[✔ PASSOU] Nenhum dado mockado apareceu como dado real.



\### Bugs encontrados



| ID | Descrição | Classificação | Status |

|---|---|---|---|

| BUG-S3-001 | TapParts\_Beta.html estava apontando para URL antiga do GAS, causando erro `action não reconhecida` em `getCatalogoByTipo` e `salvarItemCatalogo` | BLOQUEADOR | Corrigido |

| BUG-S3-002 | URL real foi colada indevidamente em trechos de aviso/placeholder do TapParts | BAIXO | Corrigido |



\### Correções realizadas no S3



\- A constante JavaScript `GAS\_URL` do TapParts foi ajustada para apontar para a implantação atualizada do GAS.

\- Os textos de aviso/placeholder foram restaurados para:



&#x20; - `COLE\_AQUI\_A\_URL\_DO\_GAS`



\- A URL real ficou concentrada apenas em `const GAS\_URL`.

\- O erro `action não reconhecida` foi resolvido após o TapParts apontar para o GAS correto.

\- Confirmado que o GAS novo possuía os endpoints esperados.



\### O que ficou fora do S3



\- Alterações no FieldTap.

\- Wizard completo do FieldTap.

\- Escala personalizada no FieldTap.

\- Upload real de fotos.

\- Modo offline / IndexedDB.

\- Exportação ERP.

\- Aprovação parcial completa.

\- Pipeline completo de compras.

\- Retorno ao FieldTap.

\- Faturamento.

\- Integração com Omie ou outro ERP.

\- Tela completa de válvulas, purgadores, placas e DCBI.

\- Refinamento visual amplo.



\### Decisão de fechamento



Sprint S3 fechado com sucesso.  

TapParts\_Beta.html congelado como versão S3 funcional.  

GAS\_Code.js congelado como versão S3 funcional.  

S4 autorizado.



\---



\## 12. Sprint S4 — Kit e escala personalizada no FieldTap



\### Status



✅ FECHADO FUNCIONALMENTE



\### Data



Abertura: 03/05/2026  

Fechamento funcional: 03/05/2026



\### Objetivo



Evoluir o FieldTap\_Beta.html para consumir corretamente os catálogos e kits geridos no TapParts, permitir seleção clara de kits de instalação e implementar escala personalizada para manômetros/vacuômetros/manovacuômetros.



\### Arquivos afetados



\- FieldTap\_Beta.html



\### Arquivos que permaneceram intocados



\- TapParts\_Beta.html

\- TapParts\_Beta\_S3\_FECHADO.html

\- GAS\_Code\_S3\_FECHADO.js

\- Backups fechados em geral



\### O que foi implementado



\- Preservado fluxo de PIN.

\- Preservado carregamento de OS.

\- Preservado carregamento de vasos.

\- Preservado carregamento de catálogos.

\- Melhorada a seleção de kits por bitola/rosca.

\- Adicionada opção clara “Sem kit de instalação”.

\- Adicionado campo `ajuste\_kit`.

\- Adicionada opção de escala padrão.

\- Adicionada opção de escala personalizada.

\- Adicionada validação de escala personalizada.

\- Atualizada geração de `descricao\_curta` para refletir escala personalizada.

\- Revisão passou a exibir kit, escala, ajuste do kit e observação.

\- Payload final preserva campos necessários para a aba ITENS.

\- `GAS\_Code.js` não foi alterado nesta execução.



\### Critérios de aceite — resultado



Resultado formal pendente de consolidação documental.



Critérios que devem ser confirmados na conferência rápida:



\- \[ ] FieldTap abre no celular.

\- \[ ] PIN autentica via GAS.

\- \[ ] OS e vasos carregam.

\- \[ ] Manômetros ativos aparecem no FieldTap.

\- \[ ] Manômetros inativos não aparecem no FieldTap.

\- \[ ] Kits ativos aparecem conforme bitola/rosca.

\- \[ ] Kits inativos não aparecem.

\- \[ ] Opção “Sem kit de instalação” aparece claramente.

\- \[ ] É possível selecionar “Sem kit”.

\- \[ ] É possível selecionar kit simples.

\- \[ ] É possível selecionar kit DCBI.

\- \[ ] Campo `ajuste\_kit` aparece e aceita texto opcional.

\- \[ ] É possível usar escala padrão.

\- \[ ] É possível escolher escala personalizada.

\- \[ ] Validação impede `escala\_fim` menor ou igual à `escala\_inicio`.

\- \[ ] Unidade de escala é obrigatória quando escala personalizada é usada.

\- \[ ] Revisão mostra descrição curta final.

\- \[ ] Revisão mostra kit ou “Sem kit”.

\- \[ ] Revisão mostra escala final.

\- \[ ] Revisão mostra `ajuste\_kit`, se preenchido.

\- \[ ] Envio do levantamento funciona.

\- \[ ] Aba ITENS recebe campos de escala e kit.

\- \[ ] TapParts abre o levantamento enviado pelo FieldTap.

\- \[ ] TapParts mostra item com escala e kit.

\- \[ ] TapParts mostra item sem kit corretamente.



\### Pendência documental



O fechamento funcional foi recebido, mas o `S4\_FECHAMENTO.md` ainda pode conter campos em modo template/não testado. Por rastreabilidade, o status fica como FECHADO FUNCIONALMENTE até consolidação final do documento.



\### O que ficou fora do S4



\- Redesign visual amplo.

\- Alterações no TapParts.

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

\- Nova autenticação.

\- Controle de permissões por perfil.



\### Decisão de fechamento



Sprint S4 fechado funcionalmente.  

FieldTap\_Beta.html congelado como versão S4 funcional.  

S5 autorizado após conferência rápida do fluxo FieldTap → Planilha → TapParts.



\---



\## 13. Próximo sprint autorizado



\## Sprint S5 — Pipeline administrativo e retorno



\### Status



✅ AUTORIZADO / PRÓXIMO



\### Objetivo



Evoluir o TapParts para iniciar o pipeline administrativo dos itens levantados em campo, permitindo avanço mais estruturado por status, preparação para cotação/orçamento, controle de aprovação, compra, recebimento, calibração/lacre e posterior retorno ao FieldTap.



\### Arquivo principal autorizado



\- TapParts\_Beta.html



\### Arquivos que podem ser alterados somente se necessário



\- GAS\_Code.js

\- FieldTap\_Beta.html



\### Arquivos proibidos no S5



\- TapParts\_Beta\_S3\_FECHADO.html.

\- FieldTap\_Beta\_S1\_Fechado.html.

\- FieldTap\_Beta\_S4\_Fechado.html.

\- GAS\_Code\_S3\_FECHADO.js.

\- Backups fechados em geral.

\- Arquivos de sprints futuros.



\### Escopo inicial previsto



\- Preservar conexão existente do TapParts com o GAS.

\- Preservar leitura de levantamentos.

\- Preservar leitura de itens por levantamento.

\- Preservar gestão de catálogos e kits criada no S3.

\- Melhorar o tratamento administrativo dos itens levantados.

\- Criar visão mais clara por status do item.

\- Permitir controle individual dos acessórios.

\- Preparar fluxo para:



&#x20; - cotação

&#x20; - aprovação

&#x20; - compra

&#x20; - recebimento

&#x20; - calibração/lacre

&#x20; - preparação para retorno ao FieldTap



\- Registrar histórico das mudanças de status.

\- Evitar alterar o FieldTap salvo se o retorno ao campo exigir preparação mínima.



\### Critérios preliminares de aceite do S5



\- \[ ] TapParts abre sem erro.

\- \[ ] Levantamentos existentes continuam carregando.

\- \[ ] Itens existentes continuam abrindo por levantamento.

\- \[ ] Catálogo de manômetros continua funcionando.

\- \[ ] Kits continuam funcionando.

\- \[ ] Status dos itens pode ser atualizado de forma mais organizada.

\- \[ ] Histórico de status continua sendo registrado.

\- \[ ] Campos administrativos relevantes ficam visíveis.

\- \[ ] Fluxo individual por acessório fica mais claro.

\- \[ ] Não há perda de compatibilidade com itens enviados pelo FieldTap S4.

\- \[ ] GAS\_Code.js só é alterado se houver necessidade justificada.

\- \[ ] Backups fechados não são alterados.



\### Fora do escopo do S5



\- Redesign visual amplo.

\- Integração completa com ERP.

\- Integração com Omie.

\- Faturamento completo.

\- Upload real de fotos.

\- Modo offline completo.

\- App nativo.

\- Reescrita total do TapParts.

\- Alteração estrutural da planilha sem necessidade técnica real.

\- Criação de sprint visual paralelo.



\---



\## 14. Backlog atual



| ID | Origem | Tipo | Descrição | Gravidade | Sprint sugerido | Status |

|---|---|---|---|---|---|---|

| BUG-001 | Beta | Bug | `desc\_curta` do manômetro usava valores padrão em vez dos campos selecionados | 🔴 Crítico | S3 | ✅ Corrigido |

| BUG-002 | Beta | Bug | Fotos quebradas no TapParts — ícone de erro sem contexto | 🟠 Alto | S5 ou sprint de fotos | Aberto |

| BUG-003 | Beta | Bug | Passo 0 de 6 exibido no FieldTap em algumas telas | 🟡 Médio | S4 ou refinamento FieldTap | Aberto |

| BUG-S1-001 | S1 | Bug | URL do GAS sem aspas quebrou JS do PIN | 🔴 Bloqueador | S1 | ✅ Corrigido |

| BUG-S3-001 | S3 | Bug | TapParts apontava para URL antiga do GAS e não reconhecia endpoints S3 | 🔴 Bloqueador | S3 | ✅ Corrigido |

| BUG-S3-002 | S3 | Bug | URL real colada em textos de aviso/placeholder do TapParts | 🟢 Baixo | S3 | ✅ Corrigido |

| MEL-001 | Beta | Melhoria | Campo fornecedor sem label visível no modal TapParts | 🟠 Alto | S5 | Aberto |

| MEL-002 | Beta | Melhoria | Observação sem texto auxiliar persistente no modal | 🟡 Médio | S5/refinamento | Aberto |

| MEL-003 | Beta | Melhoria | Cards da dashboard não filtram ao clicar | 🟢 Baixo | S5 ou R1 | Aberto |

| MEL-004 | Plano v3 | Melhoria | Modo offline com sincronização ao reconectar | 🟢 Baixo | Futuro | Aberto |

| MEL-S2-001 | S2 | Melhoria | Layout FieldTap/TapParts ficou distante da primeira beta visual aprovada | 🟡 Médio | R1 | Aberto |

| MEL-S3-001 | S3 | Melhoria | Criar telas completas para válvulas, purgadores, placas e DCBI | 🟠 Alto | Futuro / pós-S4 | Aberto |

| MEL-S3-002 | S3 | Melhoria | Melhorar interface visual de cadastro de kits com preview de descrição do kit | 🟡 Médio | Refinamento | Aberto |



\---



\## 15. Regras de operação entre agentes



\### Usuário



\- Autoridade final do projeto.

\- Testa critérios de aceite.

\- Autoriza mudança fora de escopo.

\- Faz deploy manual do GAS.

\- Decide se sprint pode fechar.

\- Mantém arquivos de backup fechados.



\### Claude



\- Designer, UX e arquiteto.

\- Pode gerar HTML/CSS/JS completo quando for abertura de sprint.

\- Pode gerar GAS apenas quando o sprint autorizar.

\- Pode criar documentos de controle do sprint quando solicitado.

\- Não deve corrigir bug cirúrgico isolado se a regra mandar levar ao Codex.

\- Não decide próximo sprint.

\- Não deve alterar backups fechados.



\### ChatGPT



\- Gerente técnico e auditor.

\- Classifica bugs como BLOQUEADOR ou BACKLOG.

\- Gera prompts cirúrgicos para Codex.

\- Gera documentos de fechamento.

\- Ajuda a atualizar o controle geral.

\- Não abre sprint novo sem fechamento do anterior.

\- Ajuda a manter o escopo congelado.



\### Codex



\- Executor cirúrgico.

\- Aplica correções pontuais.

\- Não reescreve telas inteiras.

\- Não decide escopo.

\- Não altera arquivos sem prompt específico.

\- Deve atuar preferencialmente em bugs bloqueadores já classificados.



\---



\## 16. Protocolo de congelamento anti-expansão



Quando qualquer bug aparecer durante um sprint:



1\. Parar tudo.

2\. Não pedir para Claude ou Codex corrigirem imediatamente.

3\. Levar o bug ao ChatGPT.

4\. ChatGPT classifica:



&#x20;  - BLOQUEADOR

&#x20;  - BACKLOG



5\. Se for BLOQUEADOR:



&#x20;  - ChatGPT gera prompt cirúrgico.

&#x20;  - Codex aplica correção mínima.

&#x20;  - Usuário testa.

&#x20;  - Se passou, sprint continua.



6\. Se for BACKLOG:



&#x20;  - Registrar no `02\_BACKLOG.md`.

&#x20;  - Sprint continua sem tocar nesse ponto.



Nunca transformar bug pequeno em novo sprint sem autorização explícita.  

Nunca deixar Claude ou Codex decidirem sozinhos que algo deve ser corrigido agora.  

Nunca permitir que um sprint funcional vire sprint visual sem autorização explícita.



\---



\## 17. Histórico resumido



\### 03/05/2026 — S0 fechado



Backend mínimo GAS/Sheets criado e testado.  

GAS\_Code.js congelado como S0.1.  

S1 liberado.



\### 03/05/2026 — S1 fechado



FieldTap conectado ao GAS real.  

PIN, OS, vasos, catálogos e envio de levantamento funcionando.  

Correção manual feita na URL do GAS com aspas.  

S2 liberado.



\### 03/05/2026 — S2 fechado



TapParts conectado ao GAS real.  

Levantamentos reais passaram a aparecer como cards agrupados.  

Itens reais passaram a abrir por levantamento.  

Atualização simples de status funcionando.  

HISTORICO\_STATUS recebendo registros.  

S3 liberado.



\### 03/05/2026 — S3 fechado



TapParts passou a gerir catálogo de manômetros e kits de instalação.  

GAS recebeu endpoints de catálogo: `getCatalogoByTipo`, `salvarItemCatalogo`, `toggleAtivoItem`.  

Bug da URL antiga do GAS foi identificado e corrigido.  

`desc\_curta` do manômetro passou a refletir os campos atuais do formulário.  

S4 liberado.



\### 03/05/2026 — S4 fechado funcionalmente



FieldTap evoluído para consumir melhor os kits geridos pelo TapParts.  

Foi adicionada opção clara “Sem kit de instalação”.  

Foi adicionado campo `ajuste\_kit`.  

Foi adicionada escala padrão/personalizada.  

Revisão passou a exibir kit, escala, ajuste do kit e observação.  

GAS\_Code.js não foi alterado.  

S5 liberado após conferência rápida do fluxo FieldTap → Planilha → TapParts.



\---



\## 18. Próxima ação



Realizar conferência rápida do S4 no fluxo:



FieldTap → Planilha → TapParts



Conferir principalmente:



\- FieldTap abre no celular.

\- PIN autentica.

\- OS e vasos carregam.

\- Manômetros ativos aparecem.

\- Kits ativos aparecem conforme bitola.

\- Opção “Sem kit” funciona.

\- Escala personalizada é gravada.

\- Aba ITENS recebe os campos de kit e escala.

\- TapParts abre o levantamento enviado pelo FieldTap.



Após essa conferência, abrir o Sprint S5 — Pipeline administrativo e retorno.


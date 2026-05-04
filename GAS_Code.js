// =============================================================================
// ENGETAP — FieldTap + TapParts
// GAS_Code.js — Sprint 0: Backend mínimo
// Vinculado à planilha: Engetap_FieldTap_TapParts_DB
// Versão: S0.1 — 2026
// =============================================================================
//
// INSTRUÇÕES DE IMPLANTAÇÃO:
// 1. Abra a planilha Engetap_FieldTap_TapParts_DB
// 2. Vá em Extensões > Apps Script
// 3. Apague o código padrão e cole este arquivo inteiro
// 4. Salve (Ctrl+S) e nomeie o projeto: "Engetap FieldTap TapParts API"
// 5. No editor, selecione a função "setupPlanilha" no menu de funções
// 6. Clique em "Executar" — autorize as permissões quando solicitado
// 7. Verifique na planilha se as abas foram criadas com os cabeçalhos
// 8. Vá em Implantar > Nova implantação
//    - Tipo: App da Web
//    - Executar como: Você
//    - Quem tem acesso: Qualquer pessoa
// 9. Clique em Implantar e copie a URL gerada
// 10. Teste a URL conforme S0_ABERTURA.md
//
// =============================================================================
// ESTRUTURA DA PLANILHA (criada automaticamente por setupPlanilha())
// =============================================================================
//
// Aba LEVANTAMENTOS:
//   id_levantamento | id_inspetor | nome_inspetor | id_os | cliente |
//   timestamp_envio | total_itens | status_geral
//
// Aba ITENS:
//   id_item | id_levantamento | id_os | cliente | id_vaso | tag_vaso |
//   nome_vaso | tipo_acessorio | id_item_catalogo | descricao_curta |
//   quantidade | escala_inicio | escala_fim | escala_unidade | id_kit |
//   componentes_kit | ajuste_kit | requer_calibracao | requer_lacre |
//   observacao | tipo | status | fornecedor | valor_cotado | prazo_entrega |
//   status_aprovacao_cliente | timestamp_criacao | timestamp_ultima_atualizacao |
//   origem
//
// Aba HISTORICO_STATUS:
//   id_historico | id_item | status_anterior | status_novo | responsavel |
//   observacao | timestamp
//
// Aba CAT_INSPETORES:
//   id | nome | pin_hash | ativo
//
// Aba CAT_OS:
//   id_os | cliente | data_inicio | data_fim | status
//
// Aba CAT_VASOS:
//   id_vaso | id_os | tag | nome | setor | pmta | categoria
//
// Aba CAT_MANOMETROS:
//   id | tipo | fluido | caixa_mm | rosca | tipo_rosca | entrada |
//   escala_padrao | marca | modelo | desc_curta | requer_calibracao | ativo
//
// Aba CAT_KITS:
//   id | nome | bitola | tipo_kit | componentes | inclui_formalizacao_rs | ativo
//
// =============================================================================


// =============================================================================
// SETUP — criar abas e dados de teste
// =============================================================================

/**
 * Executa UMA VEZ antes de publicar o Web App.
 * Cria todas as abas com cabeçalhos e popula dados de teste.
 * Não apaga dados de abas já existentes.
 */
function setupPlanilha() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  _criarAba(ss, 'LEVANTAMENTOS', [
    'id_levantamento','id_inspetor','nome_inspetor','id_os','cliente',
    'timestamp_envio','total_itens','status_geral'
  ]);

  _criarAba(ss, 'ITENS', [
    'id_item','id_levantamento','id_os','cliente','id_vaso','tag_vaso',
    'nome_vaso','tipo_acessorio','id_item_catalogo','descricao_curta',
    'quantidade','escala_inicio','escala_fim','escala_unidade','id_kit',
    'componentes_kit','ajuste_kit','requer_calibracao','requer_lacre',
    'observacao','tipo','status','fornecedor','valor_cotado','prazo_entrega',
    'status_aprovacao_cliente','timestamp_criacao','timestamp_ultima_atualizacao',
    'origem'
  ]);

  _criarAba(ss, 'HISTORICO_STATUS', [
    'id_historico','id_item','status_anterior','status_novo',
    'responsavel','observacao','timestamp'
  ]);

  _criarAba(ss, 'CAT_INSPETORES', ['id','nome','pin_hash','ativo']);
  _criarAba(ss, 'CAT_OS',         ['id_os','cliente','data_inicio','data_fim','status']);
  _criarAba(ss, 'CAT_VASOS',      ['id_vaso','id_os','tag','nome','setor','pmta','categoria']);
  _criarAba(ss, 'CAT_MANOMETROS', [
    'id','tipo','fluido','caixa_mm','rosca','tipo_rosca','entrada',
    'escala_padrao','marca','modelo','desc_curta','requer_calibracao','ativo'
  ]);
  _criarAba(ss, 'CAT_KITS', [
    'id','nome','bitola','tipo_kit','componentes','inclui_formalizacao_rs','ativo'
  ]);

  _popularDadosDeTeste(ss);

  Logger.log('setupPlanilha() concluído. Verifique as abas na planilha.');
}

/**
 * Cria uma aba com os cabeçalhos especificados.
 * Se a aba já existir, não apaga — apenas verifica se o cabeçalho está presente.
 */
function _criarAba(ss, nome, cabecalhos) {
  var aba = ss.getSheetByName(nome);
  if (!aba) {
    aba = ss.insertSheet(nome);
    aba.getRange(1, 1, 1, cabecalhos.length).setValues([cabecalhos]);
    aba.getRange(1, 1, 1, cabecalhos.length)
       .setFontWeight('bold')
       .setBackground('#1F4E79')
       .setFontColor('#FFFFFF');
    Logger.log('Aba criada: ' + nome);
  } else {
    Logger.log('Aba já existe (mantida): ' + nome);
  }
}

/**
 * Popula dados de teste nas abas de catálogo.
 * Só insere se a aba tiver apenas o cabeçalho (1 linha).
 */
function _popularDadosDeTeste(ss) {

  // --- CAT_INSPETORES ---
  var abaInsp = ss.getSheetByName('CAT_INSPETORES');
  if (abaInsp.getLastRow() <= 1) {
    abaInsp.appendRow(['INS-001', 'João Silva',    _hashPin('1234'), 'true']);
    abaInsp.appendRow(['INS-002', 'Maria Oliveira', _hashPin('5678'), 'true']);
    Logger.log('CAT_INSPETORES populada.');
  }

  // --- CAT_OS ---
  var abaOS = ss.getSheetByName('CAT_OS');
  if (abaOS.getLastRow() <= 1) {
    abaOS.appendRow(['OS-2025-001', 'Gerdau - Divinópolis',        '2025-05-01', '2025-12-31', 'ativa']);
    abaOS.appendRow(['OS-2025-002', 'Farmax Ind. Farmacêutica',    '2025-06-01', '2025-12-31', 'ativa']);
    Logger.log('CAT_OS populada.');
  }

  // --- CAT_VASOS ---
  var abaVasos = ss.getSheetByName('CAT_VASOS');
  if (abaVasos.getLastRow() <= 1) {
    abaVasos.appendRow(['VAS-001', 'OS-2025-001', 'VP-01', 'Compressor de Ar',   'Utilidades', '10', 'I']);
    abaVasos.appendRow(['VAS-002', 'OS-2025-001', 'VP-02', 'Vaso Pulmão',        'Utilidades',  '8', 'II']);
    abaVasos.appendRow(['VAS-003', 'OS-2025-002', 'VP-01', 'Reator Principal',   'Produção',   '12', 'II']);
    abaVasos.appendRow(['VAS-004', 'OS-2025-002', 'VP-02', 'Vaso de Expansão',   'Utilidades',  '6', 'III']);
    Logger.log('CAT_VASOS populada.');
  }

  // --- CAT_MANOMETROS ---
  var abaMano = ss.getSheetByName('CAT_MANOMETROS');
  if (abaMano.getLastRow() <= 1) {
    abaMano.appendRow(['MAN-001','Manômetro','Glicerinado','63','1/4"','NPT','Reta','0-14 kgf/cm²','Pressure','','Manômetro Glicerinado 63mm · 1/4" NPT · Reta · 0-14 kgf/cm² · Pressure','false','true']);
    abaMano.appendRow(['MAN-002','Manômetro','Seco',      '100','1/4"','NPT','Reta','0-10 kgf/cm²','Wika',    '','Manômetro Seco 100mm · 1/4" NPT · Reta · 0-10 kgf/cm² · Wika',          'false','true']);
    abaMano.appendRow(['MAN-003','Manômetro','Glicerinado','63','1/2"','NPT','Reta','0-21 kgf/cm²','Pressure','','Manômetro Glicerinado 63mm · 1/2" NPT · Reta · 0-21 kgf/cm² · Pressure','false','true']);
    abaMano.appendRow(['MAN-004','Vacuômetro','Glicerinado','63','1/4"','NPT','Reta','-1-0 kgf/cm²','Wika',  '','Vacuômetro Glicerinado 63mm · 1/4" NPT · Reta · -1-0 kgf/cm² · Wika',   'false','true']);
    abaMano.appendRow(['MAN-005','Manômetro','Seco',      '100','1/2"','NPT','Angular','0-14 kgf/cm²','Genebre','','Manômetro Seco 100mm · 1/2" NPT · Angular · 0-14 kgf/cm² · Genebre','true','true']);
    Logger.log('CAT_MANOMETROS populada.');
  }

  // --- CAT_KITS ---
  var abaKits = ss.getSheetByName('CAT_KITS');
  if (abaKits.getLastRow() <= 1) {
    var kitSimples = JSON.stringify([
      {descricao:'Niple 1/4" NPT', qtd:1},
      {descricao:'Joelho 1/4" NPT', qtd:1}
    ]);
    var kitDCBI = JSON.stringify([
      {descricao:'Válvula tripartida 1/4"', qtd:1},
      {descricao:'Niple 1/4" NPT', qtd:2},
      {descricao:'Joelho 1/4" NPT', qtd:1},
      {descricao:'Lacre', qtd:1},
      {descricao:'Plaquinha de advertência PVC', qtd:1}
    ]);
    abaKits.appendRow(['KIT-001','Kit instalação simples 1/4"','1/4"','simples', kitSimples, 'false','true']);
    abaKits.appendRow(['KIT-002','Kit DCBI 1/4"',             '1/4"','dcbi',    kitDCBI,    'true', 'true']);
    Logger.log('CAT_KITS populada.');
  }
}


// =============================================================================
// ROTEADOR PRINCIPAL
// =============================================================================

/**
 * Ponto de entrada para requisições GET.
 * Roteia pelo parâmetro "action".
 */
function doGet(e) {
  try {
    var action = e.parameter.action;
    var params = e.parameter;
    var resultado;

    switch (action) {
      case 'validarPIN':             resultado = validarPIN(params);             break;
      case 'getOS':                  resultado = getOS(params);                  break;
      case 'getVasosByOS':           resultado = getVasosByOS(params);           break;
      case 'getCatalogos':           resultado = getCatalogos(params);           break;
      case 'getKitsByBitola':        resultado = getKitsByBitola(params);        break;
      case 'getLevantamentosByCliente': resultado = getLevantamentosByCliente(params); break;
      case 'getItensByLevantamento': resultado = getItensByLevantamento(params); break;
      case 'getCatalogoByTipo':     resultado = getCatalogoByTipo(params);     break;
      default:
        resultado = _erro('ACAO_INVALIDA', 'action não reconhecida: ' + action);
    }

    return _resposta(resultado);
  } catch (err) {
    return _resposta(_erro('ERRO_INTERNO', err.message));
  }
}

/**
 * Ponto de entrada para requisições POST.
 * Roteia pelo campo "action" no body JSON.
 */
function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);
    var action = body.action;
    var resultado;

    switch (action) {
      case 'enviarLevantamento':  resultado = enviarLevantamento(body);  break;
      case 'atualizarStatusItem':  resultado = atualizarStatusItem(body);  break;
      case 'salvarItemCatalogo':   resultado = salvarItemCatalogo(body);   break;
      case 'toggleAtivoItem':      resultado = toggleAtivoItem(body);      break;
      case 'atualizarDadosAdministrativosItem': resultado = atualizarDadosAdministrativosItem(body); break;
      default:
        resultado = _erro('ACAO_INVALIDA', 'action não reconhecida: ' + action);
    }

    return _resposta(resultado);
  } catch (err) {
    return _resposta(_erro('ERRO_INTERNO', err.message));
  }
}


// =============================================================================
// ENDPOINTS GET
// =============================================================================

/**
 * Valida o PIN do inspetor contra a planilha.
 * O PIN nunca é armazenado em texto puro — sempre comparado como hash.
 * Params: pin (string de 4 dígitos)
 */
function validarPIN(params) {
  var pin = params.pin;
  if (!pin) return _erro('CAMPO_OBRIGATORIO', 'Parâmetro pin é obrigatório.');

  var hashInformado = _hashPin(pin);
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var aba = ss.getSheetByName('CAT_INSPETORES');
  var dados = aba.getDataRange().getValues();

  // Linha 0 é cabeçalho
  for (var i = 1; i < dados.length; i++) {
    var id       = dados[i][0];
    var nome     = dados[i][1];
    var hashSalvo = dados[i][2];
    var ativo    = String(dados[i][3]).toLowerCase();

    if (hashSalvo === hashInformado && ativo === 'true') {
      return { status: 'ok', valido: true, id_inspetor: id, nome: nome };
    }
  }

  return { status: 'ok', valido: false };
}

/**
 * Retorna todas as OS com status "ativa".
 */
function getOS() {
  var ss  = SpreadsheetApp.getActiveSpreadsheet();
  var aba = ss.getSheetByName('CAT_OS');
  var dados = aba.getDataRange().getValues();
  var lista = [];

  for (var i = 1; i < dados.length; i++) {
    if (String(dados[i][4]).toLowerCase() === 'ativa') {
      // Conta vasos vinculados a esta OS
      var totalVasos = _contarVasosDaOS(ss, dados[i][0]);
      lista.push({
        id_os:       dados[i][0],
        cliente:     dados[i][1],
        data_inicio: dados[i][2],
        data_fim:    dados[i][3],
        status:      dados[i][4],
        total_vasos: totalVasos
      });
    }
  }

  return { status: 'ok', os: lista };
}

/**
 * Retorna vasos de uma OS específica.
 * Params: os (id_os)
 */
function getVasosByOS(params) {
  var idOS = params.os;
  if (!idOS) return _erro('CAMPO_OBRIGATORIO', 'Parâmetro os é obrigatório.');

  var ss  = SpreadsheetApp.getActiveSpreadsheet();
  var aba = ss.getSheetByName('CAT_VASOS');
  var dados = aba.getDataRange().getValues();
  var lista = [];

  for (var i = 1; i < dados.length; i++) {
    if (dados[i][1] === idOS) {
      lista.push({
        id_vaso:   dados[i][0],
        id_os:     dados[i][1],
        tag:       dados[i][2],
        nome:      dados[i][3],
        setor:     dados[i][4],
        pmta:      dados[i][5],
        categoria: dados[i][6]
      });
    }
  }

  return { status: 'ok', vasos: lista };
}

/**
 * Retorna todos os catálogos ativos em um único payload.
 * Usado pelo FieldTap na sincronização inicial.
 */
function getCatalogos() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();

  return {
    status:      'ok',
    manometros:  _lerCatalogo(ss, 'CAT_MANOMETROS'),
    kits:        _lerCatalogo(ss, 'CAT_KITS'),
    inspetores:  _lerInspetores(ss)
  };
}

/**
 * Retorna kits ativos filtrados por bitola.
 * Params: bitola (ex: 1/4")
 */
function getKitsByBitola(params) {
  var bitola = params.bitola;
  if (!bitola) return _erro('CAMPO_OBRIGATORIO', 'Parâmetro bitola é obrigatório.');

  var ss  = SpreadsheetApp.getActiveSpreadsheet();
  var aba = ss.getSheetByName('CAT_KITS');
  var dados = aba.getDataRange().getValues();
  var lista = [];

  for (var i = 1; i < dados.length; i++) {
    var ativo = String(dados[i][6]).toLowerCase();
    if (dados[i][2] === bitola && ativo === 'true') {
      lista.push({
        id:                    dados[i][0],
        nome:                  dados[i][1],
        bitola:                dados[i][2],
        tipo_kit:              dados[i][3],
        componentes:           _parseJSON(dados[i][4]),
        inclui_formalizacao_rs: dados[i][5]
      });
    }
  }

  return { status: 'ok', kits: lista };
}

/**
 * Retorna levantamentos agrupados com resumo de status dos itens.
 */
function getLevantamentosByCliente() {
  var ss  = SpreadsheetApp.getActiveSpreadsheet();
  var abaLev = ss.getSheetByName('LEVANTAMENTOS');
  var dados  = abaLev.getDataRange().getValues();
  var lista  = [];

  for (var i = 1; i < dados.length; i++) {
    var idLev = dados[i][0];
    var resumo = _resumoStatusDoLevantamento(ss, idLev);

    lista.push({
      id_levantamento: idLev,
      id_inspetor:     dados[i][1],
      nome_inspetor:   dados[i][2],
      id_os:           dados[i][3],
      cliente:         dados[i][4],
      timestamp_envio: dados[i][5],
      total_itens:     dados[i][6],
      status_geral:    dados[i][7],
      resumo_status:   resumo
    });
  }

  return { status: 'ok', levantamentos: lista };
}

/**
 * Retorna todos os itens de um levantamento específico.
 * Params: id_levantamento
 */
function getItensByLevantamento(params) {
  var idLev = params.id_levantamento;
  if (!idLev) return _erro('CAMPO_OBRIGATORIO', 'Parâmetro id_levantamento é obrigatório.');

  var ss  = SpreadsheetApp.getActiveSpreadsheet();
  var aba = ss.getSheetByName('ITENS');
  var dados = aba.getDataRange().getValues();
  var cab   = dados[0]; // cabeçalho
  var lista = [];

  for (var i = 1; i < dados.length; i++) {
    if (dados[i][1] === idLev) {
      lista.push(_linhaParaObjeto(cab, dados[i]));
    }
  }

  return { status: 'ok', itens: lista };
}


/**
 * Retorna todos os itens (ativos e inativos) de um catálogo para gestão no TapParts.
 * Params: tipo (manometros | kits)
 */
function getCatalogoByTipo(params) {
  var tipo = params.tipo;
  if (!tipo) return _erro('CAMPO_OBRIGATORIO', 'Parâmetro tipo é obrigatório.');

  var nomeAba = _abaParaTipo(tipo);
  if (!nomeAba) return _erro('TIPO_INVALIDO', 'tipo deve ser "manometros" ou "kits".');

  var ss   = SpreadsheetApp.getActiveSpreadsheet();
  var aba  = ss.getSheetByName(nomeAba);
  var dados = aba.getDataRange().getValues();
  var cab   = dados[0];
  var lista = [];

  for (var i = 1; i < dados.length; i++) {
    var obj = _linhaParaObjeto(cab, dados[i]);
    if (tipo === 'kits' && obj.componentes) obj.componentes = _parseJSON(obj.componentes);
    lista.push(obj);
  }

  return { status: 'ok', tipo: tipo, itens: lista };
}

/**
 * Cria ou atualiza um item de catálogo.
 * Body: { action, tipo, dados_item: { id?, ...campos } }
 * Para manômetros: desc_curta é SEMPRE gerado dos campos atuais (nunca cacheado).
 */
function salvarItemCatalogo(body) {
  var lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    if (!body.tipo)        return _erro('CAMPO_OBRIGATORIO', 'tipo é obrigatório.');
    if (!body.dados_item)  return _erro('CAMPO_OBRIGATORIO', 'dados_item é obrigatório.');

    var nomeAba = _abaParaTipo(body.tipo);
    if (!nomeAba) return _erro('TIPO_INVALIDO', 'tipo deve ser "manometros" ou "kits".');

    var ss   = SpreadsheetApp.getActiveSpreadsheet();
    var aba  = ss.getSheetByName(nomeAba);
    var dados = aba.getDataRange().getValues();
    var cab   = dados[0];
    var di    = body.dados_item;

    var descCurtaGerada = '';
    if (body.tipo === 'manometros') {
      descCurtaGerada = _gerarDescCurtaMano(di);
      di.desc_curta   = descCurtaGerada;
    }

    var id   = String(di.id || '').trim();
    var modo;

    if (!id) {
      // INSERT
      var prefixo = body.tipo === 'manometros' ? 'MAN' : 'KIT';
      id = _gerarIdCatalogo(ss, nomeAba, prefixo);
      di.id = id;
      modo = 'criado';

      var novaLinha = cab.map(function(col) {
        var v = di[col];
        if (col === 'componentes' && Array.isArray(v)) return JSON.stringify(v);
        return v !== undefined ? v : '';
      });
      aba.appendRow(novaLinha);

    } else {
      // UPDATE — localiza linha pelo ID
      var rowIndex = -1;
      for (var i = 1; i < dados.length; i++) {
        if (String(dados[i][0]) === id) { rowIndex = i + 1; break; }
      }
      if (rowIndex === -1) return _erro('ITEM_NAO_ENCONTRADO', 'Item não encontrado: ' + id);
      modo = 'atualizado';

      var linhaAtual = dados[rowIndex - 1];
      var linhaAtualizada = cab.map(function(col, idx) {
        if (col === 'id') return id;
        var v = di[col];
        if (v !== undefined) {
          if (col === 'componentes' && Array.isArray(v)) return JSON.stringify(v);
          return v;
        }
        return linhaAtual[idx];
      });
      aba.getRange(rowIndex, 1, 1, cab.length).setValues([linhaAtualizada]);
    }

    SpreadsheetApp.flush();

    return { status: 'ok', id: id, desc_curta_gerada: descCurtaGerada, modo: modo };

  } finally {
    lock.releaseLock();
  }
}

/**
 * Ativa ou inativa um item de catálogo.
 * Body: { action, tipo, id, ativo } — ativo: 'true' ou 'false' como string
 */
function toggleAtivoItem(body) {
  if (!body.tipo) return _erro('CAMPO_OBRIGATORIO', 'tipo é obrigatório.');
  if (!body.id)   return _erro('CAMPO_OBRIGATORIO', 'id é obrigatório.');
  if (body.ativo === undefined) return _erro('CAMPO_OBRIGATORIO', 'ativo é obrigatório.');

  var nomeAba = _abaParaTipo(body.tipo);
  if (!nomeAba) return _erro('TIPO_INVALIDO', 'tipo deve ser "manometros" ou "kits".');

  var ss   = SpreadsheetApp.getActiveSpreadsheet();
  var aba  = ss.getSheetByName(nomeAba);
  var dados = aba.getDataRange().getValues();
  var cab   = dados[0];
  var colAtivo = cab.indexOf('ativo');

  for (var i = 1; i < dados.length; i++) {
    if (String(dados[i][0]) === String(body.id)) {
      aba.getRange(i + 1, colAtivo + 1).setValue(String(body.ativo));
      SpreadsheetApp.flush();
      return { status: 'ok', id: body.id, ativo: String(body.ativo) };
    }
  }

  return _erro('ITEM_NAO_ENCONTRADO', 'Item não encontrado: ' + body.id);
}


// =============================================================================
// ENDPOINTS POST
// =============================================================================

/**
 * Recebe levantamento completo do FieldTap e grava na planilha.
 * Gera id_levantamento e id_item com LockService para evitar duplicatas.
 * Body: { action, id_inspetor, id_os, cliente, timestamp, itens:[] }
 */
function enviarLevantamento(body) {
  var lock = LockService.getScriptLock();

  try {
    lock.waitLock(15000); // aguarda até 15s para obter o lock

    var ss = SpreadsheetApp.getActiveSpreadsheet();

    // Validações básicas
    if (!body.id_inspetor) return _erro('CAMPO_OBRIGATORIO', 'id_inspetor é obrigatório.');
    if (!body.id_os)       return _erro('CAMPO_OBRIGATORIO', 'id_os é obrigatório.');
    if (!body.cliente)     return _erro('CAMPO_OBRIGATORIO', 'cliente é obrigatório.');
    if (!body.itens || !body.itens.length) return _erro('CAMPO_OBRIGATORIO', 'itens não pode ser vazio.');

    // Busca nome do inspetor
    var nomeInspetor = _buscarNomeInspetor(ss, body.id_inspetor);

    // Gera ID do levantamento
    var idLevantamento = _gerarId(ss, 'LEVANTAMENTOS', 'LEV');
    var timestamp = body.timestamp || new Date().toISOString();

    // Grava levantamento
    var abaLev = ss.getSheetByName('LEVANTAMENTOS');
    abaLev.appendRow([
      idLevantamento,
      body.id_inspetor,
      nomeInspetor,
      body.id_os,
      body.cliente,
      timestamp,
      body.itens.length,
      'aguardando_cotacao'
    ]);

    // Grava cada item
    var abaItens = ss.getSheetByName('ITENS');
    var itensCriados = [];

    for (var i = 0; i < body.itens.length; i++) {
      var item = body.itens[i];
      var idItem = _gerarId(ss, 'ITENS', 'ACE');
      var agora  = new Date().toISOString();

      abaItens.appendRow([
        idItem,                                    // id_item
        idLevantamento,                            // id_levantamento
        body.id_os,                                // id_os
        body.cliente,                              // cliente
        item.id_vaso        || '',                 // id_vaso
        item.tag_vaso       || '',                 // tag_vaso
        item.nome_vaso      || '',                 // nome_vaso
        item.tipo_acessorio || '',                 // tipo_acessorio
        item.id_item_catalogo || '',               // id_item_catalogo
        item.descricao_curta  || '',               // descricao_curta
        item.quantidade     || 1,                  // quantidade
        item.escala_inicio  || '',                 // escala_inicio
        item.escala_fim     || '',                 // escala_fim
        item.escala_unidade || '',                 // escala_unidade
        item.id_kit         || '',                 // id_kit
        item.componentes_kit ? JSON.stringify(item.componentes_kit) : '', // componentes_kit
        item.ajuste_kit     || '',                 // ajuste_kit
        item.requer_calibracao || 'false',         // requer_calibracao
        item.requer_lacre   || 'false',            // requer_lacre
        item.observacao     || '',                 // observacao
        item.tipo           || 'catalogo',         // tipo
        'aguardando_cotacao',                      // status
        '',                                        // fornecedor
        '',                                        // valor_cotado
        '',                                        // prazo_entrega
        'pendente',                                // status_aprovacao_cliente
        agora,                                     // timestamp_criacao
        agora,                                     // timestamp_ultima_atualizacao
        'fieldtap'                                 // origem
      ]);

      itensCriados.push({ id_item: idItem, descricao_curta: item.descricao_curta || '' });
    }

    SpreadsheetApp.flush();

    return {
      status: 'ok',
      id_levantamento: idLevantamento,
      itens_criados: itensCriados
    };

  } finally {
    lock.releaseLock();
  }
}

/**
 * Atualiza o status de um item e registra o histórico.
 * Body: { action, id_item, novo_status, responsavel, observacao }
 */
function atualizarStatusItem(body) {
  var lock = LockService.getScriptLock();

  try {
    lock.waitLock(10000);

    if (!body.id_item)     return _erro('CAMPO_OBRIGATORIO', 'id_item é obrigatório.');
    if (!body.novo_status) return _erro('CAMPO_OBRIGATORIO', 'novo_status é obrigatório.');

    var ss       = SpreadsheetApp.getActiveSpreadsheet();
    var abaItens = ss.getSheetByName('ITENS');
    var dados    = abaItens.getDataRange().getValues();
    var cab      = dados[0];
    var colStatus = cab.indexOf('status');
    var colUltimaAtualizacao = cab.indexOf('timestamp_ultima_atualizacao');
    var linhaEncontrada = -1;
    var statusAnterior  = '';

    for (var i = 1; i < dados.length; i++) {
      if (dados[i][0] === body.id_item) {
        linhaEncontrada = i + 1; // +1 porque getRange é 1-indexed
        statusAnterior  = dados[i][colStatus];
        break;
      }
    }

    if (linhaEncontrada === -1) {
      return _erro('ITEM_NAO_ENCONTRADO', 'Item não encontrado: ' + body.id_item);
    }

    var agora = new Date().toISOString();

    // Atualiza status e timestamp na aba ITENS
    abaItens.getRange(linhaEncontrada, colStatus + 1).setValue(body.novo_status);
    abaItens.getRange(linhaEncontrada, colUltimaAtualizacao + 1).setValue(agora);

    // Registra no histórico
    var abaHist   = ss.getSheetByName('HISTORICO_STATUS');
    var idHist    = _gerarIdHistorico(ss);

    abaHist.appendRow([
      idHist,
      body.id_item,
      statusAnterior,
      body.novo_status,
      body.responsavel || '',
      body.observacao  || '',
      agora
    ]);

    SpreadsheetApp.flush();

    return { status: 'ok', id_item: body.id_item, novo_status: body.novo_status, timestamp: agora };

  } finally {
    lock.releaseLock();
  }
}



/**
 * Atualiza campos administrativos de um item e registra histórico simples.
 * Body: { action, id_item, fornecedor, valor_cotado, prazo_entrega, status_aprovacao_cliente, responsavel, observacao }
 */
function atualizarDadosAdministrativosItem(body) {
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(10000);
    if (!body.id_item) return _erro('CAMPO_OBRIGATORIO', 'id_item é obrigatório.');

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var abaItens = ss.getSheetByName('ITENS');
    var dados = abaItens.getDataRange().getValues();
    var cab = dados[0];
    var idx = { status: cab.indexOf('status'), fornecedor: cab.indexOf('fornecedor'), valor: cab.indexOf('valor_cotado'), prazo: cab.indexOf('prazo_entrega'), aprov: cab.indexOf('status_aprovacao_cliente'), ts: cab.indexOf('timestamp_ultima_atualizacao') };
    var row = -1, statusAtual = '';
    for (var i = 1; i < dados.length; i++) {
      if (String(dados[i][0]) === String(body.id_item)) { row = i + 1; statusAtual = dados[i][idx.status]; break; }
    }
    if (row === -1) return _erro('ITEM_NAO_ENCONTRADO', 'Item não encontrado: ' + body.id_item);

    if (body.fornecedor !== undefined && idx.fornecedor !== -1) abaItens.getRange(row, idx.fornecedor + 1).setValue(body.fornecedor);
    if (body.valor_cotado !== undefined && idx.valor !== -1) abaItens.getRange(row, idx.valor + 1).setValue(body.valor_cotado);
    if (body.prazo_entrega !== undefined && idx.prazo !== -1) abaItens.getRange(row, idx.prazo + 1).setValue(body.prazo_entrega);
    if (body.status_aprovacao_cliente !== undefined && idx.aprov !== -1) abaItens.getRange(row, idx.aprov + 1).setValue(body.status_aprovacao_cliente);
    var agora = new Date().toISOString();
    if (idx.ts !== -1) abaItens.getRange(row, idx.ts + 1).setValue(agora);

    var abaHist = ss.getSheetByName('HISTORICO_STATUS');
    abaHist.appendRow([_gerarIdHistorico(ss), body.id_item, statusAtual, 'dados_administrativos_atualizados', body.responsavel || '', body.observacao || '', agora]);
    SpreadsheetApp.flush();
    return { status: 'ok', id_item: body.id_item, timestamp: agora };
  } finally { lock.releaseLock(); }
}

// =============================================================================
// FUNÇÕES AUXILIARES
// =============================================================================

/**
 * Gera ID sequencial no formato PREFIXO-ANO-NNN.
 * Exemplos: LEV-2026-001, ACE-2026-042
 * Thread-safe via LockService (lock já adquirido pelo chamador).
 */
function _gerarId(ss, nomeAba, prefixo) {
  var ano = new Date().getFullYear();
  var aba = ss.getSheetByName(nomeAba);
  var ultimo = 0;
  var padrão = new RegExp('^' + prefixo + '-' + ano + '-(\\d+)$');

  if (aba.getLastRow() > 1) {
    var ids = aba.getRange(2, 1, aba.getLastRow() - 1, 1).getValues();
    for (var i = 0; i < ids.length; i++) {
      var match = String(ids[i][0]).match(padrão);
      if (match) {
        var num = parseInt(match[1], 10);
        if (num > ultimo) ultimo = num;
      }
    }
  }

  var proximo = String(ultimo + 1).padStart(3, '0');
  return prefixo + '-' + ano + '-' + proximo;
}

/**
 * Gera ID para o histórico de status.
 */
function _gerarIdHistorico(ss) {
  var aba   = ss.getSheetByName('HISTORICO_STATUS');
  var total = Math.max(aba.getLastRow() - 1, 0);
  return 'HST-' + String(total + 1).padStart(5, '0');
}

/**
 * Calcula hash simples do PIN para não armazenar em texto puro.
 * Usa SHA-256 via Utilities.computeDigest do GAS.
 */
function _hashPin(pin) {
  var bytes  = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(pin));
  var hash   = bytes.map(function(b) {
    return ('0' + (b < 0 ? b + 256 : b).toString(16)).slice(-2);
  }).join('');
  return hash;
}

/**
 * Lê um catálogo de aba e retorna apenas itens com ativo = 'true'.
 */
function _lerCatalogo(ss, nomeAba) {
  var aba   = ss.getSheetByName(nomeAba);
  var dados = aba.getDataRange().getValues();
  var cab   = dados[0];
  var lista = [];

  for (var i = 1; i < dados.length; i++) {
    var obj = _linhaParaObjeto(cab, dados[i]);
    if (String(obj.ativo).toLowerCase() === 'true') {
      // Faz parse de componentes JSON se existir
      if (obj.componentes) obj.componentes = _parseJSON(obj.componentes);
      lista.push(obj);
    }
  }

  return lista;
}

/**
 * Retorna inspetores ativos (sem expor pin_hash).
 */
function _lerInspetores(ss) {
  var aba   = ss.getSheetByName('CAT_INSPETORES');
  var dados = aba.getDataRange().getValues();
  var lista = [];

  for (var i = 1; i < dados.length; i++) {
    if (String(dados[i][3]).toLowerCase() === 'true') {
      lista.push({ id: dados[i][0], nome: dados[i][1] });
      // pin_hash intencionalmente omitido da resposta pública
    }
  }

  return lista;
}

/**
 * Converte uma linha de dados em objeto usando o cabeçalho como chave.
 */
function _linhaParaObjeto(cabecalho, linha) {
  var obj = {};
  for (var i = 0; i < cabecalho.length; i++) {
    obj[cabecalho[i]] = linha[i];
  }
  return obj;
}

/**
 * Conta quantos vasos estão vinculados a uma OS.
 */
function _contarVasosDaOS(ss, idOS) {
  var aba   = ss.getSheetByName('CAT_VASOS');
  var dados = aba.getDataRange().getValues();
  var count = 0;
  for (var i = 1; i < dados.length; i++) {
    if (dados[i][1] === idOS) count++;
  }
  return count;
}

/**
 * Busca o nome do inspetor pelo ID.
 */
function _buscarNomeInspetor(ss, idInspetor) {
  var aba   = ss.getSheetByName('CAT_INSPETORES');
  var dados = aba.getDataRange().getValues();
  for (var i = 1; i < dados.length; i++) {
    if (dados[i][0] === idInspetor) return dados[i][1];
  }
  return 'Inspetor não identificado';
}

/**
 * Calcula o resumo de status dos itens de um levantamento.
 * Retorna contagem por status para exibição no card do TapParts.
 */
function _resumoStatusDoLevantamento(ss, idLevantamento) {
  var aba   = ss.getSheetByName('ITENS');
  var dados = aba.getDataRange().getValues();
  var cab   = dados[0];
  var colLev    = cab.indexOf('id_levantamento');
  var colStatus = cab.indexOf('status');
  var resumo = {};

  for (var i = 1; i < dados.length; i++) {
    if (dados[i][colLev] === idLevantamento) {
      var s = dados[i][colStatus] || 'sem_status';
      resumo[s] = (resumo[s] || 0) + 1;
    }
  }

  return resumo;
}

/**
 * Mapeia tipo de catálogo para nome de aba.
 */
function _abaParaTipo(tipo) {
  if (tipo === 'manometros') return 'CAT_MANOMETROS';
  if (tipo === 'kits')       return 'CAT_KITS';
  return null;
}

/**
 * Gera ID sequencial no formato PREFIX-NNN (sem ano) para catálogos.
 * Exemplos: MAN-006, KIT-003
 */
function _gerarIdCatalogo(ss, nomeAba, prefixo) {
  var aba   = ss.getSheetByName(nomeAba);
  var ultimo = 0;
  var padrao = new RegExp('^' + prefixo + '-(\\d+)$');

  if (aba.getLastRow() > 1) {
    var ids = aba.getRange(2, 1, aba.getLastRow() - 1, 1).getValues();
    for (var i = 0; i < ids.length; i++) {
      var match = String(ids[i][0]).match(padrao);
      if (match) {
        var num = parseInt(match[1], 10);
        if (num > ultimo) ultimo = num;
      }
    }
  }

  return prefixo + '-' + String(ultimo + 1).padStart(3, '0');
}

/**
 * Gera desc_curta para manômetro a partir dos campos atuais.
 * SEMPRE usa os valores recebidos — nunca os da planilha.
 * Formato: "Manômetro Glicerinado 63mm · 1/4" NPT · Reta · 0-14 kgf/cm² · Pressure"
 */
function _gerarDescCurtaMano(d) {
  var partes = [];
  var p1 = [d.tipo, d.fluido, d.caixa_mm ? d.caixa_mm + 'mm' : ''].filter(Boolean).join(' ');
  if (p1.trim()) partes.push(p1.trim());
  var p2 = [d.rosca, d.tipo_rosca].filter(Boolean).join(' ');
  if (p2.trim()) partes.push(p2.trim());
  if (d.entrada   && String(d.entrada).trim())   partes.push(String(d.entrada).trim());
  if (d.escala_padrao && String(d.escala_padrao).trim()) partes.push(String(d.escala_padrao).trim());
  if (d.marca     && String(d.marca).trim())     partes.push(String(d.marca).trim());
  return partes.join(' · ');
}

/**
 * Tenta fazer parse de JSON string. Retorna o valor original se não for JSON.
 */
function _parseJSON(valor) {
  if (!valor || typeof valor !== 'string') return valor;
  try { return JSON.parse(valor); } catch(e) { return valor; }
}

/**
 * Monta resposta padronizada com headers CORS.
 */
function _resposta(dados) {
  return ContentService
    .createTextOutput(JSON.stringify(dados))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Monta objeto de erro padronizado.
 */
function _erro(codigo, mensagem) {
  return { status: 'erro', codigo: codigo, mensagem: mensagem };
}

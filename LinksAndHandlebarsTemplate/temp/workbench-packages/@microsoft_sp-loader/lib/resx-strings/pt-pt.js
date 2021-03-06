define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Não é possível carregar a aplicação nesta página. Utilize o botão Retroceder do browser para tentar novamente. Se o problema persistir, contacte o administrador do site e forneça-lhe as informações em Detalhes Técnicos.",
      "platformFailedToLoadError": "Falha ao carregar a plataforma. ID: \"{0}\", nome: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Falha ao carregar a plataforma. ID: \"{0}\", nome: \"{1}\".\r\nErro: {2}",
      "applicationFailedToInitializeError": "Erro ao inicializar a aplicação. Erro: {0}",
      "invalidPreloadedDataError": "Os dados pré-carregados são inválidos.",
      "manifestNotFoundByIdError": "O manifesto não foi encontrado para o componente com o ID \"{0}\".",
      "manifestNotFoundError": "Não foi possível encontrar o manifesto para o componente com o ID \"{0}\" e a versão \"{1}\".",
      "systemConfigDisabledError": "System.config() não é suportado. Utilize um manifesto para especificar a configuração.",
      "loadComponentLog": "A carregar o componente \"{0}\" ({1}).",
      "loadComponentEndLog": "Componente \"{0}\" ({1}) carregado.",
      "loadComponentRetryLog": "A carregar o componente \"{0}\" ({1}). Tentativa {2} de {3}.",
      "loadComponentError": "Falha ao carregar o componente \"{0}\" ({1}).\r\nErro original: {2}",
      "loadComponentMaxRetriesError": "Foram efetuadas {2} tentativas para carregar o componente \"{0}\" ({1}), mas não tiveram êxito.",
      "loadComponentDependencyError": "Falha ao carregar a dependência \"{0}\" do componente \"{1}\" ({2}).\r\nErro original: {3}",
      "loadComponentDependencyFailoverPathError": "Falha ao carregar a dependência do componente \"{0}\" com o caminho de ativação pós-falha \"{1}\" do componente \"{2}\" ({3}).\r\nErro original: {4}",
      "loadPathDependencyLog": "A carregar a dependência de caminho \"{0}\" do componente \"{1}\" ({2})",
      "loadPathDependencyError": "Falha ao carregar a dependência de caminho \"{0}\" do componente \"{1}\" ({2}).\r\nErro original: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Falha ao carregar a dependência de caminho \"{0}\" do componente \"{1}\" ({2}) devido a outra dependência que não foi possível carregar.",
      "loadEntryPointError": "Falha ao carregar o ponto de entrada do componente \"{0}\" ({1}).\r\nErro original: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() devolveu um objeto vazio para o componente \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() devolveu um objeto com uma propriedade predefinida vazia para o componente \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "O ponto de entrada do componente \"{0}\" ({1}) tem uma dependência em \"{2}\" que não está declarada no manifesto.",
      "loadScriptWithStringError": "A função loadScript não permite uma cadeia como segundo parâmetro. Como alternativa, utilize a função ILoadScriptOptions.",
      "tooManyManifestsError": "Foram encontrados {0} manifestos (versões {1}) para o componente \"{2}\".",
      "tooManyCompatibleVersionsError": "Foram encontradas {0} versões compatíveis ({1}) para a versão \"{3}\" do componente \"{2}\".",
      "tooManyComponentsError": "Foram encontrados demasiados componentes para o ID \"{0}\".",
      "noComponentFoundError": "Não foi encontrado um componente para o ID \"{0}\".",
      "deleteComponentLog": "A eliminar o componente \"{0}\" com a versão \"{1}\" do arquivo.",
      "browserNotSupportedError": "Esta versão do browser não é suportada.\r\nAtualize o browser para a versão mais recente.",
      "ie9OrOlderNotSupportedError": "Esta página não suporta versões do Internet Explorer anteriores à versão 10. Atualize o seu browser.",
      "firefox43OrOlderNotSupportedError": "Esta página não suporta versões do Mozilla Firefox anteriores à versão 44. Atualize o seu browser.",
      "resourceNotFoundError": "O recurso \"{0}\" não foi encontrado na configuração do carregador do manifesto para o componente \"{1}\" ({2}).",
      "noFailoverPathError": "Não é possível chamar resolveAddress() num componente sem um caminho de ativação pós-falha",
      "urlStatusLocalhostFileNotFoundError": "Falha ao carregar o URL \"{3}\" do recurso \"{2}\" no componente \"{0}\" ({1}). O ficheiro não foi encontrado no servidor.\r\nCertifique-se de que está a executar o \"gulp serve\".",
      "urlStatusFileNotFoundError": "Falha ao carregar o URL \"{3}\" do recurso \"{2}\" no componente \"{0}\" ({1}). O ficheiro não foi encontrado no servidor.",
      "urlStatusForbiddenError": "Falha ao carregar o URL \"{3}\" do recurso \"{2}\" no componente \"{0}\" ({1}). O acesso ao ficheiro é proibido.",
      "urlStatusClientErrorError": "Falha ao carregar o URL \"{3}\" do recurso \"{2}\" no componente \"{0}\" ({1}). Ocorreu um erro ao pedir o ficheiro.",
      "urlStatusServerErrorError": "Falha ao carregar o URL \"{3}\" do recurso \"{2}\" no componente \"{0}\" ({1}). Ocorreu um problema no servidor.",
      "urlStatusLocalhostNetworkErrorError": "Falha ao carregar o URL \"{3}\" do recurso \"{2}\" no componente \"{0}\" ({1}). Ocorreu um problema de rede.\r\nCertifique-se de que está a executar o \"gulp serve\" e que executou o \"gulp trust-dev-cert\".",
      "urlStatusHttpsNetworkErrorError": "Falha ao carregar o URL \"{3}\" do recurso \"{2}\" no componente \"{0}\" ({1}). Ocorreu um problema de rede.\r\nIsto poderá dever-se a um problema com um certificado HTTPS. Certifique-se de que tem o certificado correto.",
      "urlStatusNetworkErrorError": "Falha ao carregar o URL \"{3}\" do recurso \"{2}\" no componente \"{0}\" ({1}). Ocorreu um problema de rede.",
      "urlStatusUndefinedError": "Falha ao carregar o URL \"{3}\" do recurso \"{2}\" no componente \"{0}\" ({1}) devido a problemas desconhecidos.",
      "isUndefinedValidateError": "O valor de \"{0}\" não pode ser indefinido",
      "failedToCreateGlobalVariableError": "Falha ao criar a variável global \"{0}\" do script \"{1}\"",
      "dependencyLoadError": "Falha ao carregar o módulo \"{0}\" porque a dependência {1} não foi carregada",
      "missingPathDependencyError": "A dependência de caminho \"{0}\" está em falta no componente \"{1}\" ({2}). Dependências de caminho existentes: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Erro ao carregar o script de depuração. Certifique-se de que o servidor está em execução e que o URL do parâmetro \"{0}\" está correto.",
      "errorLoadingDebugScriptHTTP": "Erro ao carregar o script de depuração. Certifique-se de que o servidor está em execução, que o URL do parâmetro \"{0}\" está correto e que é permitido carregar scripts inseguros. Pondere também utilizar um certificado de desenvolvimento e apresentar os scripts de depuração através de HTTPS.",
      "errorLoadingDebugScriptMalformed": "Erro ao carregar o script de depuração. O URL de depuração ({0}) parece estar incorreto.",
      "errorLoadingDebugScriptUnknown": "Erro desconhecido ao carregar um script de depuração.",
      "errorLoadingDebugLoaderTitle": "Erro ao carregar o carregador de depuração.",
      "errorLoadingDebugManifestTitle": "Erro ao carregar os manifestos de depuração.",
      "errorLoadingUnknownTitle": "Erro ao carregar os scripts de depuração."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Função de inicializador ou componente em falta.",
      "closeDeveloperToolsAriaLabel": "Fechar as ferramentas de programador."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Aviso!",
      "warningLine1": "A utilização desta ferramenta expõe-no a potenciais ameaças de segurança que podem fazer com que outros utilizadores obtenham acesso aos seus dados pessoais do Office 365 (documentos, e-mails, conversações, entre outros). Antes de continuar, certifique-se de que confia na pessoa ou organização que lhe pediu para aceder a esta ferramenta.",
      "warningLine2": "Saiba mais aqui: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Ocorreu um erro ao carregar os manifestos de depuração.",
      "debugManifestErrorDismissButtonText": "Dispensar"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Permitir scripts de depuração?",
      "allowDebugLoaderTitle": "Permitir o carregador de depuração?",
      "allowDebugLoaderAndManifestsTitle": "Permitir o carregador de depuração e os scripts de depuração?",
      "debugManifestLoadingWarning": "AVISO: esta página contém scripts não seguros que poderão danificar o seu computador se forem carregados. Não continue a menos que confie no programador e compreenda os riscos.",
      "debugManifestLoadingWarning2": "Se não tem a certeza, clique em {0}.",
      "debugManifestLoadingConfirm": "Carregar a depuração de scripts",
      "debugManifestLoadingCancel": "Não carregar a depuração de scripts",
      "debugManifestLoadingCalloutText": "Se não souber o que fazer, clique aqui."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "A carregar...",
      "developerToolsTabLoadingUnknownError": "Erro desconhecido ao carregar o módulo de ferramentas de programador."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifestos",
      "noManifestSelected": "Nenhum manifesto selecionado"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Desempenho",
      "ErrorAccessingPerfDataErrorMessage": "Não é possível obter os dados de desempenho: o objeto é nulo ou não foi definido.",
      "ErrorAccessingRedirectDataErrorMessage": "Ocorreu um problema ao aceder aos dados de desempenho do redirecionamento HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Foi detetado um erro ao analisar os dados de latência percetível.",
      "ErrorParsingApiDataErrorMessage": "Foi detetado um erro ao analisar os dados da API.",
      "UnkownPerformanceDataErrorMessage": "Ocorreu um erro desconhecido: {0}",
      "DefaultWebPartName": "Peça Web",
      "ServerResponseLabel": "Resposta do Servidor",
      "ApplicationInitializationLabel": "Inicialização da Aplicação",
      "ScriptFetchEvalLabel": "Avaliação e obtenção de scripts",
      "SpLoaderStartLabel": "Inicialização do SPFx",
      "PageRenderLabel": "Composição de Página",
      "LeftNavRenderLabel": "Composição da Navegação à Esquerda",
      "CanvasRenderLabel": "Composição da Tela",
      "LayoutRenderLabel": "Composição do Esquema",
      "RedirectResponseLabel": "Resposta de Redirecionamento",
      "AppLoadLabel": "Carregamento da Aplicação",
      "RenderWebPartsLabel": "Composição de Peças Web",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Pedimos desculpa, mas ocorreu um erro ao obter os dados de desempenho.",
      "ErrorMessagePrefix": "Mensagem de Erro: {0}",
      "PerformanceDataHint": "Nota: após adicionar ou remover uma Peça Web, atualize a página para ver os dados de desempenho atualizados.",
      "ModulesLoadedLegendLabel": "Módulos Carregados",
      "InitializationLegendLabel": "Inicialização",
      "RenderTimeLegendLabel": "Tempo de Composição",
      "InitializationTimeLabel": "Hora da inicialização",
      "ModuleLoadingTimeLabel": "Hora do carregamento do módulo",
      "ModuleLazyLoadingDelayLabel": "Atraso no carregamento do módulo",
      "DataFetchTimeLabel": "Hora da obtenção de dados",
      "DataFetchLegendLabel": "Obtenção de Dados",
      "ItemsColumnHeader": "Itens",
      "DurationColumnHeader": "Duração",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/D"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Rastreio",
      "EmptyTraceData": "Não foram carregados rastreios.",
      "ExportCSVButtonLabel": "Exportar CSV",
      "LevelHeaderLabel": "Nível",
      "MessageHeaderLabel": "Mensagem",
      "ScopeHeaderLabel": "Âmbito",
      "SourceHeaderLabel": "Origem",
      "TimestampHeaderLabel": "Carimbo de Data/Hora",
      "TimestampFormat": "{2}/{1}/{0} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Ocorreu um problema ao aceder aos dados de rastreio."
    }
  };

  strings.default = strings;
  return strings;
});
define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Não é possível carregar o aplicativo nesta página. Use o botão Voltar do navegador para tentar novamente. Se o problema persistir, contate o administrador do site e forneça a ele as informações contidas em Detalhes Técnicos.",
      "platformFailedToLoadError": "Falha ao carregar a plataforma. Id: \"{0}\", nome: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Falha ao carregar plataforma. ID: \"{0}\", nome: \"{1}\".\r\nErro: {2}",
      "applicationFailedToInitializeError": "Erro ao inicializar o aplicativo. Erro: {0}",
      "invalidPreloadedDataError": "Dados pré-carregados inválidos.",
      "manifestNotFoundByIdError": "Manifesto não encontrado para a id do componente \"{0}\".",
      "manifestNotFoundError": "Manifesto não encontrado para a ID do componente \"{0}\" e versão \"{1}\".",
      "systemConfigDisabledError": "Não há suporte para System.config(). Use um manifesto para especificar a configuração.",
      "loadComponentLog": "Carregando componente \"{0}\" ({1}).",
      "loadComponentEndLog": "Componente \"{0}\" ({1}) carregado.",
      "loadComponentRetryLog": "Carregando componente \"{0}\" ({1}). Tentativa {2} de {3}.",
      "loadComponentError": "Falha ao carregar o componente \"{0}\" ({1}).\r\nErro original: {2}",
      "loadComponentMaxRetriesError": "Tentativa de carregar o componente \"{0}\" ({1}) {2} vezes sem sucesso.",
      "loadComponentDependencyError": "Falha ao carregar a dependência de componente \"{0}\" do componente \"{1}\" ({2}).\r\nErro original: {3}",
      "loadComponentDependencyFailoverPathError": "Falha ao carregar a dependência de componente \"{0}\" com o caminho de failover \"{1}\" do componente \"{2}\" ({3}).\r\nErro original: {4}",
      "loadPathDependencyLog": "Carregando dependência do caminho \"{0}\" do componente \"{1}\" ({2})",
      "loadPathDependencyError": "Falha ao carregar a dependência de caminho \"{0}\" do componente \"{1}\" ({2}).\r\nErro original: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Falha ao carregar a dependência do caminho \"{0}\" do componente \"{1}\" ({2}) devido a outra dependência que falhou ao ser carregada.",
      "loadEntryPointError": "Falha ao carregar o ponto de entrada do componente \"{0}\" ({1}).\r\nErro original: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() retornou um objeto vazio para o componente \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() retornou um objeto com uma propriedade padrão vazia para o componente \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "O ponto de entrada para o componente \"{0}\" ({1}) tem uma dependência em \"{2}\" que não está declarada no manifesto.",
      "loadScriptWithStringError": "A função loadScript não permite que uma cadeia de caracteres como parâmetro 2º. Use o ILoadScriptOptions.",
      "tooManyManifestsError": "{0} manifestos (versões{1})) encontrados para o componente \"{2}\".",
      "tooManyCompatibleVersionsError": "{0} versões compatíveis ({1}) encontradas para o componente \"{2}\" versão \"{3}\".",
      "tooManyComponentsError": "Número excessivo de componentes encontrados para a id \"{0}\".",
      "noComponentFoundError": "Nenhum componente encontrado para a ID \"{0}\".",
      "deleteComponentLog": "Excluindo componente \"{0}\" versão \"{1}\" do repositório.",
      "browserNotSupportedError": "Não há suporte para esta versão do seu navegador.\r\nAtualize seu navegador para a versão mais recente.",
      "ie9OrOlderNotSupportedError": "Esta página não dá suporte a versões do Internet Explorer anteriores à versão 10. Atualize seu navegador da Web.",
      "firefox43OrOlderNotSupportedError": "Esta página não dá suporte a versões do Mozila Firefox anteriores à versão 44. Atualize seu navegador da Web.",
      "resourceNotFoundError": "Recurso \"{0}\" não encontrado na configuração do carregador de manifesto para o componente \"{1}\" ({2}).",
      "noFailoverPathError": "Não é possível chamar resolveAddress() em um componente sem nenhum caminho de failover",
      "urlStatusLocalhostFileNotFoundError": "Falha ao carregar a URL '{3}' para o recurso '{2}' no componente '{0}' ({1}). O arquivo não foi encontrado no servidor.\r\nVerifique se você está executando o 'gulp serve'.",
      "urlStatusFileNotFoundError": "Falha ao carregar a URL '{3}' para o recurso '{2}' no componente '{0}' ({1}). O arquivo não foi encontrado no servidor.",
      "urlStatusForbiddenError": "Falha ao carregar a URL '{3}' para o recurso '{2}' no componente '{0}' ({1}). O acesso ao arquivo está proibido.",
      "urlStatusClientErrorError": "Falha ao carregar a URL '{3}' para o recurso '{2}' no componente '{0}' ({1}). Ocorreu um erro na solicitação do arquivo.",
      "urlStatusServerErrorError": "Falha ao carregar a URL '{3}' para o recurso '{2}' no componente '{0}' ({1}). Houve um problema no servidor.",
      "urlStatusLocalhostNetworkErrorError": "Falha ao carregar a URL '{3}' para o recurso '{2}' no componente '{0}' ({1}). Houve um problema na rede.\r\nVerifique se você está executando o 'gulp server' e se executou o 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "Falha ao carregar a URL '{3}' para o recurso '{2}' no componente '{0}' ({1}). Houve um problema na rede.\r\nPode ser um problema com um certificado HTTPS. Verifique se você tem o certificado correto.",
      "urlStatusNetworkErrorError": "Falha ao carregar a URL '{3}' para o recurso '{2}' no componente '{0}' ({1}). Houve um problema na rede.",
      "urlStatusUndefinedError": "Falha ao carregar a URL '{3}' para o recurso '{2}' no componente '{0}' ({1}) devido a problemas desconhecidos.",
      "isUndefinedValidateError": "O valor para \"{0}\" não deve ser indefinido",
      "failedToCreateGlobalVariableError": "Falha ao criar a variável global \"{0}\" de script \"{1}\"",
      "dependencyLoadError": "Falha ao carregar o módulo \"{0}\" porque a dependência {1} não foi carregada",
      "missingPathDependencyError": "Dependência de caminho \"{0}\" ausente no componente\"{1}\" ({2}). Dependências de caminho existentes: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Erro ao carregar o script de depuração. Verifique se o servidor está em execução e se a URL do parâmetro \"{0}\" está correta.",
      "errorLoadingDebugScriptHTTP": "Erro ao carregar o script de depuração. Verifique se que o servidor está em execução, se a URL do parâmetro \"{0}\" está correta, e se é permitido carregar scripts perigosos. Além disso, considere usar um certificado de desenvolvimento e atender a scripts de depuração em HTTPS.",
      "errorLoadingDebugScriptMalformed": "Erro ao carregar o script de depuração. A URL de depuração ({0}) parece estar incorreta.",
      "errorLoadingDebugScriptUnknown": "Erro desconhecido ao carregar um script de depuração.",
      "errorLoadingDebugLoaderTitle": "Erro ao carregar carregador de depuração.",
      "errorLoadingDebugManifestTitle": "Erro ao carregar os manifestos de depuração.",
      "errorLoadingUnknownTitle": "Erro ao carregar scripts de depuração."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Função de componente ou inicializador ausente.",
      "closeDeveloperToolsAriaLabel": "Feche as ferramentas de desenvolvedor."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Aviso!",
      "warningLine1": "O uso desta ferramenta expõe você a possíveis ameaças de segurança que podem resultar em que outras pessoas tenham acesso a seus dados pessoais do Office 365 (documentos, emails, conversas e muito mais). Verifique se você confia na pessoa ou na organização que solicitou acesso a essa ferramenta antes de prosseguir.",
      "warningLine2": "Saiba mais aqui: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Erro ao carregar manifestos de depuração.",
      "debugManifestErrorDismissButtonText": "Ignorar"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Permitir scripts de depuração?",
      "allowDebugLoaderTitle": "Permitir carregador de depuração?",
      "allowDebugLoaderAndManifestsTitle": "Permitir carregador de depuração e scripts de depuração?",
      "debugManifestLoadingWarning": "AVISO: esta página contém scripts perigosos, que se carregados, podem danificar seu computador. Não continue a menos que confie no desenvolvedor e entenda os riscos.",
      "debugManifestLoadingWarning2": "Se você não tiver certeza, clique em {0}.",
      "debugManifestLoadingConfirm": "Carregar scripts de depuração",
      "debugManifestLoadingCancel": "Não carregar scripts de depuração",
      "debugManifestLoadingCalloutText": "Se você não souber o que fazer, clique aqui."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Carregando...",
      "developerToolsTabLoadingUnknownError": "Erro desconhecido ao carregar o módulo de ferramentas de desenvolvedor."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifestos",
      "noManifestSelected": "Nenhum manifesto selecionado"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Desempenho",
      "ErrorAccessingPerfDataErrorMessage": "Não é possível recuperar os dados de desempenho: o objeto é nulo ou indefinido.",
      "ErrorAccessingRedirectDataErrorMessage": "Ocorreu um problema ao acessar os dados de desempenho do redirecionamento HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Um erro foi detectado durante a análise dos dados de latência percebida.",
      "ErrorParsingApiDataErrorMessage": "Um erro foi detectado durante a análise dos dados da API.",
      "UnkownPerformanceDataErrorMessage": "Ocorreu um erro desconhecido: {0}",
      "DefaultWebPartName": "Web Part",
      "ServerResponseLabel": "Resposta do Servidor",
      "ApplicationInitializationLabel": "Inicialização do Aplicativo",
      "ScriptFetchEvalLabel": "Avaliação e busca de script",
      "SpLoaderStartLabel": "Inicialização de SPFx",
      "PageRenderLabel": "Renderização de Página",
      "LeftNavRenderLabel": "Renderização de Navegação à Esquerda",
      "CanvasRenderLabel": "Renderizador de Tela",
      "LayoutRenderLabel": "Renderizador de Layout",
      "RedirectResponseLabel": "Resposta de Redirecionamento",
      "AppLoadLabel": "Carga do Aplicativo",
      "RenderWebPartsLabel": "Renderização de Web Parts",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Algo deu errado ao recuperar os dados de desempenho.",
      "ErrorMessagePrefix": "Mensagem de Erro: {0}",
      "PerformanceDataHint": "Observação: após adicionar ou remover uma Web Part, atualize a página para ver os dados de desempenho atualizados.",
      "ModulesLoadedLegendLabel": "Módulos Carregados",
      "InitializationLegendLabel": "Inicialização",
      "RenderTimeLegendLabel": "Tempo de Renderização",
      "InitializationTimeLabel": "Tempo de inicialização",
      "ModuleLoadingTimeLabel": "Tempo de carregamento do módulo",
      "ModuleLazyLoadingDelayLabel": "Carregamento de módulo atrasado",
      "DataFetchTimeLabel": "Tempo de busca de dados",
      "DataFetchLegendLabel": "Busca de Dados",
      "ItemsColumnHeader": "Itens",
      "DurationColumnHeader": "Duração",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/D"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Rastrear",
      "EmptyTraceData": "Não há rastreamentos carregados.",
      "ExportCSVButtonLabel": "Exportar CSV",
      "LevelHeaderLabel": "Nível",
      "MessageHeaderLabel": "Mensagem",
      "ScopeHeaderLabel": "Escopo",
      "SourceHeaderLabel": "Origem",
      "TimestampHeaderLabel": "Carimbo de data/hora",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Ocorreu um problema ao acessar os dados de rastreamento."
    }
  };

  strings.default = strings;
  return strings;
});
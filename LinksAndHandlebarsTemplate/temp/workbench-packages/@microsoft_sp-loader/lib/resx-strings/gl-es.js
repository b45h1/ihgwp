define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Non se pode cargar a aplicación nesta páxina. Usa o botón Atrás do explorador para tentalo de novo. Se o problema continúa, ponte en contacto co administrador do sitio e fornécelle a información que aparece nos detalles técnicos.",
      "platformFailedToLoadError": "Non se puido cargar a plataforma. ID: \"{0}\"; nome: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Erro da plataforma ao cargar. Id: \"{0}\", nome: \"{1}\".\r\nErro: {2}",
      "applicationFailedToInitializeError": "Erro ao inicializar a aplicación. Erro: {0}",
      "invalidPreloadedDataError": "Datos cargados previamente non válidos.",
      "manifestNotFoundByIdError": "Non se atopou o manifesto do ID de compoñente \"{0}\".",
      "manifestNotFoundError": "Non se atopou o manifesto para o ID de compoñente \"{0}\" e versión \"{1}\".",
      "systemConfigDisabledError": "System.config() non se admite. Usa un manifesto para especificar a configuración.",
      "loadComponentLog": "Cargando o compoñente \"{0}\" ({1}).",
      "loadComponentEndLog": "Cargouse o compoñente \"{0}\" ({1}).",
      "loadComponentRetryLog": "Cargando o compoñente \"{0}\" ({1}). Intento {2} de {3}.",
      "loadComponentError": "Erro ao cargar o compoñente \"{0}\" ({1}).\r\nErro orixinal: {2}",
      "loadComponentMaxRetriesError": "Intentouse cargar o compoñente \"{0}\" ({1}) {2} veces sen éxito.",
      "loadComponentDependencyError": "Erro ao cargar a dependencia do compoñente \"{0}\" desde o compoñente \"{1}\" ({2}).\r\nErro orixinal: {3}",
      "loadComponentDependencyFailoverPathError": "Erro ao cargar a dependencia do compoñente \"{0}\" co camiño de conmutación por erro \"{1}\" desde o compoñente \"{2}\" ({3}).\r\nErro orixinal: {4}",
      "loadPathDependencyLog": "Cargando a dependencia do camiño \"{0}\" do compoñente \"{1}\" ({2})",
      "loadPathDependencyError": "Erro ao cargar a dependencia do camiño \"{0}\" desde o compoñente \"{1}\" ({2}).\r\nErro orixinal: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Erro ao cargar a dependencia do camiño \"{0}\" do compoñente \"{1}\" ({2}) porque se produciu un erro ao cargar outra dependencia.",
      "loadEntryPointError": "Erro ao cargar o punto de entrada do compoñente \"{0}\" ({1}).\r\nErro orixinal: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() devolveu un obxecto baleiro para o compoñente\"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() devolveu un obxecto con unha propiedade predefinida baleira para o compoñente \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "O punto de entrada do compoñente \"{0}\" ({1}) ten unha dependencia en \"{2}\" que non está declarada no manifesto.",
      "loadScriptWithStringError": "A función loadScript non permite unha cadea como segundo parámetro. Usa ILoadScriptOptions no seu lugar.",
      "tooManyManifestsError": "Atopáronse {0} manifestos (versións {1}) para o compoñente \"{2}\".",
      "tooManyCompatibleVersionsError": "Atopáronse {0} versións compatibles ({1}) para a versión \"{3}\" do compoñente \"{2}\".",
      "tooManyComponentsError": "Encontráronse demasiados compoñentes para o id \"{0}\".",
      "noComponentFoundError": "Non se atopou ningún compoñente para o ID \"{0}\".",
      "deleteComponentLog": "Eliminando a versión \"{1}\" do compoñente \"{0}\" do almacenamento.",
      "browserNotSupportedError": "Esta versión do explorador non se admite.\r\nActualiza o teu explorador á última versión.",
      "ie9OrOlderNotSupportedError": "Esta páxina non é compatible con versións de Internet Explorer anteriores á 10. Actualiza o teu explorador web.",
      "firefox43OrOlderNotSupportedError": "Esta páxina non é compatible con versións de Mozilla Firefox anteriores á 44. Actualiza o teu explorador web.",
      "resourceNotFoundError": "O recurso \"{0}\" non se atopou na configuración do cargador do manifesto para o compoñente \"{1}\" ({2}).",
      "noFailoverPathError": "Non é posible chamar a resolveAddress() nun compoñente sen ruta de conmutación por erro",
      "urlStatusLocalhostFileNotFoundError": "Erro ao cargar o URL \"{3}\" do recurso \"{2}\" do compoñente \"{0}\" ({1}). Non se atopou o ficheiro no servidor.\r\nAsegúrate de que estás a executar \"gulp serve\".",
      "urlStatusFileNotFoundError": "Erro ao cargar o URL \"{3}\" do recurso \"{2}\" do compoñente \"{0}\" ({1}). Non se atopou o ficheiro no servidor.",
      "urlStatusForbiddenError": "Erro ao cargar o URL \"{3}\" do recurso \"{2}\" do compoñente \"{0}\" ({1}). Prohibiuse o acceso ao ficheiro.",
      "urlStatusClientErrorError": "Erro ao cargar o URL \"{3}\" do recurso \"{2}\" do compoñente \"{0}\" ({1}). Produciuse un error ao solicitar o ficheiro.",
      "urlStatusServerErrorError": "Erro ao cargar o URL \"{3}\" do recurso \"{2}\" do compoñente \"{0}\" ({1}). Produciuse un problema no servidor.",
      "urlStatusLocalhostNetworkErrorError": "Erro ao cargar o URL \"{3}\" do recurso \"{2}\" do compoñente \"{0}\" ({1}). Produciuse un problema na rede.\r\nAsegúrate de que executaches \"gulp serve\" e \"gulp trust-dev-cert\".",
      "urlStatusHttpsNetworkErrorError": "Erro ao cargar o URL \"{3}\" do recurso \"{2}\" do compoñente \"{0}\" ({1}). Produciuse un problema na rede.\r\nPode tratarse dun problema cun certificado HTTPS. Asegúrate de que tes o certificado correcto.",
      "urlStatusNetworkErrorError": "Erro ao cargar o URL \"{3}\" do recurso \"{2}\" do compoñente \"{0}\" ({1}). Produciuse un problema na rede.",
      "urlStatusUndefinedError": "Erro ao cargar o URL \"{3}\" do recurso \"{2}\" do compoñente \"{0}\" ({1}) debido a problemas descoñecidos.",
      "isUndefinedValidateError": "O valor de \"{0}\" non pode estar sen definir",
      "failedToCreateGlobalVariableError": "Non se puido crear a variable global \"{0}\" do script \"{1}\"",
      "dependencyLoadError": "Erro ao cargar o módulo \"{0}\" porque non se cargou a dependencia {1}",
      "missingPathDependencyError": "Falta a dependencia de camiño \"{0}\" do compoñente \"{1}\" ({2}). Dependencias de camiño existentes: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Erro ao cargar o script de depuración. Asegúrate de que o servidor se está executando e que o URL do parámetro \"{0}\" é correcto.",
      "errorLoadingDebugScriptHTTP": "Erro ao cargar o script de depuración. Asegúrate de que o servidor se está executando, que o URL do parámetro \"{0}\" é correcto e que se permite a carga de scripts non seguros. Considera tamén usar un certificado de desenvolvemento e fornecer scripts de depuración a través de HTTPS.",
      "errorLoadingDebugScriptMalformed": "Erro ao cargar o script de depuración. O URL de depuración ({0}) parece que non está ben formado.",
      "errorLoadingDebugScriptUnknown": "Erro descoñecido ao cargar un script de depuración.",
      "errorLoadingDebugLoaderTitle": "Erro ao cargar o cargador de depuración.",
      "errorLoadingDebugManifestTitle": "Erro ao cargar manifestos de depuración.",
      "errorLoadingUnknownTitle": "Erro ao cargar os scripts de depuración."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Falta un compoñente ou unha función do inicializador.",
      "closeDeveloperToolsAriaLabel": "Pecha as ferramentas de programador."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Aviso",
      "warningLine1": "O uso desta ferramenta exponte a ameazas de seguranza potenciais, que poden ter como resultado que outros usuarios obteñan acceso aos teus datos persoais de Office 365 (documentos, correos electrónicos, conversas e máis). Asegúrate de confiar na persoa ou organización que che solicitou que accedeses a esta ferramenta antes de continuar.",
      "warningLine2": "Obtén máis información aquí: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Produciuse un erro ao cargar o manifesto de depuración.",
      "debugManifestErrorDismissButtonText": "Rexeitar"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Queres permitir a depuración de scripts?",
      "allowDebugLoaderTitle": "Permitir cargador de depuración?",
      "allowDebugLoaderAndManifestsTitle": "Permitir o cargador ou os scripts de depuración?",
      "debugManifestLoadingWarning": "ADVERTENCIA: esta páxina contén scripts que non son seguros. Se a cargas, podería danar o teu computador. Non continúes a menos que confíes no programador e comprendas os riscos.",
      "debugManifestLoadingWarning2": "Se non estás seguro, preme {0}.",
      "debugManifestLoadingConfirm": "Cargar scripts de depuración",
      "debugManifestLoadingCancel": "Non cargar os scripts de depuración",
      "debugManifestLoadingCalloutText": "Se non sabes que facer, preme aquí."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Cargando...",
      "developerToolsTabLoadingUnknownError": "Erro descoñecido ao cargar o módulo de ferramentas de programador."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifestos",
      "noManifestSelected": "Non se seleccionou ningún manifesto"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Desempeño",
      "ErrorAccessingPerfDataErrorMessage": "Non se poden recuperar os datos de desempeño: o obxecto é nulo ou non está definido.",
      "ErrorAccessingRedirectDataErrorMessage": "Produciuse un problema ao acceder aos datos de desempeño de redireccionamento HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Produciuse un erro ao analizar os datos da latencia percibidos.",
      "ErrorParsingApiDataErrorMessage": "Produciuse un erro ao analizar os datos da API.",
      "UnkownPerformanceDataErrorMessage": "Produciuse un erro descoñecido: {0}",
      "DefaultWebPartName": "Peza web",
      "ServerResponseLabel": "Resposta do servidor",
      "ApplicationInitializationLabel": "Inicialización da aplicación",
      "ScriptFetchEvalLabel": "Avaliación e obtención do script",
      "SpLoaderStartLabel": "Inicialización de SPFx",
      "PageRenderLabel": "Procesamento de páxina",
      "LeftNavRenderLabel": "Representación do navegador esquerdo",
      "CanvasRenderLabel": "Representación do lenzo",
      "LayoutRenderLabel": "Representación do deseño",
      "RedirectResponseLabel": "Redirixir resposta",
      "AppLoadLabel": "Carga da aplicación",
      "RenderWebPartsLabel": "Representación de pezas web",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Produciuse un erro ao recuperar os datos de desempeño.",
      "ErrorMessagePrefix": "Mensaxe de erro: {0}",
      "PerformanceDataHint": "Nota: despois de engadir ou eliminar unha peza web, actualiza a páxina para ver os datos de desempeño actualizados.",
      "ModulesLoadedLegendLabel": "Módulos cargados",
      "InitializationLegendLabel": "Inicialización",
      "RenderTimeLegendLabel": "Tempo de procesamento",
      "InitializationTimeLabel": "Hora de inicialización",
      "ModuleLoadingTimeLabel": "Hora de carga do módulo",
      "ModuleLazyLoadingDelayLabel": "Carga do módulo retrasada",
      "DataFetchTimeLabel": "Hora da obtención de datos",
      "DataFetchLegendLabel": "Obtención de datos",
      "ItemsColumnHeader": "Elementos",
      "DurationColumnHeader": "Duración",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/D"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Rastrexar",
      "EmptyTraceData": "Non se cargaron seguimentos.",
      "ExportCSVButtonLabel": "Exportar CSV",
      "LevelHeaderLabel": "Nivel",
      "MessageHeaderLabel": "Mensaxe",
      "ScopeHeaderLabel": "Ámbito",
      "SourceHeaderLabel": "Orixe",
      "TimestampHeaderLabel": "Marca de hora",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Produciuse un problema ao acceder aos datos de seguimento."
    }
  };

  strings.default = strings;
  return strings;
});
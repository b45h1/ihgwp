define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "No es pot carregar l'aplicació en aquesta pàgina. Utilitzeu el botó Enrere del navegador per tornar-ho a provar. Si el problema continua, contacteu amb l'administrador del lloc i proporcioneu-li informació a la secció Detalls tècnics.",
      "platformFailedToLoadError": "No s'ha pogut carregar la plataforma. ID: \"{0}\", nom: \"{1}\".",
      "platformFailedToLoadWithMessageError": "No s'ha pogut carregar la plataforma. ID: \"{0}\"; nom: \"{1}\".\r\nError: {2}.",
      "applicationFailedToInitializeError": "S'ha produït un error en inicialitzar l'aplicació. Error: {0}.",
      "invalidPreloadedDataError": "Les dades carregades prèviament no són vàlides.",
      "manifestNotFoundByIdError": "No s'ha trobat el manifest de l'ID de component \"{0}\".",
      "manifestNotFoundError": "No s'ha trobat el manifest de l'ID de component \"{0}\" i la versió \"{1}\".",
      "systemConfigDisabledError": "L'element System.config() no és compatible. Utilitzeu un manifest per especificar la configuració.",
      "loadComponentLog": "S'està carregant el component \"{0}\" ({1}).",
      "loadComponentEndLog": "S'ha carregat el component \"{0}\" ({1}).",
      "loadComponentRetryLog": "Es carregarà el component \"{0}\" ({1}). Intent {2} ({3} en total).",
      "loadComponentError": "No s'ha pogut carregar el component \"{0}\" ({1}).\r\nError original: {2}",
      "loadComponentMaxRetriesError": "S'ha intentat carregar el component \"{0}\" ({1}) {2} vegades sense èxit.",
      "loadComponentDependencyError": "No s'ha pogut carregar la dependència \"{0}\" del component \"{1}\" ({2}).\r\nError original: {3}",
      "loadComponentDependencyFailoverPathError": "No s'ha pogut carregar la dependència de component \"{0}\" amb el camí de commutació \"{1}\" del component \"{2}\" ({3}).\r\nError original: {4}",
      "loadPathDependencyLog": "S'està carregant la dependència del camí \"{0}\" del component \"{1}\" ({2}).",
      "loadPathDependencyError": "No s'ha pogut carregar la dependència de camí \"{0}\" del component \"{1}\" ({2}).\r\nError original: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "No s'ha pogut carregar la dependència del camí \"{0}\" del component \"{1}\" ({2}) a causa d'una altra dependència que no s'ha pogut carregar.",
      "loadEntryPointError": "No s'ha pogut carregar el punt d'entrada del component \"{0}\" ({1}).\r\nError original: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() ha retornat un objecte buit per al component \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() ha retornat un objecte amb una propietat per defecte buida per al component \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "El punt d'entrada del component \"{0}\" ({1}) té una dependència a \"{2}\" que no es declara al manifest.",
      "loadScriptWithStringError": "La funció loadScript no permet una cadena com a segon paràmetre. Utilitzeu la funció ILoadScriptOptions.",
      "tooManyManifestsError": "S'han trobat {0} manifests (versions {1}) del component \"{2}\".",
      "tooManyCompatibleVersionsError": "S'han trobat {0} versions compatibles ({1}) per a la versió \"{3}\" del component \"{2}\".",
      "tooManyComponentsError": "S'han trobat massa components per a l'ID \"{0}\".",
      "noComponentFoundError": "No s'ha trobat cap component per a l'ID \"{0}\".",
      "deleteComponentLog": "Se suprimirà la versió \"{1}\" del component \"{0}\" de la botiga.",
      "browserNotSupportedError": "Aquesta versió del navegador no és compatible.\r\nActualitzeu-lo a l'última versió.",
      "ie9OrOlderNotSupportedError": "Aquesta pàgina no admet les versions de l'Internet Explorer anteriors a la versió 10. Actualitzeu el navegador web.",
      "firefox43OrOlderNotSupportedError": "Aquesta pàgina no és compatible amb les versions del Mozilla Firefox anteriors a la 44. Actualitzeu el navegador web.",
      "resourceNotFoundError": "El recurs \"{0}\" no es troba en la configuració del carregador del manifest del component \"{1}\" ({2}).",
      "noFailoverPathError": "No es pot cridar l'element resolveAddress() en un component amb cap camí de commutació.",
      "urlStatusLocalhostFileNotFoundError": "No s'ha pogut carregar l'URL \"{3}\" del recurs \"{2}\" al component \"{0}\" ({1}). No s'ha trobat el fitxer al servidor.\r\nAssegureu-vos que executeu \"gulp serve\".",
      "urlStatusFileNotFoundError": "No s'ha pogut carregar l'URL \"{3}\" del recurs \"{2}\" al component \"{0}\" ({1}). No s'ha trobat el fitxer al servidor.",
      "urlStatusForbiddenError": "No s'ha pogut carregar l'URL \"{3}\" del recurs \"{2}\" al component \"{0}\" ({1}). S'ha prohibit l'accés al fitxer.",
      "urlStatusClientErrorError": "No s'ha pogut carregar l'URL \"{3}\" del recurs \"{2}\" al component \"{0}\" ({1}). S'ha produït un error en sol·licitar el fitxer.",
      "urlStatusServerErrorError": "No s'ha pogut carregar l'URL \"{3}\" del recurs \"{2}\" al component \"{0}\" ({1}). S'ha produït un problema al servidor.",
      "urlStatusLocalhostNetworkErrorError": "No s'ha pogut carregar l'URL \"{3}\" del recurs {2} al component \"{0}\" ({1}). Hi ha hagut un problema a la xarxa.\r\nComproveu que estigueu executant \"gulp serve\" i que hàgiu executat \"gulp trust-dev-cert\".",
      "urlStatusHttpsNetworkErrorError": "No s'ha pogut carregar l'URL \"{3}\" del recurs \"{2}\" al component \"{0}\" ({1}). S'ha produït un problema de xarxa.\r\nPot tractar-se d'un problema amb un certificat HTTPS. Assegureu-vos que teniu el certificat correcte.",
      "urlStatusNetworkErrorError": "No s'ha pogut carregar l'URL \"{3}\" del recurs \"{2}\" al component \"{0}\" ({1}). S'ha produït un problema de xarxa.",
      "urlStatusUndefinedError": "No s'ha pogut carregar l'URL \"{3}\" del recurs \"{2}\" al component \"{0}\" ({1}) a causa de problemes desconeguts.",
      "isUndefinedValidateError": "El valor de la variable \"{0}\" no pot ser indefinit.",
      "failedToCreateGlobalVariableError": "No ha pogut crear la variable global \"{0}\" a partir de l'script \"{1}\"",
      "dependencyLoadError": "No s'ha pogut carregar el mòdul \"{0}\" perquè la dependència {1} no s'ha carregat.",
      "missingPathDependencyError": "Falta la dependència de camí \"{0}\" al component \"{1}\" ({2}\". Les dependències de camí existents són les següents: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "S'ha produït un error en carregar l'script de depuració. Assegureu-vos que el servidor s'està executant i que l'adreça URL del paràmetre \"{0}\" és correcta.",
      "errorLoadingDebugScriptHTTP": "S'ha produït un error en carregar l'script de depuració. Assegureu-vos que el servidor s'està executant, que l'adreça URL del paràmetre \"{0}\" és correcta i que es permet la càrrega d'scripts no segurs. Considereu també la possibilitat d'utilitzar un certificat de desenvolupament i de proporcionar els scripts de depuració a través de HTTPS.",
      "errorLoadingDebugScriptMalformed": "S'ha produït un error en carregar l'script de depuració. Sembla que l'adreça URL de depuració ({0}) té un format incorrecte.",
      "errorLoadingDebugScriptUnknown": "S'ha produït un error desconegut en carregar un script de depuració.",
      "errorLoadingDebugLoaderTitle": "S'ha produït un error en carregar el carregador de depuració.",
      "errorLoadingDebugManifestTitle": "Error en carregar els manifestos de depuració.",
      "errorLoadingUnknownTitle": "S'ha produït un error en carregar els scripts de depuració."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Falta un component o la funció de l'inicialitzador.",
      "closeDeveloperToolsAriaLabel": "Tanqueu les eines de desenvolupador."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Advertiment",
      "warningLine1": "L'ús d'aquesta eina us exposa a amenaces de seguretat potencials que poden provocar que altres usuaris obtinguin accés a les vostres dades personals de l'Office 365 (els documents, els correus, les converses i molt més). Assegureu-vos que confieu en la persona o en l'organització que us ha demanat accedir a aquesta eina abans de continuar.",
      "warningLine2": "Obteniu més informació aquí: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "S'ha produït un error en carregar els manifestos de depuració.",
      "debugManifestErrorDismissButtonText": "Descarta"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Voleu permetre els scripts de depuració?",
      "allowDebugLoaderTitle": "Voleu permetre el carregador de depuració?",
      "allowDebugLoaderAndManifestsTitle": "Voleu permetre el carregador i els scripts de depuració?",
      "debugManifestLoadingWarning": "ADVERTIMENT: aquesta pàgina conté scripts no segurs que, si es carreguen, podrien malmetre l'ordinador. No continueu tret que confieu en el desenvolupador i n'entengueu els riscos.",
      "debugManifestLoadingWarning2": "Si no ho teniu clar, feu clic a {0}.",
      "debugManifestLoadingConfirm": "Carrega els scripts de depuració",
      "debugManifestLoadingCancel": "No carreguis els scripts de depuració",
      "debugManifestLoadingCalloutText": "Si no sabeu què cal fer, feu clic aquí."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "S'està carregant...",
      "developerToolsTabLoadingUnknownError": "S'ha produït un error desconegut en carregar el mòdul d'eines de desenvolupador."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifests",
      "noManifestSelected": "No s'ha seleccionat cap manifest"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Rendiment",
      "ErrorAccessingPerfDataErrorMessage": "No s'han pogut recuperar les dades de rendiment: l'objecte és nul o no s'ha definit.",
      "ErrorAccessingRedirectDataErrorMessage": "S'ha produït un problema en accedir a les dades de rendiment de redirecció HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "S'ha produït un error en analitzar les dades de latència que s'han obtingut.",
      "ErrorParsingApiDataErrorMessage": "S'ha produït un error en analitzar les dades de l'API.",
      "UnkownPerformanceDataErrorMessage": "S'ha produït un error desconegut: {0}",
      "DefaultWebPartName": "Element web",
      "ServerResponseLabel": "Resposta del servidor",
      "ApplicationInitializationLabel": "Inicialització de l'aplicació",
      "ScriptFetchEvalLabel": "Obtenció i avaluació d'scripts",
      "SpLoaderStartLabel": "Inicialització d'SPFx",
      "PageRenderLabel": "Representació de la pàgina",
      "LeftNavRenderLabel": "Representació de la navegació esquerra",
      "CanvasRenderLabel": "Representació del llenç",
      "LayoutRenderLabel": "Representació de la disposició",
      "RedirectResponseLabel": "Resposta de redirecció",
      "AppLoadLabel": "Càrrega de l'aplicació",
      "RenderWebPartsLabel": "Representació d'elements web",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "S'ha produït un error en recuperar les dades de rendiment.",
      "ErrorMessagePrefix": "Missatge d'error: {0}",
      "PerformanceDataHint": "Nota: després d'afegir o de suprimir un element web, actualitzeu la pàgina per veure les dades de rendiment actualitzades.",
      "ModulesLoadedLegendLabel": "Mòduls carregats",
      "InitializationLegendLabel": "Inicialització",
      "RenderTimeLegendLabel": "Temps de representació",
      "InitializationTimeLabel": "Hora de la inicialització",
      "ModuleLoadingTimeLabel": "Temps de càrrega del mòdul",
      "ModuleLazyLoadingDelayLabel": "Càrrega del mòdul retardada",
      "DataFetchTimeLabel": "Hora d'obtenció de les dades",
      "DataFetchLegendLabel": "Obtenció de dades",
      "ItemsColumnHeader": "Elements",
      "DurationColumnHeader": "Durada",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/D"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Seguiment",
      "EmptyTraceData": "No s'ha carregat cap seguiment.",
      "ExportCSVButtonLabel": "Exporta-ho com a fitxer CSV",
      "LevelHeaderLabel": "Nivell",
      "MessageHeaderLabel": "Missatge",
      "ScopeHeaderLabel": "Àmbit",
      "SourceHeaderLabel": "Origen",
      "TimestampHeaderLabel": "Data i hora",
      "TimestampFormat": "{2}/{1}/{0} a les {3}:{4}:{5}:{6}",
      "ErrorAccessingTraceDataErrorMessage": "S'ha produït un problema en accedir a les dades de seguiment."
    }
  };

  strings.default = strings;
  return strings;
});
define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Ezin da kargatu aplikazioa orri honetan. Berriro saiatzeko, erabili arakatzailearen atzera-botoia. Arazoak badirau, jarri gunearen administratzailearekin harremanetan eta eman iezaiozu Xehetasun teknikoak ataleko informazioa.",
      "platformFailedToLoadError": "Ezin izan da kargatu plataforma. IDa: \"{0}\". Izena: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Ezin izan da kargatu plataforma. IDa: \"{0}\". Izena: \"{1}\".\r\nErrorea: {2}",
      "applicationFailedToInitializeError": "Errore bat gertatu da aplikazioa hasieratzean. Errorea: {0}",
      "invalidPreloadedDataError": "Kargatutako datuek ez dute balio.",
      "manifestNotFoundByIdError": "Ez da aurkitu \"{0}\" osagai IDaren manifestua.",
      "manifestNotFoundError": "Ez da aurkitu \"{0}\" osagai IDaren eta \"{1}\" bertsioaren manifestua.",
      "systemConfigDisabledError": "System.config() ez da onartzen. Erabili manifestu bat konfigurazioa zehazteko.",
      "loadComponentLog": "\"{0}\" ({1}) osagaia kargatzen.",
      "loadComponentEndLog": "Kargatu da \"{0}\" ({1}) osagaia.",
      "loadComponentRetryLog": "\"{0}\" ({1}) osagaia kargatzen. {2}/{3} saiakera.",
      "loadComponentError": "Ezin izan da kargatu \"{0}\" osagaia ({1}).\r\nJatorrizko errorea: {2}",
      "loadComponentMaxRetriesError": "\"{0}\" ({1}) osagaia {2} aldiz saiatu da kargatzen, baina saiakerek huts egin dute.",
      "loadComponentDependencyError": "Ezin izan da kargatu \"{1}\" ({2}) osagaiko \"{0}\" mendekotasuna .\r\nJatorrizko errorea: {3}",
      "loadComponentDependencyFailoverPathError": "Ezin izan da kargatu errore-kasuetarako leheneratzearen \"{1}\" bide-izenaren \"{0}\" mendekotasuna \"{2}\" osagaitik ({3}).\r\nJatorrizko errorea: {4}",
      "loadPathDependencyLog": "\"{1}\" ({2}) osagaiaren bide-izenaren \"{0}\" mendekotasuna kargatzen",
      "loadPathDependencyError": "Ezin izan da kargatu bide-izenaren \"{0}\" mendekotasuna \"{1}\" osagaitik ({2}).\r\nJatorrizko errorea: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Ezin izan da kargatu bide-izenaren \"{0}\" mendekotasuna \"{1}\" ({2}) osagaitik, beste mendekotasun bat ere kargatu ez delako.",
      "loadEntryPointError": "Ezin izan da kargatu \"{0}\" osagaiaren sarrera-puntua ({1}).\r\nJatorrizko errorea: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() funtzioak \"{0}\" ({1}) osagaiaren objektu huts bat itzuli du.",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() funtzioak \"{0}\" ({1}) osagaiaren propietate lehenetsi hutsa duen objektu bat itzuli du.",
      "moduleHasUndeclaredDependencyError": "\"{0}\" ({1}) osagaiaren sarrera-puntuaren \"{2}\" mendekotasuna ez dago adierazita manifestuan.",
      "loadScriptWithStringError": "loadScript funtzioek ez dute onartzen kate bat erabiltzea bigarren parametro gisa. Horren ordez, erabili ILoadScriptOptions.",
      "tooManyManifestsError": "\"{2}\" osagaiaren ({1} bertsioak) {0} manifestu aurkitu dira.",
      "tooManyCompatibleVersionsError": "{0} bertsio bateragarri ({1}) aurkitu dira \"{2}\" osagarriaren \"{3}\" bertsiorako.",
      "tooManyComponentsError": "\"{0}\" IDaren osagai gehiegi aurkitu dira.",
      "noComponentFoundError": "Ez dago \"{0}\" IDa duen osagairik.",
      "deleteComponentLog": "\"{0}\" osagarriaren \"{1}\" bertsioa ezabatzen biltegitik.",
      "browserNotSupportedError": "Darabilzun arakatzailearen bertsioa ez da onartzen.\r\nEgunera ezazu azken bertsiora.",
      "ie9OrOlderNotSupportedError": "Orriak ez du onartzen Internet Explorer-en 10 bertsioa baino zaharragorik. Eguneratu web-arakatzailea.",
      "firefox43OrOlderNotSupportedError": "Orriak ez du onartzen Mozilla Firefox-en 44 bertsioa baino zaharragorik. Eguneratu web-arakatzailea.",
      "resourceNotFoundError": "Ez da aurkitu \"{0}\" baliabidea \"{1}\" ({2}) osagarriaren manifestuaren kargatzaile-konfigurazioan.",
      "noFailoverPathError": "Ezin zaio deitu resolveAddress() funtzioari errore-kasuetako leheneratzearen bide-izenik ez duten osagaien kasuan",
      "urlStatusLocalhostFileNotFoundError": "Ezin izan da kargatu \"{2}\" baliabidearen \"{3}\" URLa \"{0}\" ({1}) osagaian. Fitxategia ez dago zerbitzarian.\r\nZiurtatu \"gulp serve\" exekutatzen duzula.",
      "urlStatusFileNotFoundError": "Ezin izan da kargatu \"{2}\" baliabidearen \"{3}\" URLa \"{0}\" ({1}) osagaian. Fitxategia ez dago zerbitzarian.",
      "urlStatusForbiddenError": "Ezin izan da kargatu \"{2}\" baliabidearen \"{3}\" URLa \"{0}\" ({1}) osagaian. Debekatuta dago fitxategia atzitzea.",
      "urlStatusClientErrorError": "Ezin izan da kargatu \"{2}\" baliabidearen \"{3}\" URLa \"{0}\" ({1}) osagaian. Arazo bat izan da fitxategia eskatzean.",
      "urlStatusServerErrorError": "Ezin izan da kargatu \"{2}\" baliabidearen \"{3}\" URLa \"{0}\" ({1}) osagaian. Arazo bat izan da zerbitzariarekin.",
      "urlStatusLocalhostNetworkErrorError": "Ezin izan da kargatu \"{2}\" baliabidearen \"{3}\" URLa \"{0}\" ({1}) osagaian. Arazo bat izan da sarean.\r\nZiurtatu \"gulp trust-dev-cert\" exekutatu duzula eta \"gulp serve\" exekutatzen ari zarela.",
      "urlStatusHttpsNetworkErrorError": "Ezin izan da kargatu \"{2}\" baliabidearen \"{3}\" URLa \"{0}\" ({1}) osagaian. Arazo bat izan da sarean.\r\nHTTPS ziurtagiriarena izan liteke arazoa. Ziurtatu ziurtagiri zuzena duzula.",
      "urlStatusNetworkErrorError": "Ezin izan da kargatu \"{2}\" baliabidearen \"{3}\" URLa \"{0}\" ({1}) osagaian. Arazo bat izan da sarean.",
      "urlStatusUndefinedError": "Ezin izan da kargatu \"{2}\" baliabidearen \"{3}\" URLa \"{0}\" ({1}) osagaian arazo ezezagunak direla-eta.",
      "isUndefinedValidateError": "\"{0}\" aldagaiaren balioa ezin da egon definitu gabe",
      "failedToCreateGlobalVariableError": "Ezin izan da sortu \"{0}\" aldagai orokorra \"{1}\" script-ean",
      "dependencyLoadError": "Ezin izan da kargatu \"{0}\" modulua, ez delako kargatu {1} mendekotasuna",
      "missingPathDependencyError": "\"{0}\" bide-izenaren mendekotasuna falta da \"{1}\" osagaian ({2}). Lehendik dauden bide-izenaren mendekotasunak: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Errore bat gertatu da arazte-scripta kargatzean. Ziurtatu zerbitzaria martxan dagoela eta \"{0}\" parametroko URLa zuzena dela.",
      "errorLoadingDebugScriptHTTP": "Errore bat gertatu da arazte-scripta kargatzean. Ziurtatu zerbitzaria martxan dagoela, \"{0}\" parametroko URLa zuzena dela eta seguruak ez diren scriptak kargatzea onartzen dela. Horrez gain, gomendagarria litzateke garapen-ziurtagiri bat erabiltzea eta arazte-scriptak HTTPS protokoloaren bidez hornitzea.",
      "errorLoadingDebugScriptMalformed": "Errore bat gertatu da arazte-scripta kargatzean. Arazketa URLaren formatua ({0}) ez da zuzena.",
      "errorLoadingDebugScriptUnknown": "Errore ezezagun bat gertatu da arazte-scripta kargatzean.",
      "errorLoadingDebugLoaderTitle": "Errore bat gertatu da arazketa-manifestuak kargatzean.",
      "errorLoadingDebugManifestTitle": "Errore bat gertatu da arazketa-manifestuak kargatzean.",
      "errorLoadingUnknownTitle": "Errore bat gertatu da arazte-scriptak kargatzean."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Osagai edo hasieratzailearen funtzio bat falta da.",
      "closeDeveloperToolsAriaLabel": "Itxi garapen-tresnak."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Kontuz!",
      "warningLine1": "Tresna hau erabiliz gero, segurtasun-arriskuak izan ditzakezu eta baliteke horren ondorioz norbaitek zure Office 365 datuetarako sarbidea lortzea (dokumentuan, mezu elektronikoak, elkarrizketak eta abar). Aurrera egin aurretik, ziurtatu tresna erabiltzea eskatu dizun pertsona edo erakundea fidagarria dela.",
      "warningLine2": "Hemen duzu informazio gehiago: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Errore bat gertatu da arazketa-manifestuak kargatzean.",
      "debugManifestErrorDismissButtonText": "Baztertu"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Arazte-scriptak onartu nahi dituzu?",
      "allowDebugLoaderTitle": "Araztaile-kargatzailea onartu nahi duzu?",
      "allowDebugLoaderAndManifestsTitle": "Arazte-kargatzailea eta arazte-scriptak erabiltzea onartu nahi duzu?",
      "debugManifestLoadingWarning": "ABISUA: orri honek seguruak ez diren scriptak ditu eta, kargatuz gero, ordenagailuak kalteak jasan ditzake. Ez egin aurrera garatzailearekin fidatzen ez bazara edo arriskuak ulertzen ez badituzu.",
      "debugManifestLoadingWarning2": "Ziur ez bazaude, sakatu {0}.",
      "debugManifestLoadingConfirm": "Kargatu arazte-scriptak",
      "debugManifestLoadingCancel": "Ez kargatu arazte-scriptak",
      "debugManifestLoadingCalloutText": "Ez badakizu zer egin, egin klik hemen."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Kargatzen...",
      "developerToolsTabLoadingUnknownError": "Errore ezezagun bat gertatu da garapen-tresnen modulua kargatzean."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifestuak",
      "noManifestSelected": "Ez da hautatu manifesturik"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Errendimendua",
      "ErrorAccessingPerfDataErrorMessage": "Arazo bat izan da errendimendu-datuak atzitzean: objektua nulua da edo ezin da identifikatu.",
      "ErrorAccessingRedirectDataErrorMessage": "Arazo bat izan da HTTP birbideratzearen errendimendu-datuak atzitzean.",
      "ErrorParsingPercievedLatencyErrorMessage": "Errore bat gertatu da hautemandako latentzia-datuak analizatzean.",
      "ErrorParsingApiDataErrorMessage": "Errore bat gertatu da APIaren datuak analizatzean.",
      "UnkownPerformanceDataErrorMessage": "Errore ezezagun bat gertatu da: {0}",
      "DefaultWebPartName": "Web zatia",
      "ServerResponseLabel": "Zerbitzariaren erantzun-denbora",
      "ApplicationInitializationLabel": "Aplikazioaren hasieratze-denbora",
      "ScriptFetchEvalLabel": "Script-a eskuratzea eta ebaluatzea",
      "SpLoaderStartLabel": "SPFx hasieratzea",
      "PageRenderLabel": "Orriaren errendatze-denbora",
      "LeftNavRenderLabel": "Ezkerreko nabigazioaren errendatzailea",
      "CanvasRenderLabel": "Oihalaren errendatze-denbora",
      "LayoutRenderLabel": "Diseinuaren errendatzea",
      "RedirectResponseLabel": "Birbideratu erantzuna",
      "AppLoadLabel": "Aplikazioaren kargatze-denbora",
      "RenderWebPartsLabel": "Web zatien errendatze-denbora",
      "TotalRenderTimeLabel": "Guztira",
      "GeneralErrorMessage": "Arazoren bat izan da errendimendu-datuak eskuratzean.",
      "ErrorMessagePrefix": "Errore-mezua: {0}",
      "PerformanceDataHint": "Oharra: web zatiak gehitu edo kendu ondoren, freskatu orria eguneratutako errendimendu-datuak ikusteko.",
      "ModulesLoadedLegendLabel": "Kargatutako moduluak",
      "InitializationLegendLabel": "Hasieratzea",
      "RenderTimeLegendLabel": "Errendatze-denbora",
      "InitializationTimeLabel": "Hasieratze-ordua",
      "ModuleLoadingTimeLabel": "Moduluaren kargatze-ordua",
      "ModuleLazyLoadingDelayLabel": "Atzeratu egin da moduluaren karga",
      "DataFetchTimeLabel": "Data eskuratzeko ordua",
      "DataFetchLegendLabel": "Datuak eskuratzea",
      "ItemsColumnHeader": "Elementuak",
      "DurationColumnHeader": "Iraupena",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "E/E"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Jarraitu aztarnari",
      "EmptyTraceData": "Ez da kargatu jarraipen-daturik.",
      "ExportCSVButtonLabel": "Esportatu CSV fitxategia",
      "LevelHeaderLabel": "Maila",
      "MessageHeaderLabel": "Mezua",
      "ScopeHeaderLabel": "Barrutia",
      "SourceHeaderLabel": "Iturburua",
      "TimestampHeaderLabel": "Denbora-zigilua",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Arazo bat izan da jarraipen-datuak atzitzean."
    }
  };

  strings.default = strings;
  return strings;
});
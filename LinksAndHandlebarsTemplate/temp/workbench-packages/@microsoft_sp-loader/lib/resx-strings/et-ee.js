define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Rakendust ei saa sellel lehel laadida. Uuesti proovimiseks vajutage brauseris nuppu Tagasi. Kui probleem ei lahene, pöörduge saidi administraatori poole ja edastage talle teave, mis on toodud jaotises Tehnilised üksikasjad.",
      "platformFailedToLoadError": "Platvormi ei saanud laadida. ID: {0}, nimi: {1}",
      "platformFailedToLoadWithMessageError": "Platvormi ei saanud laadida. ID: {0}, nimi: {1}.\r\nTõrge: {2}",
      "applicationFailedToInitializeError": "Rakenduse lähtestamisel ilmnes tõrge. Tõrge: {0}",
      "invalidPreloadedDataError": "Eellaaditud andmed on sobimatud.",
      "manifestNotFoundByIdError": "Komponendi ID \"{0}\" manifesti ei leitud.",
      "manifestNotFoundError": "Komponendi ID \"{0}\" ja versiooni \"{1}\" kohta manifesti ei leitud.",
      "systemConfigDisabledError": "System.config() pole toetatud. Kasutage konfiguratsiooni määramiseks manifesti.",
      "loadComponentLog": "Komponendi \"{0}\" ({1}) laadimine.",
      "loadComponentEndLog": "Komponent \"{0}\" ({1}) on laaditud.",
      "loadComponentRetryLog": "Komponendi \"{0}\" ({1}) laadimine. {2}. katse, katsete maksimumarv: {3}.",
      "loadComponentError": "Komponendi \"{0}\" ({1}) laadimine nurjus.\r\nAlgne tõrge: {2}",
      "loadComponentMaxRetriesError": "Komponenti \"{0}\" ({1}) üritati {2} korda edutult laadida.",
      "loadComponentDependencyError": "Komponendi sõltuvuse \"{0}\" laadimine komponendist \"{1}\" ({2}) nurjus.\r\nAlgne tõrge: {3}",
      "loadComponentDependencyFailoverPathError": "Rikkeümberlülitusteega \"{1}\" komponendi sõltuvuse \"{0}\" laadimine komponendist \"{2}\" ({3}) nurjus.\r\nAlgne tõrge: {4}",
      "loadPathDependencyLog": "Tee sõltuvuse \"{0}\" laadimine komponendist \"{1}\" ({2})",
      "loadPathDependencyError": "Tee sõltuvuse \"{0}\" laadimine komponendist \"{1}\" ({2}) nurjus.\r\nAlgne tõrge: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Tee sõltuvuse \"{0}\" laadimine komponendist \"{1}\" ({2}) nurjus, sest ühte teist sõltuvust ei saanud laadida.",
      "loadEntryPointError": "Sisendpunkti laadimine komponendist \"{0}\" ({1}) nurjus.\r\nAlgne tõrge: {2}",
      "loadComponentReturnsEmptyError": "LoadComponent() tagastas komponendi \"{0}\" ({1}) jaoks tühja objekti.",
      "loadComponentReturnsDefaultEmptyError": "LoadComponent() tagastas komponendi \"{0}\" ({1}) jaoks tühja vaikeatribuudiga objekti.",
      "moduleHasUndeclaredDependencyError": "Komponendi \"{0}\" ({1}) sisendpunktil on sõltuvus \"{2}\", mida pole manifestis deklareeritud.",
      "loadScriptWithStringError": "Funktsioonis loadScript pole string 2. parameetrina lubatud. Kasutage selle asemel funktsiooni ILoadScriptOptions.",
      "tooManyManifestsError": "Komponendi \"{2}\" kohta leiti {0} manifesti (versioonid {1}).",
      "tooManyCompatibleVersionsError": "Komponendi \"{2}\" versiooni \"{3}\" kohta leiti {0} ühilduvat versiooni ({1}).",
      "tooManyComponentsError": "ID \"{0}\" kohta leiti liiga palju komponente.",
      "noComponentFoundError": "Komponenti, mille ID on {0}, ei leitud.",
      "deleteComponentLog": "Komponendi \"{0}\" versiooni \"{1}\" kustutamine poest.",
      "browserNotSupportedError": "Seda brauseriversiooni ei toetata.\r\nVõtke kasutusele brauseri uusim versioon.",
      "ie9OrOlderNotSupportedError": "See leht ei toeta varasemaid versioone kui Internet Explorer 10. Värskendage veebibrauserit.",
      "firefox43OrOlderNotSupportedError": "See leht ei toeta versioone, mis on varasemaid kui Mozilla Firefox 44. Värskendage veebibrauserit.",
      "resourceNotFoundError": "Komponendi \"{1}\" ({2}) ressurssi \"{0}\" ei leitud manifesti laaduri konfiguratsioonist.",
      "noFailoverPathError": "Funktsiooni resolveAddress() ei saa kutsuda, kui komponendil pole rikkeümberlülitusteed",
      "urlStatusLocalhostFileNotFoundError": "URL-i \"{3}\" laadimine komponendis\"{0}\" ({1}) ressursi \"{2}\" jaoks nurjus. Serverist ei leitud faili.\r\nVeenduge, et käitate käsku \"gulp serve\".",
      "urlStatusFileNotFoundError": "URL-i \"{3}\" laadimine komponendis\"{0}\" ({1}) ressursi \"{2}\" jaoks nurjus. Serverist ei leitud faili.",
      "urlStatusForbiddenError": "URL-i \"{3}\" laadimine komponendis\"{0}\" ({1}) ressursi \"{2}\" jaoks nurjus. Juurdepääs failile on keelatud.",
      "urlStatusClientErrorError": "URL-i \"{3}\" laadimine komponendis\"{0}\" ({1}) ressursi \"{2}\" jaoks nurjus. Faili taotlemisel ilmnes tõrge.",
      "urlStatusServerErrorError": "URL-i \"{3}\" laadimine komponendis\"{0}\" ({1}) ressursi \"{2}\" jaoks nurjus. Serveris ilmnes probleem.",
      "urlStatusLocalhostNetworkErrorError": "URL-i \"{3}\" laadimine komponendis \"{0}\" ({1}) ressursi \"{2}\" jaoks nurjus. Ilmnes võrguprobleem.\r\nVeenduge, et käitate käsku \"gulp serve\" ja olete käivitanud käsu \"gulp trust-dev-cert\".",
      "urlStatusHttpsNetworkErrorError": "URL-i \"{3}\" laadimine komponendis\"{0}\" ({1}) ressursi \"{2}\" jaoks nurjus. Ilmnes võrguprobleem.\r\nProbleem võib olla seotud HTTPS-serdiga. Veenduge, et teil oleks õige sert.",
      "urlStatusNetworkErrorError": "URL-i \"{3}\" laadimine komponendis\"{0}\" ({1}) ressursi \"{2}\" jaoks nurjus. Ilmnes võrguprobleem.",
      "urlStatusUndefinedError": "URL-i \"{3}\" laadimine komponendis\"{0}\" ({1}) ressursi \"{2}\" jaoks nurjus tundmatute probleemide tõttu.",
      "isUndefinedValidateError": "Muutuja \"{0}\" väärtus ei tohi olla määratlemata",
      "failedToCreateGlobalVariableError": "Globaalmuutujat \"{0}\" ei saanud skriptist \"{1}\" luua",
      "dependencyLoadError": "Moodulit \"{0}\" ei saanud laadida, kuna sõltuvust {1} polnud laaditud",
      "missingPathDependencyError": "Tee sõltuvus \"{0}\" puudub komponendist \"{1}\" ({2}). Olemasolevad teesõltuvused: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Tõrge silumisskripti laadimisel. Kontrollige, kas server töötab ja parameeter \"{0}\" on õige.",
      "errorLoadingDebugScriptHTTP": "Tõrge silumisskripti laadimisel. Kontrollige, kas server töötab, parameeter \"{0}\" on õige ja ebaturvaliste skriptide laadimine on lubatud. Võiksite kasutada ka arendusserti ja silumisskriptide teenindamist HTTPS-i kaudu.",
      "errorLoadingDebugScriptMalformed": "Tõrge silumisskripti laadimisel. Silumise URL ({0}) näib olevat moonutatud.",
      "errorLoadingDebugScriptUnknown": "Tundmatu tõrge silumisskripti laadimisel.",
      "errorLoadingDebugLoaderTitle": "Tõrge silumislaaduri laadimisel.",
      "errorLoadingDebugManifestTitle": "Tõrge silumismanifestide laadimisel.",
      "errorLoadingUnknownTitle": "Tõrge silumisskriptide laadimisel."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Komponent või lähtestajafunktsioon on puudu.",
      "closeDeveloperToolsAriaLabel": "Sulgege arendusriistad."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Hoiatus!",
      "warningLine1": "Selle tööriista kasutamisega kaasnevad võimalikud turbeohud, mille tagajärjel võivad teised inimesed saada juurdepääsu teie isiklikele Office 365 andmetele (dokumentidele, meilidele, vestlustele ja muule). Enne jätkamist veenduge, et usaldate isikut või asutust, kes palus teil seda tööriista kasutada.",
      "warningLine2": "Lugege lisateavet siit: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Silumismanifestide laadimisel ilmnes tõrge.",
      "debugManifestErrorDismissButtonText": "Unusta"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Kas soovite lubada silumisskriptid?",
      "allowDebugLoaderTitle": "Kas soovite lubada silumislaaduri?",
      "allowDebugLoaderAndManifestsTitle": "Kas soovite lubada silumislaaduri ja -skriptid?",
      "debugManifestLoadingWarning": "HOIATUS. See leht sisaldab ebaturvalisi skripte, mis võivad laadimisel teie arvutit kahjustada. Jätkake ainult juhul, kui usaldate arendajat ja mõistate riske.",
      "debugManifestLoadingWarning2": "Kui te pole kindel, klõpsake nuppu {0}.",
      "debugManifestLoadingConfirm": "Laadi silumisskriptid",
      "debugManifestLoadingCancel": "Ära laadi silumisskripte",
      "debugManifestLoadingCalloutText": "Kui te ei tea, mida teha, klõpsake siin."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Laadimine...",
      "developerToolsTabLoadingUnknownError": "Arendusriistade mooduli laadimisel ilmnes tundmatu tõrge."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifestid",
      "noManifestSelected": "Manifesti pole valitud"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Jõudlus",
      "ErrorAccessingPerfDataErrorMessage": "Jõudlusandmeid ei saanud tuua: objekt on tühi või määramata.",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP ümbersuunamise jõudlusandmetele juurdepääsemisel ilmnes probleem.",
      "ErrorParsingPercievedLatencyErrorMessage": "Tajutava latentsusaja andmete sõelumisel tuvastati tõrge.",
      "ErrorParsingApiDataErrorMessage": "API andmete sõelumisel tuvastati tõrge.",
      "UnkownPerformanceDataErrorMessage": "Ilmnes tundmatu tõrge: {0}",
      "DefaultWebPartName": "Veebiosa",
      "ServerResponseLabel": "Serveri vastus",
      "ApplicationInitializationLabel": "Rakenduse lähtestamine",
      "ScriptFetchEvalLabel": "Skripti toomine ja hindamine",
      "SpLoaderStartLabel": "SPFx-i lähtestamine",
      "PageRenderLabel": "Lehe renderdus",
      "LeftNavRenderLabel": "Vasakpoolse navigeerimisriba renderdus",
      "CanvasRenderLabel": "Lõuendi renderdus",
      "LayoutRenderLabel": "Paigutuse renderdus",
      "RedirectResponseLabel": "Ümbersuunamise vastus",
      "AppLoadLabel": "Rakenduse laadimine",
      "RenderWebPartsLabel": "Veebiosade renderdus",
      "TotalRenderTimeLabel": "Kokku",
      "GeneralErrorMessage": "Kahjuks läks jõudlusandmete toomisel midagi valesti.",
      "ErrorMessagePrefix": "Tõrketeade: {0}",
      "PerformanceDataHint": "Märkus: värskendage veebiosa lisamise või eemaldamise järel lehte, et näha uuendatud jõudlusandmeid.",
      "ModulesLoadedLegendLabel": "Laaditud moodulid",
      "InitializationLegendLabel": "Lähtestamine",
      "RenderTimeLegendLabel": "Renderdusaeg",
      "InitializationTimeLabel": "Lähtestamise aeg",
      "ModuleLoadingTimeLabel": "Mooduli laadimise aeg",
      "ModuleLazyLoadingDelayLabel": "Mooduli laadimine on edasi lükatud",
      "DataFetchTimeLabel": "Andmete toomise aeg",
      "DataFetchLegendLabel": "Andmete toomine",
      "ItemsColumnHeader": "Üksused",
      "DurationColumnHeader": "Kestus",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Pole saadaval"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Jälitus",
      "EmptyTraceData": "Jälitusandmeid ei laaditud.",
      "ExportCSVButtonLabel": "Ekspordi CSV-failina",
      "LevelHeaderLabel": "Tase",
      "MessageHeaderLabel": "Sõnum",
      "ScopeHeaderLabel": "Ulatus",
      "SourceHeaderLabel": "Allikas",
      "TimestampHeaderLabel": "Ajatempel",
      "TimestampFormat": "{2}.{1}.{0} {3}:{4}:{5}:{6}",
      "ErrorAccessingTraceDataErrorMessage": "Jälitusandmetele juurdepääsemisel ilmnes probleem."
    }
  };

  strings.default = strings;
  return strings;
});
define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Programmet kan ikke indlæses på denne side. Brug knappen Tilbage i browseren til at prøve igen. Hvis problemet fortsætter, skal du kontakte administratoren af webstedet og give dem oplysninger i tekniske detaljer.",
      "platformFailedToLoadError": "Platformen kunne ikke indlæses. Id: \"{0}\", navn: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Platformen kunne ikke indlæses. Id: \"{0}\", navn: \"{1}\".\r\nFejl: {2}",
      "applicationFailedToInitializeError": "Der opstod en fejl under initialisering af programmet. Fejl: {0}",
      "invalidPreloadedDataError": "Der er ugyldige forudindlæste data.",
      "manifestNotFoundByIdError": "Manifestet blev ikke fundet for komponent-id'et \"{0}\".",
      "manifestNotFoundError": "Manifestet blev ikke fundet for komponent-id'et \"{0}\" og version \"{1}\".",
      "systemConfigDisabledError": "System.config() understøttes ikke. Brug et manifest til at angive konfigurationen.",
      "loadComponentLog": "Indlæser komponenten \"{0}\" ({1}).",
      "loadComponentEndLog": "Komponenten \"{0}\" ({1}) er indlæst.",
      "loadComponentRetryLog": "Indlæser komponenten \"{0}\" ({1}). Forsøg {2} af {3}.",
      "loadComponentError": "Komponenten \"{0}\" ({1}) kunne ikke indlæses.\r\nOprindelig fejl: {2}",
      "loadComponentMaxRetriesError": "Har forsøgt at indlæse komponenten \"{0}\" ({1}) {2} gange uden held.",
      "loadComponentDependencyError": "Komponentafhængigheden \"{0}\" kunne ikke indlæses fra komponenten \"{1}\" ({2}).\r\nOprindelig fejl: {3}",
      "loadComponentDependencyFailoverPathError": "Komponentafhængigheden \"{0}\" med failoverstien \"{1}\" kunne ikke indlæses fra komponenten \"{2}\" ({3}).\r\nOprindelig fejl: {4}",
      "loadPathDependencyLog": "Indlæser stiafhængigheden \"{0}\" fra komponenten \"{1}\" ({2})",
      "loadPathDependencyError": "Stiafhængigheden \"{0}\" fra komponenten \"{1}\" ({2}) kunne ikke indlæses.\r\nOprindelig fejl: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Stiafhængigheden \"{0}\" kunne ikke indlæses fra komponenten \"{1}\" ({2}) på grund af en anden afhængighed, der ikke kunne indlæses.",
      "loadEntryPointError": "Indgangspunktet fra komponenten \"{0}\" ({1}) kunne ikke indlæses.\r\nOprindelig fejl: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() returnerede et tomt objekt for komponenten \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() returnerede et objekt med en tom standardegenskab for komponenten \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "Indsætningspunktet for komponenten \"{0}\" ({1}) har en afhængighed af \"{2}\", der ikke er angivet i manifestet.",
      "loadScriptWithStringError": "loadScript-funktionen tillader ikke en streng som 2. parameter. Brug ILoadScriptOptions i stedet.",
      "tooManyManifestsError": "Der blev fundet {0} manifester (version {1}) for komponenten \"{2}\".",
      "tooManyCompatibleVersionsError": "Der blev fundet {0} kompatible versioner ({1}) for komponenten \"{2}\" version \"{3}\".",
      "tooManyComponentsError": "Der blev fundet for mange komponenter for id'et \"{0}\".",
      "noComponentFoundError": "Ingen komponent fundet for id \"{0}\".",
      "deleteComponentLog": "Sletning af komponenten \"{0}\" version \"{1}\" fra butikken.",
      "browserNotSupportedError": "Denne version af din browser understøttes ikke.\r\nOpdater din browser til den nyeste version.",
      "ie9OrOlderNotSupportedError": "Denne side understøtter ikke Internet Explorer-versioner, der er ældre end version 10. Opdater din webbrowser.",
      "firefox43OrOlderNotSupportedError": "Denne side understøtter ikke versioner af Mozilla Firefox, der er ældre end version 44. Opdater din webbrowser.",
      "resourceNotFoundError": "Ressourcen \"{0}\" blev ikke fundet i manifestets indlæsningskonfiguration for komponenten \"{1}\" ({2}).",
      "noFailoverPathError": "ResolveAddress() kan ikke kaldes på en komponent uden failoversti",
      "urlStatusLocalhostFileNotFoundError": "URL-adressen \"{3}\" for ressourcen \"{2}\" i komponenten \"{0}\" ({1}) kunne ikke indlæses. Filen blev ikke fundet på serveren.\r\nKontrollér, at du kører \"gulp serve\".",
      "urlStatusFileNotFoundError": "URL-adressen \"{3}\" for ressourcen \"{2}\" i komponenten \"{0}\" ({1}) kunne ikke indlæses. Filen blev ikke fundet på serveren.",
      "urlStatusForbiddenError": "URL-adressen \"{3}\" for ressourcen \"{2}\" i komponenten \"{0}\" ({1}) kunne ikke indlæses. Adgang til filen er forbudt.",
      "urlStatusClientErrorError": "URL-adressen \"{3}\" for ressourcen \"{2}\" i komponenten \"{0}\" ({1}) kunne ikke indlæses. Der opstod en fejl under anmodning om filen.",
      "urlStatusServerErrorError": "URL-adressen \"{3}\" for ressourcen \"{2}\" i komponenten \"{0}\" ({1}) kunne ikke indlæses. Der opstod et problem på serveren.",
      "urlStatusLocalhostNetworkErrorError": "URL-adressen \"{3}\" for ressourcen \"{2}\" i komponenten \"{0}\" ({1}) kunne ikke indlæses. Der opstod et netværksproblem.\r\nKontrollér, at du kører \"gulp serve\", og du har kørt \"gulp trust-dev-cert\".",
      "urlStatusHttpsNetworkErrorError": "URL-adressen \"{3}\" for ressourcen \"{2}\" i komponenten \"{0}\" ({1}) kunne ikke indlæses. Der opstod et netværksproblem.\r\nDette kan være et problem med et HTTPS-certifikat. Kontrollér, at du har det rigtige certifikat.",
      "urlStatusNetworkErrorError": "URL-adressen \"{3}\" for ressourcen \"{2}\" i komponenten \"{0}\" ({1}) kunne ikke indlæses. Der opstod et netværksproblem.",
      "urlStatusUndefinedError": "URL-adressen \"{3}\" for ressourcen \"{2}\" i komponenten \"{0}\" ({1}) kunne ikke indlæses på grund af ukendte problemer.",
      "isUndefinedValidateError": "Værdien for \"{0}\" må ikke være udefineret",
      "failedToCreateGlobalVariableError": "Det lykkedes ikke at oprette den globale variabel \"{0}\" fra scriptet \"{1}\"",
      "dependencyLoadError": "Modulet \"{0}\" kunne ikke indlæses, fordi afhængigheden {1} ikke blev indlæst",
      "missingPathDependencyError": "Manglende stiafhængighed \"{0}\" fra komponenten \"{1}\" ({2}). Eksisterende stiafhængigheder: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Der opstod en fejl under indlæsning af fejlfindingsscriptet. Kontrollér, at serveren kører, og at URL-adressen for parameteren \"{0}\" er korrekt.",
      "errorLoadingDebugScriptHTTP": "Der opstod en fejl under indlæsning af fejlfindingsscriptet. Kontrollér, at serveren kører, at URL-adressen for parameteren \"{0}\" er korrekt, og at indlæsning af usikre scripts er tilladt. Overvej også at bruge et certifikat til udvikling og at betjene fejlfindingsscripts ved hjælp af HTTPS.",
      "errorLoadingDebugScriptMalformed": "Der opstod en fejl under indlæsning af fejlfindingsscriptet. URL-adressen ({0}) til fejlfinding er tilsyneladende forkert udformet.",
      "errorLoadingDebugScriptUnknown": "Ukendt fejl under indlæsning af fejlfindingsscriptet.",
      "errorLoadingDebugLoaderTitle": "Der opstod en fejl under indlæsning af fejlfindingsindlæseren.",
      "errorLoadingDebugManifestTitle": "Der opstod en fejl under indlæsning af fejlfindingsmanifester.",
      "errorLoadingUnknownTitle": "Der opstod en fejl under indlæsning af fejlfindingsscripts."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Komponent- eller initialiseringsfunktionen mangler.",
      "closeDeveloperToolsAriaLabel": "Luk udviklingsværktøjerne."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Advarsel!",
      "warningLine1": "Brug af dette værktøj udsætter dig for potentielle sikkerhedsrisici, hvilket kan resultere i, at andre kan få adgang til dine personlige Office 365-data (dokumenter, mails, samtaler og meget mere). Kontrollér, at du har tillid til den person eller organisation, der har bedt dig tilgå dette værktøj, før du fortsætter.",
      "warningLine2": "Få mere at vide her: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Der opstod en fejl under indlæsning af fejlfindingsmanifester.",
      "debugManifestErrorDismissButtonText": "Afvis"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Vil du tillade fejlfindingsscripts?",
      "allowDebugLoaderTitle": "Tillad fejlfindingsindlæser?",
      "allowDebugLoaderAndManifestsTitle": "Tillad fejlfindingsindlæser og fejlfindingsscript?",
      "debugManifestLoadingWarning": "ADVARSEL! Denne side indeholder usikre scripts, som potentielt kan skade din computer, hvis du indlæser dem! Du bør ikke fortsætte, medmindre du har tillid til udvikleren og er klar over risiciene.",
      "debugManifestLoadingWarning2": "Hvis du er usikker, skal du klikke på {0}.",
      "debugManifestLoadingConfirm": "Indlæs fejlfindings-scripts",
      "debugManifestLoadingCancel": "Indlæs ikke fejlfindings-scripts",
      "debugManifestLoadingCalloutText": "Klik her, hvis du ikke ved, hvad du skal gøre."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Indlæser...",
      "developerToolsTabLoadingUnknownError": "Der opstod en ukendt fejl under indlæsning af modulet med udviklingsværktøjer."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifester",
      "noManifestSelected": "Der er ikke valgt et manifest"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Ydeevne",
      "ErrorAccessingPerfDataErrorMessage": "Ydeevnedataene kunne ikke hentes: objektet er null eller ikke defineret.",
      "ErrorAccessingRedirectDataErrorMessage": "Der opstod et problem under forsøget på at få adgang til ydeevnedataene for HTTP-omdirigeringen.",
      "ErrorParsingPercievedLatencyErrorMessage": "Der blev registreret en fejl under fortolkning af de beregnede ventetidsdata.",
      "ErrorParsingApiDataErrorMessage": "Der blev registreret en fejl under fortolkning af API-dataene.",
      "UnkownPerformanceDataErrorMessage": "Der opstod en ukendt fejl: {0}",
      "DefaultWebPartName": "Webdel",
      "ServerResponseLabel": "Serversvar",
      "ApplicationInitializationLabel": "Programinitialisering",
      "ScriptFetchEvalLabel": "Evaluering og hentning af script",
      "SpLoaderStartLabel": "Initialisering af SPFx",
      "PageRenderLabel": "Sidegengivelse",
      "LeftNavRenderLabel": "Gengivelse af venstre navigation",
      "CanvasRenderLabel": "Gengivelse af lærred",
      "LayoutRenderLabel": "Layoutgengivelse",
      "RedirectResponseLabel": "Omdiriger svar",
      "AppLoadLabel": "Programindlæsning",
      "RenderWebPartsLabel": "Gengiv webdele",
      "TotalRenderTimeLabel": "I alt",
      "GeneralErrorMessage": "Der opstod en fejl under hentning af ydeevnedataene.",
      "ErrorMessagePrefix": "Fejlmeddelelse: {0}",
      "PerformanceDataHint": "Bemærk! Når du tilføjer eller fjerner en webdel, skal du opdatere siden for at få vist opdaterede ydeevnedata.",
      "ModulesLoadedLegendLabel": "Indlæste moduler",
      "InitializationLegendLabel": "Initialisering",
      "RenderTimeLegendLabel": "Gengivelsestid",
      "InitializationTimeLabel": "Initialiseringstid",
      "ModuleLoadingTimeLabel": "Indlæsningstid for modul",
      "ModuleLazyLoadingDelayLabel": "Forsinket indlæsning af modul",
      "DataFetchTimeLabel": "Datahentningstid",
      "DataFetchLegendLabel": "Hentning af data",
      "ItemsColumnHeader": "Elementer",
      "DurationColumnHeader": "Varighed",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Ikke tilgængelig"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Sporing",
      "EmptyTraceData": "Der er ikke indlæst nogen spor.",
      "ExportCSVButtonLabel": "Eksportér CSV-fil",
      "LevelHeaderLabel": "Niveau",
      "MessageHeaderLabel": "Meddelelse",
      "ScopeHeaderLabel": "Omfang",
      "SourceHeaderLabel": "Kilde",
      "TimestampHeaderLabel": "Tidsstempel",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Der opstod et problem under forsøget på at få adgang til sporingsdataene."
    }
  };

  strings.default = strings;
  return strings;
});
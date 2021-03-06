define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Kan ikke laste inn programmet på denne siden. Bruk Tilbake-knappen i nettleseren for å prøve på nytt. Hvis problemet vedvarer, kontakter du administratoren for området og gir vedkommende informasjonen i Teknisk informasjon.",
      "platformFailedToLoadError": "Kan ikke laste inn plattformen. ID: {0}. Navn: {1}.",
      "platformFailedToLoadWithMessageError": "Kan ikke laste inn plattform. ID: {0}. Navn: {1}.\r\nFeil: {2}",
      "applicationFailedToInitializeError": "Feil under initialisering av programmet. Feil: {0}",
      "invalidPreloadedDataError": "Ugyldige forhåndsinnlastede data.",
      "manifestNotFoundByIdError": "Finner ikke manifestet for komponent-ID-en {0}.",
      "manifestNotFoundError": "Finner ikke manifest for komponent-ID {0} og versjon {1}.",
      "systemConfigDisabledError": "System.config() støttes ikke. Bruk et manifest til å angi konfigurasjonen.",
      "loadComponentLog": "Laster inn komponenten {0} ({1}).",
      "loadComponentEndLog": "Komponenten {0} ({1}) er lastet inn.",
      "loadComponentRetryLog": "Laster inn komponenten {0} ({1}). Forsøk {2} av {3}.",
      "loadComponentError": "Kan ikke laste inn komponenten {0} ({1}).\r\nOpprinnelig feil: {2}",
      "loadComponentMaxRetriesError": "Prøvde å laste inn komponenten {0} ({1}) {2} ganger uten hell.",
      "loadComponentDependencyError": "Kan ikke laste inn komponentavhengigheten {0} fra komponenten {1} ({2}).\r\nOpprinnelig feil: {3}",
      "loadComponentDependencyFailoverPathError": "Kan ikke laste inn komponentavhengigheten {0} med failover-bane {1} fra komponenten {2} ({3}).\r\nOpprinnelig feil: {4}",
      "loadPathDependencyLog": "Laster inn baneavhengighet {0} fra komponenten {1} ({2})",
      "loadPathDependencyError": "Kan ikke laste inn baneavhengigheten {0} fra komponenten {1} ({2}).\r\nOpprinnelig feil: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Kan ikke laste inn baneavhengighet {0} fra komponenten {1} ({2}) på grunn av en annen avhengighet som ikke ble lastet inn.",
      "loadEntryPointError": "Kan ikke laste inn inngangspunktet fra komponenten {0} ({1}).\r\nOpprinnelg feil: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() returnerte et tomt objekt for komponenten {0} ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() returnerte et objekt med en tom standardegenskap for komponenten {0} ({1}).",
      "moduleHasUndeclaredDependencyError": "Inngangspunktet for komponenten {0} ({1}) er avhengig av {2} som ikke er angitt i manifestet.",
      "loadScriptWithStringError": "loadScript-funksjonen tillater ikke en streng som andre parameter. Bruk ILoadScriptOptions i stedet.",
      "tooManyManifestsError": "Finner {0} manifester (versjoner {1}) for komponenten {2}.",
      "tooManyCompatibleVersionsError": "Finner {0} kompatible versjoner ({1}) for komponenten {2} versjon {3}.",
      "tooManyComponentsError": "Fant for mange komponenter for ID-en {0}.",
      "noComponentFoundError": "Finner ingen komponent for ID-en {0}.",
      "deleteComponentLog": "Sletter komponenten {0}, versjon {1} fra lageret.",
      "browserNotSupportedError": "Støtter ikke denne versjonen av nettleseren.\r\nOppdater nettleseren til den nyeste versjonen.",
      "ie9OrOlderNotSupportedError": "Denne siden har ikke støtte for Internet Explorer-versjoner som er eldre enn versjon 10. Oppdater nettleseren.",
      "firefox43OrOlderNotSupportedError": "Denne siden støtter ikke Mozilla Firefox-versjoner som er eldre enn versjon 44. Oppdater nettleseren.",
      "resourceNotFoundError": "Finner ikke ressursen {0} i lasterkonfigurasjonen av manifestet for komponenten {1} ({2}).",
      "noFailoverPathError": "Kan ikke kalle resolveAddress() for en komponent uten failover-bane",
      "urlStatusLocalhostFileNotFoundError": "Kan ikke laste inn nettstedsadressen {3} for ressursen {2} i komponenten {0} ({1}). Finner ikke filen på serveren.\r\nKontroller at du kjører gulp serve.",
      "urlStatusFileNotFoundError": "Kan ikke laste inn nettstedsadressen {3} for ressursen {2} i komponenten {0} ({1}). Finner ikke filen på serveren.",
      "urlStatusForbiddenError": "Kan ikke laste inn nettstedsadressen {3} for ressursen {2} i komponenten {0} ({1}). Tilgang til filen er forbudt.",
      "urlStatusClientErrorError": "Kan ikke laste inn nettstedsadressen {3} for ressursen {2} i komponenten {0} ({1}). Det oppstod en feil under forespørsel om filen.",
      "urlStatusServerErrorError": "Kan ikke laste inn nettstedsadressen {3} for ressursen {2} i komponenten {0} ({1}). Det oppstod et problem på serveren.",
      "urlStatusLocalhostNetworkErrorError": "Kan ikke laste inn nettadressen {3} for ressursen {2} i komponenten {0} ({1}). Det oppstod et nettverksproblem.\r\nKontroller at du kjører 'gulp serve', og at du har kjørt 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "Kan ikke laste inn nettstedsadressen {3} for ressursen {2} i komponenten {0} ({1}). Det oppstod et nettverksproblem\r\nDette kan være et problem med et HTTPS-sertifikat. Kontroller at du har riktig sertifikat.",
      "urlStatusNetworkErrorError": "Kan ikke laste inn nettstedsadressen {3} for ressursen {2} i komponenten {0} ({1}). Det oppstod et nettverksproblem.",
      "urlStatusUndefinedError": "Kan ikke laste inn nettstedsadressen {3} for ressursen {2} i komponenten {0} ({1}) på grunn av ukjente problemer.",
      "isUndefinedValidateError": "Verdien for {0} kan ikke være udefinert",
      "failedToCreateGlobalVariableError": "Kan ikke opprette den globale variabelen {0} fra skriptet {1}",
      "dependencyLoadError": "Kan ikke laste inn modulen {0} fordi avhengigheten {1} ikke ble lastet inn",
      "missingPathDependencyError": "Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Feil under innlasting av feilsøkingsskript. Kontroller at serveren kjører, og at nettadressen til parameteren {0} er riktig.",
      "errorLoadingDebugScriptHTTP": "Feil under innlasting av feilsøkingsskript. Kontroller at serveren kjører, at nettadressen til parameteren {0} er riktig, og at det er tillatt å laste inn usikre skript. Vurder også å bruke et utviklingssertifikat og kjøre feilsøkingsskript over HTTPS.",
      "errorLoadingDebugScriptMalformed": "Feil under innlasting av feilsøkingsskript. Nettadressen for feilsøking ({0}) ser ut til å være feilformatert.",
      "errorLoadingDebugScriptUnknown": "Ukjent feil under innlasting av et feilsøkingsskript.",
      "errorLoadingDebugLoaderTitle": "Feil under innlasting av feilsøkingslaster.",
      "errorLoadingDebugManifestTitle": "Feil under innlasting av feilsøkingsmanifester.",
      "errorLoadingUnknownTitle": "Feil under innlasting av feilsøkingsskript."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Funksjonen for manglende komponent eller initialisering.",
      "closeDeveloperToolsAriaLabel": "Lukk utviklerverktøy."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Advarsel!",
      "warningLine1": "Bruk av dette verktøyet utsetter deg for potensielle sikkerhetstrusler som kan føre til at andre får tilgang til personlige Office 365-data (dokumenter, e-post, samtaler og mer). Pass på at du stoler på personen eller organisasjonen som ba deg om å få tilgang til dette verktøyet, før du fortsetter.",
      "warningLine2": "Les mer her: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Det oppstod en feil under innlasting av feilsøkingsmanifester.",
      "debugManifestErrorDismissButtonText": "Lukk"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Tillate feilsøkingsskript?",
      "allowDebugLoaderTitle": "Tillate feilsøkingslaster?",
      "allowDebugLoaderAndManifestsTitle": "Tillate feilsøkingslaster og feilsøkingsskript?",
      "debugManifestLoadingWarning": "ADVARSEL! Denne siden inneholder usikre skript som kan skade datamaskinen hvis de lastes inn. Ikke fortsett med mindre du stoler på utvikleren og forstår risikoene det innebærer.",
      "debugManifestLoadingWarning2": "Hvis du er usikker, klikker du på {0}.",
      "debugManifestLoadingConfirm": "Last inn feilsøkingsskript",
      "debugManifestLoadingCancel": "Ikke last inn feilsøkingsskript",
      "debugManifestLoadingCalloutText": "Hvis du ikke vet hva du skal gjøre, kan du klikke her."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Laster inn ...",
      "developerToolsTabLoadingUnknownError": "Ukjent feil under lasting av utviklerverktøy-modulen."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifester",
      "noManifestSelected": "Ingen manifest er valgt"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Ytelse",
      "ErrorAccessingPerfDataErrorMessage": "Kan ikke hente ytelsesdataene: objektet er null eller udefinert.",
      "ErrorAccessingRedirectDataErrorMessage": "Det oppstod et problem med å få tilgang til ytelsesdata for HTTP-omadressering.",
      "ErrorParsingPercievedLatencyErrorMessage": "Det ble funnet en feil under analysering av data om oppfattet ventetid.",
      "ErrorParsingApiDataErrorMessage": "Det ble funnet en feil under analysering av API-data.",
      "UnkownPerformanceDataErrorMessage": "Det oppstod en ukjent feil: {0}",
      "DefaultWebPartName": "Nettdel",
      "ServerResponseLabel": "Svar fra server",
      "ApplicationInitializationLabel": "Programinitialisering",
      "ScriptFetchEvalLabel": "Skript for henting og evaluering",
      "SpLoaderStartLabel": "Initialisering av SPFx",
      "PageRenderLabel": "Sidegjengivelse",
      "LeftNavRenderLabel": "Gjengivelse av venstre navigasjon",
      "CanvasRenderLabel": "Lerretgjengivelse",
      "LayoutRenderLabel": "Gjengivelse av oppsett",
      "RedirectResponseLabel": "Omadressering av svar",
      "AppLoadLabel": "Programinnlasting",
      "RenderWebPartsLabel": "Gjengivelse av nettdeler",
      "TotalRenderTimeLabel": "Totalt",
      "GeneralErrorMessage": "Beklager, men noe gikk galt under henting av ytelsesdata.",
      "ErrorMessagePrefix": "Feilmelding: {0}",
      "PerformanceDataHint": "Obs!  Når du legger til eller fjerner en nettdel, må du oppdatere siden for å se oppdaterte ytelsesdata.",
      "ModulesLoadedLegendLabel": "Innlastede moduler",
      "InitializationLegendLabel": "Initialisering",
      "RenderTimeLegendLabel": "Gjengivelsestid",
      "InitializationTimeLabel": "Initialiseringstid",
      "ModuleLoadingTimeLabel": "Innlastingstid for modul",
      "ModuleLazyLoadingDelayLabel": "Forsinket innlasting av modul",
      "DataFetchTimeLabel": "Datahentingstid",
      "DataFetchLegendLabel": "Datahenting",
      "ItemsColumnHeader": "Elementer",
      "DurationColumnHeader": "Varighet",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "I/T"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Sporing",
      "EmptyTraceData": "Ingen sporinger ble lastet inn.",
      "ExportCSVButtonLabel": "Eksporter CSV",
      "LevelHeaderLabel": "Nivå",
      "MessageHeaderLabel": "Melding",
      "ScopeHeaderLabel": "Omfang",
      "SourceHeaderLabel": "Kilde",
      "TimestampHeaderLabel": "Tidsangivelse",
      "TimestampFormat": "{0}.{1}.{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Det oppstod et problem med å få tilgang til sporingsdataene."
    }
  };

  strings.default = strings;
  return strings;
});
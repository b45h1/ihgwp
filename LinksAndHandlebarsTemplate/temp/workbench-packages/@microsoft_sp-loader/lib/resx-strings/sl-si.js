define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Aplikacije ni mogoče naložiti na tej strani. Poskusite znova z gumbom »Nazaj« v brskalniku. Če težave ne morete odpraviti, se obrnite na skrbnika spletnega mesta in mu posredujte informacije iz razdelka s tehničnimi podrobnostmi.",
      "platformFailedToLoadError": "Platforme ni bilo mogoče naložiti. ID: »{0}«, ime: »{1}«",
      "platformFailedToLoadWithMessageError": "Platforme ni bilo mogoče naložiti. ID: »{0}«, ime: »{1}«.\r\nNapaka: {2}",
      "applicationFailedToInitializeError": "Pri inicializaciji aplikacije je prišlo do napake. Napaka: {0}",
      "invalidPreloadedDataError": "Neveljavni vnaprej naloženi podatki.",
      "manifestNotFoundByIdError": "Manifesta ni mogoče najti za ID komponente »{0}«.",
      "manifestNotFoundError": "Ni mogoče najti manifesta za ID komponente »{0}« in različico »{1}«.",
      "systemConfigDisabledError": "Datoteka System.config() ni podprta. Za navedbo konfiguracije uporabite manifest.",
      "loadComponentLog": "Nalaganje komponente »{0}« ({1}).",
      "loadComponentEndLog": "Komponenta »{0}« ({1}) je naložena.",
      "loadComponentRetryLog": "Nalaganje komponente »{0}« ({1}). Poskus {2} od {3}.",
      "loadComponentError": "Komponente »{0}« ({1}) ni mogoče naložiti.\r\nIzvirna napaka: {2}",
      "loadComponentMaxRetriesError": "Tolikokrat je bilo neuspešno izvedeno nalaganje komponente »{0}« ({1}): {2}.",
      "loadComponentDependencyError": "Komponente odvisnosti »{0}« ni bilo mogoče naložiti iz komponente »{1}« ({2}).\r\nIzvirna napaka: {3}",
      "loadComponentDependencyFailoverPathError": "Komponente odvisnosti »{0}« s potjo za preklop na drug strežnik ob izpadu »{1}« ni bilo mogoče naložiti iz komponente »{2}« ({3}).\r\nIzvirna napaka: {4}",
      "loadPathDependencyLog": "Nalaganje odvisnosti poti »{0}« iz komponente »{1}« ({2})",
      "loadPathDependencyError": "Poti odvisnosti »{0}« iz komponente »{1}« ({2}) ni mogoče naložiti.\r\nIzvirna napaka: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Ni mogoče naložiti odvisnosti poti »{0}« iz komponente »{1}« ({2}) zaradi druge odvisnosti, ki je ni bilo mogoče naložiti.",
      "loadEntryPointError": "Vstopne točke iz komponente »{0}« ({1}) ni mogoče naložiti.\r\nIzvirna napaka: {2}",
      "loadComponentReturnsEmptyError": "Komponenta loadComponent() je vrnila prazen predmet za komponento »{0}« ({1}).",
      "loadComponentReturnsDefaultEmptyError": "Komponenta loadComponent() je vrnila predmet s privzeto prazno lastnostjo za komponento »{0}« ({1}).",
      "moduleHasUndeclaredDependencyError": "Vstopna točka za komponento »{0}« ({1}) je odvisna od »{2}«, ki ni določen v manifestu.",
      "loadScriptWithStringError": "Funkcija »loadScript« ne dovoljuje niza za drugi parameter. Namesto tega uporabite »ILoadScriptOptions«.",
      "tooManyManifestsError": "Za komponento »{2}« je bilo najdenih toliko manifestov: {0} (različice {1}).",
      "tooManyCompatibleVersionsError": "Za komponento »{2}« različice »{3}« je bilo najdenih toliko združljivih različic: {0} ({1}).",
      "tooManyComponentsError": "Za ID »{0}« je bilo najdenih preveč komponent.",
      "noComponentFoundError": "Nobene komponente ni mogoče najti za ID »{0}«.",
      "deleteComponentLog": "Brisanje komponento »{0}« različice »{1}« iz trgovine.",
      "browserNotSupportedError": "Ta različica brskalnika ni podprta.\r\nPosodobite brskalnik na najnovejšo različico.",
      "ie9OrOlderNotSupportedError": "Ta stran ne podpira izdaje Internet Explorerja, starejše od različice 10. Posodobite spletni brskalnik.",
      "firefox43OrOlderNotSupportedError": "Ta stran ne podpira izdaj brskalnika Mozilla Firefox, starejših od različice 44. Posodobite spletni brskalnik.",
      "resourceNotFoundError": "Vira »{0}« ni mogoče najti v konfiguraciji nakladalnika manifesta za komponento »{1}« ({2}).",
      "noFailoverPathError": "Naslova resolveAddress() ni mogoče poklicati v komponenti s potjo preklopa na drug strežnik pri izpadu",
      "urlStatusLocalhostFileNotFoundError": "Ni mogoče naložiti URL-ja »{3}« za vir »{2}« v komponenti »{0}« ({1}). Datoteke ni mogoče najti v strežniku.\r\nPreverite, ali se izvaja »gulp serve«.",
      "urlStatusFileNotFoundError": "URL-ja »{3}« za vir »{2}« v komponenti »{0}« ({1}) ni mogoče naložiti. Datoteke ni mogoče najti v strežniku.",
      "urlStatusForbiddenError": "Ni mogoče naložiti URL-ja »{3}« za vir »{2}« v komponenti »{0}« ({1}). Dostop do datoteke ni dovoljen.",
      "urlStatusClientErrorError": "Ni mogoče naložiti URL-ja »{3}« za vir »{2}« v komponenti »{0}« ({1}). Prišlo je do napake pri zahtevi za datoteko.",
      "urlStatusServerErrorError": "Ni mogoče naložiti URL-ja »{3}« za vir »{2}« v komponenti »{0}« ({1}). Prišlo je do težave v strežniku.",
      "urlStatusLocalhostNetworkErrorError": "Ni mogoče naložiti URL-ja »{3}« za vir »{2}« v komponenti »{0}« ({1}). Prišlo je do težav z omrežjem.\r\nPrepričajte se, da se izvaja »gulp serve«, in da ste zagnali »gulp trust-dev-cert«.",
      "urlStatusHttpsNetworkErrorError": "Ni mogoče naložiti URL-ja »{3}« za vir »{2}« v komponenti »{0}« ({1}). Prišlo je do težave z omrežjem.\r\nDo tega je morda prišlo zaradi težave s potrdilom HTTPS. Poskrbite, da boste imeli ustrezno potrdilo.",
      "urlStatusNetworkErrorError": "Ni mogoče naložiti URL-ja »{3}« za vir »{2}« v komponenti »{0}« ({1}). Prišlo je do težave z omrežjem.",
      "urlStatusUndefinedError": "Ni mogoče naložiti URL-ja »{3}« za vir »{2}« v komponenti »{0}« ({1}) zaradi neznanih težav.",
      "isUndefinedValidateError": "Vrednost za »{0}« ne sme biti nedefinirana",
      "failedToCreateGlobalVariableError": "Ni mogoče ustvariti globalne spremenljivke »{0}« iz skripta »{1}«",
      "dependencyLoadError": "Modula »{0}« ni mogoče naložiti, ker ni bila naložena odvisnost {1}.",
      "missingPathDependencyError": "Manjka odvisnost »{0}« iz komponente »{1}« ({2}). Obstoječe odvisnosti poti: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Med nalaganjem iskanja napak v skriptu je prišlo do napake. Preverite, ali strežnik deluje in ali je URL parametra »{0}« pravilen.",
      "errorLoadingDebugScriptHTTP": "Med nalaganjem iskanja napak v skriptu je prišlo do napake. Preverite, ali strežnik deluje, ali je URL parametra »{0}« pravilen in ali je dovoljeno nalaganje nevarnih skriptov. Uporabite lahko tudi potrdilo o razvoju in podajanju skriptov za iskanje prek protokola HTTPS.",
      "errorLoadingDebugScriptMalformed": "Med nalaganjem iskanja napak v skriptu je prišlo do napake. Videti je, da je URL ({0}), vključen v iskanje napak, poškodovan.",
      "errorLoadingDebugScriptUnknown": "Med nalaganjem iskanja napak v skriptu je prišlo do neznane napake.",
      "errorLoadingDebugLoaderTitle": "Med nalaganjem iskanja napak v nalagalniku je prišlo do napake.",
      "errorLoadingDebugManifestTitle": "Med nalaganjem iskanja napak v manifestu je prišlo do napake.",
      "errorLoadingUnknownTitle": "Med nalaganjem iskanja napak v skriptih je prišlo do napake."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Manjkajo komponente ali funkcija inicializatorja.",
      "closeDeveloperToolsAriaLabel": "Zapri orodja za razvijalce."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Opozorilo!",
      "warningLine1": "Če uporabite to orodje, ste izpostavljeni morebitnim varnostnim grožnjam, zaradi katerih lahko drugi dobijo dostop do osebnih podatkov v storitvi Office 365 (dokumenti, e-pošte, pogovori in veliko drugega). Pred nadaljevanjem preverite, ali je oseba ali organizacija, ki vas je prosila za dostop, vredna zaupanja.",
      "warningLine2": "Več informacij je na voljo tukaj: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Med nalaganjem iskanja v manifestu napak je prišlo do napake.",
      "debugManifestErrorDismissButtonText": "Opusti"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Ali želite dovoliti iskanje napak v skriptih?",
      "allowDebugLoaderTitle": "Ali dovolite iskanje napak v nalagalniku?",
      "allowDebugLoaderAndManifestsTitle": "Ali želite dovoliti iskanje napak v nalagalniku in skriptih?",
      "debugManifestLoadingWarning": "OPOZORILO: Na tej strani so nevarni skripti. Če jih naložite, bi lahko potencialno škodovali vašemu računalniku! Ne nadaljujte postopka, razen če zaupate razvijalcu in razumete tveganja.",
      "debugManifestLoadingWarning2": "Če niste prepričani, kliknite {0}.",
      "debugManifestLoadingConfirm": "Naloži skripte za iskanje napak",
      "debugManifestLoadingCancel": "Ne naloži skriptov za iskanje napak",
      "debugManifestLoadingCalloutText": "Če ne veste, kaj bi naredili, kliknite tukaj."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Nalaganje ...",
      "developerToolsTabLoadingUnknownError": "Med nalaganjem modula orodij za razvijalce je prišlo do napake."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesti",
      "noManifestSelected": "Noben manifest ni izbran"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Učinkovitost delovanja",
      "ErrorAccessingPerfDataErrorMessage": "Ni mogoče pridobiti podatkov o učinkovitosti delovanja: predmet je ničeln ali pa ni določen.",
      "ErrorAccessingRedirectDataErrorMessage": "Pri dostopu do podatkov o učinkovitosti preusmeritve HTTP je prišlo do težave.",
      "ErrorParsingPercievedLatencyErrorMessage": "Pri razčlenjevanju podatkov o zaznani zakasnitvi je prišlo do napake.",
      "ErrorParsingApiDataErrorMessage": "Pri razčlenjevanju podatkov vmesnika API je prišlo do napake.",
      "UnkownPerformanceDataErrorMessage": "Prišlo je do neznane napake: {0}",
      "DefaultWebPartName": "Spletni gradnik",
      "ServerResponseLabel": "Odgovor strežnika",
      "ApplicationInitializationLabel": "Inicializacija aplikacije",
      "ScriptFetchEvalLabel": "Dobivanje in ocena scenarija",
      "SpLoaderStartLabel": "Inicializacija SPFx",
      "PageRenderLabel": "Upodabljalnik strani",
      "LeftNavRenderLabel": "Levi upodabljalnik krmarjenja",
      "CanvasRenderLabel": "Upodabljalnik platna",
      "LayoutRenderLabel": "Upodabljalnik postavitve",
      "RedirectResponseLabel": "Preusmeri odgovor",
      "AppLoadLabel": "Nalaganje aplikacije",
      "RenderWebPartsLabel": "Upodabljalnik spletnih gradnikov",
      "TotalRenderTimeLabel": "Skupaj",
      "GeneralErrorMessage": "Pri pridobivanju podatkov o učinkovitosti delovanja je prišlo do napake.",
      "ErrorMessagePrefix": "Sporočilo o napaki: {0}",
      "PerformanceDataHint": "Opomba: ko dodate ali odstranite spletni gradnik, osvežite stran, da si ogledate posodobljene podatke o učinkovitosti delovanja.",
      "ModulesLoadedLegendLabel": "Naloženi moduli",
      "InitializationLegendLabel": "Inicializacija",
      "RenderTimeLegendLabel": "Čas upodabljanja",
      "InitializationTimeLabel": "Čas inicializacije",
      "ModuleLoadingTimeLabel": "Čas nalaganja modula",
      "ModuleLazyLoadingDelayLabel": "Zakasnitev nalaganja modula",
      "DataFetchTimeLabel": "Čas pridobivanja podatkov",
      "DataFetchLegendLabel": "Pridobivanje podatkov",
      "ItemsColumnHeader": "Elementi",
      "DurationColumnHeader": "Trajanje",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Ni na voljo"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Sled",
      "EmptyTraceData": "Nobena sled ni naložena.",
      "ExportCSVButtonLabel": "Izvozi v CSV",
      "LevelHeaderLabel": "Raven",
      "MessageHeaderLabel": "Sporočilo",
      "ScopeHeaderLabel": "Obseg",
      "SourceHeaderLabel": "Vir",
      "TimestampHeaderLabel": "Časovni žig",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Pri dostopu do podatkov sledi je prišlo do težave."
    }
  };

  strings.default = strings;
  return strings;
});
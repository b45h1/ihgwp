define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Aplikácia sa na tejto stránke nedá načítať. Skúste to znova pomocou tlačidla Dozadu v prehliadači. Ak sa problém nevyrieši, obráťte sa na správcu lokality a poskytnite mu informácie uvedené v časti Technické podrobnosti.",
      "platformFailedToLoadError": "Platformu sa nepodarilo načítať. ID: {0}, názov: {1}",
      "platformFailedToLoadWithMessageError": "Platformu sa nepodarilo načítať. ID: {0}, názov: {1}.\r\nChyba: {2}",
      "applicationFailedToInitializeError": "Chyba pri inicializácii aplikácie. Chyba: {0}",
      "invalidPreloadedDataError": "Údaje načítané na pozadí sú neplatné.",
      "manifestNotFoundByIdError": "Manifest pre ID súčasti {0} sa nenašiel.",
      "manifestNotFoundError": "Pre komponent s ID {0} a verziou {1} sa nenašiel žiaden manifest.",
      "systemConfigDisabledError": "System.config() sa nepodporuje. Konfiguráciu zadajte pomocou manifestu.",
      "loadComponentLog": "Načítava sa súčasť {0} ({1}).",
      "loadComponentEndLog": "Súčasť {0} ({1}) sa načítala.",
      "loadComponentRetryLog": "Načítava sa súčasť {0} ({1}). Pokus {2} z {3}.",
      "loadComponentError": "Nepodarilo sa načítať komponent {0} ({1}).\r\nPôvodná chyba: {2}",
      "loadComponentMaxRetriesError": "Vykonal sa {2}. neúspešný pokus o načítanie súčasti {0} ({1}).",
      "loadComponentDependencyError": "Nepodarilo sa načítať závislosť komponentu {0} od komponentu {1} ({2}).r\nPôvodná chyba: {3}",
      "loadComponentDependencyFailoverPathError": "Nepodarilo sa načítať závislosť komponentu {0} s cestou zlyhania {1} od komponentu {2} ({3}).\r\nPôvodná chyba: {4}",
      "loadPathDependencyLog": "Načítava sa závislosť cesty {0} od súčasti {1} ({2})",
      "loadPathDependencyError": "Nepodarilo sa načítať závislosť cesty {0} od komponentu {1} ({2}).\r\nPôvodná chyba: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Nepodarilo sa načítať závislosť cesty {0} od súčasti {1} ({2}) z dôvodu inej závislosti, ktorú sa nepodarilo načítať.",
      "loadEntryPointError": "Nepodarilo sa načítať vstupný bod z komponentu {0} ({1}).\r\nPôvodná chyba: {2}",
      "loadComponentReturnsEmptyError": "Metóda loadComponent() vrátila prázdny objekt pre súčasť {0} ({1}).",
      "loadComponentReturnsDefaultEmptyError": "Metóda loadComponent() vrátila objekt s prázdnou predvolenou vlastnosťou pre súčasť {0} ({1}).",
      "moduleHasUndeclaredDependencyError": "Vstupný bod pre súčasť {0} ({1}) má závislosť od položky {2}, ktorá v manifeste nie je deklarovaná.",
      "loadScriptWithStringError": "Funkcia loadScript neumožňuje použiť ako 2. parameter reťazec. Použite namiesto toho funkciu ILoadScriptOptions.",
      "tooManyManifestsError": "Pre komponent {2} sa našlo niekoľko ({0}) manifestov (verzie {1}).",
      "tooManyCompatibleVersionsError": "Pre komponent {2} verzie {3} sa našlo niekoľko ({0}) kompatibilných verzií ({1}).",
      "tooManyComponentsError": "Pre ID {0} sa našlo príliš veľa súčastí.",
      "noComponentFoundError": "Nenašla sa žiadna súčasť pre ID {0}.",
      "deleteComponentLog": "Z obchodu sa odstraňuje súčasť {0}, verzia {1}.",
      "browserNotSupportedError": "Táto verzia prehliadača nie je podporovaná.\r\nAktualizujte si prehliadač na najnovšiu verziu.",
      "ie9OrOlderNotSupportedError": "Táto stránka nepodporuje vydania Internet Explorera staršie ako 10. Aktualizujte svoj webový prehliadač.",
      "firefox43OrOlderNotSupportedError": "Táto stránka nepodporuje vydania prehliadača Mozilla Firefox staršie ako verzia 44. Aktualizujte svoj webový prehliadač.",
      "resourceNotFoundError": "V konfigurácii zavádzacieho programu manifestu komponentu {1} ({2}) sa nenašiel prostriedok {0}.",
      "noFailoverPathError": "Vlastnosť resolveAddress() sa v súčasti nedá volať, ak nie je zadaná cesta zlyhania",
      "urlStatusLocalhostFileNotFoundError": "Nepodarilo sa načítať URL adresu {3} pre prostriedok {2} v súčasti {0} ({1}). Súbor sa na serveri nenašiel.\r\nSkontrolujte, či máte spustený príkaz gulp serve.",
      "urlStatusFileNotFoundError": "Nepodarilo sa načítať URL adresu {3} pre prostriedok {2} v súčasti {0} ({1}). Súbor sa na serveri nenašiel.",
      "urlStatusForbiddenError": "Nepodarilo sa načítať URL adresu {3} pre prostriedok {2} v súčasti {0} ({1}). Prístup k súboru je zakázaný.",
      "urlStatusClientErrorError": "Nepodarilo sa načítať URL adresu {3} pre prostriedok {2} v súčasti {0} ({1}). Pri žiadosti o súbor sa vyskytla chyba.",
      "urlStatusServerErrorError": "Nepodarilo sa načítať URL adresu {3} pre prostriedok {2} v súčasti {0} ({1}). Vyskytol sa problém so serverom.",
      "urlStatusLocalhostNetworkErrorError": "Nepodarilo sa načítať URL adresu {3} pre zdroj {2} v súčasti {0} ({1}). Vyskytol sa problém so sieťou.\r\nSkontrolujte, či máte spustený príkaz gulp serve a či ste spustili príkaz gulp trust-dev-cert.",
      "urlStatusHttpsNetworkErrorError": "Nepodarilo sa načítať URL adresu {3} pre prostriedok {2} v súčasti {0} ({1}). Vyskytol sa problém so sieťou.\r\nMôže ísť o problém s certifikátom HTTPS. Skontrolujte, či máte správny certifikát.",
      "urlStatusNetworkErrorError": "Nepodarilo sa načítať URL adresu {3} pre prostriedok {2} v súčasti {0} ({1}). Vyskytol sa problém so sieťou.",
      "urlStatusUndefinedError": "Pre neznáme problémy sa nepodarilo načítať URL adresu {3} pre prostriedok {2} v súčasti {0} ({1}).",
      "isUndefinedValidateError": "Hodnota premennej {0} nesmie ostať nezadefinovaná",
      "failedToCreateGlobalVariableError": "Nepodarilo sa vytvoriť globálnu premennú {0} zo skriptu {1}",
      "dependencyLoadError": "Nepodarilo sa načítať modul {0}, pretože sa nenačítala závislosť {1}",
      "missingPathDependencyError": "Chýbajúca cestu \"{0}\"od zložky\"{1}\" ({2}). Existujúcu cestu závislosť: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Chyba pri načítavaní skriptu ladenia. Skontrolujte, či je server spustený a či je URL adresa parametra {0} správna.",
      "errorLoadingDebugScriptHTTP": "Chyba pri načítavaní skriptu ladenia. Skontrolujte, či je server spustený, či je URL adresa parametra {0} správna a či je povolené načítavanie nezabezpečených skriptov. Zvážte aj použitie certifikátu na vývoj a obsluhovanie skriptov ladenia cez protokol HTTPS.",
      "errorLoadingDebugScriptMalformed": "Chyba pri načítavaní skriptu ladenia. Zdá sa, že URL adresa ladenia ({0}) nemá správny formát.",
      "errorLoadingDebugScriptUnknown": "Pri načítavaní skriptu ladenia sa vyskytla neznáma chyba.",
      "errorLoadingDebugLoaderTitle": "Chyba pri načítavaní zavádzacieho programu ladenia.",
      "errorLoadingDebugManifestTitle": "Chyba pri načítavaní manifestov ladenia.",
      "errorLoadingUnknownTitle": "Chyba pri načítavaní skriptov ladenia."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Chýba komponent alebo funkcia inicializačného výrazu.",
      "closeDeveloperToolsAriaLabel": "Zatvorenie vývojárskych nástrojov."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Upozornenie!",
      "warningLine1": "Používanie tohto nástroja predstavuje potenciálne ohrozenie zabezpečenia, kedy môžu ostatní získať prístup k vašim osobným údajom v službách Office 365 (dokumentom, e-mailom, konverzáciám a ďalším položkám). Pred pokračovaním sa uistite, že osoba alebo organizácia, ktorá vás požiadala o prístup k tomuto nástroju, je dôveryhodná.",
      "warningLine2": "Ďalšie informácie nájdete tu: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Pri načítavaní manifestov ladenia sa vyskytla chyba.",
      "debugManifestErrorDismissButtonText": "Zrušiť"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Chcete povoliť skripty ladenia?",
      "allowDebugLoaderTitle": "Chcete povoliť zavádzací program ladenia?",
      "allowDebugLoaderAndManifestsTitle": "Chcete povoliť zavádzací program ladenia a skripty ladenia?",
      "debugManifestLoadingWarning": "UPOZORNENIE: Táto stránka obsahuje nebezpečné skripty, ktoré by vám v prípade načítania mohli poškodiť počítač. Pokračujte len v prípade, že dôverujete vývojárovi a rozumiete možným rizikám.",
      "debugManifestLoadingWarning2": "Ak si nie ste istí, kliknite na položku {0}.",
      "debugManifestLoadingConfirm": "Načítať skripty ladenia",
      "debugManifestLoadingCancel": "Nenačítať skripty ladenia",
      "debugManifestLoadingCalloutText": "Ak neviete, čo treba robiť, kliknite sem."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Načítava sa...",
      "developerToolsTabLoadingUnknownError": "Pri načítavaní modulu vývojárskych nástrojov sa vyskytla neznáma chyba."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesty",
      "noManifestSelected": "Nie je vybratý žiaden manifest"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Výkon",
      "ErrorAccessingPerfDataErrorMessage": "Nepodarilo sa načítať údaje o výkone: Objekt má hodnotu null alebo je nedefinovaný.",
      "ErrorAccessingRedirectDataErrorMessage": "Pri získavaní prístupu k údajom o výkone presmerovania HTTP sa vyskytol problém.",
      "ErrorParsingPercievedLatencyErrorMessage": "Pri analýze údajov zisteného oneskorenia sa vyskytla chyba.",
      "ErrorParsingApiDataErrorMessage": "Pri analýze údajov rozhrania API sa vyskytla chyba.",
      "UnkownPerformanceDataErrorMessage": "Vyskytla sa neznáma chyba: {0}",
      "DefaultWebPartName": "Webová časť",
      "ServerResponseLabel": "Odpoveď servera",
      "ApplicationInitializationLabel": "Inicializácia aplikácie",
      "ScriptFetchEvalLabel": "Načítanie a vyhodnotenie skriptu",
      "SpLoaderStartLabel": "Inicializácia SPFx",
      "PageRenderLabel": "Vykreslenie stránky",
      "LeftNavRenderLabel": "Vykreslenie ľavého navigačného panela",
      "CanvasRenderLabel": "Vykreslenie plátna",
      "LayoutRenderLabel": "Vykreslenie rozloženia",
      "RedirectResponseLabel": "Presmerovať odpoveď",
      "AppLoadLabel": "Načítanie aplikácie",
      "RenderWebPartsLabel": "Vykreslenie webových častí",
      "TotalRenderTimeLabel": "Spolu",
      "GeneralErrorMessage": "Ľutujeme, počas načítavania údajov o výkone sa vyskytla chyba.",
      "ErrorMessagePrefix": "Chybové hlásenie: {0}",
      "PerformanceDataHint": "Poznámka: Po pridaní alebo odstránení webovej časti obnovte stránku, aby sa vám zobrazili údaje o výkone.",
      "ModulesLoadedLegendLabel": "Načítané moduly",
      "InitializationLegendLabel": "Inicializácia",
      "RenderTimeLegendLabel": "Čas vykreslenia",
      "InitializationTimeLabel": "Čas inicializácie",
      "ModuleLoadingTimeLabel": "Čas načítania modulu",
      "ModuleLazyLoadingDelayLabel": "Oneskorené načítanie modulu",
      "DataFetchTimeLabel": "Čas načítania údajov",
      "DataFetchLegendLabel": "Načítanie údajov",
      "ItemsColumnHeader": "Položky",
      "DurationColumnHeader": "Trvanie",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Nie je k dispozícii"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Sledovanie",
      "EmptyTraceData": "Neboli načítané žiadne sledovania.",
      "ExportCSVButtonLabel": "Exportovať CSV",
      "LevelHeaderLabel": "Úroveň",
      "MessageHeaderLabel": "Správa",
      "ScopeHeaderLabel": "Rozsah",
      "SourceHeaderLabel": "Zdroj",
      "TimestampHeaderLabel": "Časová pečiatka",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Vyskytol sa problém s prístupom k údajom sledovania."
    }
  };

  strings.default = strings;
  return strings;
});
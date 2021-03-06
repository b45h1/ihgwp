define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Nem sikerült betölteni a lapon elérhető alkalmazást. Próbálkozzon újra a böngésző Vissza gombjára kattintva. Ha nem oldódik meg a probléma, forduljon a webhely rendszergazdájához, és adja meg az információkat a technikai részletek között.",
      "platformFailedToLoadError": "Sikertelen volt a platform (azonosító: {0}, név: {1}) betöltése.",
      "platformFailedToLoadWithMessageError": "Nem sikerült betölteni a platformot. Azonosító: {0}, név: {1}.\r\nHiba: {2}",
      "applicationFailedToInitializeError": "Sikertelen volt az alkalmazás inicializálása. Hiba: {0}",
      "invalidPreloadedDataError": "Érvénytelenek az előzetesen betöltött adatok.",
      "manifestNotFoundByIdError": "Nem találjuk a(z) {0} azonosítójú összetevő jegyzékfájlját.",
      "manifestNotFoundError": "Nem található a jegyzékfájl (összetevő-azonosító: {0}, verzió: {1}).",
      "systemConfigDisabledError": "A System.config() nem támogatott. A jegyzékfájl segítségével adja meg a konfigurációt.",
      "loadComponentLog": "Betöltjük a(z) {0} ({1}) összetevőt.",
      "loadComponentEndLog": "Betöltöttük a(z) {0} ({1}) összetevőt.",
      "loadComponentRetryLog": "Betöltjük a(z) {0} ({1}) összetevőt. Ez a(z) {2}. próbálkozásunk, és összesen {3} alkalommal lehet próbálkozni.",
      "loadComponentError": "Nem sikerült betölteni a(z) {0} ({1}) összetevőt.\r\nEredeti hiba: {2}",
      "loadComponentMaxRetriesError": "{2} alkalommal próbáltuk betölteni a(z) {0} ({1}) összetevőt, de nem jártunk sikerrel.",
      "loadComponentDependencyError": "Nem sikerült betölteni a(z) {0} összetevő-függőséget a(z) {1} ({2}) összetevőből.\r\nEredeti hiba: {3}",
      "loadComponentDependencyFailoverPathError": "Nem sikerült betölteni a(z) {1} feladatátvételi útvonalon található {0} összetevő-függőséget a(z) {2} ({3}) összetevőből.\r\nEredeti hiba: {4}",
      "loadPathDependencyLog": "Betöltjük a(z) {0} útvonalfüggőséget a(z) {1} ({2}) összetevőből.",
      "loadPathDependencyError": "Nem sikerült betölteni a(z) {0} útvonalfüggőséget a(z) {1} ({2}) összetevőből.\r\nEredeti hiba: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Nem sikerült betölteni a(z) {0} útvonalfüggőséget a(z) {1} összetevőből ({2}), mert sikertelen volt egy másik függőség betöltése.",
      "loadEntryPointError": "Nem sikerült betölteni a belépési pontot a(z) {0} ({1}) összetevőből.\r\nEredeti hiba: {2}",
      "loadComponentReturnsEmptyError": "A loadComponent() metódus üres objektumot adott vissza a(z) {0} ({1}) összetevőhöz.",
      "loadComponentReturnsDefaultEmptyError": "A loadComponent() metódus által visszaadott objektum {0} ({1}) összetevőhöz tartozó alapértelmezett tulajdonsága üres.",
      "moduleHasUndeclaredDependencyError": "A(z) {0} ({1}) összetevő belépési pontjához {2} nevű függőség tartozik, amely azonban nincs deklarálva a jegyzékfájlban.",
      "loadScriptWithStringError": "A loadScript függvény második paramétere nem lehet karakterlánc. Használja az ILoadScriptOptions elemet.",
      "tooManyManifestsError": "{0} jegyzékfájlt (verziók: {1}) találtunk a(z) {2} összetevőhöz.",
      "tooManyCompatibleVersionsError": "{0} kompatibilis verziót ({1}) találtunk a(z) {2} összetevőhöz (verzió: {3}).",
      "tooManyComponentsError": "Túl sok összetevő létezik a(z) {0} azonosítóhoz.",
      "noComponentFoundError": "Nem találtunk {0} azonosítójú összetevőt.",
      "deleteComponentLog": "Töröljük a tárolóból a(z) {0} összetevő {1} verzióját.",
      "browserNotSupportedError": "Nem támogatott böngészőverziót használ.\r\nTelepítse a böngésző legújabb verzióját.",
      "ie9OrOlderNotSupportedError": "Ez a lap nem támogatja az Internet Explorer 10-esnél korábbi verzióit. Kérjük, hogy frissítse a böngészőt.",
      "firefox43OrOlderNotSupportedError": "Ez a lap nem támogatja a Mozilla Firefox 44-esnél korábbi verzióit. Kérjük, hogy frissítse a böngészőt.",
      "resourceNotFoundError": "A(z) {0} erőforrás nem található a(z) {1} azonosítójú ({2}) összetevő jegyzékfájljának betöltő konfigurációjában.",
      "noFailoverPathError": "Feladatátvételi útvonal nélküli összetevőkhöz nem hívható meg a resolveAddress() függvény.",
      "urlStatusLocalhostFileNotFoundError": "Nem sikerült betölteni a(z) {0} ({1}) összetevő {2} erőforrásának {3} URL-címét. A fájl nem található a kiszolgálón.\r\nEllenőrizze, hogy fut-e a „gulp serve” elem.",
      "urlStatusFileNotFoundError": "Nem sikerült betölteni a(z) {0} ({1}) összetevő {2} erőforrásának {3} URL-címét. A fájl nem található a kiszolgálón.",
      "urlStatusForbiddenError": "Nem sikerült betölteni a(z) {0} ({1}) összetevő {2} erőforrásának {3} URL-címét. A fájl elérése le van tiltva.",
      "urlStatusClientErrorError": "Nem sikerült betölteni a(z) {0} ({1}) összetevő {2} erőforrásának {3} URL-címét. Hiba történt a fájl kérésekor.",
      "urlStatusServerErrorError": "Nem sikerült betölteni a(z) {0} ({1}) összetevő {2} erőforrásának {3} URL-címét. Hiba történt a kiszolgálón.",
      "urlStatusLocalhostNetworkErrorError": "Nem sikerült betölteni a(z) {0} ({1}) összetevő {2} erőforrásának {3} URL-címét. Hálózati hiba történt.\r\nEllenőrizze, hogy „gulp serve” parancsot futtatja-e, és hogy futtatta-e a „gulp trust-dev-cert” parancsot.",
      "urlStatusHttpsNetworkErrorError": "Nem sikerült betölteni a(z) {0} ({1}) összetevő {2} erőforrásának {3} URL-címét. Hálózati hiba történt.\r\nLehet, hogy probléma áll fenn egy HTTPS-tanúsítvánnyal. Ellenőrizze, hogy rendelkezésére áll-e a megfelelő tanúsítvány.",
      "urlStatusNetworkErrorError": "Nem sikerült betölteni a(z) {0} ({1}) összetevő {2} erőforrásának {3} URL-címét. Hálózati hiba történt.",
      "urlStatusUndefinedError": "Ismeretlen problémák miatt nem sikerült betölteni a(z) {0} ({1}) összetevő {2} erőforrásának {3} URL-címét.",
      "isUndefinedValidateError": "A(z) {0} változó értékét kötelező definiálni",
      "failedToCreateGlobalVariableError": "Nem sikerült létrehozni a(z) {0} változót a(z) {1} szkriptből",
      "dependencyLoadError": "Nem sikerült betölteni a(z) {0} modult, mert a következő függőség nem volt betöltve: {1}",
      "missingPathDependencyError": "Hiányzik a(z) {0} útvonalfüggőség a következő összetevőből: {1} ({2}). Meglévő útvonalfüggőségek: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Hiba történt a hibakeresési szkript betöltése közben. Győződjön meg róla, hogy a kiszolgáló fut, és hogy a(z) „{0}” paraméter URL-címe helyes.",
      "errorLoadingDebugScriptHTTP": "Hiba történt a hibakeresési szkript betöltése közben. Győződjön meg róla, hogy a kiszolgáló fut, hogy a(z) „{0}” paraméter URL-címe helyes, és hogy a nem biztonságos szkriptek betöltése engedélyezve van. Javasoljuk emellett, hogy használjon fejlesztői tanúsítványt, és hogy a hibakeresési szkripteket a HTTPS protokollal szolgáltassa.",
      "errorLoadingDebugScriptMalformed": "Hiba történt a hibakeresési szkript betöltése közben. A hibakeresési URL ({0}) hibás formátumúnak látszik.",
      "errorLoadingDebugScriptUnknown": "Ismeretlen hiba történt egy hibakeresési szkript betöltésekor.",
      "errorLoadingDebugLoaderTitle": "Hiba történt a hibakereső betöltésekor.",
      "errorLoadingDebugManifestTitle": "Hiba történt a hibakeresési jegyzékfájlok betöltésekor.",
      "errorLoadingUnknownTitle": "Hiba történt a hibakeresési szkriptek betöltésekor."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Hiányzik egy összetevő vagy egy inicializáló függvény.",
      "closeDeveloperToolsAriaLabel": "A fejlesztőeszközök bezárása."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Figyelem!",
      "warningLine1": "Az eszköz használatával biztonsági kockázatnak teszi ki magát, így mások esetleg hozzáférhetnek az Ön személyes Office 365-adataihoz (dokumentumaihoz, e-mailjeihez, beszélgetéseihez stb.). Kérjük, hogy csak akkor lépjen tovább, ha megbízik abban a személyben vagy szervezetben, aki vagy amely megkérte ennek az eszköznek a használatára.",
      "warningLine2": "További információ: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Hiba történt a hibakeresési jegyzékfájlok betöltésekor.",
      "debugManifestErrorDismissButtonText": "Bezárás"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Engedélyezi a hibakereső parancsprogramokat?",
      "allowDebugLoaderTitle": "Engedélyezi a hibakereső betöltését?",
      "allowDebugLoaderAndManifestsTitle": "Engedélyezi a hibakeresőt és a hibakereső szkripteket?",
      "debugManifestLoadingWarning": "FIGYELMEZTETÉS: Nem biztonságos parancsprogramok vannak a lapon. A betöltésük károsíthatja a gépet. Csak akkor folytassa a műveletet, ha megbízik a fejlesztőben, és tisztában van a kockázatokkal.",
      "debugManifestLoadingWarning2": "Ha bizonytalan, kattintson a {0} gombra.",
      "debugManifestLoadingConfirm": "Hibakeresési parancsfájlok betöltése",
      "debugManifestLoadingCancel": "Betöltés mellőzése",
      "debugManifestLoadingCalloutText": "Ha nem tudja, hogy mit tegyen, kattintson ide."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Betöltés...",
      "developerToolsTabLoadingUnknownError": "Ismeretlen hiba történt a fejlesztőeszközök moduljának betöltésekor."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Jegyzékfájlok",
      "noManifestSelected": "Nincs kijelölve jegyzékfájl"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Teljesítmény",
      "ErrorAccessingPerfDataErrorMessage": "Nem sikerült beolvasni a teljesítményadatokat: az objektum null értékű, vagy nincs definiálva.",
      "ErrorAccessingRedirectDataErrorMessage": "Nem sikerült hozzáférni a HTTP-átirányítási teljesítményadatokhoz.",
      "ErrorParsingPercievedLatencyErrorMessage": "Hiba történt az észlelt késési adatok elemzésekor.",
      "ErrorParsingApiDataErrorMessage": "Hiba történt az API-adatok elemzésekor.",
      "UnkownPerformanceDataErrorMessage": "Ismeretlen hiba történt: {0}",
      "DefaultWebPartName": "Kijelző",
      "ServerResponseLabel": "Kiszolgáló válasza",
      "ApplicationInitializationLabel": "Alkalmazás inicializálása",
      "ScriptFetchEvalLabel": "Parancsprogram lehívása és kiértékelése",
      "SpLoaderStartLabel": "SPFx inicializálása",
      "PageRenderLabel": "Lap megjelenítése",
      "LeftNavRenderLabel": "Bal oldali navigációs sáv megjelenítése",
      "CanvasRenderLabel": "Vászon megjelenítése",
      "LayoutRenderLabel": "Elrendezés megjelenítése",
      "RedirectResponseLabel": "Átirányítási válasz",
      "AppLoadLabel": "Alkalmazás betöltése",
      "RenderWebPartsLabel": "Kijelzők megjelenítése",
      "TotalRenderTimeLabel": "Összesen",
      "GeneralErrorMessage": "Sajnáljuk, hiba történt a teljesítményadatok beolvasása közben.",
      "ErrorMessagePrefix": "Hibaüzenet: {0}",
      "PerformanceDataHint": "Megjegyzés: Kijelző felvétele vagy eltávolítása után a lap frissítésével megjeleníthetők a frissített teljesítményadatok.",
      "ModulesLoadedLegendLabel": "Betöltött modulok",
      "InitializationLegendLabel": "Inicializálás",
      "RenderTimeLegendLabel": "Megjelenítés ideje",
      "InitializationTimeLabel": "Inicializálás ideje",
      "ModuleLoadingTimeLabel": "Modulbetöltés ideje",
      "ModuleLazyLoadingDelayLabel": "Modulbetöltés késése",
      "DataFetchTimeLabel": "Adatbeolvasás ideje",
      "DataFetchLegendLabel": "Adatok beolvasása",
      "ItemsColumnHeader": "Elemek",
      "DurationColumnHeader": "Időtartam",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "n.a."
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Nyomkövetés",
      "EmptyTraceData": "Nem töltődtek be nyomkövetések.",
      "ExportCSVButtonLabel": "Exportálás CSV-fájlba",
      "LevelHeaderLabel": "Szint",
      "MessageHeaderLabel": "Üzenet",
      "ScopeHeaderLabel": "Hatókör",
      "SourceHeaderLabel": "Adatforrás",
      "TimestampHeaderLabel": "Időbélyeg",
      "TimestampFormat": "{0}.{1}.{2}. {3}:{4}:{5},{6}",
      "ErrorAccessingTraceDataErrorMessage": "Nem sikerült hozzáférni a nyomkövetési adatokhoz."
    }
  };

  strings.default = strings;
  return strings;
});
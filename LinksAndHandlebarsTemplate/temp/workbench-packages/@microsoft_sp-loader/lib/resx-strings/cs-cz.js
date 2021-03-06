define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Aplikace se na této stránce nedá načíst. Zkuste to znovu pomocí tlačítka Zpět v prohlížeči. Pokud s tím budou dál problémy, kontaktujte správce webu a poskytněte mu informace uvedené v části Technické podrobnosti.",
      "platformFailedToLoadError": "Platformu se nepovedlo načíst. ID: {0}, název: {1}",
      "platformFailedToLoadWithMessageError": "Platformu se nepovedlo načíst. ID: {0}, název: {1}.\r\nChyba: {2}",
      "applicationFailedToInitializeError": "Chyba při inicializaci aplikace. Chyba: {0}",
      "invalidPreloadedDataError": "Neplatná předem načtená data",
      "manifestNotFoundByIdError": "Nenašel se manifest pro součást s ID {0}.",
      "manifestNotFoundError": "Pro ID komponenty {0} a verzi {1} se nenašel manifest.",
      "systemConfigDisabledError": "System.config() se nepodporuje. Pokud chcete určit konfiguraci, použijte manifest.",
      "loadComponentLog": "Zavádí se komponenta {0} ({1}).",
      "loadComponentEndLog": "Komponenta {0} ({1}) se zavedla.",
      "loadComponentRetryLog": "Zavádí se komponenta {0} ({1}). Pokus {2} z {3}",
      "loadComponentError": "Nepovedlo se načíst komponentu {0} ({1}).\r\nPůvodní chyba: {2}",
      "loadComponentMaxRetriesError": "Došlo k {2}. neúspěšnému pokusu o zavedení komponenty {0} ({1}).",
      "loadComponentDependencyError": "Nepovedlo se načíst závislost komponenty {0} z komponenty {1} ({2}).\r\nPůvodní chyba: {3}",
      "loadComponentDependencyFailoverPathError": "Nepovedlo se načíst závislost komponenty {0} se záložní cestou {1} z komponenty {2} ({3}).\r\nPůvodní chyba: {4}",
      "loadPathDependencyLog": "Načítá se závislost cesty {0} ze součásti {1} ({2}).",
      "loadPathDependencyError": "Nepovedlo se načíst závislost cesty {0} z komponenty {1} ({2}).\r\nPůvodní chyba: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Nepovedlo se načíst závislost cesty {0} ze součásti {1} ({2}) kvůli jiné závislosti, kterou se nepovedlo načíst.",
      "loadEntryPointError": "Nepovedlo se načíst vstupní bod z komponenty {0} ({1}).\r\nPůvodní chyba: {2}",
      "loadComponentReturnsEmptyError": "Metoda loadComponent() vrátila prázdný objekt pro součást {0} ({1}).",
      "loadComponentReturnsDefaultEmptyError": "Metoda loadComponent() vrátila objekt s prázdnou výchozí vlastností pro součást {0} ({1}).",
      "moduleHasUndeclaredDependencyError": "Vstupní bod pro součást {0} ({1}) obsahuje závislost na {2}, která není deklarovaná v manifestu.",
      "loadScriptWithStringError": "Jako druhý parametr nepovoluje funkce loadScript řetězec. Místo toho použijte ILoadScriptOptions.",
      "tooManyManifestsError": "Pro komponentu {2} se našel tento počet manifestů {0} (verze {1}).",
      "tooManyCompatibleVersionsError": "Pro komponentu {2} verze {3} se našlo více (celkem {0}) kompatibilních verzí ({1}).",
      "tooManyComponentsError": "Našlo se příliš mnoho komponent pro {0}.",
      "noComponentFoundError": "Pro ID {0} se nenašla žádná komponenta.",
      "deleteComponentLog": "Komponenta {0} verze {1} se odstraňuje ze storu.",
      "browserNotSupportedError": "Tato verze prohlížeče není podporovaná.\r\nAktualizujte si prosím prohlížeč na nejnovější verzi.",
      "ie9OrOlderNotSupportedError": "Tato stránka nepodporuje verze Internet Exploreru starší než verze 10. Aktualizujte prosím webový prohlížeč.",
      "firefox43OrOlderNotSupportedError": "Tato stránka nepodporuje verze Mozilla Firefoxu starší než verze 44. Aktualizujte si prosím webový prohlížeč.",
      "resourceNotFoundError": "V konfiguraci zavaděče manifestu komponenty {1} ({2}) se nenašel prostředek {0}.",
      "noFailoverPathError": "Není možné volat metodu ResolveAddress() pro komponentu bez cesty pro převzetí služeb při selhání.",
      "urlStatusLocalhostFileNotFoundError": "Nepovedlo se načíst adresu URL {3} pro prostředek {2} v komponentě {0} ({1}). Soubor se na serveru nenašel.\r\nUjistěte se, že jste spustili příkaz gulp serve.",
      "urlStatusFileNotFoundError": "Nepovedlo se načíst adresu URL {3} pro prostředek {2} v komponentě {0} ({1}). Soubor se na serveru nenašel.",
      "urlStatusForbiddenError": "Nepovedlo se načíst adresu URL {3} pro prostředek {2} v komponentě {0} ({1}). Přístup k souboru je zakázán.",
      "urlStatusClientErrorError": "Nepovedlo se načíst adresu URL {3} pro prostředek {2} v komponentě {0} ({1}). Došlo k chybě žádosti o soubor.",
      "urlStatusServerErrorError": "Nepovedlo se načíst adresu URL {3} pro prostředek {2} v komponentě {0} ({1}). Došlo k problému na serveru.",
      "urlStatusLocalhostNetworkErrorError": "Nepovedlo se načíst adresu URL {3} pro prostředek {2} v komponentě {0} ({1}). Došlo k chybě sítě.\r\nUjistěte se, že běží příkaz gulp serve a že jste spustili příkaz gulp trust-dev-cert.",
      "urlStatusHttpsNetworkErrorError": "Nepovedlo se načíst adresu URL {3} pro prostředek {2} v komponentě {0} ({1}). Došlo k chybě sítě.\r\nMůže se jednat o problém s certifikátem HTTPS. Zkontrolujte správnost certifikátu.",
      "urlStatusNetworkErrorError": "Nepovedlo se načíst adresu URL {3} pro prostředek {2} v komponentě {0} ({1}). Došlo k chybě sítě.",
      "urlStatusUndefinedError": "Nepovedlo se načíst adresu URL {3} pro prostředek {2} v komponentě {0} ({1}) kvůli neznámým problémům.",
      "isUndefinedValidateError": "Hodnota proměnné {0} nesmí být nedefinovaná.",
      "failedToCreateGlobalVariableError": "Nepodařilo se vytvořit globální proměnnou {0} ze skriptu {1}.",
      "dependencyLoadError": "Nepovedlo se načíst modul {0}, protože není načtená závislost {1}.",
      "missingPathDependencyError": "Chybějící závislost cesty {0} ze součásti {1} ({2}). Existující závislosti cesty: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Chyba při načítání ladicího skriptu. Zkontrolujte, jestli server běží a parametr {0} obsahuje správnou adresu URL.",
      "errorLoadingDebugScriptHTTP": "Chyba při načítání ladicího skriptu. Zkontrolujte, jestli server běží, parametr {0} obsahuje správnou adresu URL a je povolené načítání nezabezpečených skriptů. Zvažte také použití certifikátu pro vývoj a obsluhování ladicích skriptů přes HTTPS.",
      "errorLoadingDebugScriptMalformed": "Chyba při načítání ladicího skriptu. Vypadá to, že adresa URL pro ladění ({0}) nemá správný formát.",
      "errorLoadingDebugScriptUnknown": "Neznámá chyba při načítání ladicího skriptu",
      "errorLoadingDebugLoaderTitle": "Chyba při načítání zavaděče ladění",
      "errorLoadingDebugManifestTitle": "Chyba při načítání manifestů ladění",
      "errorLoadingUnknownTitle": "Chyba při načítání ladicích skriptů"
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Chybějící součást nebo funkce inicializátoru",
      "closeDeveloperToolsAriaLabel": "Zavřít vývojářské nástroje"
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Upozornění",
      "warningLine1": "Používání tohoto nástroje představuje potenciální ohrožení zabezpečení, kdy ostatní můžou získat přístup k vašim osobním datům v Office 365 (dokumentům, e-mailům, konverzacím a dalším). Před pokračováním se ujistěte, že osoba nebo organizace, která vás požádala o používání tohoto nástroje, je důvěryhodná.",
      "warningLine2": "Další informace najdete tady: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Došlo k chybě při načítání manifestů ladění.",
      "debugManifestErrorDismissButtonText": "Zavřít"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Chcete povolit ladění skriptů?",
      "allowDebugLoaderTitle": "Povolit zavaděč ladění?",
      "allowDebugLoaderAndManifestsTitle": "Povolit zavaděč ladění a ladicí skripty?",
      "debugManifestLoadingWarning": "UPOZORNĚNÍ: Tato stránka obsahuje nezabezpečené skripty, které by při načtení potenciálně mohly poškodit váš počítač. Pokračujte jenom v případě, že vývojáři důvěřujete a rozumíte možným rizikům.",
      "debugManifestLoadingWarning2": "Pokud si nejste jistí, klikněte na {0}.",
      "debugManifestLoadingConfirm": "Načíst ladicí skripty",
      "debugManifestLoadingCancel": "Nenačítat ladicí skripty",
      "debugManifestLoadingCalloutText": "Pokud nevíte, co dělat, klikněte sem."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Načítání...",
      "developerToolsTabLoadingUnknownError": "Neznámá chyba načítání modulu s vývojářskými nástroji"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesty",
      "noManifestSelected": "Není vybraný žádný manifest."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Výkon",
      "ErrorAccessingPerfDataErrorMessage": "Nejde načíst data o výkonu: Objekt je null nebo není definovaný.",
      "ErrorAccessingRedirectDataErrorMessage": "Došlo k problému při přístupu k datům o výkonu přesměrování HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Při analýze dat pociťované latence došlo k chybě.",
      "ErrorParsingApiDataErrorMessage": "Při analýze dat rozhraní API došlo k chybě.",
      "UnkownPerformanceDataErrorMessage": "Došlo k neznámé chybě: {0}",
      "DefaultWebPartName": "Webová část",
      "ServerResponseLabel": "Odpověď serveru",
      "ApplicationInitializationLabel": "Inicializace aplikace",
      "ScriptFetchEvalLabel": "Načítání a vyhodnocení skriptů",
      "SpLoaderStartLabel": "Inicializace SPFx",
      "PageRenderLabel": "Vykreslení stránky",
      "LeftNavRenderLabel": "Vykreslení levé navigace",
      "CanvasRenderLabel": "Vykreslení plátna",
      "LayoutRenderLabel": "Vykreslení rozložení",
      "RedirectResponseLabel": "Odpověď na přesměrování",
      "AppLoadLabel": "Zavedení aplikace",
      "RenderWebPartsLabel": "Vykreslení webových částí",
      "TotalRenderTimeLabel": "Celkem",
      "GeneralErrorMessage": "Při načítání dat o výkonu došlo bohužel k nějaké chybě.",
      "ErrorMessagePrefix": "Chybová zpráva: {0}",
      "PerformanceDataHint": "Poznámka: Po přidání nebo odebrání webové části aktualizujte stránku, aby se vám zobrazily údaje o výkonu.",
      "ModulesLoadedLegendLabel": "Zavedené moduly",
      "InitializationLegendLabel": "Inicializace",
      "RenderTimeLegendLabel": "Doba vykreslování",
      "InitializationTimeLabel": "Doba inicializace",
      "ModuleLoadingTimeLabel": "Doba načítání modulu",
      "ModuleLazyLoadingDelayLabel": "Zpožděné načtení modulu",
      "DataFetchTimeLabel": "Doba načítání dat",
      "DataFetchLegendLabel": "Načtení dat",
      "ItemsColumnHeader": "Položky",
      "DurationColumnHeader": "Doba trvání",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Není k dispozici."
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Trasování",
      "EmptyTraceData": "Nenačetla se žádná trasování.",
      "ExportCSVButtonLabel": "Exportovat CSV",
      "LevelHeaderLabel": "Úroveň",
      "MessageHeaderLabel": "Zpráva",
      "ScopeHeaderLabel": "Obor",
      "SourceHeaderLabel": "Zdroj",
      "TimestampHeaderLabel": "Časové razítko",
      "TimestampFormat": "{2}.{1}.{0} {3}:{4}:{5},{6}",
      "ErrorAccessingTraceDataErrorMessage": "Došlo k potížím při přístupu k datům trasování."
    }
  };

  strings.default = strings;
  return strings;
});
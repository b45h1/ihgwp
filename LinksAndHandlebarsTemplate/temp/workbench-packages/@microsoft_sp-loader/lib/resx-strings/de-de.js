define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Die Anwendung auf dieser Seite kann nicht geladen werden. Verwenden Sie die Schaltfläche \"Zurück\" des Browsers, um es noch mal zu versuchen. Wenn das Problem weiterhin besteht, wenden Sie sich an den Administrator der Website, und teilen Sie ihm die Informationen unter \"Technische Details\" mit.",
      "platformFailedToLoadError": "Fehler beim Laden der Plattform. ID: \"{0}\", Name: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Fehler beim Laden der Plattform. ID: \"{0}\", Name: \"{1}\".\r\nFehler: {2}",
      "applicationFailedToInitializeError": "Fehler beim Initialisieren der Anwendung. Fehler: {0}",
      "invalidPreloadedDataError": "Ungültige vorab geladene Daten.",
      "manifestNotFoundByIdError": "Manifest für Komponenten-ID \"{0}\" nicht gefunden.",
      "manifestNotFoundError": "Manifest für Komponenten-ID \"{0}\" und Version \"{1}\" nicht gefunden.",
      "systemConfigDisabledError": "System.config() wird nicht unterstützt. Verwenden Sie ein Manifest, um die Konfiguration anzugeben.",
      "loadComponentLog": "Komponente \"{0}\" ({1}) wird geladen.",
      "loadComponentEndLog": "Komponente \"{0}\" ({1}) geladen.",
      "loadComponentRetryLog": "Komponente \"{0}\" ({1}) wird geladen. Versuch {2} von {3}.",
      "loadComponentError": "Fehler beim Laden von Komponente \"{0}\" ({1}).\r\nUrsprünglicher Fehler: {2}",
      "loadComponentMaxRetriesError": "{2}-mal versucht, die Komponente \"{0}\" ({1}) ohne Erfolg zu laden.",
      "loadComponentDependencyError": "Fehler beim Laden der Komponentenabhängigkeit \"{0}\" von Komponente \"{1}\" ({2}).\r\nUrsprünglicher Fehler: {3}",
      "loadComponentDependencyFailoverPathError": "Fehler beim Laden der Komponentenabhängigkeit \"{0}\" mit Failoverpfad \"{1}\" von Komponente \"{2}\" ({3}).\r\nUrsprünglicher Fehler: {4}",
      "loadPathDependencyLog": "Die Pfadabhängigkeit \"{0}\" wird aus Komponente \"{1}\" ({2}) geladen.",
      "loadPathDependencyError": "Fehler beim Laden der Pfadabhängigkeit \"{0}\" von Komponente \"{1}\" ({2}).\r\nUrsprünglicher Fehler: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Fehler beim Laden der Pfadabhängigkeit \"{0}\" aus Komponente \"{1}\" ({2}) aufgrund einer anderen Abhängigkeit, die nicht geladen werden konnte.",
      "loadEntryPointError": "Fehler beim Laden des Einstiegspunkts von Komponente \"{0}\" ({1}).\r\nUrsprünglicher Fehler: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() hat ein leeres Objekt für die Komponente \"{0}\" ({1}) zurückgegeben.",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() hat ein Objekt mit einer leeren Standardeigenschaft für die Komponente \"{0}\" ({1}) zurückgegeben.",
      "moduleHasUndeclaredDependencyError": "Der Einstiegspunkt für die Komponente \"{0}\" ({1}) hat eine Abhängigkeit von \"{2}\", die im Manifest nicht deklariert ist.",
      "loadScriptWithStringError": "Die loadScript-Funktion lässt keine Zeichenfolge als 2. Parameter zu. Verwenden Sie stattdessen ILoadScriptOptions.",
      "tooManyManifestsError": "{0} Manifeste (Versionen {1}) für Komponente \"{2}\" gefunden.",
      "tooManyCompatibleVersionsError": "{0} kompatible Versionen ({1}) für Komponente \"{2}\" Version\"{3}\" gefunden.",
      "tooManyComponentsError": "Zu viele Komponenten für ID \"{0}\" gefunden.",
      "noComponentFoundError": "Keine Komponente gefunden für die ID \"{0}\".",
      "deleteComponentLog": "Die Komponente \"{0}\", \"Version \"{1}\", wird aus dem Speicher gelöscht.",
      "browserNotSupportedError": "Diese Version Ihres Browsers wird nicht unterstützt.\r\nAktualisieren Sie Ihren Browser auf die neueste Version.",
      "ie9OrOlderNotSupportedError": "Diese Seite unterstützt keine Internet Explorer-Versionen, die älter als Version 10 sind. Aktualisieren Sie Ihren Webbrowser.",
      "firefox43OrOlderNotSupportedError": "Diese Seite unterstützt keine Mozilla Firefox-Versionen, die älter als Version 44 sind. Aktualisieren Sie Ihren Internetbrowser.",
      "resourceNotFoundError": "Die Ressource \"{0}\" wurde in der Lademodulkonfiguration des Manifests für die Komponente \"{1}\" ({2}) nicht gefunden.",
      "noFailoverPathError": "resolveAddress() kann nicht für eine Komponente ohne Failoverpfad aufgerufen werden.",
      "urlStatusLocalhostFileNotFoundError": "Fehler beim Laden der URL \"{3}\" für die Ressource \"{2}\" in Komponente \"{0}\" ({1}). Die Datei wurde auf dem Server nicht gefunden.\r\nStellen Sie sicher, dass Sie \"gulp serve\" ausführen.",
      "urlStatusFileNotFoundError": "Fehler beim Laden der URL \"{3}\" für die Ressource \"{2}\" in Komponente \"{0}\" ({1}). Die Datei wurde auf dem Server nicht gefunden.",
      "urlStatusForbiddenError": "Fehler beim Laden der URL \"{3}\" für die Ressource \"{2}\" in Komponente \"{0}\" ({1}). Der Zugriff auf die Datei ist untersagt.",
      "urlStatusClientErrorError": "Fehler beim Laden der URL \"{3}\" für die Ressource \"{2}\" in Komponente \"{0}\" ({1}). Fehler bei der Anforderung der Datei.",
      "urlStatusServerErrorError": "Fehler beim Laden der URL \"{3}\" für die Ressource \"{2}\" in Komponente \"{0}\" ({1}). Es gab ein Problem auf dem Server.",
      "urlStatusLocalhostNetworkErrorError": "Fehler beim Laden der URL \"{3}\" für die Ressource \"{2}\" in Komponente \"{0}\" ({1}). Es gab ein Netzwerkproblem.\r\nStellen Sie sicher, dass Sie \"gulp serve\" ausführen und dass Sie \"gulp trust-dev-cert\" ausgeführt haben.",
      "urlStatusHttpsNetworkErrorError": "Fehler beim Laden der URL \"{3}\" für die Ressource \"{2}\" in Komponente \"{0}\" ({1}). Es gab ein Netzwerkproblem.\r\nDies kann ein Problem mit einem HTTPS-Zertifikat sein. Stellen Sie sicher, dass Sie das richtige Zertifikat haben.",
      "urlStatusNetworkErrorError": "Fehler beim Laden der URL \"{3}\" für die Ressource \"{2}\" in Komponente \"{0}\" ({1}). Es gab ein Netzwerkproblem.",
      "urlStatusUndefinedError": "Fehler beim Laden der URL \"{3}\" für die Ressource \"{2}\" in Komponente \"{0}\" ({1}) wegen unbekannter Probleme.",
      "isUndefinedValidateError": "Der Wert für \"{0}\" darf nicht undefiniert sein.",
      "failedToCreateGlobalVariableError": "Fehler beim Erstellen der globalen Variablen \"{0}\" aus Skript \"{1}\".",
      "dependencyLoadError": "Fehler beim Laden von Modul \"{0}\", da die Abhängigkeit {1} nicht geladen wurde",
      "missingPathDependencyError": "Fehlende Pfadabhängigkeit \"{0}\" aus Komponente \"{1}\" ({2}). Vorhandene Pfadabhängigkeiten: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Fehler beim Laden des Debugskripts. Stellen Sie sicher, dass der Server ausgeführt wird, und dass die URL des Parameters \"{0}\" richtig ist.",
      "errorLoadingDebugScriptHTTP": "Fehler beim Laden des Debugskripts. Stellen Sie sicher, dass der Server ausgeführt wird, dass die URL des Parameters \"{0}\" richtig ist, und dass das Laden unsicherer Skripts zulässig ist. Erwägen Sie außerdem die Verwendung eines Entwicklungszertifikats sowie die Verarbeitung von Debugskripts über HTTPS.",
      "errorLoadingDebugScriptMalformed": "Fehler beim Laden des Debugskripts. Die Debug-URL ({0}) scheint ein falsches Format zu haben.",
      "errorLoadingDebugScriptUnknown": "Unbekannter Fehler beim Laden eines Debugskripts.",
      "errorLoadingDebugLoaderTitle": "Fehler beim Laden des Debugladeprogramms.",
      "errorLoadingDebugManifestTitle": "Fehler beim Laden von Debugmanifesten.",
      "errorLoadingUnknownTitle": "Fehler beim Laden des Debugskripts."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Fehlende Komponente oder Initialisierungsfunktion.",
      "closeDeveloperToolsAriaLabel": "Entwicklertools schließen."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Warnung!",
      "warningLine1": "Wenn Sie dieses Tool verwenden, setzt Sie dies potenziellen Sicherheitsrisiken aus, die dazu führen können, dass andere Zugriff auf Ihre persönlichen Office 365-Daten erhalten (Dokumente, E-Mails, Unterhaltungen und mehr). Stellen Sie sicher, dass Sie der Person oder Organisation vertrauen, die Sie aufgefordert hat, auf dieses Tool zuzugreifen, bevor Sie fortfahren.",
      "warningLine2": "Hier erfahren Sie mehr: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Fehler beim Laden des Debugmanifests.",
      "debugManifestErrorDismissButtonText": "Schließen"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Debugskripts zulassen?",
      "allowDebugLoaderTitle": "Debugladeprogramm zulassen?",
      "allowDebugLoaderAndManifestsTitle": "Debugladeprogramm und Debugskripts zulassen?",
      "debugManifestLoadingWarning": "WARNUNG: Diese Seite enthält unsichere Skripts, die, falls sie geladen werden, für Ihren Computer möglicherweise gefährlich sein können! Setzen Sie den Vorgang nicht fort, es sei denn, der Entwickler ist Ihnen bekannt, und Sie kennen die Risiken.",
      "debugManifestLoadingWarning2": "Wenn Sie unsicher sind, klicken Sie auf \"{0}\".",
      "debugManifestLoadingConfirm": "Debugskripts laden",
      "debugManifestLoadingCancel": "Debugskripts nicht laden",
      "debugManifestLoadingCalloutText": "Wenn Sie nicht wissen, was das ist, klicken Sie hier."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Wird geladen...",
      "developerToolsTabLoadingUnknownError": "Unbekannter Fehler beim Laden des Entwicklertoolmoduls."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifeste",
      "noManifestSelected": "Kein Manifest ausgewählt"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Leistung",
      "ErrorAccessingPerfDataErrorMessage": "Leistungsdaten können nicht abgerufen werden: Das Objekt ist null oder nicht definiert.",
      "ErrorAccessingRedirectDataErrorMessage": "Problem beim Zugriff auf die HTTP-Umleitungsleistungsdaten.",
      "ErrorParsingPercievedLatencyErrorMessage": "Fehler bei der Analyse der wahrgenommenen Wartezeitdaten.",
      "ErrorParsingApiDataErrorMessage": "Fehler bei der Analyse der API-Daten.",
      "UnkownPerformanceDataErrorMessage": "Unbekannter Fehler: {0}",
      "DefaultWebPartName": "Webpart",
      "ServerResponseLabel": "Serverantwort",
      "ApplicationInitializationLabel": "Anwendungsinitialisierung",
      "ScriptFetchEvalLabel": "Skriptabruf und -auswertung",
      "SpLoaderStartLabel": "SPFx-Initialisierung",
      "PageRenderLabel": "Seitenwiedergabe",
      "LeftNavRenderLabel": "Wiedergabe der linken Navigation",
      "CanvasRenderLabel": "Zeichenbereichswiedergabe",
      "LayoutRenderLabel": "Layout rendern",
      "RedirectResponseLabel": "Antwort umleiten",
      "AppLoadLabel": "Laden der Anwendung",
      "RenderWebPartsLabel": "Wiedergeben von Webparts",
      "TotalRenderTimeLabel": "Gesamt",
      "GeneralErrorMessage": "Beim Abrufen der Leistungsdaten hat leider etwas nicht geklappt.",
      "ErrorMessagePrefix": "Fehlermeldung: {0}",
      "PerformanceDataHint": "Hinweis: Nach dem Hinzufügen oder Entfernen eines Webparts aktualisieren Sie die Seite, um aktualisierte Leistungsdaten anzuzeigen.",
      "ModulesLoadedLegendLabel": "Geladene Module",
      "InitializationLegendLabel": "Initialisierung",
      "RenderTimeLegendLabel": "Wiedergabezeit",
      "InitializationTimeLabel": "Initialisierungszeit",
      "ModuleLoadingTimeLabel": "Modulladezeit",
      "ModuleLazyLoadingDelayLabel": "Laden des Moduls verzögert",
      "DataFetchTimeLabel": "Datenabrufzeit",
      "DataFetchLegendLabel": "Datenabruf",
      "ItemsColumnHeader": "Elemente",
      "DurationColumnHeader": "Dauer",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/V"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Ablaufverfolgung",
      "EmptyTraceData": "Keine Ablaufverfolgungen geladen.",
      "ExportCSVButtonLabel": "CSV-Datei exportieren",
      "LevelHeaderLabel": "Ebene",
      "MessageHeaderLabel": "Meldung",
      "ScopeHeaderLabel": "Bereich",
      "SourceHeaderLabel": "Quelle",
      "TimestampHeaderLabel": "Zeitstempel",
      "TimestampFormat": "{2}.{1}.{0} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Problem beim Zugriff auf die Ablaufverfolgungsdaten."
    }
  };

  strings.default = strings;
  return strings;
});
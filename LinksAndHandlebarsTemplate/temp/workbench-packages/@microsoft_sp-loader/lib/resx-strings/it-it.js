define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Non è possibile caricare l'applicazione in questa pagina. Usare il pulsante Indietro del browser per riprovare. Se il problema persiste, contattare l'amministratore del sito e specificare le informazioni in Dettagli tecnici.",
      "platformFailedToLoadError": "Il caricamento della piattaforma non è riuscito. ID: \"{0}\", nome: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Il caricamento della piattaforma non è riuscito. ID: \"{0}\", nome: \"{1}\".\r\nErrore: {2}",
      "applicationFailedToInitializeError": "Errore durante l'inizializzazione dell'applicazione. Errore: {0}",
      "invalidPreloadedDataError": "Dati precaricati non validi.",
      "manifestNotFoundByIdError": "Manifesto non trovato per il componente con ID \"{0}\".",
      "manifestNotFoundError": "Manifesto non trovato per il componente con ID \"{0}\" e versione \"{1}\".",
      "systemConfigDisabledError": "System.config() non è supportato. Usare un manifesto per specificare la configurazione.",
      "loadComponentLog": "Caricamento del componente \"{0}\" ({1}).",
      "loadComponentEndLog": "Il componente \"{0}\" ({1}) è stato caricato.",
      "loadComponentRetryLog": "Caricamento del componente \"{0}\" ({1}). Tentativo {2} di {3}.",
      "loadComponentError": "Non è stato possibile caricare il componente \"{0}\" ({1}).\r\nErrore originale: {2}",
      "loadComponentMaxRetriesError": "Si è tentanto di caricare il componente \"{0}\" ({1}) {2} volte senza successo.",
      "loadComponentDependencyError": "Non è stato possibile caricare la dipendenza del componente \"{0}\" dal componente \"{1}\" ({2}). \r\nErrore originale: {3}",
      "loadComponentDependencyFailoverPathError": "Non è stato possibile caricare la dipendenza del componente \"{0}\" con il percorso di failover \"{1}\" dal componente \"{2}\" ({3}).\r\nErrore originale: {4}",
      "loadPathDependencyLog": "Caricamento della dipendenza del percorso \"{0}\" dal componente \"{1}\" ({2})",
      "loadPathDependencyError": "Non è stato possibile caricare la dipendenza del percorso \"{0}\" dal componente \"{1}\" ({2}).\r\nErrore originale: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Non è stato possibile caricare la dipendenza del percorso \"{0}\" dal componente \"{1}\" ({2}) perché il caricamento di un'altra dipendenza non è riuscito.",
      "loadEntryPointError": "Non è stato possibile caricare il punto di ingresso dal componente \"{0}\" ({1}).\r\nErrore originale: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() ha restituito un oggetto vuoto per il componente \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() ha restituito un oggetto con una proprietà predefinita vuota per il componente \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "Il punto di ingresso per il componente \"{0}\" ({1}) ha una dipendenza da \"{2}\" che non è dichiarata nel manifesto.",
      "loadScriptWithStringError": "La funzione loadScript non accetta una stringa come 2° parametro. Usare ILoadScriptOptions.",
      "tooManyManifestsError": "{0} manifesti (versioni {1}) trovati per il componente \"{2}\".",
      "tooManyCompatibleVersionsError": "{0} versioni compatibili ({1}) trovate per il componente \"{2}\", versione \"{3}\".",
      "tooManyComponentsError": "Sono stati trovati troppi componenti per l'ID \"{0}\".",
      "noComponentFoundError": "Non sono stati trovati componenti per l'ID \"{0}\".",
      "deleteComponentLog": "Eliminazione del componente \"{0}\" versione \"{1}\" dall'archivio.",
      "browserNotSupportedError": "Questa versione del browser non è supportata.\r\nAggiornare il browser con la versione più recente.",
      "ie9OrOlderNotSupportedError": "Questa pagina non supporta le versioni di Internet Explorer precedenti alla versione 10. Aggiornare il Web browser.",
      "firefox43OrOlderNotSupportedError": "Questa pagina non supporta le versioni di Mozilla Firefox precedenti alla versione 44. Aggiornare il Web browser.",
      "resourceNotFoundError": "Risorsa \"{0}\"non trovata nella configurazione del caricatore del manifesto del componente\"{1}\" ({2}).",
      "noFailoverPathError": "Non è possibile chiamare resolveAddress() per un componente senza percorso di failover",
      "urlStatusLocalhostFileNotFoundError": "Non è stato possibile caricare l'URL '{3}' per la risorsa '{2}' nel componente '{0}' ({1}). Il file non è stato trovato nel server.\r\nAssicurarsi che si stia eseguendo 'gulp serve'.",
      "urlStatusFileNotFoundError": "Non è stato possibile caricare l'URL '{3}' per la risorsa '{2}' nel componente '{0}' ({1}). Il file non è stato trovato nel server.",
      "urlStatusForbiddenError": "Non è stato possibile caricare l'URL '{3}' per la risorsa '{2}' nel componente '{0}' ({1}). L'accesso al file non è consentito.",
      "urlStatusClientErrorError": "Non è stato possibile caricare l'URL '{3}' per la risorsa'{2}' nel componente '{0}' ({1}). Si è verificato un errore durante l'invio della richiesta del file.",
      "urlStatusServerErrorError": "Non è stato possibile caricare l'URL '{3}' per la risorsa '{2}' nel componente '{0}' ({1}). Si è verificato un problema nel server.",
      "urlStatusLocalhostNetworkErrorError": "Non è stato possibile caricare l'URL '{3}' per la risorsa '{2}' nel componente '{0}' ({1}). Si è verificato un problema di rete.\r\nAssicurarsi che sia in esecuzione 'gulp serve' e che sia stato eseguito 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "Non è stato possibile caricare l'URL '{3}' per la risorsa '{2}' nel componente '{0}' ({1}). Si è verificato un problema di rete.\r\nPotrebbe trattarsi di un problema con un certificato HTTPS. Assicurarsi di avere il certificato corretto.",
      "urlStatusNetworkErrorError": "Non è stato possibile caricare l'URL '{3}' per la risorsa '{2}' nel componente '{0}' ({1}). Si è verificato un problema di rete.",
      "urlStatusUndefinedError": "Non è stato possibile caricare l'URL '{3}' per la risorsa '{2}' nel componente '{0}' ({1}) a causa di problemi sconosciuti.",
      "isUndefinedValidateError": "Il valore per \"{0}\" non deve essere non definito",
      "failedToCreateGlobalVariableError": "Non è stato possibile creare una variabile globale \"{0}\" dallo script \"{1}\"",
      "dependencyLoadError": "Il modulo '{0}' non è stato caricato perché la dipendenza {1} non è stata caricata",
      "missingPathDependencyError": "Dipendenza del percorso \"{0}\" dal componente \"{1}\" ({2}) mancante. Dipendenze del percorso esistenti: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Errore durante il caricamento dello script di debug. Verificare che il server sia in esecuzione e che l'URL del parametro \"{0}\" sia corretto.",
      "errorLoadingDebugScriptHTTP": "Errore durante il caricamento dello script di debug. Verificare che il server sia in esecuzione, che l'URL del parametro \"{0}\" sia corretto e che sia consentito il caricamento di script non sicuri. Può anche essere utile usare un certificato di sviluppo e fornire gli script di debug su HTTPS.",
      "errorLoadingDebugScriptMalformed": "Errore durante il caricamento dello script di debug. L'URL di debug ({0}) non è valido.",
      "errorLoadingDebugScriptUnknown": "Errore sconosciuto durante il caricamento di uno script di debug.",
      "errorLoadingDebugLoaderTitle": "Errore durante il caricamento del caricatore di debug.",
      "errorLoadingDebugManifestTitle": "Errore durante il caricamento dei manifesti di debug.",
      "errorLoadingUnknownTitle": "Errore durante il caricamento degli script di debug."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Componente o funzione di inizializzazione mancante.",
      "closeDeveloperToolsAriaLabel": "Chiude gli strumenti di sviluppo."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Avviso.",
      "warningLine1": "L'uso di questo strumento espone a potenziali minacce per la sicurezza, che potrebbero essere tali da consentire ad altri di accedere ai dati personali di Office 365 dell'utente (documenti, messaggi di posta elettronica, conversazioni e altro). Prima di procedere, assicurarsi che la persona o l'organizzazione che ha richiesto l'accesso a questo strumento sia attendibile.",
      "warningLine2": "Altre informazioni sono disponibili qui: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Si è verificato un errore durante il caricamento dei manifesti di debug.",
      "debugManifestErrorDismissButtonText": "Chiudi"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Abilitare gli script di debug?",
      "allowDebugLoaderTitle": "Consentire il caricatore di debug?",
      "allowDebugLoaderAndManifestsTitle": "Consentire il caricatore e gli script di debug?",
      "debugManifestLoadingWarning": "AVVISO: questa pagina contiene script non sicuri che, se caricati, potrebbero danneggiare il computer. Continuare solo se si considera attendibile lo sviluppatore e si comprendono i rischi.",
      "debugManifestLoadingWarning2": "In caso di dubbi, fare clic su {0}.",
      "debugManifestLoadingConfirm": "Carica script di debug",
      "debugManifestLoadingCancel": "Non caricare script di debug",
      "debugManifestLoadingCalloutText": "Per saperne di più, fare clic qui."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Caricamento in corso...",
      "developerToolsTabLoadingUnknownError": "Errore sconosciuto durante il caricamento del modulo degli strumenti di sviluppo."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesti",
      "noManifestSelected": "Nessun manifesto selezionato"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Prestazioni",
      "ErrorAccessingPerfDataErrorMessage": "Non è possibile recuperare i dati sulle prestazioni: l'oggetto è Null o non definito.",
      "ErrorAccessingRedirectDataErrorMessage": "C'è stato un problema durante l'accesso ai dati sulle prestazioni del reindirizzamento HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "È stato rilevato un errore durante l'analisi dei dati sulla latenza percepita.",
      "ErrorParsingApiDataErrorMessage": "È stato rilevato un errore durante l'analisi dei dati delle API.",
      "UnkownPerformanceDataErrorMessage": "Si è verificato un errore sconosciuto: {0}",
      "DefaultWebPartName": "Web part",
      "ServerResponseLabel": "Risposta del server",
      "ApplicationInitializationLabel": "Inizializzazione applicazioni",
      "ScriptFetchEvalLabel": "Recupero e valutazione script",
      "SpLoaderStartLabel": "Inizializzazione SPFx",
      "PageRenderLabel": "Rendering pagine",
      "LeftNavRenderLabel": "Rendering barra di spostamento sinistra",
      "CanvasRenderLabel": "Rendering area di disegno",
      "LayoutRenderLabel": "Rendering layout",
      "RedirectResponseLabel": "Risposta reindirizzamento",
      "AppLoadLabel": "Caricamento applicazioni",
      "RenderWebPartsLabel": "Rendering web part",
      "TotalRenderTimeLabel": "Totale",
      "GeneralErrorMessage": "C'è stato un problema durante il recupero dei dati sulle prestazioni.",
      "ErrorMessagePrefix": "Messaggio di errore: {0}",
      "PerformanceDataHint": "Nota: dopo l'aggiunta o la rimozione di una web part, aggiornare la pagina per visualizzare i dati aggiornati sulle prestazioni.",
      "ModulesLoadedLegendLabel": "Moduli caricati",
      "InitializationLegendLabel": "Inizializzazione",
      "RenderTimeLegendLabel": "Tempo di rendering",
      "InitializationTimeLabel": "Ora di inizializzazione",
      "ModuleLoadingTimeLabel": "Ora di caricamento modulo",
      "ModuleLazyLoadingDelayLabel": "Ritardo di caricamento del modulo",
      "DataFetchTimeLabel": "Ora di recupero dati",
      "DataFetchLegendLabel": "Recupero dati",
      "ItemsColumnHeader": "Elementi",
      "DurationColumnHeader": "Durata",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/D"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Traccia",
      "EmptyTraceData": "Nessuna traccia caricata.",
      "ExportCSVButtonLabel": "Esporta CSV",
      "LevelHeaderLabel": "Livello",
      "MessageHeaderLabel": "Messaggio",
      "ScopeHeaderLabel": "Ambito",
      "SourceHeaderLabel": "Origine",
      "TimestampHeaderLabel": "Data e ora",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "C'è stato un problema durante l'accesso ai dati di traccia."
    }
  };

  strings.default = strings;
  return strings;
});
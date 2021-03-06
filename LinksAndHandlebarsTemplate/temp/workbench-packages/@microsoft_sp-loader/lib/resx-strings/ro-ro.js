define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Aplicația nu se poate încărca pe această pagină. Utilizați butonul Înapoi din browser pentru a reîncerca. Dacă problema persistă, contactați administratorul site-ului și dați-i informațiile din Detalii tehnice.",
      "platformFailedToLoadError": "Platforma nu a reușit să se încarce. ID: „{0}”, nume: „{1}”",
      "platformFailedToLoadWithMessageError": "Platforma nu a reușit să se încarce. ID: „{0}”, nume: „{1}”.\r\nEroare: {2}",
      "applicationFailedToInitializeError": "Eroare la inițializarea aplicației. Eroare: {0}",
      "invalidPreloadedDataError": "Date preîncărcate nevalide.",
      "manifestNotFoundByIdError": "Manifestul nu a fost găsit pentru ID-ul de componentă „{0}”.",
      "manifestNotFoundError": "Nu a fost găsit manifestul pentru ID-ul de componentă „{0}” și versiunea „{1}”.",
      "systemConfigDisabledError": "System.config() nu este acceptat. Utilizați un manifest pentru specificarea configurației.",
      "loadComponentLog": "Componenta „{0}” este în curs de încărcare ({1}).",
      "loadComponentEndLog": "Componenta „{0}” ({1}) a fost încărcată.",
      "loadComponentRetryLog": "Componenta „{0}” este în curs de încărcare ({1}). Încercarea {2} din {3}.",
      "loadComponentError": "Încărcarea componentei „{0}” nu a reușit ({1}).\r\nEroarea inițială: {2}",
      "loadComponentMaxRetriesError": "S-a încercat încărcarea componentei „{0}” ({1}) de {2} ori fără succes.",
      "loadComponentDependencyError": "Încărcarea dependenței de componentă „{0}” de la componenta „{1}” ({2}) nu a reușit.\r\nEroarea inițială: {3}",
      "loadComponentDependencyFailoverPathError": "Nu a reușit încărcarea dependenței de componentă „{0}” cu calea de reluare în caz de nereușită „{1}” de la componenta „{2}” ({3}).\r\nEroare originală: {4}",
      "loadPathDependencyLog": "Se încarcă dependența de cale „{0}” din componenta „{1}” ({2})",
      "loadPathDependencyError": "Nu a reușit încărcarea dependenței de cale „{0}” de la componenta „{1}” ({2}).\r\nEroare originală: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Nu s-a reușit încărcarea dependenței de cale „{0}” din componenta „{1}” ({2}), din cauza unei alte dependențe care nu s-a încărcat.",
      "loadEntryPointError": "Nu a reușit încărcarea punctului de intrare de la componenta „{0}” ({1}).\r\nEroare originală: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() a returnat un obiect gol pentru componenta „{0}” ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() a returnat un obiect cu o proprietate implicită goală pentru componenta „{0}” ({1}).",
      "moduleHasUndeclaredDependencyError": "Punctul de intrare pentru componenta „{0}” ({1}) are o dependență pentru „{2}”, care nu a fost declarată în manifest.",
      "loadScriptWithStringError": "funcția loadScript nu permite un șir ca parametru secundar. Utilizați în schimb ILoadScriptOptions.",
      "tooManyManifestsError": "S-au găsit {0} manifeste (versiuni {1}) pentru componenta „{2}”.",
      "tooManyCompatibleVersionsError": "S-au găsit {0} versiuni compatibile ({1}) pentru componenta „{2}”, versiunea „{3}”.",
      "tooManyComponentsError": "Prea multe componente găsite pentru ID „{0}”.",
      "noComponentFoundError": "Nu s-a găsit nicio componentă pentru ID-ul „{0}”.",
      "deleteComponentLog": "Se șterge componenta „{0}”, versiunea „{1}” din magazin.",
      "browserNotSupportedError": "Această versiune de browser nu este acceptată.\r\nActualizați browserul la cea mai recentă versiune.",
      "ie9OrOlderNotSupportedError": "Această pagină nu acceptă versiuni de Internet Explorer mai vechi decât versiunea 10. Actualizați browserul web.",
      "firefox43OrOlderNotSupportedError": "Această pagină nu acceptă versiuni de Mozilla Firefox mai vechi decât versiunea 44. Actualizați browserul web.",
      "resourceNotFoundError": "Resursa „{0}” nu a fost găsită în configurația de încărcare a manifestului pentru componenta „{1}” ({2}).",
      "noFailoverPathError": "Nu se poate apela resolveAddress() pe o componentă fără cale de reluare în caz de nereușită",
      "urlStatusLocalhostFileNotFoundError": "Încărcarea URL-ului „{3}” pentru resursa „{2}” din componenta „{0}” ({1}) nu a reușit. Fișierul nu a fost găsit pe server.\r\nAsigurați-vă că rulați „gulp serve”.",
      "urlStatusFileNotFoundError": "Încărcarea URL-ului „{3}” pentru resursa „{2}” din componenta „{0}” ({1}) nu a reușit. Fișierul nu a fost găsit pe server.",
      "urlStatusForbiddenError": "Încărcarea URL-ului „{3}” pentru resursa „{2}” din componenta „{0}” ({1}) nu a reușit. Accesul la fișier este interzis.",
      "urlStatusClientErrorError": "Încărcarea URL-ului „{3}” pentru resursa „{2}” din componenta „{0}” ({1}) nu a reușit. A existat o eroare de solicitare a fișierului.",
      "urlStatusServerErrorError": "Încărcarea URL-ului „{3}” pentru resursa „{2}” din componenta „{0}” ({1}) nu a reușit. A existat o problemă pe server.",
      "urlStatusLocalhostNetworkErrorError": "Încărcarea URL-ului „{3}” pentru resursa „{2}” din componenta „{0}” ({1}) nu a reușit. A existat o problemă de rețea.\r\nAsigurați-vă că rulați „gulp serve” și că ați rulat „gulp trust-dev-cert”.",
      "urlStatusHttpsNetworkErrorError": "Încărcarea URL-ului „{3}” pentru resursa „{2}” din componenta „{0}” ({1}) nu a reușit. A existat o problemă de rețea.\r\nAceasta poate fi o problemă cu un certificat HTTPS. Asigurați-vă că aveți certificatul corect.",
      "urlStatusNetworkErrorError": "Încărcarea URL-ului „{3}” pentru resursa „{2}” din componenta „{0}” ({1}) nu a reușit. A existat o problemă de rețea.",
      "urlStatusUndefinedError": "Încărcarea URL-ului „{3}” pentru resursa „{2}” din componenta „{0}” ({1}) nu a reușit din cauza unor probleme necunoscute.",
      "isUndefinedValidateError": "Valoarea pentru „{0}” nu trebuie să fie nedefinită",
      "failedToCreateGlobalVariableError": "Crearea variabilei globale „{0}” de la scriptul „{1}” nu a reușit",
      "dependencyLoadError": "Încărcarea modulului „{0}” nu a reușit, pentru că dependența {1} nu a fost încărcată",
      "missingPathDependencyError": "Lipsește dependența de cale „{0}” din componenta „{1}” ({2}). Dependențele existente ale căii: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Eroare la încărcarea scriptului de depanare. Asigurați-vă că serverul rulează și că URL-ul din parametrul „{0}” este corect.",
      "errorLoadingDebugScriptHTTP": "Eroare la încărcarea scriptului de depanare. Asigurați-vă că serverul rulează, că URL-ul din parametrul „{0}” este corect și că încărcarea de scripturi nesigure este permisă. De asemenea, luați în considerare utilizarea unui certificat de dezvoltator și servirea scripturilor de depanare prin HTTPS.",
      "errorLoadingDebugScriptMalformed": "Eroare la încărcarea scriptului de depanare. URL-ul de depanare ({0}) pare a fi greșit format.",
      "errorLoadingDebugScriptUnknown": "Eroare necunoscută la încărcarea unui script de depanare.",
      "errorLoadingDebugLoaderTitle": "Eroare la încărcarea instrumentului de încărcare a depanării.",
      "errorLoadingDebugManifestTitle": "Eroare la încărcarea manifestelor de depanare.",
      "errorLoadingUnknownTitle": "Eroare la încărcarea scripturilor de depanare."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Componenta sau funcția de inițializare lipsesc.",
      "closeDeveloperToolsAriaLabel": "Închideți instrumentele de dezvoltator."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Avertisment!",
      "warningLine1": "Utilizarea acestui instrument vă expune unor potențiale amenințări de securitate, care pot duce la o situație în care alte persoane obțin acces la datele dvs. personale Office 365 (documente, mesaje de e-mail, conversații și altele). Înainte de a continua, asigurați-vă că aveți încredere în persoana sau organizația care v-a solicitat să accesați acest instrument.",
      "warningLine2": "Aflați mai multe aici: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "A avut loc o eroare la încărcarea manifestelor de depanare.",
      "debugManifestErrorDismissButtonText": "Îndepărtare"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Permiteți scripturile de depanare?",
      "allowDebugLoaderTitle": "Permiteți instrumentul de încărcare a depanării?",
      "allowDebugLoaderAndManifestsTitle": "Permiteți instrumentul de încărcare a depanării și scripturi de depanare?",
      "debugManifestLoadingWarning": "AVERTISMENT: această pagină conține scripturi nesigure care, dacă sunt încărcate, ar putea dăuna computerului. Nu începeți decât dacă aveți încredere în dezvoltator și înțelegeți riscurile.",
      "debugManifestLoadingWarning2": "Dacă nu sunteți sigur, faceți clic pe {0}.",
      "debugManifestLoadingConfirm": "Încărcați scripturile de depanare",
      "debugManifestLoadingCancel": "Nu încărcați scripturile de depanare",
      "debugManifestLoadingCalloutText": "Dacă nu știți ce să faceți, faceți clic aici."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Se încarcă...",
      "developerToolsTabLoadingUnknownError": "Eroare necunoscută la încărcarea modulului de instrumente pentru dezvoltatori."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifeste",
      "noManifestSelected": "Niciun manifest selectat"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performanță",
      "ErrorAccessingPerfDataErrorMessage": "Nu s-a reușit regăsirea datelor de performanță: obiectul este nul sau nedefinit.",
      "ErrorAccessingRedirectDataErrorMessage": "A existat o problemă la accesarea datelor de performanță de redirecționare HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "A fost interceptată o eroare la analiza datelor de latență percepute.",
      "ErrorParsingApiDataErrorMessage": "A fost interceptată o eroare la analiza datelor API.",
      "UnkownPerformanceDataErrorMessage": "A apărut o eroare necunoscută: {0}",
      "DefaultWebPartName": "Parte web",
      "ServerResponseLabel": "Răspuns de la server",
      "ApplicationInitializationLabel": "Inițializare aplicație",
      "ScriptFetchEvalLabel": "Preluare și evaluare script",
      "SpLoaderStartLabel": "Inițializare SPFx",
      "PageRenderLabel": "Redare pagină",
      "LeftNavRenderLabel": "Redare navigare stânga",
      "CanvasRenderLabel": "Redare pânză",
      "LayoutRenderLabel": "Redare aspect",
      "RedirectResponseLabel": "Redirecționați răspunsul",
      "AppLoadLabel": "Încărcare aplicație",
      "RenderWebPartsLabel": "Redare părți web",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Ne pare rău, ceva nu a funcționat corect la regăsirea datelor de performanță.",
      "ErrorMessagePrefix": "Mesaj de eroare: {0}",
      "PerformanceDataHint": "Notă: după adăugarea sau eliminarea unei părți web, reîmprospătați pagina pentru a vedea datele de performanță actualizate.",
      "ModulesLoadedLegendLabel": "Module încărcate",
      "InitializationLegendLabel": "Inițializare",
      "RenderTimeLegendLabel": "Ora de redare",
      "InitializationTimeLabel": "Timp de inițializare",
      "ModuleLoadingTimeLabel": "Timp de încărcare a modulelor",
      "ModuleLazyLoadingDelayLabel": "Încărcare modul întârziată",
      "DataFetchTimeLabel": "Timp de preluare a datelor",
      "DataFetchLegendLabel": "Preluare date",
      "ItemsColumnHeader": "Elemente",
      "DurationColumnHeader": "Durată",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Indisponibil"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Urmărire",
      "EmptyTraceData": "Nicio urmărire încărcată.",
      "ExportCSVButtonLabel": "Export la CSV",
      "LevelHeaderLabel": "Nivel",
      "MessageHeaderLabel": "Mesaj",
      "ScopeHeaderLabel": "Domeniu",
      "SourceHeaderLabel": "Sursă",
      "TimestampHeaderLabel": "Marcă de timp",
      "TimestampFormat": "{2}.{1}.{0} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "A existat o problemă la accesarea datelor de urmărire."
    }
  };

  strings.default = strings;
  return strings;
});
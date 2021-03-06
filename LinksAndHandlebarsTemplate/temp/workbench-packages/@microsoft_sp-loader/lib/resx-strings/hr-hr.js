define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Aplikaciju nije moguće učitati na toj stranici. Pokušajte ponovno pomoću gumba Natrag u pregledniku. Ako to ne riješi problem, obratite se administratoru web-mjesta i navedite informacije iz odjeljka s tehničkim pojedinostima.",
      "platformFailedToLoadError": "Platforma se nije uspjela učitati. ID: \"{0}\", naziv: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Platforma se nije uspjela učitati. Id: \"{0}\", naziv: \"{1}\".\r\nPogreška: {2}",
      "applicationFailedToInitializeError": "Pogreška prilikom inicijalizacije. Pogreška: {0}",
      "invalidPreloadedDataError": "Unaprijed učitani podaci nisu valjani.",
      "manifestNotFoundByIdError": "Nije pronađen manifest za ID komponente \"{0}\".",
      "manifestNotFoundError": "Manifest nije pronađen za ID komponente \"{0}\" i verziju \"{1}\".",
      "systemConfigDisabledError": "Metoda System.config() nije podržana. Navedite konfiguraciju pomoću manifesta.",
      "loadComponentLog": "Učitavanje komponente \"{0}\" ({1}).",
      "loadComponentEndLog": "Učitana je komponenta \"{0}\" ({1}).",
      "loadComponentRetryLog": "Učitavanje komponente \"{0}\" ({1}). Pokušaj {2} od {3}.",
      "loadComponentError": "Nije uspjelo učitavanje komponente \"{0}\" ({1}).\r\nIzvorna pogreška: {2}",
      "loadComponentMaxRetriesError": "Komponentu \"{0}\" ({1}) bezuspješno smo pokušali učitati sljedeći broj puta: {2}.",
      "loadComponentDependencyError": "Nije uspjelo učitavanje zavisnosti komponente \"{0}\" iz komponente \"{1}\" ({2}).\r\nIzvorna pogreška: {3}",
      "loadComponentDependencyFailoverPathError": "Nije uspjelo učitavanje zavisnosti komponente \"{0}\" s putom za prebacivanje \"{1}\" u slučaju pogreške iz komponente \"{2}\" ({3}).\r\nIzvorna pogreška: {4}",
      "loadPathDependencyLog": "Učitavanje ovisnosti puta \"{0}\" komponente \"{1}\" ({2})",
      "loadPathDependencyError": "Nije uspjelo učitavanje zavisnosti puta \"{0}\" iz komponente \"{1}\" ({2}).\r\nIzvorna pogreška: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Nije uspjelo učitavanje ovisnosti puta \"{0}\" komponente \"{1}\" ({2}) jer se neka druga ovisnost nije uspjela učitati.",
      "loadEntryPointError": "Nije uspjelo učitavanje točke unosa iz komponente \"{0}\" ({1}).\r\nIzvorna pogreška: {2}",
      "loadComponentReturnsEmptyError": "Funkcija loadComponent() vratila je prazan objekt za komponentu \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "Funkcija loadComponent() vratila je objekt s praznim zadanim svojstvom za komponentu \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "Ulazna točka za komponentu \"{0}\" ({1}) ima ovisnost \"{2}\" koja nije deklarirana u manifestu.",
      "loadScriptWithStringError": "Funkcija loadScript ne dopušta niz kao drugi parametar. Umjesto nje koristite ILoadScriptOptions.",
      "tooManyManifestsError": "{0} manifesta (verzije {1}) pronađena za komponentu \"{2}\".",
      "tooManyCompatibleVersionsError": "{0} kompatibilne verzije ({1}) pronađene za komponentu \"{2}\", verziju \"{3}\".",
      "tooManyComponentsError": "Za ID \"{0}\" pronađeno je previše komponenti.",
      "noComponentFoundError": "Nije pronađena komponenta za ID \"{0}\".",
      "deleteComponentLog": "Brisanje komponente \"{0}\" verzije \"{1}\"\" iz spremišta.",
      "browserNotSupportedError": "Ova verzija preglednika nije podržana.\r\nAžurirajte preglednik na najnoviju verziju.",
      "ie9OrOlderNotSupportedError": "Ta stranica ne podržava izdanja preglednika Internet Explorer starija od verzije 10. Ažurirajte web-preglednik.",
      "firefox43OrOlderNotSupportedError": "Stranica ne podržava izdanja preglednika Mozilla Firefox starija od verzije 44. Ažurirajte web-preglednik.",
      "resourceNotFoundError": "Resurs \"{0}\" nije pronađen u konfiguraciji učitavača manifesta za komponentu \"{1}\" ({2}).",
      "noFailoverPathError": "Nije moguće pozvati resolveAddress() za komponentu koja nema put za slučaj pogreške",
      "urlStatusLocalhostFileNotFoundError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Datoteka nije pronađena na poslužitelju.\r\nProvjerite izvodi li se 'gulp serve'.",
      "urlStatusFileNotFoundError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Datoteka nije pronađena na poslužitelju.",
      "urlStatusForbiddenError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Zabranjen je pristup datoteci.",
      "urlStatusClientErrorError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Pojavila se pogreška prilikom slanja zahtjeva za datoteku.",
      "urlStatusServerErrorError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Pojavio se problem na poslužitelju.",
      "urlStatusLocalhostNetworkErrorError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Pojavio se problem s mrežom.\r\nProvjerite izvodi li se \"gulp server\" te jeste li pokrenuli \"gulp trust-dev-cert\".",
      "urlStatusHttpsNetworkErrorError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Pojavio se problem s mrežom.\r\nMožda postoji problem s HTTPS certifikatom. Provjerite imate li odgovarajući certifikat.",
      "urlStatusNetworkErrorError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Pojavio se problem s mrežom.",
      "urlStatusUndefinedError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo zbog nepoznatih problema.",
      "isUndefinedValidateError": "Vrijednost za \"{0}\" ne smije biti nedefinirana",
      "failedToCreateGlobalVariableError": "Stvaranje globalne varijable \"{0}\" iz skripte \"{1}\" nije uspjelo",
      "dependencyLoadError": "Učitavanje modula '{0}' nije uspjelo jer nije učitan ovisni element {1}",
      "missingPathDependencyError": "Nedostaje zavisnost puta \"{0}\" u komponenti \"{1}\" ({2}). Postojeće zavisnosti puta: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Pogreška pri učitavanju skripte za ispravljanje programskih pogrešaka. Provjerite je li poslužitelj pokrenut te je li URL parametra \"{0}\" točan.",
      "errorLoadingDebugScriptHTTP": "Pogreška pri učitavanju skripte za ispravljanje programskih pogrešaka. Provjerite je li poslužitelj pokrenut i je li URL parametra \"{0}\" točan te je li dopušteno učitavanje nepouzdanih skripti. Razmotrite i korištenje certifikata razvoja te posluživanje skripti za ispravljanje programskih pogrešaka putem HTTPS-a.",
      "errorLoadingDebugScriptMalformed": "Pogreška pri učitavanju skripte za ispravljanje pogrešaka. Čini se da je URL za ispravljanje programskih pogrešaka ({0}) oštećen.",
      "errorLoadingDebugScriptUnknown": "Nepoznata pogreška prilikom učitavanja skripte za ispravljanje programskih pogrešaka.",
      "errorLoadingDebugLoaderTitle": "Pogreška prilikom učitavanja ispravljanja programskih pogrešaka.",
      "errorLoadingDebugManifestTitle": "Prilikom učitavanja manifesta ispravljanja pogrešaka došlo je do pogreške.",
      "errorLoadingUnknownTitle": "Pogreška prilikom učitavanja skripti za ispravljanje programskih pogrešaka."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Nedostaje komponenta ili funkcija inicijalizatora.",
      "closeDeveloperToolsAriaLabel": "Zatvorite alate za razvojne inženjere."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Oprez!",
      "warningLine1": "Korištenje tog alata izlaže vas potencijalnim sigurnosnim prijetnjama koje mogu drugim dati pristup vašim osobnim podacima iz sustava Office 365 (dokumentima, porukama e-pošte, razgovorima itd.). Prije nastavka provjerite da je pristup tom alatu od vas zatražila pouzdana osoba, tvrtka ili ustanova.",
      "warningLine2": "Saznajte više ovdje: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Prilikom učitavanja manifesta ispravljanja pogrešaka došlo je do pogreške.",
      "debugManifestErrorDismissButtonText": "Odbaci"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Želite li dopustiti skripte za otklanjanje programskih pogrešaka?",
      "allowDebugLoaderTitle": "Želite li dopustiti učitavanje ispravaka programskih pogrešaka?",
      "allowDebugLoaderAndManifestsTitle": "Želite li dopustiti učitavanje ispravaka programskih pogrešaka i skripte za ispravljanje programskih pogrešaka?",
      "debugManifestLoadingWarning": "UPOZORENJE: ova stranica sadrži nesigurne skripte čije učitavanje može oštetiti računalo. Nemojte nastaviti ako razvijatelj nije pouzdan i ako ne razumijete opasnosti.",
      "debugManifestLoadingWarning2": "Ako niste sigurni, kliknite {0}.",
      "debugManifestLoadingConfirm": "Učitaj skripte za ispravljanje pogrešaka",
      "debugManifestLoadingCancel": "Ne učitavaj skripte za ispravljanje pogrešaka",
      "debugManifestLoadingCalloutText": "Ako ne znate što učiniti, kliknite ovdje."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Učitavanje...",
      "developerToolsTabLoadingUnknownError": "Nepoznata pogreška prilikom učitavanja modula alata za razvojne inženjere."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesti",
      "noManifestSelected": "Nijedan manifest nije odabran"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performanse",
      "ErrorAccessingPerfDataErrorMessage": "Nije moguće dohvatiti podatke o performansama: objekt ima vrijednost null ili nije definiran.",
      "ErrorAccessingRedirectDataErrorMessage": "Pojavio se problem prilikom pristupanja podacima o performansama preusmjeravanja HTTP-a.",
      "ErrorParsingPercievedLatencyErrorMessage": "Pronađena je pogreška prilikom raščlanjivanja podataka o uočenom kašnjenju.",
      "ErrorParsingApiDataErrorMessage": "Pronađena je pogreška prilikom raščlanjivanja podataka API-ja.",
      "UnkownPerformanceDataErrorMessage": "Došlo je do nepoznate pogreške: {0}",
      "DefaultWebPartName": "Web-dio",
      "ServerResponseLabel": "Odgovor poslužitelja",
      "ApplicationInitializationLabel": "Inicijalizacija aplikacije",
      "ScriptFetchEvalLabel": "Dohvaćanje i procjena skripte",
      "SpLoaderStartLabel": "Inicijalizacija SPFx-a",
      "PageRenderLabel": "Iscrtavanje stranice",
      "LeftNavRenderLabel": "Iscrtavanje lijeve navigacije",
      "CanvasRenderLabel": "Iscrtavanje područja stvaranja",
      "LayoutRenderLabel": "Renderiranje rasporeda",
      "RedirectResponseLabel": "Odgovor preusmjerivanja",
      "AppLoadLabel": "Učitavanje aplikacije",
      "RenderWebPartsLabel": "Iscrtavanje web-dijelova",
      "TotalRenderTimeLabel": "Ukupno",
      "GeneralErrorMessage": "Nažalost, nešto nije u redu prilikom dohvaćanja podataka o performansama.",
      "ErrorMessagePrefix": "Poruka o pogrešci: {0}",
      "PerformanceDataHint": "Napomena: nakon dodavanja ili uklanjanja web-dijela osvježite stranicu da biste vidjeli ažurirane podatke o performansama.",
      "ModulesLoadedLegendLabel": "Učitani moduli",
      "InitializationLegendLabel": "Inicijalizacija",
      "RenderTimeLegendLabel": "Vrijeme iscrtavanja",
      "InitializationTimeLabel": "Vrijeme inicijalizacije",
      "ModuleLoadingTimeLabel": "Vrijeme učitavanja modula",
      "ModuleLazyLoadingDelayLabel": "Odgođeno je učitavanje modula",
      "DataFetchTimeLabel": "Vrijeme dohvaćanja podataka",
      "DataFetchLegendLabel": "Dohvaćanje podataka",
      "ItemsColumnHeader": "Stavke",
      "DurationColumnHeader": "Trajanje",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Nije dostupno"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Prati",
      "EmptyTraceData": "Nije učitano nijedno praćenje.",
      "ExportCSVButtonLabel": "Izvoz u obliku CSV",
      "LevelHeaderLabel": "Razina",
      "MessageHeaderLabel": "Poruka",
      "ScopeHeaderLabel": "Opseg",
      "SourceHeaderLabel": "Izvor",
      "TimestampHeaderLabel": "Vremenska oznaka",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Došlo je do problema prilikom pristupa podacima praćenja."
    }
  };

  strings.default = strings;
  return strings;
});
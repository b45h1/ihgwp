define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Nije moguće učitati aplikaciju na ovoj stranici. Koristite dugme Nazad u pregledniku da biste pokušali opet. Ako ponovo dođe do problema, obratite se administratoru lokacije i dajte mu informacije u okviru Tehnički detalji.",
      "platformFailedToLoadError": "Nije uspjelo učitavanje platforme. ID: \"{0}\", naziv: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Platforma se nije uspjela učitati. Id: \"{0}\", naziv: \"{1}\".\r\nGreška: {2}",
      "applicationFailedToInitializeError": "Greška u inicijaliziranju aplikacije. Greška: {0}",
      "invalidPreloadedDataError": "Nevažeći unaprijed učitani podaci.",
      "manifestNotFoundByIdError": "Nije pronađen manifest za ID komponente \"{0}\".",
      "manifestNotFoundError": "Manifest nije pronađen za ID komponente \"{0}\" i verziju \"{1}\".",
      "systemConfigDisabledError": "Metoda System.config() nije podržana. Navedite konfiguraciju koristeći manifest.",
      "loadComponentLog": "Učitavanje komponente \"{0}\" ({1}).",
      "loadComponentEndLog": "Komponenta \"{0}\" ({1}) je učitana.",
      "loadComponentRetryLog": "Učitavanje komponente \"{0}\" ({1}). Pokušaj {2} od {3}.",
      "loadComponentError": "Nije uspjelo učitavanje komponente \"{0}\" ({1}).\r\nIzvorna greška: {2}",
      "loadComponentMaxRetriesError": "Pokušali ste učitati komponentu \"{0}\" ({1}) {2} puta bez uspjeha.",
      "loadComponentDependencyError": "Nije uspjelo učitavanje zavisnosti komponente \"{0}\" iz komponente \"{1}\" ({2}).\r\nIzvorna greška: {3}",
      "loadComponentDependencyFailoverPathError": "Nije uspjelo učitavanje zavisnosti komponente \"{0}\" uz putanju za preuzimanje zadatka instance koja pada \"{1}\" iz komponente \"{2}\" ({3}).\r\nIzvorna greška: {4}",
      "loadPathDependencyLog": "Učitavanje zavisnosti puta \"{0}\" iz komponente \"{1}\" ({2})",
      "loadPathDependencyError": "Nije uspjelo učitavanje zavisnosti putanje \"{0}\" iz komponente \"{1}\" ({2}).\r\nIzvorna greška: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Učitavanje zavisnosti puta \"{0}\" iz komponente \"{1}\" ({2}) nije uspjelo zbog neke druge zavisnosti čije učitavanje nije uspjelo.",
      "loadEntryPointError": "Nije uspjelo učitavanje ulazne tačke iz komponente \"{0}\" ({1}).\r\nIzvorna greška: {2}",
      "loadComponentReturnsEmptyError": "Element loadComponent() je vratio prazan objekt za komponentu \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "Element loadComponent() je vratio objekt s praznim zadanim svojstvom za komponentu \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "Ulazna tačka za komponentu \"{0}\" ({1}) ima ovisnost \"{2}\" koja nije deklarirana u manifestu.",
      "loadScriptWithStringError": "Funkcija loadScript no dopušta string kao drugi parametar. Umjesto toga koristite ILoadScriptOptions.",
      "tooManyManifestsError": "Za komponentu \"{2}\" je pronađen sljedeći broj manifesta {0} (verzije {1}).",
      "tooManyCompatibleVersionsError": "Za komponentu \"{2}\" verzija \"{3}\" je pronađen sljedeći broj kompatibilnih verzija: {0} ({1}).",
      "tooManyComponentsError": "Previše komponenti je pronađeno za ID \"{0}\".",
      "noComponentFoundError": "Nije pronađena komponenta za ID \"{0}\".",
      "deleteComponentLog": "Brisanje komponente \"{0}\" verzije \"{1}\" iz pohrane.",
      "browserNotSupportedError": "Ova verzija preglednika nije podržana.\r\nAžurirajte preglednik na najnoviju verziju.",
      "ie9OrOlderNotSupportedError": "Ova stranica ne podržava izdanja preglednika Internet Explorer starija od verzije 10. Ažurirajte web preglednik.",
      "firefox43OrOlderNotSupportedError": "Ova stranica ne podržava izdanja preglednika Mozilla Firefox starija od verzije 44. Ažurirajte web preglednik.",
      "resourceNotFoundError": "Resurs \"{0}\" nije pronađen u konfiguraciji učitavanja manifesta za komponentu \"{1}\" ({2}).",
      "noFailoverPathError": "Nije moguće pozvati resolveAddress() na komponenti bez putanje za preuzimanje posla instance koja padne",
      "urlStatusLocalhostFileNotFoundError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Fajl nije pronađen na serveru.\r\nProvjerite izvodi li se 'gulp serve'.",
      "urlStatusFileNotFoundError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Fajl nije pronađen na serveru.",
      "urlStatusForbiddenError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Zabranjen je pristup fajlu.",
      "urlStatusClientErrorError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Pojavila se greška prilikom slanja zahtjeva za fajl.",
      "urlStatusServerErrorError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Pojavio se problem na serveru.",
      "urlStatusLocalhostNetworkErrorError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Pojavio se problem s mrežom.\r\nProvjerite izvodi li se 'gulp serve' te jeste li pokrenuli 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Pojavio se problem s mrežom.\r\nMožda postoji problem s HTTPS certifikatom. Provjerite imate li odgovarajući certifikat.",
      "urlStatusNetworkErrorError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo. Pojavio se problem s mrežom.",
      "urlStatusUndefinedError": "Učitavanje URL-a '{3}' iz resursa '{2}' u komponenti '{0}' ({1}) nije uspjelo zbog nepoznatih problema.",
      "isUndefinedValidateError": "Vrijednost za \"{0}\" ne smije biti nedefinirana",
      "failedToCreateGlobalVariableError": "Nije uspjelo kreiranje globalne promjenljive \"{0}\" od skripte \"{1}\"",
      "dependencyLoadError": "Nije uspjelo učitavanje modula '{0}' zato što nije učitana zavisnost {1}",
      "missingPathDependencyError": "Nedostaje ovisnost puta \"{0}\" iz komponente \"{1}\" ({2}). Postojeće ovisnosti puta: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Greška pri učitavanju skripte za ispravljanje grešaka. Provjerite je li server pokrenut i je li parametar URL veze \"{0}\" tačan.",
      "errorLoadingDebugScriptHTTP": "Greška pri učitavanju skripte za ispravljanje grešaka. Provjerite je li server pokrenut, je li parametar URL veze \"{0}\" tačan te je li dopušteno učitavanje nesigurnih skripti. Također razmotrite korištenje razvojnog certifikata i opsluživanje skripti za ispravljanje grešaka koristeći HTTPS.",
      "errorLoadingDebugScriptMalformed": "Greška pri učitavanju skripte za ispravljanje grešaka. URL veze za otklanjanje grešaka ({0}) se čini pogrešno formiranim.",
      "errorLoadingDebugScriptUnknown": "Pojavila se nepoznata greška prilikom učitavanja skripte za ispravljanje grešaka",
      "errorLoadingDebugLoaderTitle": "Greška pri učitavanju programa za ispravljanje grešaka.",
      "errorLoadingDebugManifestTitle": "Greška pri učitavanju manifesta za uklanjanje grešaka.",
      "errorLoadingUnknownTitle": "Greška pri učitavanju skripti za ispravljanje grešaka."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Nedostaje komponenta ili funkcija programa za inicijaliziranje.",
      "closeDeveloperToolsAriaLabel": "Zatvorite alate za razvojne inženjere."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Upozorenje!",
      "warningLine1": "Korištenjem ovog alata izlažete se potencijalnim sigurnosnim prijetnjama koje mogu dovesti do toga da druge osobe steknu pristup vašim ličnim Office 365 podacima (dokumenti, poruke e-pošte, razgovori i drugi sadržaji). Prije nego što nastavite, provjerite je li osoba ili organizacija koja je od vas tražila pristup ovom alatu pouzdana.",
      "warningLine2": "Saznajte više ovdje: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Pojavila se greška prilikom učitavanja manifesta za otklanjanje grešaka.",
      "debugManifestErrorDismissButtonText": "Odbaci"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Dopustiti skripte za ispravljanje grešaka?",
      "allowDebugLoaderTitle": "Želite dopustiti alat za učitavanje ispravaka grešaka?",
      "allowDebugLoaderAndManifestsTitle": "Želite li dopustiti alat za učitavanje ispravaka grešaka i skripte za ispravljanje grešaka?",
      "debugManifestLoadingWarning": "UPOZORENJE: ova stranica sadrži nesigurne skripte čijim učitavanjem se može oštetiti računar. Nemojte nastaviti ako smatrate da programer nije pouzdan i ako ne razumijete opasnosti.",
      "debugManifestLoadingWarning2": "Ako niste sigurni, kliknite {0}.",
      "debugManifestLoadingConfirm": "Učitaj skripte za otklanjanje grešaka",
      "debugManifestLoadingCancel": "Ne učitavaj skripte za otklanjanje grešaka",
      "debugManifestLoadingCalloutText": "Ako ne znate šta uraditi, kliknite ovdje."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Učitavanje...",
      "developerToolsTabLoadingUnknownError": "Nepoznata greška prilikom učitavanja modula alata za razvojne inženjere."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesti",
      "noManifestSelected": "Nije odabran manifest"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performanse",
      "ErrorAccessingPerfDataErrorMessage": "Nije moguće preuzeti podatke o performansama: objekt je bez vrijednosti ili nedefiniran.",
      "ErrorAccessingRedirectDataErrorMessage": "Došlo je do problema prilikom pristupa podacima o performansama HTTP preusmjeravanja.",
      "ErrorParsingPercievedLatencyErrorMessage": "Otkrivena je greška prilikom raščlanjivanja podataka o prepoznatom kašnjenju.",
      "ErrorParsingApiDataErrorMessage": "Otkrivena je greška prilikom raščlanjivanja API podataka.",
      "UnkownPerformanceDataErrorMessage": "Došlo je do nepoznate greške: {0}",
      "DefaultWebPartName": "Web dio",
      "ServerResponseLabel": "Odziv servera",
      "ApplicationInitializationLabel": "Pokretanje aplikacije",
      "ScriptFetchEvalLabel": "Preuzimanje i procjena skripte",
      "SpLoaderStartLabel": "SPFx inicijalizacija",
      "PageRenderLabel": "Vizuelizacija stranice",
      "LeftNavRenderLabel": "Vizuelizacija lijevog okna za navigaciju",
      "CanvasRenderLabel": "Vizuelizacija platna",
      "LayoutRenderLabel": "Pregled rasporeda",
      "RedirectResponseLabel": "Odgovor o preusmjeravanju",
      "AppLoadLabel": "Učitavanje aplikacije",
      "RenderWebPartsLabel": "Vizuelizacija web dijelova",
      "TotalRenderTimeLabel": "Ukupno",
      "GeneralErrorMessage": "Žao nam je, došlo je do greške prilikom preuzimanja podataka o performansama.",
      "ErrorMessagePrefix": "Poruka o grešci: {0}",
      "PerformanceDataHint": "Napomena: Kada dodate ili uklonite web dio, osvježite stranicu da biste vidjeli ažurirane podatke o performansama.",
      "ModulesLoadedLegendLabel": "Učitani moduli",
      "InitializationLegendLabel": "Pokretanje",
      "RenderTimeLegendLabel": "Vrijeme vizuelizacije",
      "InitializationTimeLabel": "Vrijeme pokretanja",
      "ModuleLoadingTimeLabel": "Vrijeme učitavanja modula",
      "ModuleLazyLoadingDelayLabel": "Modul učitavanja odgođen",
      "DataFetchTimeLabel": "Vrijeme dobavljanja podataka",
      "DataFetchLegendLabel": "Dobavljanje podataka",
      "ItemsColumnHeader": "Stavke",
      "DurationColumnHeader": "Trajanje",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Ne postoji"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Praćenje",
      "EmptyTraceData": "Nema učitanih praćenja.",
      "ExportCSVButtonLabel": "Izvezi CSV",
      "LevelHeaderLabel": "Nivo",
      "MessageHeaderLabel": "Poruka",
      "ScopeHeaderLabel": "Opseg",
      "SourceHeaderLabel": "Izvor",
      "TimestampHeaderLabel": "Vremenska oznaka",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Došlo je do problema prilikom pristupa podacima o praćenju."
    }
  };

  strings.default = strings;
  return strings;
});
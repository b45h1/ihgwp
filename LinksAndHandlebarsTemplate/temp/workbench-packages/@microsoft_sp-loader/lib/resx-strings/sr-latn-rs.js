define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Nije moguće učitati aplikaciju na ovoj stranici. Koristite dugme „Nazad“ u pregledaču da biste pokušali opet. Ako ponovo dođe do problema, obratite se administratoru sajta i dajte mu informacije u okviru „Tehnički detalji“.",
      "platformFailedToLoadError": "Nije uspelo učitavanje platforme. ID: „{0}“, ime: „{1}“",
      "platformFailedToLoadWithMessageError": "Nije uspelo učitavanje platforme. ID: „{0}“, ime: „{1}“.\r\nGreška: {2}",
      "applicationFailedToInitializeError": "Greška pri pokretanju aplikacije. Greška: {0}",
      "invalidPreloadedDataError": "Nevažeći unapred učitani podaci.",
      "manifestNotFoundByIdError": "Nije pronađen manifest za ID komponente „{0}“.",
      "manifestNotFoundError": "Nije pronađen manifest za ID komponente „{0}“ i verziju „{1}“.",
      "systemConfigDisabledError": "System.config() nije podržan. Koristite manifest da biste naveli konfiguraciju.",
      "loadComponentLog": "Učitavanje komponente „{0}“ ({1}).",
      "loadComponentEndLog": "Komponenta „{0}“ ({1}) je učitana.",
      "loadComponentRetryLog": "Učitavanje komponente „{0}“ ({1}). Pokušaj {2} od {3}.",
      "loadComponentError": "Nije uspelo učitavanje komponente „{0}“ ({1}).\r\nOriginalna greška: {2}",
      "loadComponentMaxRetriesError": "Pokušali ste da učitate komponentu „{0}“ ({1}) {2} puta bez uspeha.",
      "loadComponentDependencyError": "Nije uspelo učitavanje zavisnosti komponente „{0}“ iz komponente „{1}“ ({2}).\r\nOriginalna greška: {3}",
      "loadComponentDependencyFailoverPathError": "Nije uspelo učitavanje zavisnosti komponente „{0}“ uz putanju za preuzimanje posla instance koja padne „{1}“ iz komponente „{2}“ ({3}).\r\nOriginalna greška: {4}",
      "loadPathDependencyLog": "Učitavanje zavisnosti putanje „{0}“ iz komponente „{1}“ ({2})",
      "loadPathDependencyError": "Nije uspelo učitavanje zavisnosti putanje „{0}“ iz komponente „{1}“ ({2}).\r\nOriginalna greška: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Učitavanje zavisnosti putanje „{0}“ iz komponente „{1}“ ({2}) nije uspelo zbog neke druge zavisnosti čije učitavanje nije uspelo.",
      "loadEntryPointError": "Nije uspelo učitavanje ulazne tačke iz komponente „{0}“ ({1}).\r\nOriginalna greška: {2}",
      "loadComponentReturnsEmptyError": "Funkcija loadComponent() je vratila prazan objekat za komponentu „{0}“ ({1}).",
      "loadComponentReturnsDefaultEmptyError": "Funkcija loadComponent() je vratila objekat sa praznim podrazumevanim svojstvom za komponentu „{0}“ ({1}).",
      "moduleHasUndeclaredDependencyError": "Ulazna tačka za komponentu „{0}“ ({1}) ima zavisnost „{2}“ koja nije deklarisana u manifestu.",
      "loadScriptWithStringError": "Funkcija loadScript ne dozvoljava nisku kao 2. parametar. Koristite ILoadScriptOptions umesto toga.",
      "tooManyManifestsError": "Broj pronađenih manifesta (verzije {1}) za komponentu „{2}“: {0}.",
      "tooManyCompatibleVersionsError": "Broj pronađenih kompatibilnih verzija ({1}) za komponentu „{2}“ verzije „{3}“: {0}.",
      "tooManyComponentsError": "Previše komponenti je pronađeno za ID „{0}“.",
      "noComponentFoundError": "Nije pronađena komponenta za ID „{0}“.",
      "deleteComponentLog": "Brisanje komponente „{0}“ verzije „{1}“ iz skladišta.",
      "browserNotSupportedError": "Ova verzija pregledača nije podržana.\r\nAžurirajte pregledač na najnoviju verziju.",
      "ie9OrOlderNotSupportedError": "Ova stranica ne podržava Internet Explorer izdanja starija od verzije 10. Ažurirajte veb pregledač.",
      "firefox43OrOlderNotSupportedError": "Ova stranica ne podržava Mozilla Firefox izdanja starija od verzije 44. Ažurirajte veb pregledač.",
      "resourceNotFoundError": "Resurs „{0}“ nije pronađen u konfiguraciji učitavanja manifesta za komponentu „{1}“ ({2}).",
      "noFailoverPathError": "Nije moguće pozvati resolveAddress() na komponenti bez putanje za preuzimanje posla instance koja padne",
      "urlStatusLocalhostFileNotFoundError": "Nije uspelo učitavanje URL adrese „{3}“ za resurs „{2}“ u komponenti „{0}“ ({1}). Datoteka nije pronađena na serveru.\r\nUverite se da pokrećete „gulp serve“.",
      "urlStatusFileNotFoundError": "Nije uspelo učitavanje URL adrese „{3}“ za resurs „{2}“ u komponenti „{0}“ ({1}). Datoteka nije pronađena na serveru.",
      "urlStatusForbiddenError": "Nije uspelo učitavanje URL adrese „{3}“ za resurs „{2}“ u komponenti „{0}“ ({1}). Pristup datoteci je zabranjen.",
      "urlStatusClientErrorError": "Nije uspelo učitavanje URL adrese „{3}“ za resurs „{2}“ u komponenti „{0}“ ({1}). Došlo je do greške prilikom zahtevanja datoteke.",
      "urlStatusServerErrorError": "Nije uspelo učitavanje URL adrese „{3}“ za resurs „{2}“ u komponenti „{0}“ ({1}). Došlo je do problema na serveru.",
      "urlStatusLocalhostNetworkErrorError": "Nije uspelo učitavanje URL adrese „{3}“ za resurs „{2}“ u komponenti „{0}“ ({1}). Došlo je do problema sa mrežom.\r\nUverite se da ste pokrenuli „gulp serve“ i „gulp trust-dev-cert“.",
      "urlStatusHttpsNetworkErrorError": "Nije uspelo učitavanje URL adrese „{3}“ za resurs „{2}“ u komponenti „{0}“ ({1}). Došlo je do problema sa mrežom.\r\nMožda je u pitanju problem sa HTTPS certifikatom. Uverite se da imate odgovarajući certifikat.",
      "urlStatusNetworkErrorError": "Nije uspelo učitavanje URL adrese „{3}“ za resurs „{2}“ u komponenti „{0}“ ({1}). Došlo je do problema sa mrežom.",
      "urlStatusUndefinedError": "Nije uspelo učitavanje URL adrese „{3}“ za resurs „{2}“ u komponenti „{0}“ ({1}) zato što postoje nepoznati problemi.",
      "isUndefinedValidateError": "Vrednost za „{0}“ ne sme da bude nedefinisana",
      "failedToCreateGlobalVariableError": "Nije uspelo kreiranje globalne promenljive „{0}“ od skripte „{1}“",
      "dependencyLoadError": "Nije uspelo učitavanje modula „{0}“ zato što nije učitana zavisnost {1}",
      "missingPathDependencyError": "Nedostaje zavisnost putanje „{0} iz komponente „{1}“ ({2}). Postojeće zavisnosti putanje: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Greška prilikom učitavanja skripte za otklanjanje grešaka. Proverite da li je server pokrenut i da li je tačna URL adresa parametra „{0}“.",
      "errorLoadingDebugScriptHTTP": "Greška prilikom učitavanja skripte za otklanjanje grešaka. Proverite da li je server pokrenut, da li je tačna URL adresa parametra „{0}“ i da li je omogućeno učitavanje nebezbednih skripti. Razmotrite i korišćenje razvojnog certifikata i isporuku skripti za otklanjanje grešaka putem HTTPS protokola.",
      "errorLoadingDebugScriptMalformed": "Greška prilikom učitavanja skripte za otklanjanje grešaka. Izgleda da je URL adresa otklanjanja grešaka ({0}) pogrešno uobličena.",
      "errorLoadingDebugScriptUnknown": "Nepoznata greška prilikom učitavanja skripte za otklanjanje grešaka.",
      "errorLoadingDebugLoaderTitle": "Greška prilikom učitavanja programa za učitavanje otklanjanja grešaka.",
      "errorLoadingDebugManifestTitle": "Greška prilikom učitavanja manifesta otklanjanja grešaka.",
      "errorLoadingUnknownTitle": "Greška prilikom učitavanja skripti za otklanjanje grešaka."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Nedostaje komponenta ili funkcija pokretača.",
      "closeDeveloperToolsAriaLabel": "Zatvorite alatke za programere."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Upozorenje!",
      "warningLine1": "Korišćenje ove alatke vas izlaže potencijalnim bezbednosnim pretnjama koje mogu dovesti do toga da drugi ljudi dobiju pristup vašim ličnim Office 365 podacima (dokumentima, e-porukama, razgovorima i još mnogo toga). Pre nego što nastavite, uverite se da imate poverenja u osobu ili organizaciju koje su vam zatražile pristup ovoj alatki.",
      "warningLine2": "Saznajte više ovde: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Došlo je do greške prilikom učitavanja manifesta otklanjanja grešaka.",
      "debugManifestErrorDismissButtonText": "Odbaci"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Želite li da dozvolite skripte za otklanjanje grešaka?",
      "allowDebugLoaderTitle": "Želite li da dozvolite učitavanje otklanjanja grešaka?",
      "allowDebugLoaderAndManifestsTitle": "Želite li da dozvolite učitavanje otklanjanja grešaka i skripte za otklanjanje grešaka?",
      "debugManifestLoadingWarning": "UPOZORENJE: Ova stranica sadrži nebezbedne skripte koje mogu oštetiti vaš računar ako se učitaju! Nemojte nastavljati ako nemate poverenja u projektanta i ne razumete rizike.",
      "debugManifestLoadingWarning2": "Ako niste sigurni, kliknite na dugme {0}.",
      "debugManifestLoadingConfirm": "Učitaj skripte za otklanjanje grešaka",
      "debugManifestLoadingCancel": "Ne učitavaj skripte za otklanjanje grešaka",
      "debugManifestLoadingCalloutText": "Ako ne znate šta da radite, kliknite ovde."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Učitavanje...",
      "developerToolsTabLoadingUnknownError": "Nepoznata greška pri učitavanju modula alatki za programere."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifesti",
      "noManifestSelected": "Nije izabran nijedan manifest"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performanse",
      "ErrorAccessingPerfDataErrorMessage": "Nije moguće preuzeti podatke o performansama: objekat je bez vrednosti ili nedefinisan.",
      "ErrorAccessingRedirectDataErrorMessage": "Došlo je do problema prilikom pristupa podacima o performansama HTTP preusmeravanja.",
      "ErrorParsingPercievedLatencyErrorMessage": "Otkrivena je greška prilikom raščlanjivanja podataka o prepoznatom kašnjenju.",
      "ErrorParsingApiDataErrorMessage": "Otkrivena je greška prilikom raščlanjivanja API podataka.",
      "UnkownPerformanceDataErrorMessage": "Došlo je do nepoznate greške: {0}",
      "DefaultWebPartName": "Veb segment",
      "ServerResponseLabel": "Odziv servera",
      "ApplicationInitializationLabel": "Pokretanje aplikacije",
      "ScriptFetchEvalLabel": "Dobavljanje i procenjivanje skripti",
      "SpLoaderStartLabel": "SPFx inicijalizacija",
      "PageRenderLabel": "Vizuelizacija stranice",
      "LeftNavRenderLabel": "Vizuelizacija levog okna za navigaciju",
      "CanvasRenderLabel": "Vizuelizacija platna",
      "LayoutRenderLabel": "Vizuelizacija rasporeda",
      "RedirectResponseLabel": "Odgovor o preusmeravanju",
      "AppLoadLabel": "Učitavanje aplikacije",
      "RenderWebPartsLabel": "Vizuelizacija veb segmenata",
      "TotalRenderTimeLabel": "Ukupno",
      "GeneralErrorMessage": "Žao nam je, došlo je do greške prilikom preuzimanja podataka o performansama.",
      "ErrorMessagePrefix": "Poruka o grešci: {0}",
      "PerformanceDataHint": "Napomena: Kada dodate ili uklonite veb segment, osvežite stranicu da biste videli ažurirane podatke o performansama.",
      "ModulesLoadedLegendLabel": "Učitani moduli",
      "InitializationLegendLabel": "Pokretanje",
      "RenderTimeLegendLabel": "Vreme vizuelizacije",
      "InitializationTimeLabel": "Vreme pokretanja",
      "ModuleLoadingTimeLabel": "Vreme učitavanja modula",
      "ModuleLazyLoadingDelayLabel": "Učitavanje modula je odloženo",
      "DataFetchTimeLabel": "Vreme dobavljanja podataka",
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
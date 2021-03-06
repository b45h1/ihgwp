define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Negalima įkelti šio puslapio programos. Norėdami pakartoti, paspauskite naršyklės mygtuką Atgal. Jei problema kartojasi, kreipkitės į svetainės administratorių ir pateikite dalyje Techninė informacija esančią informaciją.",
      "platformFailedToLoadError": "Platformos nepavyko įkelti. ID: „{0}“, pavadinimas: „{1}“",
      "platformFailedToLoadWithMessageError": "Nepavyko įkelti platformos. ID: {0}, pavadinimas: {1}.\r\nKlaida: {2}",
      "applicationFailedToInitializeError": "Klaida inicijuojant programą. Klaida: {0}",
      "invalidPreloadedDataError": "Neleistini iš anksto įkelti duomenys.",
      "manifestNotFoundByIdError": "Nepavyko rasti komponento identifikatoriaus „{0}“ manifesto.",
      "manifestNotFoundError": "Komponento (ID: {0}, versija: {1}) deklaracija nerasta.",
      "systemConfigDisabledError": "System.config() nepalaikomas. Naudokite deklaraciją norėdami nurodyti konfigūraciją.",
      "loadComponentLog": "Įkeliamas komponentas „{0}“ ({1}).",
      "loadComponentEndLog": "Komponentas „{0}“ ({1}) įkeltas.",
      "loadComponentRetryLog": "Įkeliamas komponentas „{0}“ ({1}). {2} bandymas iš {3}.",
      "loadComponentError": "Nepavyko įkelti komponento „{0}“ ({1}).\r\nPradinė klaida: {2}",
      "loadComponentMaxRetriesError": "{2} k. bandyta nesėkmingai įkelti komponentą „{0}“ ({1}).",
      "loadComponentDependencyError": "Nepavyko įkelti komponento priklausomybės „{0}“ iš komponento „{1}“ ({2}).\r\nPradinė klaida: {3}",
      "loadComponentDependencyFailoverPathError": "Nepavyko įkelti komponento priklausomybės „{0}“, kai perėmimo kelias „{1}“ iš komponento „{2}“ ({3}).\r\nPradinė klaida: {4}",
      "loadPathDependencyLog": "Įkeliama kelio priklausomybė „{0}“ iš komponento „{1}“ ({2})",
      "loadPathDependencyError": "Nepavyko įkelti kelio priklausomybės „{0}“ iš komponento „{1}“ ({2}).\r\nPradinė klaida: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Nepavyko įkelti kelio priklausomybės „{0}“ iš komponento „{1}“ ({2}) dėl kitos priklausomybės, kurios nepavyko įkelti.",
      "loadEntryPointError": "Nepavyko įkelti įrašo taško iš komponento „{0}“ ({1}).\r\nPradinė klaida: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() pateikė tuščią komponento „{0}“ objektą ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() pateikė objektą su tuščia numatytąja komponento „{0}“ ypatybe ({1}).",
      "moduleHasUndeclaredDependencyError": "Komponento „{0}“ ({1}) įeities taškas turi priklausomybę „{2}“, kuri nėra deklaruota deklaracijoje.",
      "loadScriptWithStringError": "loadScript funkcija neleidžia eilutės kaip 2-o parametro. Vietoj jo naudokite ILoadScriptOptions.",
      "tooManyManifestsError": "Rasta komponentui „{2}“ skirtų deklaracijų: {0} (versijos {1}).",
      "tooManyCompatibleVersionsError": "Rasta suderinamų komponento „{2}“ (versija „{3}“) versijų: {0} ({1}).",
      "tooManyComponentsError": "Pagal ID „{0}“ rasta per daug komponentų.",
      "noComponentFoundError": "Komponentas, kurio ID „{0}“, nerastas.",
      "deleteComponentLog": "Parduotuvėje naikinamas komponentas „{0}“ (versija {1}).",
      "browserNotSupportedError": "Ši jūsų naršyklės versija yra nepalaikoma.\r\nAtnaujinkite naršyklę į naujausią versiją.",
      "ie9OrOlderNotSupportedError": "Šis puslapis nepalaiko senesnių nei 10 versija „Internet Explorer“ leidimų. Atnaujinkite savo interneto naršyklę.",
      "firefox43OrOlderNotSupportedError": "Šis puslapis nepalaiko senesnių nei 44 versija „Mozilla Firefox“ leidimų. Atnaujinkite savo interneto naršyklę.",
      "resourceNotFoundError": "Išteklius „{0}\" nerastas komponento „{1}“ ({2}) deklaracijos įkelties programos konfigūracijoje.",
      "noFailoverPathError": "Negalima iškviesti komponento „resolveAddress()“ be perėmimo kelio",
      "urlStatusLocalhostFileNotFoundError": "Nepavyko įkelti išteklių „{2}“ URL {3} komponente „{0}“ ({1}). Failas nerastas serveryje.\r\nĮsitikinkite, kad naudojate „gulp serve“.",
      "urlStatusFileNotFoundError": "Nepavyko įkelti išteklių „{2}“ URL {3} komponente „{0}“ ({1}). Serveryje failo nerasta.",
      "urlStatusForbiddenError": "Nepavyko įkelti išteklių „{2}“ URL {3} komponente „{0}“ ({1}). Failo prieiga yra draudžiama.",
      "urlStatusClientErrorError": "Nepavyko įkelti išteklių „{2}“ URL {3} komponente „{0}“ ({1}). Prašant failo, įvyko klaida.",
      "urlStatusServerErrorError": "Nepavyko įkelti išteklių „{2}“ URL {3} komponente „{0}“ ({1}). Serveryje kilo problema.",
      "urlStatusLocalhostNetworkErrorError": "Nepavyko įkelti ištekliaus „{2}“ URL {3} komponente „{0}“ ({1}). Kilo tinklo problema.\r\nĮsitikinkite, kad veikia „gulp serve“ ir jau paleidote „gulp trust-dev-cert“.",
      "urlStatusHttpsNetworkErrorError": "Nepavyko įkelti išteklių „{2}“ URL {3} komponente „{0}“ ({1}). Iškilo tinklo problema.\r\nTai gali būti HTTPS sertifikato problema. Įsitikinkite, kad turite tinkamą sertifikatą.",
      "urlStatusNetworkErrorError": "Nepavyko įkelti išteklių „{2}“ URL {3} komponente „{0}“ ({1}). Iškilo tinklo problema.",
      "urlStatusUndefinedError": "Nepavyko įkelti išteklių „{2}“ URL {3} komponente „{0}“ ({1}) dėl nežinomų problemų.",
      "isUndefinedValidateError": "„{0}“ reikšmė negali būti neapibrėžta",
      "failedToCreateGlobalVariableError": "Nepavyko sukurti visuotinio kintamojo {0} iš scenarijaus {1}",
      "dependencyLoadError": "Nepavyko įkelti modulio „{0}“, nes neįkelta priklausomybė „{1}“",
      "missingPathDependencyError": "Trūksta kelio priklausomybės „{0}“ iš komponento „{1}“ ({2}). Esamos kelio priklausomybės: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Klaida įkeliant derinimo scenarijų. Įsitikinkite, kad serveris veikia, ir parametro „{0}“ URL yra teisingas.",
      "errorLoadingDebugScriptHTTP": "Klaida įkeliant derinimo scenarijų. Įsitikinkite, kad serveris veikia, parametro „{0}“ URL yra teisingas, ir leidžiama įkelti nesaugius scenarijus. Taip pat apsvarstykite galimybę naudoti kūrimo sertifikatą ir derinimo scenarijų teikimą per HTTPS.",
      "errorLoadingDebugScriptMalformed": "Klaida įkeliant derinimo scenarijų. Atrodo, kad derinimo URL ({0}) yra sudarytas netinkamai.",
      "errorLoadingDebugScriptUnknown": "Nežinoma klaida įkeliant derinimo scenarijų.",
      "errorLoadingDebugLoaderTitle": "Klaida įkeliant derinimo įkėlimo priemonę.",
      "errorLoadingDebugManifestTitle": "Klaida įkeliant derinimo deklaracijas.",
      "errorLoadingUnknownTitle": "Klaida įkeliant derinimo scenarijus."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Trūksta komponento arba iniciatoriaus funkcijos.",
      "closeDeveloperToolsAriaLabel": "Uždaryti kūrėjo įrankius."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Įspėjimas!",
      "warningLine1": "Naudojant šį įrankį gali kilti saugos grėsmių, dėl kurių kiti asmenys gali gauti prieigą prie jūsų „Office 365“ duomenų (dokumentų, el. laiškų, pokalbių ir kt.). Prieš tęsdami įsitikinkite, kad jūs pasitikite asmeniu ar organizacija, kuri paprašė jūsų pasiekti šį įrankį.",
      "warningLine2": "Daugiau sužinokite čia: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Įkeliant derinimo deklaracijas, įvyko klaida.",
      "debugManifestErrorDismissButtonText": "Atsisakyti"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Leisti derinimo scenarijus?",
      "allowDebugLoaderTitle": "Leisti derinimo įkėlimo priemonę?",
      "allowDebugLoaderAndManifestsTitle": "Įjungti derinimo įkėlimo priemonę ir leisti derinti scenarijus?",
      "debugManifestLoadingWarning": "ĮSPĖJIMAS: šiame puslapyje yra nesaugių scenarijų, kurie įkelti gali pakenkti jūsų kompiuteriui! Neįkelkite, nebent pasitikite kūrėjais ir suprantate riziką.",
      "debugManifestLoadingWarning2": "Jei nesate tikri, spustelėkite „{0}“.",
      "debugManifestLoadingConfirm": "Įkelti derinimo scenarijus",
      "debugManifestLoadingCancel": "Neįkelti derinimo scenarijų",
      "debugManifestLoadingCalloutText": "Jei nežinote, ką daryti, spustelėkite čia."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Įkeliama...",
      "developerToolsTabLoadingUnknownError": "Įkeliant kūrėjo įrankių modulį įvyko nežinoma klaida."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Deklaracijos",
      "noManifestSelected": "Nepasirinkta jokia deklaracija"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Našumas",
      "ErrorAccessingPerfDataErrorMessage": "Nepavyksta nuskaityti našumo duomenų: objektas yra NULL arba neapibrėžtas.",
      "ErrorAccessingRedirectDataErrorMessage": "Bandant pasiekti HTTP peradresavimo našumo duomenis kilo problema.",
      "ErrorParsingPercievedLatencyErrorMessage": "Analizuojant gaišties duomenis įvyko klaida.",
      "ErrorParsingApiDataErrorMessage": "Analizuojant API duomenis įvyko klaida.",
      "UnkownPerformanceDataErrorMessage": "Įvyko nežinoma klaida: {0}",
      "DefaultWebPartName": "Puslapio dalis",
      "ServerResponseLabel": "Serverio atsakymas",
      "ApplicationInitializationLabel": "Programos inicijavimas",
      "ScriptFetchEvalLabel": "Scenarijų radimas ir įvertinimas",
      "SpLoaderStartLabel": "SPFx inicijavimas",
      "PageRenderLabel": "Puslapio vaizdo generavimas",
      "LeftNavRenderLabel": "Kairiosios naršymo srities vaizdo generavimas",
      "CanvasRenderLabel": "Drobės vaizdo generavimas",
      "LayoutRenderLabel": "Maketo generavimas",
      "RedirectResponseLabel": "Peradresuoti atsakymą",
      "AppLoadLabel": "Programos įkėlimas",
      "RenderWebPartsLabel": "Puslapio dalių vaizdo generavimas",
      "TotalRenderTimeLabel": "Iš viso",
      "GeneralErrorMessage": "Atsiprašome, kažkas nutiko nuskaitant našumo duomenis.",
      "ErrorMessagePrefix": "Klaidos pranešimas: {0}",
      "PerformanceDataHint": "Pastaba: įtraukę arba pašalinę puslapio dalį, atnaujinkite puslapį, kad pamatytumėte atnaujintus našumo duomenis.",
      "ModulesLoadedLegendLabel": "Moduliai įkelti",
      "InitializationLegendLabel": "Inicijavimas",
      "RenderTimeLegendLabel": "Vaizdo generavimo laikas",
      "InitializationTimeLabel": "Inicijavimo laikas",
      "ModuleLoadingTimeLabel": "Modulio įkėlimo laikas",
      "ModuleLazyLoadingDelayLabel": "Modulio įkėlimas vėluoja",
      "DataFetchTimeLabel": "Duomenų surinkimo laikas",
      "DataFetchLegendLabel": "Duomenų gavimas",
      "ItemsColumnHeader": "Elementai",
      "DurationColumnHeader": "Trukmė",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Netaikoma"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Sekimas",
      "EmptyTraceData": "Neįkelta jokių sekimų.",
      "ExportCSVButtonLabel": "Eksportuoti CSV",
      "LevelHeaderLabel": "Lygis",
      "MessageHeaderLabel": "Pranešimas",
      "ScopeHeaderLabel": "Aprėptis",
      "SourceHeaderLabel": "Šaltinis",
      "TimestampHeaderLabel": "Laiko žymė",
      "TimestampFormat": "{0}-{1}-{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Bandant pasiekti sekimo duomenis kilo problema."
    }
  };

  strings.default = strings;
  return strings;
});
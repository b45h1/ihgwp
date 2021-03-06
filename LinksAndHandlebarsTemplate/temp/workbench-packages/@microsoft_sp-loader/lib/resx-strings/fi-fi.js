define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Tällä sivulla olevan sovelluksen lataaminen ei onnistu. Yritä uudelleen selaimen Takaisin-painikkeen avulla. Jos ongelma ilmenee uudelleen, ota yhteyttä sivuston järjestelmänvalvojaan ja anna hänelle Tekniset tiedot -kohdassa olevat tiedot.",
      "platformFailedToLoadError": "Käyttöympäristön lataaminen epäonnistui. Tunnus: {0}, nimi: {1}",
      "platformFailedToLoadWithMessageError": "Käyttöympäristön lataaminen epäonnistui. Tunnus: {0}, nimi: {1}.\r\nVirhe: {2}",
      "applicationFailedToInitializeError": "Sovelluksen alustaminen epäonnistui. Virhe: {0}",
      "invalidPreloadedDataError": "Esiladatut tiedot ovat virheellisiä.",
      "manifestNotFoundByIdError": "Osan tunnukselle {0} ei löytynyt kokoonpanotietoja.",
      "manifestNotFoundError": "Osan (tunnus {0}, versio {1}) luettelotiedostoa ei löytynyt.",
      "systemConfigDisabledError": "Kohdetta System.config() ei tueta. Tarkista määritys kokoonpanotiedoista.",
      "loadComponentLog": "Ladataan osaa {0} ({1}).",
      "loadComponentEndLog": "Osa {0} ({1}) ladattu.",
      "loadComponentRetryLog": "Ladataan osaa {0} ({1}). Yritys {2}/{3}.",
      "loadComponentError": "Osan {0} ({1}) lataaminen epäonnistui.\r\nAlkuperäinen virhe: {2}",
      "loadComponentMaxRetriesError": "Osaa {0} ({1}) yritettiin ladata {2} kertaa onnistumatta.",
      "loadComponentDependencyError": "Osan riippuvuuden {0} lataaminen osasta {1} ({2}) epäonnistui.\r\nAlkuperäinen virhe: {3}",
      "loadComponentDependencyFailoverPathError": "Osan riippuvuuden {0}, jonka vikasietopolku on {1}, lataaminen osasta {2} ({3}) epäonnistui.\r\nAlkuperäinen virhe: {4}",
      "loadPathDependencyLog": "Ladataan polkuriippuvuutta {0} osasta {1} ({2})",
      "loadPathDependencyError": "Polun riippuvuuden {0} lataaminen osasta {1} ({2}) epäonnistui.\r\nAlkuperäinen virhe: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Polkuriippuvuuden {0} lataaminen osasta {1} ({2}) epäonnistui, koska toisen riippuvuuden lataaminen epäonnistui.",
      "loadEntryPointError": "Aloituskohdan lataaminen osasta {0} ({1}) epäonnistui.\r\nAlkuperäinen virhe: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() palautti tyhjän objektin osalle {0} ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() palautti osalle {0} ({1}) objektin, jonka oletusominaisuus on tyhjä.",
      "moduleHasUndeclaredDependencyError": "Komponentin {0} ({1}) aloituskohdalla on riippuvuus {2}, jota ei ole määritetty kokoonpanotiedoissa.",
      "loadScriptWithStringError": "loadScript-funktio ei salli merkkijonoa 2. parametrina. Käytä sen sijaan ILoadScriptOptions-funktiota.",
      "tooManyManifestsError": "Osalle {2} löydettiin {0} luettelotiedostoa (versiot {1}).",
      "tooManyCompatibleVersionsError": "Osalle {2} (versio {3}) löytyi {0} yhteensopivaa versioita ({1}).",
      "tooManyComponentsError": "Tunnuksella {0} löydettiin liian monta osaa.",
      "noComponentFoundError": "Tunnuksella {0} ei löytynyt osaa.",
      "deleteComponentLog": "Poistetaan osan {0} versiota {1} säilöstä.",
      "browserNotSupportedError": "Tätä selaimen versiota ei tueta.\r\nPäivitä selain uusimpaan versioon.",
      "ie9OrOlderNotSupportedError": "Tämä sivu ei tue Internet Explorer 10:tä vanhempia versioita. Päivitä selain.",
      "firefox43OrOlderNotSupportedError": "Tämä sivu ei tue Mozilla Firefox 44:ää vanhempia versioita. Päivitä selain.",
      "resourceNotFoundError": "Resurssia {0} ei löytynyt osan {1} ({2}) latausohjelman luettelotiedoston määrityksestä.",
      "noFailoverPathError": "Kohdetta resolveAddress() ei voi kutsua osalle, jolla ei ole vikasietopolkua",
      "urlStatusLocalhostFileNotFoundError": "Osan {0} ({1}) resurssin {2} URL-osoitteen {3} lataaminen epäonnistui. Tiedostoa ei löytynyt palvelimesta.\r\nVarmista, että suoritat gulp serve -komentoa.",
      "urlStatusFileNotFoundError": "Osan {0} ({1}) resurssin {2} URL-osoitteen {3} lataaminen epäonnistui. Tiedostoa ei löytynyt palvelimesta.",
      "urlStatusForbiddenError": "Osan {0} ({1}) resurssin {2} URL-osoitteen {3} lataaminen epäonnistui. Tiedoston käyttö on kielletty.",
      "urlStatusClientErrorError": "Osan {0} ({1}) resurssin {2} URL-osoitteen {3} lataaminen epäonnistui. Tiedoston pyytämisessä tapahtui virhe.",
      "urlStatusServerErrorError": "Osan {0} ({1}) resurssin {2} URL-osoitteen {3} lataaminen epäonnistui. Palvelinvirhe.",
      "urlStatusLocalhostNetworkErrorError": "Osan {0} ({1}) resurssin {2} URL-osoitteen {3} lataaminen epäonnistui. Verkkovirhe.\r\nVarmista, että suoritat gulp serve -komentoa ja että olet suorittanut gulp trust-dev-cert-komennon.",
      "urlStatusHttpsNetworkErrorError": "Osan {0} ({1}) resurssin {2} URL-osoitteen {3} lataaminen epäonnistui. Verkkovirhe.\r\nOngelma saattaa liittyä HTTPS-varmenteeseen. Varmista, että käytät oikeaa varmennetta.",
      "urlStatusNetworkErrorError": "Osan {0} ({1}) resurssin {2} URL-osoitteen {3} lataaminen epäonnistui. Verkkovirhe.",
      "urlStatusUndefinedError": "Osan {0} ({1}) resurssin {2} URL-osoitteen {3} lataaminen epäonnistui tuntemattomien ongelmien takia.",
      "isUndefinedValidateError": "Muuttujan {0} arvo ei saa olla määrittämätön",
      "failedToCreateGlobalVariableError": "Yleisen muuttujan {0} luominen komentosarjasta {1} epäonnistui",
      "dependencyLoadError": "Moduulin {0} lataaminen epäonnistui, koska riippuvuutta {1} ei ladattu",
      "missingPathDependencyError": "Polkuriippuvuus {0} puuttuu osasta {1} ({2}). Aiemmin luodut polkuriippuvuudet: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Virhe ladattaessa virheenkorjauksen komentosarjaa. Varmista, että palvelin toimii ja että {0}-parametrin URL-osoite on oikea.",
      "errorLoadingDebugScriptHTTP": "Virhe ladattaessa virheenkorjauksen komentosarjaa. Varmista, että palvelin toimii, että {0}-parametrin URL-osoite on oikea ja että muiden kuin turvallisten komentosarjojen lataaminen sallitaan. Harkitse myös kehitysvarmenteen käyttämistä ja virheenkorjauksen komentosarjojen lähettämistä HTTPS-protokollan välityksellä.",
      "errorLoadingDebugScriptMalformed": "Virhe ladattaessa virheenkorjauksen komentosarjaa. Virheenkorjauksen URL-osoite ({0}) vaikuttaa virheellisesti muotoillulta.",
      "errorLoadingDebugScriptUnknown": "Tuntematon virhe ladattaessa virheenkorjauksen komentosarjaa.",
      "errorLoadingDebugLoaderTitle": "Virhe ladattaessa virheenkorjauksen latausohjelmaa.",
      "errorLoadingDebugManifestTitle": "Virhe ladattaessa virheenkorjauskokoonpanotietoja.",
      "errorLoadingUnknownTitle": "Virhe ladattaessa virheenkorjauksen komentosarjoja."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Komponentti tai alustajafunktio puuttuu.",
      "closeDeveloperToolsAriaLabel": "Sulje kehittäjien työkalut."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Varoitus!",
      "warningLine1": "Tämän työkalun käyttö saattaa aiheuttaa suojausuhkia, joiden seurauksena muut käyttäjät voivat päästä käsiksi henkilökohtaisiin Office 365 -tietoihisi (esimerkiksi tiedostoihin, sähköposteihin ja keskusteluihin). Varmista ennen jatkamista, että luotat henkilöön tai organisaatioon, joka pyysi sinua käyttämään tätä työkalua.",
      "warningLine2": "Lue lisää täältä: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Virhe ladattaessa virheenkorjauskokoonpanotietoja.",
      "debugManifestErrorDismissButtonText": "Hylkää"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Sallitaanko komentosarjojen virheenkorjaus?",
      "allowDebugLoaderTitle": "Sallitaanko virheenkorjauksen latausohjelma?",
      "allowDebugLoaderAndManifestsTitle": "Sallitaanko virheenpoiston latausohjelma ja virheenpoiston komentosarjat?",
      "debugManifestLoadingWarning": "VAROITUS: Tämä sivu sisältää epäilyttäviä komentosarjoja. Jos lataat ne, saatat vahingoittaa tietokonettasi. Älä jatka, ellet luota kehittäjään ja ymmärrä riskejä.",
      "debugManifestLoadingWarning2": "Jos olet epävarma, napsauta {0}.",
      "debugManifestLoadingConfirm": "Lataa virheenkorjauskomentosarjat",
      "debugManifestLoadingCancel": "Älä lataa virheenkorjauskomentosarjoja",
      "debugManifestLoadingCalloutText": "Jos et tiedä, mitä tehdä, napsauta tästä."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Ladataan...",
      "developerToolsTabLoadingUnknownError": "Kehittäjän työkalut -moduulin lataamisessa tapahtui tuntematon virhe."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Luettelotiedostot",
      "noManifestSelected": "Luettelotiedostoa ei ole valittu"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Suorituskyky",
      "ErrorAccessingPerfDataErrorMessage": "Suorituskykytietojen noutaminen epäonnistui: objekti on tyhjäarvoinen tai määrittämätön.",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP-uudelleenohjauksen suorituskykytietojen käytössä ilmeni ongelma.",
      "ErrorParsingPercievedLatencyErrorMessage": "Havaitun viiveen tietoja jäsennettäessä havaittiin virhe.",
      "ErrorParsingApiDataErrorMessage": "Ohjelmointirajapintatietoja jäsennettäessä havaittiin virhe.",
      "UnkownPerformanceDataErrorMessage": "Tapahtui tuntematon virhe: {0}",
      "DefaultWebPartName": "Verkko-osa",
      "ServerResponseLabel": "Palvelimen vastaus",
      "ApplicationInitializationLabel": "Sovelluksen alustaminen",
      "ScriptFetchEvalLabel": "Komentosarjojen nouto ja arviointi",
      "SpLoaderStartLabel": "SPFx-valmistelu",
      "PageRenderLabel": "Sivun hahmontaminen",
      "LeftNavRenderLabel": "Vasemman siirtymispalkin hahmontaminen",
      "CanvasRenderLabel": "Canvas-hahmontaminen",
      "LayoutRenderLabel": "Asettelun hahmontaminen",
      "RedirectResponseLabel": "Uudelleenohjauksen vastausaika",
      "AppLoadLabel": "Sovelluksen lataaminen",
      "RenderWebPartsLabel": "Verkko-osien hahmontaminen",
      "TotalRenderTimeLabel": "Yhteensä",
      "GeneralErrorMessage": "Suorituskykytietojen noutamisessa ilmeni ongelma.",
      "ErrorMessagePrefix": "Virhesanoma: {0}",
      "PerformanceDataHint": "Huomautus: päivitä sivu verkko-osan lisäämisen tai poistamisen jälkeen, jotta näet päivitetyt suorituskykytiedot.",
      "ModulesLoadedLegendLabel": "Ladatut moduulit",
      "InitializationLegendLabel": "Alustaminen",
      "RenderTimeLegendLabel": "Hahmonnusaika",
      "InitializationTimeLabel": "Alustusaika",
      "ModuleLoadingTimeLabel": "Moduulin latausaika",
      "ModuleLazyLoadingDelayLabel": "Moduulin lataaminen viivästynyt",
      "DataFetchTimeLabel": "Tietojen noutoaika",
      "DataFetchLegendLabel": "Tietojen nouto",
      "ItemsColumnHeader": "Kohteet",
      "DurationColumnHeader": "Kesto",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "-"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Jäljitys",
      "EmptyTraceData": "Jälkiä ei ole ladattu.",
      "ExportCSVButtonLabel": "Vie CSV-tiedosto",
      "LevelHeaderLabel": "Taso",
      "MessageHeaderLabel": "Viesti",
      "ScopeHeaderLabel": "Alue",
      "SourceHeaderLabel": "Lähde",
      "TimestampHeaderLabel": "Aikamerkintä",
      "TimestampFormat": "{2}.{1}.{0} {3}.{4}.{5},{6}",
      "ErrorAccessingTraceDataErrorMessage": "Jäljitystietojen käytössä ilmeni ongelma."
    }
  };

  strings.default = strings;
  return strings;
});
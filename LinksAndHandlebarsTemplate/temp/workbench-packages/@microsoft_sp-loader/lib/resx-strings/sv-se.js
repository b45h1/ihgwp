define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Det går inte att läsa in appen på den här sidan. Använd webbläsarens bakåtknapp för att försöka igen. Om problemet kvarstår kontaktar du administratören för webbplatsen och ange information i Teknisk information.",
      "platformFailedToLoadError": "Det gick inte att läsa in plattformen. ID: \"{0}\", namn: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Det gick inte att läsa in plattformen. ID: {0}, namn: {1}.\r\nFel: {2}",
      "applicationFailedToInitializeError": "Fel vid initiering av programmet. Fel: {0}",
      "invalidPreloadedDataError": "Ogiltiga förinlästa data.",
      "manifestNotFoundByIdError": "Manifestet hittades inte för komponent-ID:t \"{0}\".",
      "manifestNotFoundError": "Manifestet hittades inte för komponent-ID:t {0} och versionen {1}.",
      "systemConfigDisabledError": "System.config() stöds inte. Använd ett manifest för att ange konfigurationen.",
      "loadComponentLog": "Läser in komponenten \"{0}\" ({1}).",
      "loadComponentEndLog": "Komponenten \"{0}\" ({1}) har lästs in.",
      "loadComponentRetryLog": "Läser in komponenten \"{0}\" ({1}). Försök {2} av {3}.",
      "loadComponentError": "Det gick inte att läsa in komponenten {0} ({1}).\r\nUrsprungligt fel: {2}",
      "loadComponentMaxRetriesError": "Försökte läsa in komponenten \"{0}\" ({1}) {2} gånger utan framgång.",
      "loadComponentDependencyError": "Det gick inte att läsa in komponentberoendet {0} från komponenten {1} ({2}).\r\nUrsprungligt fel: {3}",
      "loadComponentDependencyFailoverPathError": "Det gick inte att läsa in komponentberoendet {0} med redundanssökvägen {1} från komponenten {2} ({3}).\r\nUrsprungligt fel: {4}",
      "loadPathDependencyLog": "Läser in sökvägsberoendet \"{0}\" från komponenten \"{1}\" ({2})",
      "loadPathDependencyError": "Det gick inte att läsa in sökvägsberoendet {0} från komponenten {1} ({2}).\r\nUrsprungligt fel: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Det gick inte att läsa in sökvägsberoendet \"{0}\" från komponenten \"{1}\" ({2}) på grund av ett annat beroende som inte gick att läsa in.",
      "loadEntryPointError": "Det gick inte att läsa in startpunkten från komponenten {0} ({1}).\r\nUrsprungligt fel: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() returnerade ett tomt objekt för komponenten \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() returnerade ett objekt med en tom standardegenskap för komponenten \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "Startpunkten för komponenten \"{0}\" ({1}) har ett beroende för \"{2}\" som inte deklareras i manifestet.",
      "loadScriptWithStringError": "loadScript-funktionen tillåter inte en sträng som andra parameter. Använd ILoadScriptOptions istället.",
      "tooManyManifestsError": "{0} manifest (versioner: {1}) hittades för komponenten {2}.",
      "tooManyCompatibleVersionsError": "{0} kompatibla versioner ({1}) hittades för komponenten \"{2}\" med version \"{3}\".",
      "tooManyComponentsError": "För många komponenter hittades för ID:t {0}.",
      "noComponentFoundError": "Hittade ingen komponent för ID \"{0}\".",
      "deleteComponentLog": "Tar bort komponenten \"{0}\" version \"{1}\" från arkivet.",
      "browserNotSupportedError": "Den här versionen av webbläsaren stöds inte.\r\nUppdatera webbläsaren till den senaste versionen.",
      "ie9OrOlderNotSupportedError": "Den här sidan stöder inte äldre versioner av Internet Explorer än version 10. Uppdatera webbläsaren.",
      "firefox43OrOlderNotSupportedError": "Den här sidan stöder inte äldre versioner Mozilla Firefox än version 44. Uppdatera webbläsaren.",
      "resourceNotFoundError": "Resursen \"{0}\" hittades inte inläsarkonfigurationen för manifestet för komponenten \"{1}\" ({2}).",
      "noFailoverPathError": "Det går inte att anropa resolveAddress() för en komponent utan redundanssökväg",
      "urlStatusLocalhostFileNotFoundError": "Det gick inte att läsa in URL {3} för resursen {2} i komponenten {0} ({1}). Filen hittades inte på servern.\r\nKontrollera att du kör 'gulp serve'.",
      "urlStatusFileNotFoundError": "Det gick inte att läsa in URL {3} för resursen {2} i komponenten {0} ({1}). Filen hittades inte på servern.",
      "urlStatusForbiddenError": "Det gick inte att läsa in URL {3} för resursen {2} i komponenten {0} ({1}). Åtkomst till filen är förbjuden.",
      "urlStatusClientErrorError": "Det gick inte att läsa in URL {3} för resursen {2} i komponenten {0} ({1}). Det uppstod ett fel när filen begärdes.",
      "urlStatusServerErrorError": "Det gick inte att läsa in URL {3} för resursen {2} i komponenten {0} ({1}). Det uppstod ett problem på servern.",
      "urlStatusLocalhostNetworkErrorError": "Det gick inte att läsa in URL {3} för resursen {2} i komponenten {0} ({1}). Det uppstod ett nätverksproblem.\r\nKontrollera att gulp serve körs och att du har kört gulp trust-dev-cert.",
      "urlStatusHttpsNetworkErrorError": "Det gick inte att läsa in URL {3} för resursen {2} i komponenten {0} ({1}). Det uppstod ett nätverksproblem.\r\nDet kan vara ett problem med ett HTTPS-certifikat. Kontrollera att du har rätt certifikat.",
      "urlStatusNetworkErrorError": "Det gick inte att läsa in URL {3} för resursen {2} i komponenten {0} ({1}). Det uppstod ett nätverksproblem.",
      "urlStatusUndefinedError": "Det gick inte att läsa in URL {3} för resursen {2} i komponenten {0} ({1}) på grund av okända problem.",
      "isUndefinedValidateError": "Värdet för \"{0}\" får inte vara odefinierat",
      "failedToCreateGlobalVariableError": "Det gick inte att skapa den globala variabeln {0} från skriptet {1}",
      "dependencyLoadError": "Det gick inte att ladda modulen {0} eftersom beroendet {1} inte lästes in",
      "missingPathDependencyError": "Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Fel vid inläsning av felsökningsskript. Kontrollera att servern är igång och att parameter-URL:en {0} är korrekt.",
      "errorLoadingDebugScriptHTTP": "Fel vid inläsning av felsökningsskript. Kontrollera att servern är igång, att parameter-URL:en {0} är korrekt och att det är tillåtet att läsa in osäkra skript. Överväg också att använda ett utvecklingscertifikat och köra felsökningsskript via HTTPS.",
      "errorLoadingDebugScriptMalformed": "Fel vid inläsning av felsökningsskript. Felsöknings-URL:en ({0}) verkar ha ett felaktigt format.",
      "errorLoadingDebugScriptUnknown": "Okänt fel vid inläsning av ett felsökningsskript.",
      "errorLoadingDebugLoaderTitle": "Fel vid inläsning av felsökningsladdare.",
      "errorLoadingDebugManifestTitle": "Fel vid inläsning av felsökningsmanifest.",
      "errorLoadingUnknownTitle": "Fel vid inläsning av felsökningsskript."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Saknar komponent eller initierarfunktion.",
      "closeDeveloperToolsAriaLabel": "Stäng utvecklarverktygen."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Varning!",
      "warningLine1": "Om du använder det här verktyget utsätter du dig för möjliga säkerhetshot som kan leda till att andra får åtkomst till dina personliga Office 365-data (dokument, e-post, konversationer med mer). Se till att du litar på personen eller organisationen som har bett dig att använda det här verktyget innan du fortsätter.",
      "warningLine2": "Läs mer här: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Ett fel uppstod inläsning av felsökningsmanifest.",
      "debugManifestErrorDismissButtonText": "Ignorera"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Tillåta felsökning av skript?",
      "allowDebugLoaderTitle": "Tillåt felsökningsladdare?",
      "allowDebugLoaderAndManifestsTitle": "Tillåt felsökningsladdare och felsökningsskript?",
      "debugManifestLoadingWarning": "VARNING: Den här sidan innehåller osäkra skript som, om de läses in, kan skada din dator. Fortsätt inte om du inte litar på utvecklaren och förstår riskerna.",
      "debugManifestLoadingWarning2": "Klicka på {0} om du är osäker.",
      "debugManifestLoadingConfirm": "Läs in felsökningsskript",
      "debugManifestLoadingCancel": "Läs inte in felsökningsskript",
      "debugManifestLoadingCalloutText": "Om du inte vet vad du ska göra klickar du här."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Läser in...",
      "developerToolsTabLoadingUnknownError": "Okänt fel vid inläsning av modulen för utvecklarverktyg."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifest",
      "noManifestSelected": "Inget manifest har valts"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Prestanda",
      "ErrorAccessingPerfDataErrorMessage": "Det gick inte att hämta prestandadata: objektet är null eller odefinierat.",
      "ErrorAccessingRedirectDataErrorMessage": "Det inträffade ett problem vid åtkomst av prestandadata för HTTP-omdirigering.",
      "ErrorParsingPercievedLatencyErrorMessage": "Ett fel upptäcktes vid tolkning av uppfattade fördröjningsdata.",
      "ErrorParsingApiDataErrorMessage": "Ett fel upptäcktes vid tolkning av API-data.",
      "UnkownPerformanceDataErrorMessage": "Ett okänt fel har uppstått: {0}",
      "DefaultWebPartName": "Webbdel",
      "ServerResponseLabel": "Serversvar",
      "ApplicationInitializationLabel": "Initiering av app",
      "ScriptFetchEvalLabel": "Hämta och utvärdera skript",
      "SpLoaderStartLabel": "SPFx-initiering",
      "PageRenderLabel": "Sidåtergivning",
      "LeftNavRenderLabel": "Återgivning av vänster navigering",
      "CanvasRenderLabel": "Återgivning av arbetsyta",
      "LayoutRenderLabel": "Layoutrendering",
      "RedirectResponseLabel": "Omdirigera svar",
      "AppLoadLabel": "Inläsning av app",
      "RenderWebPartsLabel": "Återgivning av webbdelar",
      "TotalRenderTimeLabel": "Totalt",
      "GeneralErrorMessage": "Något gick fel vid hämtning av prestandadata.",
      "ErrorMessagePrefix": "Felmeddelande: {0}",
      "PerformanceDataHint": "Obs! När du har lagt till eller tagit bort en webbdel uppdaterar du sidan för att visa uppdaterade prestandadata.",
      "ModulesLoadedLegendLabel": "Inlästa moduler",
      "InitializationLegendLabel": "Initiering",
      "RenderTimeLegendLabel": "Återgivningstid",
      "InitializationTimeLabel": "Initieringstid",
      "ModuleLoadingTimeLabel": "Modulinläsningstid",
      "ModuleLazyLoadingDelayLabel": "Fördröjd inläsning av modul",
      "DataFetchTimeLabel": "Datahämtningstid",
      "DataFetchLegendLabel": "Datahämtning",
      "ItemsColumnHeader": "Objekt",
      "DurationColumnHeader": "Varaktighet",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Ej tillämpligt"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Spårning",
      "EmptyTraceData": "Inga spårningar har lästs in.",
      "ExportCSVButtonLabel": "Exportera CSV",
      "LevelHeaderLabel": "Nivå",
      "MessageHeaderLabel": "Meddelande",
      "ScopeHeaderLabel": "Omfattning",
      "SourceHeaderLabel": "Källa",
      "TimestampHeaderLabel": "Tidsstämpel",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Det inträffade ett problem vid åtkomst av spårningsdata."
    }
  };

  strings.default = strings;
  return strings;
});
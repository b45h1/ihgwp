define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Није могуће учитати апликацију на овој страници. Користите дугме „Назад“ у прегледачу да бисте покушали опет. Ако поново дође до проблема, обратите се администратору сајта и дајте му информације у оквиру „Технички детаљи“.",
      "platformFailedToLoadError": "Није успело учитавање платформе. ID: „{0}“, име: „{1}“",
      "platformFailedToLoadWithMessageError": "Није успело учитавање платформе. ID: „{0}“, име: „{1}“.\r\nГрешка: {2}",
      "applicationFailedToInitializeError": "Грешка при покретању апликације. Грешка: {0}",
      "invalidPreloadedDataError": "Неважећи унапред учитани подаци.",
      "manifestNotFoundByIdError": "Није пронађен манифест за ID компоненте „{0}“.",
      "manifestNotFoundError": "Није пронађен манифест за ID компоненте „{0}“ и верзију „{1}“.",
      "systemConfigDisabledError": "System.config() није подржан. Користите манифест да бисте навели конфигурацију.",
      "loadComponentLog": "Учитавање компоненте „{0}“ ({1}).",
      "loadComponentEndLog": "Компонента „{0}“ ({1}) је учитана.",
      "loadComponentRetryLog": "Учитавање компоненте „{0}“ ({1}). Покушај {2} од {3}.",
      "loadComponentError": "Није успело учитавање компоненте „{0}“ ({1}).\r\nОригинална грешка: {2}",
      "loadComponentMaxRetriesError": "Покушали сте да учитате компоненту „{0}“ ({1}) {2} пута без успеха.",
      "loadComponentDependencyError": "Није успело учитавање зависности компоненте „{0}“ из компоненте „{1}“ ({2}).\r\nОригинална грешка: {3}",
      "loadComponentDependencyFailoverPathError": "Није успело учитавање зависности компоненте „{0}“ уз путању за преузимање посла инстанце која падне „{1}“ из компоненте „{2}“ ({3}).\r\nОригинална грешка: {4}",
      "loadPathDependencyLog": "Учитавање зависности путање „{0}“ из компоненте „{1}“ ({2})",
      "loadPathDependencyError": "Није успело учитавање зависности путање „{0}“ из компоненте „{1}“ ({2}).\r\nОригинална грешка: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Учитавање зависности путање „{0}“ из компоненте „{1}“ ({2}) није успело због неке друге зависности чије учитавање није успело.",
      "loadEntryPointError": "Није успело учитавање улазне тачке из компоненте „{0}“ ({1}).\r\nОригинална грешка: {2}",
      "loadComponentReturnsEmptyError": "Функција loadComponent() је вратила празан објекат за компоненту „{0}“ ({1}).",
      "loadComponentReturnsDefaultEmptyError": "Функција loadComponent() је вратила објекат са празним подразумеваним својством за компоненту „{0}“ ({1}).",
      "moduleHasUndeclaredDependencyError": "Улазна тачка за компоненту „{0}“ ({1}) има зависност „{2}“ која није декларисана у манифесту.",
      "loadScriptWithStringError": "Функција loadScript не дозвољава ниску као 2. параметар. Користите ILoadScriptOptions уместо тога.",
      "tooManyManifestsError": "Број пронађених манифеста (верзије {1}) за компоненту „{2}“: {0}.",
      "tooManyCompatibleVersionsError": "Број пронађених компатибилних верзија ({1}) за компоненту „{2}“ верзије „{3}“: {0}.",
      "tooManyComponentsError": "Превише компоненти је пронађено за ID „{0}“.",
      "noComponentFoundError": "Није пронађена компонента за ID „{0}“.",
      "deleteComponentLog": "Брисање компоненте „{0}“ верзије „{1}“ из складишта.",
      "browserNotSupportedError": "Ова верзија прегледача није подржана.\r\nАжурирајте прегледач на најновију верзију.",
      "ie9OrOlderNotSupportedError": "Ова страница не подржава Internet Explorer издања старија од верзије 10. Ажурирајте веб прегледач.",
      "firefox43OrOlderNotSupportedError": "Ова страница не подржава Mozilla Firefox издања старија од верзије 44. Ажурирајте веб прегледач.",
      "resourceNotFoundError": "Ресурс „{0}“ није пронађен у конфигурацији учитавања манифеста за компоненту „{1}“ ({2}).",
      "noFailoverPathError": "Није могуће позвати resolveAddress() на компоненти без путање за преузимање посла инстанце која падне",
      "urlStatusLocalhostFileNotFoundError": "Није успело учитавање URL адресе „{3}“ за ресурс „{2}“ у компоненти „{0}“ ({1}). Датотека није пронађена на серверу.\r\nУверите се да покрећете „gulp serve“.",
      "urlStatusFileNotFoundError": "Није успело учитавање URL адресе „{3}“ за ресурс „{2}“ у компоненти „{0}“ ({1}). Датотека није пронађена на серверу.",
      "urlStatusForbiddenError": "Није успело учитавање URL адресе „{3}“ за ресурс „{2}“ у компоненти „{0}“ ({1}). Приступ датотеци је забрањен.",
      "urlStatusClientErrorError": "Није успело учитавање URL адресе „{3}“ за ресурс „{2}“ у компоненти „{0}“ ({1}). Дошло је до грешке приликом захтевања датотеке.",
      "urlStatusServerErrorError": "Није успело учитавање URL адресе „{3}“ за ресурс „{2}“ у компоненти „{0}“ ({1}). Дошло је до проблема на серверу.",
      "urlStatusLocalhostNetworkErrorError": "Није успело учитавање URL адресе „{3}“ за ресурс „{2}“ у компоненти „{0}“ ({1}). Дошло је до проблема са мрежом.\r\nУверите се да сте покренули „gulp serve“ и „gulp trust-dev-cert“.",
      "urlStatusHttpsNetworkErrorError": "Није успело учитавање URL адресе „{3}“ за ресурс „{2}“ у компоненти „{0}“ ({1}). Дошло је до проблема са мрежом.\r\nМожда је у питању проблем са HTTPS цертификатом. Уверите се да имате одговарајући цертификат.",
      "urlStatusNetworkErrorError": "Није успело учитавање URL адресе „{3}“ за ресурс „{2}“ у компоненти „{0}“ ({1}). Дошло је до проблема са мрежом.",
      "urlStatusUndefinedError": "Није успело учитавање URL адресе „{3}“ за ресурс „{2}“ у компоненти „{0}“ ({1}) зато што постоје непознати проблеми.",
      "isUndefinedValidateError": "Вредност за „{0}“ не сме да буде недефинисана",
      "failedToCreateGlobalVariableError": "Није успело креирање глобалне променљиве „{0}“ од скрипте „{1}“",
      "dependencyLoadError": "Није успело учитавање модула „{0}“ зато што није учитана зависност {1}",
      "missingPathDependencyError": "Недостаје зависност путање „{0} из компоненте „{1}“ ({2}). Постојеће зависности путање: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Грешка приликом учитавања скрипте за отклањање грешака. Проверите да ли је сервер покренут и да ли је тачна URL адреса параметра „{0}“.",
      "errorLoadingDebugScriptHTTP": "Грешка приликом учитавања скрипте за отклањање грешака. Проверите да ли је сервер покренут, да ли је тачна URL адреса параметра „{0}“ и да ли је омогућено учитавање небезбедних скрипти. Размотрите и коришћење развојног цертификата и испоруку скрипти за отклањање грешака путем HTTPS протокола.",
      "errorLoadingDebugScriptMalformed": "Грешка приликом учитавања скрипте за отклањање грешака. Изгледа да је URL адреса отклањања грешака ({0}) погрешно уобличена.",
      "errorLoadingDebugScriptUnknown": "Непозната грешка приликом учитавања скрипте за отклањање грешака.",
      "errorLoadingDebugLoaderTitle": "Грешка приликом учитавања програма за учитавање отклањања грешака.",
      "errorLoadingDebugManifestTitle": "Грешка приликом учитавања манифеста отклањања грешака.",
      "errorLoadingUnknownTitle": "Грешка приликом учитавања скрипти за отклањање грешака."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Недостаје компонента или функција покретача.",
      "closeDeveloperToolsAriaLabel": "Затворите алатке за програмере."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Упозорење!",
      "warningLine1": "Коришћење ове алатке вас излаже потенцијалним безбедносним претњама које могу довести до тога да други људи добију приступ вашим личним Office 365 подацима (документима, е-порукама, разговорима и још много тога). Пре него што наставите, уверите се да имате поверења у особу или организацију које су вам затражиле приступ овој алатки.",
      "warningLine2": "Сазнајте више овде: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Дошло је до грешке приликом учитавања манифеста отклањања грешака.",
      "debugManifestErrorDismissButtonText": "Одбаци"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Желите ли да дозволите скрипте за отклањање грешака?",
      "allowDebugLoaderTitle": "Желите ли да дозволите учитавање отклањања грешака?",
      "allowDebugLoaderAndManifestsTitle": "Желите ли да дозволите учитавање отклањања грешака и скрипте за отклањање грешака?",
      "debugManifestLoadingWarning": "УПОЗОРЕЊЕ: Ова страница садржи небезбедне скрипте које могу оштетити ваш рачунар ако се учитају! Немојте настављати ако немате поверења у пројектанта и не разумете ризике.",
      "debugManifestLoadingWarning2": "Ако нисте сигурни, кликните на дугме {0}.",
      "debugManifestLoadingConfirm": "Учитај скрипте за отклањање грешака",
      "debugManifestLoadingCancel": "Не учитавај скрипте за отклањање грешака",
      "debugManifestLoadingCalloutText": "Ако не знате шта да радите, кликните овде."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Учитавање...",
      "developerToolsTabLoadingUnknownError": "Непозната грешка при учитавању модула алатки за програмере."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Манифести",
      "noManifestSelected": "Није изабран ниједан манифест"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Перформансе",
      "ErrorAccessingPerfDataErrorMessage": "Није могуће преузети податке о перформансама: објекат је без вредности или недефинисан.",
      "ErrorAccessingRedirectDataErrorMessage": "Дошло је до проблема приликом приступа подацима о перформансама HTTP преусмеравања.",
      "ErrorParsingPercievedLatencyErrorMessage": "Откривена је грешка приликом рашчлањивања података о препознатом кашњењу.",
      "ErrorParsingApiDataErrorMessage": "Откривена је грешка приликом рашчлањивања API података.",
      "UnkownPerformanceDataErrorMessage": "Дошло је до непознате грешке: {0}",
      "DefaultWebPartName": "Веб сегмент",
      "ServerResponseLabel": "Одзив сервера",
      "ApplicationInitializationLabel": "Покретање апликације",
      "ScriptFetchEvalLabel": "Добављање и процењивање скрипти",
      "SpLoaderStartLabel": "SPFx иницијализација",
      "PageRenderLabel": "Визуелизација странице",
      "LeftNavRenderLabel": "Визуелизација левог окна за навигацију",
      "CanvasRenderLabel": "Визуелизација платна",
      "LayoutRenderLabel": "Визуелизација распореда",
      "RedirectResponseLabel": "Одговор о преусмеравању",
      "AppLoadLabel": "Учитавање апликације",
      "RenderWebPartsLabel": "Визуелизација веб сегмената",
      "TotalRenderTimeLabel": "Укупно",
      "GeneralErrorMessage": "Жао нам је, дошло је до грешке приликом преузимања података о перформансама.",
      "ErrorMessagePrefix": "Порука о грешци: {0}",
      "PerformanceDataHint": "Напомена: Када додате или уклоните веб сегмент, освежите страницу да бисте видели ажуриране податке о перформансама.",
      "ModulesLoadedLegendLabel": "Учитани модули",
      "InitializationLegendLabel": "Покретање",
      "RenderTimeLegendLabel": "Време визуелизације",
      "InitializationTimeLabel": "Време покретања",
      "ModuleLoadingTimeLabel": "Време учитавања модула",
      "ModuleLazyLoadingDelayLabel": "Учитавање модула је одложено",
      "DataFetchTimeLabel": "Време добављања података",
      "DataFetchLegendLabel": "Добављање података",
      "ItemsColumnHeader": "Ставке",
      "DurationColumnHeader": "Трајање",
      "MillisecondsUnitLabel": "{0} мс",
      "NAPlaceholder": "Не постоји"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Праћење",
      "EmptyTraceData": "Нема учитаних праћења.",
      "ExportCSVButtonLabel": "Извези CSV",
      "LevelHeaderLabel": "Ниво",
      "MessageHeaderLabel": "Порука",
      "ScopeHeaderLabel": "Опсег",
      "SourceHeaderLabel": "Извор",
      "TimestampHeaderLabel": "Временска ознака",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Дошло је до проблема приликом приступа подацима о праћењу."
    }
  };

  strings.default = strings;
  return strings;
});
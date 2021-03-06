define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Не може да ја вчитаме апликацијата на оваа страница. Користете го копчето Назад во прегледувачот за да се обидете повторно. Ако проблемот опстои, контактирајте со администраторот на локацијата и дајте му ги информациите во техничките детали.",
      "platformFailedToLoadError": "Платформата не успеа да се вчита. ИД: „{0}“, име: „{1}“",
      "platformFailedToLoadWithMessageError": "Платформата не може да се вчита. ИД: „{0}“, име: „{1}“.\r\nГрешка: {2}",
      "applicationFailedToInitializeError": "Се појави грешка при иницијализацијата на апликацијата. Грешка: {0}",
      "invalidPreloadedDataError": "Претходно вчитаните податоци не се важечки.",
      "manifestNotFoundByIdError": "Не го најдовме манифестот за идентитетот на компонентата „{0}“.",
      "manifestNotFoundError": "Манифестот не е најден за ИД на компонентата „{0}“ и верзијата „{1}“.",
      "systemConfigDisabledError": "System.config() не е поддржан. Користете манифест за да ја наведете конфигурацијата.",
      "loadComponentLog": "Се вчитува компонентата „{0}“ ({1}).",
      "loadComponentEndLog": "Компонентата „{0}“ ({1}) се вчита.",
      "loadComponentRetryLog": "Се вчитува компонентата „{0}“ ({1}). Обид {2} од {3}.",
      "loadComponentError": "Не може да се вчита компонентата „{0}“ ({1}).\r\nОригинална грешка: {2}",
      "loadComponentMaxRetriesError": "Имаше обид за вчитување на компонентата „{0}“ ({1}) {2} пати без успех.",
      "loadComponentDependencyError": "Не може да се вчита зависноста на компонентата „{0}“ од компонентата „{1}“ ({2}).\r\nОригинална грешка: {3}",
      "loadComponentDependencyFailoverPathError": "Не може да се вчита зависноста на компонентата „{0}“ со патека на откажување „{1}“ од компонентата „{2}“ ({3}).\r\nОригинална грешка: {4}",
      "loadPathDependencyLog": "Се вчитува зависноста на патеката „{0}“ од компонентата „{1}“ ({2})",
      "loadPathDependencyError": "Не може да се вчита зависноста на патеката „{0}“ од компонентата „{1}“ ({2}).\r\nОригинална грешка: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Не успеа да се вчита зависноста на патеката „{0}“ од компонентата „{1}“ ({2}) поради неуспешното вчитување на друга зависност.",
      "loadEntryPointError": "Не може да се вчита влезната точка од компонентата „{0}“ ({1}).\r\nОригинална грешка: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() врати празен објект за компонентата „{0}“ ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() врати објект со празно стандардно својство за компонентата „{0}“ ({1}).",
      "moduleHasUndeclaredDependencyError": "Влезната точка за компонентата „{0}“ ({1}) зависи од „{2}“ што не е декларирано во манифестот.",
      "loadScriptWithStringError": "Карактеристиката loadScript не дозволува низа како втор параметар. Користете ILoadScriptOptions.",
      "tooManyManifestsError": "Најдени се {0} манифести (верзии {1}) за компонентата „{2}“.",
      "tooManyCompatibleVersionsError": "Најдени се {0} компатибилни верзии ({1}) за компонентата „{2}“ верзија „{3}“.",
      "tooManyComponentsError": "Најдовме премногу компоненти за идентитетот „{0}“.",
      "noComponentFoundError": "Нема компонента за ИД „{0}“.",
      "deleteComponentLog": "Компонентата „{0}“ верзија „{1}“ се брише од продавницата.",
      "browserNotSupportedError": "Оваа верзија на прегледувачот не е поддржана.\r\nАжурирајте го со најновата верзија.",
      "ie9OrOlderNotSupportedError": "Оваа страница не ги поддржува изданијата на Internet Explorer постари од верзијата 10. Надградете го веб-прегледувачот.",
      "firefox43OrOlderNotSupportedError": "Оваа страница не ги поддржува изданијата на Mozilla Firefox постари од верзијата 44. Ажурирајте го веб-прегледувачот.",
      "resourceNotFoundError": "Не го најдовме ресурсот „{0}“ во конфигурацијата на вчитувачот од манифестот за компонентата „{1}“ ({2}).",
      "noFailoverPathError": "Не може да се повика resolveAddress() на компонента без патека во случај на грешка",
      "urlStatusLocalhostFileNotFoundError": "Не може да се вчита УРЛ-адресата „{3}“ за ресурсот „{2}“ во компонентата „{0}“ ({1}). Не може да ја најдеме датотеката на серверот.\r\nПроверете дали се извршува „gulp serve“.",
      "urlStatusFileNotFoundError": "Не може да се вчита УРЛ-адресата „{3}“ за ресурсот „{2}“ во компонентата „{0}“ ({1}). Не може да ја најдеме датотеката на серверот.",
      "urlStatusForbiddenError": "Не може да се вчита УРЛ-адресата „{3}“ за ресурсот „{2}“ во компонентата „{0}“ ({1}). Пристапот до датотеката е забранет.",
      "urlStatusClientErrorError": "Не може да се вчита УРЛ-адресата „{3}“ за ресурсот „{2}“ во компонентата „{0}“ ({1}). Се појави грешка при барањето на датотеката.",
      "urlStatusServerErrorError": "Не може да се вчита УРЛ-адресата „{3}“ за ресурсот „{2}“ во компонентата „{0}“ ({1}). Има проблем со серверот.",
      "urlStatusLocalhostNetworkErrorError": "Не може да се вчита УРЛ-адресата „{3}“ за ресурсот „{2}“ во компонентата „{0}“ ({1}). Има проблем со мрежата.\r\nПроверете дали се извршува „gulp serve“ и дали се изврши „gulp trust-dev-cert“.",
      "urlStatusHttpsNetworkErrorError": "Не може да се вчита УРЛ-адресата „{3}“ за ресурсот „{2}“ во компонентата „{0}“ ({1}). Има проблем со мрежата.\r\nОва може да претставува проблем со HTTPS-сертификатот. Проверете дали го имате точниот сертификат.",
      "urlStatusNetworkErrorError": "Не може да се вчита УРЛ-адресата „{3}“ за ресурсот „{2}“ во компонентата „{0}“ ({1}). Има проблем со мрежата.",
      "urlStatusUndefinedError": "Не може да се вчита УРЛ-адресата „{3}“ за ресурсот „{2}“ во компонентата „{0}“ ({1}) од непознати причини.",
      "isUndefinedValidateError": "Вредноста за „{0}“ не смее да биде недефинирана",
      "failedToCreateGlobalVariableError": "Не успеа да се создаде глобална променлива „{0}“ од скриптата „{1}“",
      "dependencyLoadError": "Модулот „{0}“ не успеа да се вчита бидејќи зависноста {1} не се вчита",
      "missingPathDependencyError": "Недостига зависноста од патеката „{0}“ од компонентата „{1}“ ({2}). Постојни зависности од патеката: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Грешка при вчитувањето на скриптата за отстранување грешки. Проверете дали серверот функционира и дали УРЛ-параметарот „{0}“ е точен.",
      "errorLoadingDebugScriptHTTP": "Грешка при вчитувањето на скриптата за отстранување грешки. Проверете дали серверот функционира, дали УРЛ-параметарот „{0}“ е точен и дали е дозволено вчитување небезбедни скрипти. Размислете и за користење развоен сертификат и за вчитување на скриптите преку HTTPS.",
      "errorLoadingDebugScriptMalformed": "Грешка при вчитувањето на скриптата за отстранување грешки. УРЛ-адресата за отстранување грешки ({0}) е лошо формирана.",
      "errorLoadingDebugScriptUnknown": "Непозната грешка при вчитувањето на скриптата за отстранување грешки.",
      "errorLoadingDebugLoaderTitle": "Грешка при вчитувањето на вчитувачот за отстранување грешки.",
      "errorLoadingDebugManifestTitle": "Грешка при вчитувањето на манифестите за отстранување грешки.",
      "errorLoadingUnknownTitle": "Грешка при вчитувањето на скриптите за отстранување грешки."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Недостасува компонента или функција за иницијализирање.",
      "closeDeveloperToolsAriaLabel": "Затвори ги алатките за развивачи."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Предупредување!",
      "warningLine1": "Користењето на оваа алатка ве изложува на потенцијални безбедносни закани коишто може да бидат резултат на тоа што другите добиваат пристап до вашите лични податоци на Office 365 (документи, е-пошта, разговори и друго). Проверете дали им верувате на лицето или организацијата коишто побарале пристап до оваа алатка пред да продолжите.",
      "warningLine2": "Дознајте повеќе тука: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Се појави грешка при вчитувањето на манифестите за отстранување грешки.",
      "debugManifestErrorDismissButtonText": "Отфрли"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Да се дозволат скрипти за отстранување грешки?",
      "allowDebugLoaderTitle": "Да се дозволи вчитувачот за отстранување грешки?",
      "allowDebugLoaderAndManifestsTitle": "Да се дозволат вчитувачот и скриптите за отстранување грешки?",
      "debugManifestLoadingWarning": "ПРЕДУПРЕДУВАЊЕ: оваа страница содржи небезбедни скрипти коишто може да го оштетат компјутерот ако се вчитаат. Не продолжувајте, освен ако му верувате на развивачот и ги разбирате ризиците.",
      "debugManifestLoadingWarning2": "Ако не сте сигурни, кликнете {0}.",
      "debugManifestLoadingConfirm": "Вчитај ги скриптите за отстранување грешки",
      "debugManifestLoadingCancel": "Не вчитувај ги скриптите за отстранување грешки",
      "debugManifestLoadingCalloutText": "Ако не знаете што да правите, кликнете тука."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Се вчитува...",
      "developerToolsTabLoadingUnknownError": "Се појави непозната грешка при вчитување на модулот со алатки за развивачи."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Манифести",
      "noManifestSelected": "Не е избран манифест"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Изведба",
      "ErrorAccessingPerfDataErrorMessage": "Не може да ги вчитаме податоците за изведбата: објектот е нула или не е дефиниран.",
      "ErrorAccessingRedirectDataErrorMessage": "Не може да пристапиме до HTTP-податоците за пренасочување на изведбата.",
      "ErrorParsingPercievedLatencyErrorMessage": "Се појави грешка при разложување на податоците за воочена латентност.",
      "ErrorParsingApiDataErrorMessage": "Се појави грешка при разложување на податоците за АПИ.",
      "UnkownPerformanceDataErrorMessage": "Се појави непозната грешка: {0}",
      "DefaultWebPartName": "Веб-дел",
      "ServerResponseLabel": "Одговор на серверот",
      "ApplicationInitializationLabel": "Иницијализирање на апликацијата",
      "ScriptFetchEvalLabel": "Земање и проценка на скриптите",
      "SpLoaderStartLabel": "Започнување на SPFx",
      "PageRenderLabel": "Прикажување на страницата",
      "LeftNavRenderLabel": "Прикажување на левата навигација",
      "CanvasRenderLabel": "Прикажување на платното",
      "LayoutRenderLabel": "Прикажување на распоредот",
      "RedirectResponseLabel": "Одговор за пренасочување",
      "AppLoadLabel": "Вчитување на апликацијата",
      "RenderWebPartsLabel": "Прикажување на веб-деловите",
      "TotalRenderTimeLabel": "Вкупно",
      "GeneralErrorMessage": "Извинете, се појави проблем при вчитување на податоците за изведбата.",
      "ErrorMessagePrefix": "Порака за грешка: {0}",
      "PerformanceDataHint": "Белешка: откако ќе додадете или отстраните веб-дел, освежете ја страницата за да ги видите ажурираните податоци за изведбата.",
      "ModulesLoadedLegendLabel": "Вчитани модули",
      "InitializationLegendLabel": "Иницијализација",
      "RenderTimeLegendLabel": "Време на прикажување",
      "InitializationTimeLabel": "Време на иницијализација",
      "ModuleLoadingTimeLabel": "Време на вчитување на модулот",
      "ModuleLazyLoadingDelayLabel": "Вчитувањето на модулот доцни",
      "DataFetchTimeLabel": "Време на земање на податоците",
      "DataFetchLegendLabel": "Земање податоци",
      "ItemsColumnHeader": "Ставки",
      "DurationColumnHeader": "Времетраење",
      "MillisecondsUnitLabel": "{0} мс",
      "NAPlaceholder": "N/A"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Трага",
      "EmptyTraceData": "Не се вчитани траги.",
      "ExportCSVButtonLabel": "Извези CSV",
      "LevelHeaderLabel": "Ниво",
      "MessageHeaderLabel": "Порака",
      "ScopeHeaderLabel": "Обем",
      "SourceHeaderLabel": "Извор",
      "TimestampHeaderLabel": "Временски печат",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Имаме проблем со пристапувањето до податоците за следењето."
    }
  };

  strings.default = strings;
  return strings;
});
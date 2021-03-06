define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Не може да се зареди приложението на тази страница. Използвайте бутона на браузъра \"Назад\", за да опитате отново. Ако проблемът продължава, се обърнете към администратора на сайта и му дайте информацията от \"Технически подробности\".",
      "platformFailedToLoadError": "Платформата не можа да се зареди. ИД: \"{0}\", име: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Платформата не успя да се зареди. ИД: \"{0}\", име: \"{1}\".\r\nГрешка: {2}",
      "applicationFailedToInitializeError": "Грешка при инициализиране на приложението. Грешка: {0}",
      "invalidPreloadedDataError": "Невалидни предварително заредени данни.",
      "manifestNotFoundByIdError": "Не е открит манифестът за ИД на компонент \"{0}\".",
      "manifestNotFoundError": "Не е намерен манифест за компонент с ИД \"{0}\" и версия \"{1}\".",
      "systemConfigDisabledError": "System.config() не се поддържа. Използвайте манифест за задаване на конфигурацията.",
      "loadComponentLog": "Зареждане на компонент \"{0}\" ({1}).",
      "loadComponentEndLog": "Компонент \"{0}\" ({1}) е зареден.",
      "loadComponentRetryLog": "Зареждане на компонент \"{0}\" ({1}). Опит {2} от {3}.",
      "loadComponentError": "Грешка при зареждане на компонент \"{0}\" ({1}).\r\nПървоначална грешка: {2}",
      "loadComponentMaxRetriesError": "Направени са {2} неуспешни опита да се зареди компонент \"{0}\" ({1}).",
      "loadComponentDependencyError": "Неуспешно зареждане на зависимостта на компонент \"{0}\" от компонент \"{1}\" ({2}).\r\nПървоначална грешка: {3}",
      "loadComponentDependencyFailoverPathError": "Неуспешно зареждане на зависимостта на компонент \"{0}\" с път за преместване при отказ \"{1}\" от компонент \"{2}\" ({3}).\r\nПървоначална грешка: {4}",
      "loadPathDependencyLog": "Зареждане на зависимостта на пътя \"{0}\" от компонент \"{1}\" ({2})",
      "loadPathDependencyError": "Неуспешно зареждане на зависимостта на пътя \"{0}\" от компонент \"{1}\" ({2}).\r\nПървоначална грешка: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Неуспешно зареждане на зависимостта на пътя \"{0}\" от компонент \"{1}\" ({2}) поради друга зависимост, която не успя да се зареди.",
      "loadEntryPointError": "Неуспешно зареждане на входна точка от компонент \"{0}\" ({1}).\r\nПървоначална грешка: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() върна празен обект за компонент \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() върна обект с празно свойство по подразбиране за компонент \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "Входната точка за компонент \"{0}\" ({1}) има зависимост от \"{2}\", която не е декларирана в манифеста.",
      "loadScriptWithStringError": "Функцията loadScript не позволява низ като втори параметър. Вместо това използвайте ILoadScriptOptions.",
      "tooManyManifestsError": "Намерени са {0} манифеста (версии {1}) за компонент \"{2}\".",
      "tooManyCompatibleVersionsError": "Намерени са {0} съвместими версии ({1}) за компонент \"{2}\" с версия\"{3}\".",
      "tooManyComponentsError": "Твърде много компоненти са намерени за ИД \"{0}\".",
      "noComponentFoundError": "Никакъв компонент не е намерен за ИД \"{0}\".",
      "deleteComponentLog": "Изтриване на компонент \"{0}\" версия \"{1}\" от хранилището.",
      "browserNotSupportedError": "Тази версия на браузъра ви не се поддържа.\r\nАктуализирайте своя браузър до най-новата версия.",
      "ie9OrOlderNotSupportedError": "Тази страница не поддържа версии на Internet Explorer, по-стари от версия 10. Актуализирайте своя уеб браузър.",
      "firefox43OrOlderNotSupportedError": "Тази страница не поддържа версии на Mozilla Firefox, по-стари от версия 44. Актуализирайте своя уеб браузър.",
      "resourceNotFoundError": "Ресурс \"{0}\" не е намерен в конфигурацията на зареждащата служебна програма на манифеста на компонент \"{1}\" ({2}).",
      "noFailoverPathError": "Не може да се извика resolveAddress() в компонент без път за преместване при отказ",
      "urlStatusLocalhostFileNotFoundError": "Неуспешно зареждане на URL адреса \"{3}\" за ресурс \"{2}\" в компонент \"{0}\" ({1}). Файлът не е намерен на сървъра.\r\nУверете се, че изпълнявате \"gulp serve\".",
      "urlStatusFileNotFoundError": "Неуспешно зареждане на URL адреса \"{3}\" за ресурс \"{2}\" в компонент \"{0}\" ({1}). Файлът не е намерен на сървъра.",
      "urlStatusForbiddenError": "Неуспешно зареждане на URL адреса \"{3}\" за ресурс \"{2}\" в компонент \"{0}\" ({1}). Достъпът до файла е забранен.",
      "urlStatusClientErrorError": "Неуспешно зареждане на URL адреса \"{3}\" за ресурс \"{2}\" в компонент \"{0}\" ({1}). Възникна грешка при искане на файла.",
      "urlStatusServerErrorError": "Неуспешно зареждане на URL адреса \"{3}\" за ресурс \"{2}\" в компонент \"{0}\" ({1}). Възникна проблем в сървъра.",
      "urlStatusLocalhostNetworkErrorError": "Неуспешно зареждане на URL адреса \"{3}\" за ресурс \"{2}\" в компонент \"{0}\" ({1}). Възникна проблем в мрежата.\r\nУверете се, че изпълнявате \"gulp serve\" и сте изпълнили \"gulp trust-dev-cert\".",
      "urlStatusHttpsNetworkErrorError": "Неуспешно зареждане на URL адреса \"{3}\" за ресурс \"{2}\" в компонент \"{0}\" ({1}). Възникна проблем в мрежата.\r\nТова може да е проблем със сертификат за HTTPS. Уверете се, че имате правилния сертификат.",
      "urlStatusNetworkErrorError": "Неуспешно зареждане на URL адреса \"{3}\" за ресурс \"{2}\" в компонент \"{0}\" ({1}). Възникна проблем в мрежата.",
      "urlStatusUndefinedError": "Неуспешно зареждане на URL адреса \"{3}\" за ресурс \"{2}\" в компонент \"{0}\" ({1}) поради неизвестни проблеми.",
      "isUndefinedValidateError": "Стойността за \"{0}\" не трябва да е недефинирана",
      "failedToCreateGlobalVariableError": "Неуспешно създаване на глобалната променлива \"{0}\" от скрипт \"{1}\"",
      "dependencyLoadError": "Неуспешно зареждане на модул \"{0}\", защото зависимостта {1} не е била заредена",
      "missingPathDependencyError": "Липсва зависимостта на пътя \"{0}\" от компонент \"{1}\" ({2}). Съществуващи зависимости на пътя: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Грешка при зареждане на модула за отстраняване на грешки. Уверете се, че сървърът работи и че URL адресът на параметъра \"{0}\" е правилен.",
      "errorLoadingDebugScriptHTTP": "Грешка при зареждане на скрипта за отстраняване на грешки. Уверете се, че сървърът работи, че URL адресът на параметъра \"{0}\" е правилен и че зареждането на опасни скриптове е позволено. Също така обмислете използване на сертификат за разработки и обслужване на скриптовете за отстраняване на грешки по HTTPS.",
      "errorLoadingDebugScriptMalformed": "Грешка при зареждане на скрипта за отстраняване на грешки. Изглежда, че URL адресът за отстраняване на грешки ({0}) не е правилно формиран.",
      "errorLoadingDebugScriptUnknown": "Неизвестна грешка при зареждане на скрипта за отстраняване на грешки.",
      "errorLoadingDebugLoaderTitle": "Грешка при зареждане на манифестите за отстраняване на грешки.",
      "errorLoadingDebugManifestTitle": "Грешка при зареждане на манифестите за отстраняване на грешки.",
      "errorLoadingUnknownTitle": "Грешка при зареждане на скриптовете за отстраняване на грешки."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Липсващ компонент или функция на инициализатора.",
      "closeDeveloperToolsAriaLabel": "Затваряне на инструментите за разработчици."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Предупреждение!",
      "warningLine1": "Използването на този инструмент ви излага на потенциални заплахи за сигурността, което може да доведе това други хора да получат достъп до вашите лични данни в Office 365 (документи, имейли, разговори и др.). Уверете се, че имате доверие на лицето или организацията, които ви молят за достъп до този инструмент, преди да продължите.",
      "warningLine2": "Научете повече тук: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Възникна грешка при зареждане на манифестите за отстраняване на грешки.",
      "debugManifestErrorDismissButtonText": "Прекратяване"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Позволяване на отстраняване на грешки от скриптовете?",
      "allowDebugLoaderTitle": "Разрешаване на зареждащия модул за отстраняване на грешки?",
      "allowDebugLoaderAndManifestsTitle": "Разрешаване на зареждащия модул и скриптовете за отстраняване на грешки?",
      "debugManifestLoadingWarning": "ПРЕДУПРЕЖДЕНИЕ: тази страница съдържа опасни скриптове, които, ако бъдат заредени, евентуално биха могли да навредят на вашия компютър. Продължете само ако имате доверие на разработчика и разбирате рисковете.",
      "debugManifestLoadingWarning2": "Ако не сте сигурни, щракнете върху \"{0}\".",
      "debugManifestLoadingConfirm": "Зареждай скриптовете за отстраняване на грешки",
      "debugManifestLoadingCancel": "Не зареждай скриптовете за отстраняване на грешки",
      "debugManifestLoadingCalloutText": "Ако не знаете какво да правите, щракнете тук."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Зареждане...",
      "developerToolsTabLoadingUnknownError": "Неизвестна грешка при зареждане на модула с инструменти за разработчици."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Манифести",
      "noManifestSelected": "Няма избран манифест"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Производителност",
      "ErrorAccessingPerfDataErrorMessage": "Неуспешно извличане на данни за производителността: обектът е null или не е дефиниран.",
      "ErrorAccessingRedirectDataErrorMessage": "Възникна проблем при достъпа до данните за производителността при HTTP пренасочването.",
      "ErrorParsingPercievedLatencyErrorMessage": "Хваната е грешка при анализирането на данните за забелязаното закъснение.",
      "ErrorParsingApiDataErrorMessage": "Хваната е грешка при анализирането на данните за API.",
      "UnkownPerformanceDataErrorMessage": "Възникна неизвестна грешка: {0}",
      "DefaultWebPartName": "Уеб част",
      "ServerResponseLabel": "Отговор на сървъра",
      "ApplicationInitializationLabel": "Инициализиране на приложение",
      "ScriptFetchEvalLabel": "Извличане и оценка на скрипт",
      "SpLoaderStartLabel": "Инициализиране на SPFx",
      "PageRenderLabel": "Рендиране на страницата",
      "LeftNavRenderLabel": "Рендиране на лявата навигация",
      "CanvasRenderLabel": "Рендиране на платно",
      "LayoutRenderLabel": "Рендиране на оформление",
      "RedirectResponseLabel": "Пренасочване на отговор",
      "AppLoadLabel": "Зареждане на приложение",
      "RenderWebPartsLabel": "Рендиране на уеб части",
      "TotalRenderTimeLabel": "Общо",
      "GeneralErrorMessage": "За съжаление, нещо се обърка при извличане на данните за производителността.",
      "ErrorMessagePrefix": "Съобщение за грешка: {0}",
      "PerformanceDataHint": "Забележка: след добавянето или премахването на уеб част, обновете страницата, за да видите актуализираните данни за производителността.",
      "ModulesLoadedLegendLabel": "Заредени модули",
      "InitializationLegendLabel": "Инициализиране",
      "RenderTimeLegendLabel": "Време за рендиране",
      "InitializationTimeLabel": "Време за инициализация",
      "ModuleLoadingTimeLabel": "Време за зареждане на модула",
      "ModuleLazyLoadingDelayLabel": "Зареждането на модула е отложено",
      "DataFetchTimeLabel": "Време за извличане на данните",
      "DataFetchLegendLabel": "Извличане на данни",
      "ItemsColumnHeader": "Елементи",
      "DurationColumnHeader": "Времетраене",
      "MillisecondsUnitLabel": "{0} мсек.",
      "NAPlaceholder": "Няма"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Проследяване",
      "EmptyTraceData": "Не са заредени проследявания.",
      "ExportCSVButtonLabel": "Експортиране като CSV файл",
      "LevelHeaderLabel": "Ниво",
      "MessageHeaderLabel": "Съобщение",
      "ScopeHeaderLabel": "Обхват",
      "SourceHeaderLabel": "Източник",
      "TimestampHeaderLabel": "Клеймо (с дата и час)",
      "TimestampFormat": "{1}.{0}.{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Възникна проблем при достъпа до данните от проследяването."
    }
  };

  strings.default = strings;
  return strings;
});
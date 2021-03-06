define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Не вдалося завантажити програму на цій сторінці. Натисніть кнопку \"Назад\" у браузері, щоб спробувати ще раз. Якщо проблема не зникне, зверніться до адміністратора сайту та надайте йому дані з розділу \"Технічні відомості\".",
      "platformFailedToLoadError": "Не вдалося завантажити платформу. Ідентифікатор: {0}; ім’я: {1}.",
      "platformFailedToLoadWithMessageError": "Не вдалося завантажити платформу. Ідентифікатор: \"{0}\"; ім’я: \"{1}\".\r\nПомилка: {2}",
      "applicationFailedToInitializeError": "Сталася помилка під час ініціалізації програми: {0}",
      "invalidPreloadedDataError": "Неприпустимі попередньо завантажені дані.",
      "manifestNotFoundByIdError": "Не вдалося знайти маніфест для компонента з ідентифікатором {0}.",
      "manifestNotFoundError": "Не вдалося знайти маніфест для компонента з ідентифікатором {0} і версією {1}.",
      "systemConfigDisabledError": "Метод System.config() не підтримується. Укажіть конфігурацію за допомогою маніфесту.",
      "loadComponentLog": "Завантаження компонента {0} ({1}).",
      "loadComponentEndLog": "Компонент {0} ({1}) завантажено.",
      "loadComponentRetryLog": "Завантаження компонента {0} ({1}). Спроба {2} із {3}.",
      "loadComponentError": "Не вдалося завантажити компонент \"{0}\" ({1}).\r\nВихідна помилка: {2}.",
      "loadComponentMaxRetriesError": "Не вдалося завантажити компонент {0} ({1}). Кількість спроб: {2}.",
      "loadComponentDependencyError": "Не вдалося завантажити залежність компонента \"{0}\" з компонента \"{1}\" ({2}).\r\nВихідна помилка: {3}",
      "loadComponentDependencyFailoverPathError": "Не вдалося завантажити залежність компонента \"{0}\" зі шляхом відновлення після відмови \"{1}\" з компонента \"{2}\" ({3}).\r\nВихідна помилка: {4}",
      "loadPathDependencyLog": "Завантаження залежності шляхів \"{0}\" з компоненту \"{1}\" ({2})",
      "loadPathDependencyError": "Не вдалося завантажити залежність шляху \"{0}\" з компонента \"{1}\" ({2}).\r\nВихідна помилка: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Не вдалося завантажити залежність шляхів \"{0}\" з компоненту \"{1}\" ({2}) через проблему із завантаженням іншої залежності.",
      "loadEntryPointError": "Не вдалося завантажити точку входу з компонента \"{0}\" ({1}).\r\nВихідна помилка: {2}",
      "loadComponentReturnsEmptyError": "Метод loadComponent() повернув пустий об’єкт для компонента \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "Метод loadComponent() повернув об’єкт із пустою стандартною властивістю для компонента \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "Точка входу для компонента \\\"{0}\\\" ({1}) має залежність від \\\"{2}\\\", не оголошену в маніфесті.",
      "loadScriptWithStringError": "Функція loadScript не дозволяє використовувати рядок як другий параметр. Скористайтеся натомість функцією ILoadScriptOptions.",
      "tooManyManifestsError": "Для компонента {2} знайдено стільки маніфестів: {0} (версії: {1}).",
      "tooManyCompatibleVersionsError": "Для компонента {2} версії {3} знайдено стільки сумісних версій: {0} ({1}).",
      "tooManyComponentsError": "Знайдено забагато компонентів для ідентифікатора \"{0}\".",
      "noComponentFoundError": "Не вдалося знайти компонент для ідентифікатора {0}.",
      "deleteComponentLog": "Видалення компонента {0} (версія {1}) зі сховища.",
      "browserNotSupportedError": "Ця версія вашого браузера не підтримується.\r\nІнсталюйте найновішу версію браузера.",
      "ie9OrOlderNotSupportedError": "Ця сторінка не підтримує випуски Internet Explorer старше версії 10. Оновіть свій браузер.",
      "firefox43OrOlderNotSupportedError": "Ця сторінка не підтримує випуски Mozilla Firefox старше версії 44. Оновіть свій браузер.",
      "resourceNotFoundError": "Не вдалося знайти ресурс \"{0}\" у конфігурації завантаження маніфесту для компонента \"{1}\" ({2}).",
      "noFailoverPathError": "Не вдалося викликати метод resolveAddress() для компонента без шляху відновлення після відмови",
      "urlStatusLocalhostFileNotFoundError": "Не вдалося завантажити URL-адресу {3} для ресурсу \"{2}\" в компоненті {0} ({1}). Файл не знайдено на сервері.\r\nПереконайтеся, що запущено \"gulp serve\".",
      "urlStatusFileNotFoundError": "Не вдалося завантажити URL-адресу {3} для ресурсу \"{2}\" в компоненті {0} ({1}). Файл не знайдено на сервері.",
      "urlStatusForbiddenError": "Не вдалося завантажити URL-адресу {3} для ресурсу \"{2}\" в компоненті {0} ({1}). Доступ до файлу заборонено.",
      "urlStatusClientErrorError": "Не вдалося завантажити URL-адресу {3} для ресурсу \"{2}\" в компоненті {0} ({1}). Сталася помилка під час запиту файлу.",
      "urlStatusServerErrorError": "Не вдалося завантажити URL-адресу {3} для ресурсу \"{2}\" в компоненті {0} ({1}). Виникла проблема на сервері.",
      "urlStatusLocalhostNetworkErrorError": "Не вдалося завантажити URL-адресу {3} для ресурсу \"{2}\" в компоненті {0} ({1}). Сталася помилка мережі.\r\nПереконайтеся, що запущено \"gulp serve\" і що ви запускали \"gulp trust-dev-cert\".",
      "urlStatusHttpsNetworkErrorError": "Не вдалося завантажити URL-адресу {3} для ресурсу \"{2}\" в компоненті {0} ({1}). Сталася помилка мережі.\r\nМожливо, виникла проблема із сертифікатом HTTPS. Перевірте сертифікат.",
      "urlStatusNetworkErrorError": "Не вдалося завантажити URL-адресу {3} для ресурсу \"{2}\" в компоненті {0} ({1}). Сталася помилка мережі.",
      "urlStatusUndefinedError": "Не вдалося завантажити URL-адресу {3} для ресурсу \"{2}\" в компоненті {0} ({1}) через невідомі проблемі.",
      "isUndefinedValidateError": "Змінна \"{0}\" має бути визначена",
      "failedToCreateGlobalVariableError": "Не вдалося створити глобальну змінну \"{0}\" зі сценарію {1}",
      "dependencyLoadError": "Не вдалося завантажити модуль \"{0}\", тому що залежність \"{1}\" не завантажено",
      "missingPathDependencyError": "Відсутня залежність шляху \"{0}\" від компонента \"{1}\" ({2}). Наявні залежності шляху: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Сталася помилка під час завантаження сценарію налагодження. Переконайтеся, що сервер працює та що URL-адресу в параметрі \"{0}\" указано правильно.",
      "errorLoadingDebugScriptHTTP": "Сталася помилка під час завантаження сценарію налагодження. Переконайтеся, що сервер працює, що URL-адресу в параметрі \"{0}\" указано правильно та що дозволено завантаження небезпечних сценаріїв. Також радимо використовувати сертифікат розробки та виконувати сценарії налагодження через HTTPS.",
      "errorLoadingDebugScriptMalformed": "Сталася помилка під час завантаження сценарію налагодження. URL-адресу налагодження ({0}) указано неправильно.",
      "errorLoadingDebugScriptUnknown": "Сталася невідома помилка під час завантаження сценарію налагодження.",
      "errorLoadingDebugLoaderTitle": "Помилка під час завантаження завантажувача налагодження.",
      "errorLoadingDebugManifestTitle": "Помилка під час завантаження маніфестів налагодження.",
      "errorLoadingUnknownTitle": "Помилка під час завантаження сценаріїв налагодження."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Відсутня функція компонента або ініціалізатора.",
      "closeDeveloperToolsAriaLabel": "Закрити інструменти розробника."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Увага!",
      "warningLine1": "Використання цього інструмента пов’язано з потенційними загрозами безпеки, внаслідок яких інші можуть отримати доступ до ваших особистих даних Office 365 (документів, електронних листів, розмов тощо). Перш ніж продовжити, переконайтеся, що особі або організації, які попросили вас скористатися цим інструментом, можна довіряти.",
      "warningLine2": "Докладні відомості див. тут: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Сталася помилка під час завантаження маніфестів налагодження.",
      "debugManifestErrorDismissButtonText": "Закрити"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Дозволити сценарії налагодження?",
      "allowDebugLoaderTitle": "Дозволити завантажувач налагодження?",
      "allowDebugLoaderAndManifestsTitle": "Дозволити завантажувач налагодження та сценарії налагодження?",
      "debugManifestLoadingWarning": "УВАГА! Ця сторінка містить потенційно небезпечні сценарії. Якщо їх завантажити, вони можуть зашкодити вашому комп’ютеру. Продовжуйте, виключно якщо довіряєте розробнику та розумієте ризики.",
      "debugManifestLoadingWarning2": "Якщо ви не впевнені, натисніть кнопку \"{0}\".",
      "debugManifestLoadingConfirm": "Завантажити сценарії налагодження",
      "debugManifestLoadingCancel": "Не завантажувати сценарії налагодження",
      "debugManifestLoadingCalloutText": "Якщо ви не знаєте, що робити, натисніть цю кнопку."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Завантаження…",
      "developerToolsTabLoadingUnknownError": "Сталася невідома помилка під час завантаження модуля інструментів розробника."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Маніфести",
      "noManifestSelected": "Маніфест не вибрано"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Продуктивність",
      "ErrorAccessingPerfDataErrorMessage": "Не вдалось отримати дані про продуктивність: об’єкт невизначений або має Null-значення.",
      "ErrorAccessingRedirectDataErrorMessage": "Виникла проблема під час доступу до даних про продуктивність переспрямування HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Під час обробки отриманих даних про затримку виявлено помилку.",
      "ErrorParsingApiDataErrorMessage": "Під час обробки даних API виявлено помилку.",
      "UnkownPerformanceDataErrorMessage": "Сталася невідома помилка: {0}",
      "DefaultWebPartName": "Веб-частина",
      "ServerResponseLabel": "Відповідь сервера",
      "ApplicationInitializationLabel": "Ініціалізація програми",
      "ScriptFetchEvalLabel": "Отримання та оцінювання сценаріїв",
      "SpLoaderStartLabel": "Ініціалізація SPFx",
      "PageRenderLabel": "Відтворення сторінки",
      "LeftNavRenderLabel": "Відтворення лівої панелі переходів",
      "CanvasRenderLabel": "Відтворення полотна",
      "LayoutRenderLabel": "Відтворення макета",
      "RedirectResponseLabel": "Відповідь переспрямування",
      "AppLoadLabel": "Завантаження програми",
      "RenderWebPartsLabel": "Відтворення веб-частин",
      "TotalRenderTimeLabel": "Підсумок",
      "GeneralErrorMessage": "На жаль, сталася помилка під час отримання даних про продуктивність.",
      "ErrorMessagePrefix": "Повідомлення про помилку: {0}",
      "PerformanceDataHint": "Примітка. Додавши або видаливши веб-частину, оновіть сторінку, щоб переглянути оновлені дані про продуктивність.",
      "ModulesLoadedLegendLabel": "Завантажені модулі",
      "InitializationLegendLabel": "Ініціалізація",
      "RenderTimeLegendLabel": "Час відтворення",
      "InitializationTimeLabel": "Час ініціалізації",
      "ModuleLoadingTimeLabel": "Час завантаження модуля",
      "ModuleLazyLoadingDelayLabel": "Затримка завантаження модуля",
      "DataFetchTimeLabel": "Час отримання даних",
      "DataFetchLegendLabel": "Отримання даних",
      "ItemsColumnHeader": "Елементи",
      "DurationColumnHeader": "Тривалість",
      "MillisecondsUnitLabel": "{0} мс",
      "NAPlaceholder": "Н/д"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Трасування",
      "EmptyTraceData": "Трасування не завантажено.",
      "ExportCSVButtonLabel": "Експортувати у CSV",
      "LevelHeaderLabel": "Рівень",
      "MessageHeaderLabel": "Повідомлення",
      "ScopeHeaderLabel": "Область",
      "SourceHeaderLabel": "Джерело",
      "TimestampHeaderLabel": "Позначка часу",
      "TimestampFormat": "{2}.{1}.{0}, {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Виникла проблема під час отримання доступу до даних трасування."
    }
  };

  strings.default = strings;
  return strings;
});
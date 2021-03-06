define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Не удается загрузить приложение на этой странице. Используйте кнопку \"Назад\" в браузере, чтобы повторить попытку. Если проблема сохранится, обратитесь к администратору сайта и предоставьте данные из раздела \"Технические подробности\".",
      "platformFailedToLoadError": "Не удалось загрузить платформу. Идентификатор: {0}; имя: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Не удалось загрузить платформу. ИД: {0}, имя: \"{1}\".\r\nОшибка: {2}",
      "applicationFailedToInitializeError": "Сбой инициализации приложения. Ошибка: {0}",
      "invalidPreloadedDataError": "Предварительно загруженные данные недействительны.",
      "manifestNotFoundByIdError": "Манифест для компонента с идентификатором {0} не найден.",
      "manifestNotFoundError": "Манифест для компонента с идентификатором \"{0}\" и версией \"{1}\" не найден.",
      "systemConfigDisabledError": "System.config() не поддерживается. Укажите конфигурацию с помощью манифеста.",
      "loadComponentLog": "Загрузка компонента {0} ({1}).",
      "loadComponentEndLog": "Компонент {0} ({1}) загружен.",
      "loadComponentRetryLog": "Загрузка компонента {0} ({1}). Попытка {2} из {3}.",
      "loadComponentError": "Сбой загрузки компонента \"{0}\" ({1}).\r\nИсходная ошибка: {2}",
      "loadComponentMaxRetriesError": "Не удалось загрузить компонент {0} ({1}). Предпринято попыток: {2}.",
      "loadComponentDependencyError": "Не удалось загрузить зависимость компонента \"{0}\" от компонента \"{1}\" ({2}).\r\nИсходная ошибка: {3}",
      "loadComponentDependencyFailoverPathError": "Не удалось загрузить зависимость компонента {0} с путем отработки отказа {1} из компонента {2} ({3}).\r\nИсходная ошибка: {4}",
      "loadPathDependencyLog": "Загрузка зависимости пути \"{0}\" из компонента {1} ({2})",
      "loadPathDependencyError": "Не удалось загрузить зависимость пути {0} из компонента {1} ({2}).\r\nИсходная ошибка: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Не удалось загрузить зависимость пути \"{0}\" из компонента {1} ({2}) из-за сбоя загрузки другой зависимости.",
      "loadEntryPointError": "Не удалось загрузить точку входа из компонента {0} ({1}).\r\nИсходная ошибка: {2}",
      "loadComponentReturnsEmptyError": "Метод loadComponent() вернул пустой объект для компонента \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "Метод loadComponent() вернул объект с пустым свойством по умолчанию для компонента \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "Точка входа для компонента \"{0}\" ({1}) имеет зависимость от \"{2}\", не объявленную в манифесте.",
      "loadScriptWithStringError": "Функция loadScript не допускает строку как второй параметр. Вместо этого следует используйте ILoadScriptOptions.",
      "tooManyManifestsError": "Найдено манифестов (версий {1}) для компонента \"{2}\": {0}.",
      "tooManyCompatibleVersionsError": "Найдено совместимых версий ({1}) для компонента \"{2}\" версии \"{3}\": {0}.",
      "tooManyComponentsError": "Найдено слишком много компонентов для идентификатора \"{0}\".",
      "noComponentFoundError": "Не найден компонент для идентификатора {0}.",
      "deleteComponentLog": "Удаление компонента {0} версии {1} из хранилища.",
      "browserNotSupportedError": "Текущая версия вашего браузера не поддерживается.\r\nОбновите браузер до последней версии.",
      "ie9OrOlderNotSupportedError": "Эта страница не поддерживает выпуски Internet Explorer версии ниже 10. Обновите браузер.",
      "firefox43OrOlderNotSupportedError": "Эта страница не поддерживает выпуски Mozilla Firefox версии ниже 44. Обновите браузер.",
      "resourceNotFoundError": "Ресурс \"{0}\" не найден в конфигурации загрузки манифеста для компонента \"{1}\" ({2}).",
      "noFailoverPathError": "Не удается вызвать метод resolveAddress() для компонента без пути отработки отказа",
      "urlStatusLocalhostFileNotFoundError": "Не удалось загрузить URL-адрес \"{3}\" для ресурса \"{2}\" в компоненте \"{0}\" ({1}). Файл не найден на сервере.\r\nУбедитесь, что вы используете \"gulp serve\".",
      "urlStatusFileNotFoundError": "Не удалось загрузить URL-адрес \"{3}\" для ресурса \"{2}\" в компоненте \"{0}\" ({1}). Файл не найден на сервере.",
      "urlStatusForbiddenError": "Не удалось загрузить URL-адрес \"{3}\" для ресурса \"{2}\" в компоненте \"{0}\" ({1}). Доступ к файлу запрещен.",
      "urlStatusClientErrorError": "Не удалось загрузить URL-адрес \"{3}\" для ресурса \"{2}\" в компоненте \"{0}\" ({1}). Произошла ошибка при запросе файла.",
      "urlStatusServerErrorError": "Не удалось загрузить URL-адрес \"{3}\" для ресурса \"{2}\" в компоненте \"{0}\" ({1}). На сервере произошла ошибка.",
      "urlStatusLocalhostNetworkErrorError": "Не удалось загрузить URL-адрес {3} для ресурса {2} в компоненте {0} ({1}). Произошла ошибка сети.\r\nУбедитесь, что вы выполняете команду \"gulp serve\" и уже выполнили команду \"gulp trust-dev-cert\".",
      "urlStatusHttpsNetworkErrorError": "Не удалось загрузить URL-адрес \"{3}\" для ресурса \"{2}\" в компоненте \"{0}\" ({1}). Произошла ошибка сети.\r\nЭто может быть проблема с сертификатом HTTPS. Проверьте сертификат.",
      "urlStatusNetworkErrorError": "Не удалось загрузить URL-адрес \"{3}\" для ресурса \"{2}\" в компоненте \"{0}\" ({1}). Произошла ошибка сети.",
      "urlStatusUndefinedError": "Не удалось загрузить URL-адрес \"{3}\" для ресурса \"{2}\" в компоненте \"{0}\" ({1}) из-за неизвестной ошибки.",
      "isUndefinedValidateError": "Значение переменной {0} не должно быть неопределенным",
      "failedToCreateGlobalVariableError": "Не удалось создать глобальную переменную {0} в сценарии {1}",
      "dependencyLoadError": "Не удалось загрузить модуль \"{0}\", так как не была загружена зависимость {1}",
      "missingPathDependencyError": "Отсутствует зависимость пути \"{0}\" из компонента \"{1}\" ({2}). Существующие зависимости путей: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Ошибка при загрузке сценария отладки. Убедитесь, что сервер запущен и параметр {0} содержит правильный URL-адрес.",
      "errorLoadingDebugScriptHTTP": "Ошибка при загрузке сценария отладки. Убедитесь, что сервер запущен, параметр {0} содержит правильный URL-адрес и разрешена загрузка небезопасных сценариев. Также рассмотрите возможность использования сертификата разработки и обслуживания сценариев отладки по протоколу HTTPS.",
      "errorLoadingDebugScriptMalformed": "Ошибка при загрузке сценария отладки. Вероятно, URL-адрес отладки ({0}) имеет неправильный формат.",
      "errorLoadingDebugScriptUnknown": "Неизвестная ошибка при загрузке сценария отладки.",
      "errorLoadingDebugLoaderTitle": "Ошибка при загрузке загрузчика отладки.",
      "errorLoadingDebugManifestTitle": "Ошибка при загрузке манифестов отладки.",
      "errorLoadingUnknownTitle": "Ошибка при загрузке сценариев отладки."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Отсутствует компонент или функция инициализатора.",
      "closeDeveloperToolsAriaLabel": "Закрыть средства разработчика."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Предупреждение.",
      "warningLine1": "Использование этого средства сопряжено с потенциальными угрозами безопасности ваших личных данных в Office 365 (документов, почты, бесед и т. д.). К этим данным могут получить доступ другие люди. Продолжайте, только если вы доверяете человеку или организации, которые попросили вас воспользоваться этим средством.",
      "warningLine2": "Подробнее: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Произошла ошибка при загрузке манифестов отладки.",
      "debugManifestErrorDismissButtonText": "Закрыть"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Разрешить сценарии отладки?",
      "allowDebugLoaderTitle": "Разрешить загрузчик отладки?",
      "allowDebugLoaderAndManifestsTitle": "Разрешить загрузчик отладки и сценарии отладки?",
      "debugManifestLoadingWarning": "ПРЕДУПРЕЖДЕНИЕ. Эта страница содержит небезопасные сценарии, которые в результате загрузки могут нанести вред компьютеру. Продолжайте работу, только если доверяете разработчику и осознаете риски.",
      "debugManifestLoadingWarning2": "Если вы не уверены, нажмите кнопку \"{0}\".",
      "debugManifestLoadingConfirm": "Загрузить сценарии отладки",
      "debugManifestLoadingCancel": "Не загружать сценарии отладки",
      "debugManifestLoadingCalloutText": "Если вы не знаете, что делать, щелкните здесь."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Загрузка...",
      "developerToolsTabLoadingUnknownError": "Неизвестная ошибка при загрузке модуля средств разработчика."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Манифесты",
      "noManifestSelected": "Манифест не выбран"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Производительность",
      "ErrorAccessingPerfDataErrorMessage": "Не удалось получить данные о производительности: объект имеет нулевое значение или не определен.",
      "ErrorAccessingRedirectDataErrorMessage": "При доступе к данным о производительности перенаправления HTTP возникла проблема.",
      "ErrorParsingPercievedLatencyErrorMessage": "При анализе в полученных данных о задержках обнаружена ошибка.",
      "ErrorParsingApiDataErrorMessage": "При анализе в данных API обнаружена ошибка.",
      "UnkownPerformanceDataErrorMessage": "Произошла неизвестная ошибка: {0}",
      "DefaultWebPartName": "Веб-часть",
      "ServerResponseLabel": "Отклик сервера",
      "ApplicationInitializationLabel": "Инициализация приложения",
      "ScriptFetchEvalLabel": "Получение и оценка сценариев",
      "SpLoaderStartLabel": "Инициализация SPFx",
      "PageRenderLabel": "Отрисовка страницы",
      "LeftNavRenderLabel": "Отрисовка левой области навигации",
      "CanvasRenderLabel": "Отрисовка холста",
      "LayoutRenderLabel": "Отрисовка макета",
      "RedirectResponseLabel": "Отклик перенаправления",
      "AppLoadLabel": "Загрузка приложения",
      "RenderWebPartsLabel": "Отрисовка веб-частей",
      "TotalRenderTimeLabel": "Всего",
      "GeneralErrorMessage": "К сожалению, при получении данных о производительности что-то пошло не так.",
      "ErrorMessagePrefix": "Сообщение об ошибке: {0}",
      "PerformanceDataHint": "Примечание. После добавления или удаления веб-части обновите страницу, чтобы увидеть обновленные данные производительности.",
      "ModulesLoadedLegendLabel": "Модули загружены",
      "InitializationLegendLabel": "Инициализация",
      "RenderTimeLegendLabel": "Время отрисовки",
      "InitializationTimeLabel": "Время инициализации",
      "ModuleLoadingTimeLabel": "Время загрузки модуля",
      "ModuleLazyLoadingDelayLabel": "Задержка загрузки модулей",
      "DataFetchTimeLabel": "Время получения данных",
      "DataFetchLegendLabel": "Получение данных",
      "ItemsColumnHeader": "Элементы",
      "DurationColumnHeader": "Длительность",
      "MillisecondsUnitLabel": "{0} мс",
      "NAPlaceholder": "Н/Д"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Трассировка",
      "EmptyTraceData": "Трассировки не загружены.",
      "ExportCSVButtonLabel": "Экспорт CSV",
      "LevelHeaderLabel": "Уровень",
      "MessageHeaderLabel": "Сообщение",
      "ScopeHeaderLabel": "Область",
      "SourceHeaderLabel": "Источник",
      "TimestampHeaderLabel": "Метка времени",
      "TimestampFormat": "{2}.{1}.{0} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Возникла проблема при доступе к данным трассировки."
    }
  };

  strings.default = strings;
  return strings;
});
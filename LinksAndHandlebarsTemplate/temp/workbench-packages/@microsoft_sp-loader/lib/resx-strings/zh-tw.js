define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "無法在此頁面上載入應用程式。您可以使用瀏覽器的 [上一頁] 按鈕以重試。如果問題持續發生，請連絡網站的系統管理員，並提供技術詳細資料給他們。",
      "platformFailedToLoadError": "平台無法載入。識別碼: \"{0}\"，名稱: \"{1}\"",
      "platformFailedToLoadWithMessageError": "平台無法載入。識別碼: \"{0}\"，名稱: \"{1}\"。\r\n錯誤: {2}",
      "applicationFailedToInitializeError": "初始化應用程式時發生錯誤。錯誤: {0}",
      "invalidPreloadedDataError": "預載資料無效。",
      "manifestNotFoundByIdError": "找不到元件識別碼 \"{0}\" 的資訊清單。",
      "manifestNotFoundError": "找不到元件識別碼 \"{0}\" 版本 \"{1}\" 的資訊清單。",
      "systemConfigDisabledError": "不支援 System.config()。請使用資訊清單以指定組態。",
      "loadComponentLog": "正在載入元件 \"{0}\" ({1})。",
      "loadComponentEndLog": "元件 \"{0}\" ({1}) 已載入。",
      "loadComponentRetryLog": "正在載入元件 \"{0}\" ({1})。嘗試次數 {2}/{3}。",
      "loadComponentError": "無法載入元件 \"{0}\" ({1})。\r\n原始錯誤: {2}",
      "loadComponentMaxRetriesError": "嘗試載入元件 \"{0}\" ({1}) 已經失敗 {2} 次。",
      "loadComponentDependencyError": "無法從元件 \"{1}\" ({2}) 載入元件相依性 \"{0}\"。\r\n原始錯誤: {3}",
      "loadComponentDependencyFailoverPathError": "無法從元件 \"{2}\" ({3}) 載入容錯移轉路徑為 \"{1}\" 的元件相依性 \"{0}\"。\r\n原始錯誤: {4}",
      "loadPathDependencyLog": "正在從元件 \"{1}\" ({2}) 載入路徑相依性 \"{0}\"",
      "loadPathDependencyError": "無法從元件 \"{1}\" ({2}) 載入路徑相依性 \"{0}\"。\r\n原始錯誤: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "無法從元件 \"{1}\" ({2}) 載入路徑相依性 \"{0}\"，因為另一個相依性載入失敗。",
      "loadEntryPointError": "無法從元件 \"{0}\" ({1}) 載入進入點。\r\n原始錯誤: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() 已傳回元件 \"{0}\" ({1}) 的空物件。",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() 已對元件 \"{0}\" ({1}) 傳回具有空預設屬性的物件。",
      "moduleHasUndeclaredDependencyError": "元件 \"{0}\" ({1}) 的進入點在 \"{2}\" 上有相依性，但並未在資訊清單中宣告。",
      "loadScriptWithStringError": "loadScript 函數不允許使用字串做為第 2 個參數。請改用 ILoadScriptOptions。",
      "tooManyManifestsError": "找到 {0} 個元件 \"{2}\" 的資訊清單 (版本 {1})。",
      "tooManyCompatibleVersionsError": "找到 {0} 個元件 \"{2}\" 版本 \"{3}\" 的相容版本 ({1})。",
      "tooManyComponentsError": "找到太多識別碼為 \"{0}\" 的元件。",
      "noComponentFoundError": "找不到識別碼為 \"{0}\" 的元件。",
      "deleteComponentLog": "從存放區刪除元件 \"{0}\" 版本 \"{1}\"。",
      "browserNotSupportedError": "不支援這個版本的瀏覽器。\r\n請將您的瀏覽器更新到最新版本。",
      "ie9OrOlderNotSupportedError": "此頁面不支援 Internet Explorer 10 以下的版本。請更新您的網頁瀏覽器。",
      "firefox43OrOlderNotSupportedError": "此頁面不支援比 Mozilla Firefox 版本 44 還早的版本。請更新您的網頁瀏覽器。",
      "resourceNotFoundError": "在元件 \"{1}\" ({2}) 之資訊清單的載入器設定中找不到資源 \"{0}\"。",
      "noFailoverPathError": "無法在不具容錯移轉路徑的元件上呼叫 resolveAddress()",
      "urlStatusLocalhostFileNotFoundError": "無法載入元件 '{0}' ({1}) 中資源 '{2}' 的 URL '{3}'。伺服器中找不到檔案。\r\n請確定您正在執行 'gulp serve'。",
      "urlStatusFileNotFoundError": "無法載入元件 '{0}' ({1}) 中資源 '{2}' 的 URL '{3}'。伺服器中找不到檔案。",
      "urlStatusForbiddenError": "無法載入元件 '{0}' ({1}) 中資源 '{2}' 的 URL '{3}'。禁止存取該檔案。",
      "urlStatusClientErrorError": "無法載入元件 '{0}' ({1}) 中資源 '{2}' 的 URL '{3}'。要求檔案時發生錯誤。",
      "urlStatusServerErrorError": "無法載入元件 '{0}' ({1}) 中資源 '{2}' 的 URL '{3}'。伺服器發生問題。",
      "urlStatusLocalhostNetworkErrorError": "無法載入元件 '{0}' ({1}) 中資源 '{2}' 的 URL '{3}'。發生網路問題。\r\n請確定您正在執行 'gulp serve' 且已經執行 'gulp trust-dev-cert'。",
      "urlStatusHttpsNetworkErrorError": "無法載入元件 '{0}' ({1}) 中資源 '{2}' 的 URL '{3}'。發生網路問題。\r\n這可能是 HTTPS 憑證發生問題。請確定您使用正確的憑證。",
      "urlStatusNetworkErrorError": "無法載入元件 '{0}' ({1}) 中資源 '{2}' 的 URL '{3}'。發生網路問題。",
      "urlStatusUndefinedError": "無法載入元件 '{0}' ({1}) 中資源 '{2}' 的 URL '{3}'，因為發生未知的問題。",
      "isUndefinedValidateError": "不可未定義 \"{0}\" 的值",
      "failedToCreateGlobalVariableError": "無法從指令碼 \"{1}\" 建立全域變數 \"{0}\"",
      "dependencyLoadError": "無法載入模組 '{0}'，因為相依性 {1} 未載入",
      "missingPathDependencyError": "遺漏來自元件 \"{1}\" ({2}) 的路徑相依性\"{0}\"。現有的路徑相依性: {3}",
      "listSeparator": "、"
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "載入偵錯指令碼時發生錯誤。請確定伺服器正在執行且 \"{0}\" 參數 URL 正確無誤。",
      "errorLoadingDebugScriptHTTP": "載入偵錯指令碼時發生錯誤。請確定伺服器正在執行、\"{0}\" 參數 URL 正確無誤，且允許載入不安全的指令碼。另請考慮使用開發憑證和透過 HTTPS 提供偵錯指令碼。",
      "errorLoadingDebugScriptMalformed": "載入偵錯指令碼時發生錯誤。偵錯 URL ({0}) 的格式似乎不正確。",
      "errorLoadingDebugScriptUnknown": "載入偵錯指令碼時發生未知錯誤。",
      "errorLoadingDebugLoaderTitle": "載入偵錯載入器時發生錯誤。",
      "errorLoadingDebugManifestTitle": "載入偵錯資訊清單時發生錯誤。",
      "errorLoadingUnknownTitle": "載入偵錯指令碼時發生錯誤。"
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "遺漏元件或初始設定式函數。",
      "closeDeveloperToolsAriaLabel": "關閉開發人員工具。"
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "警告!",
      "warningLine1": "使用此工具會使您暴露在潛在安全性威脅之中，這可能會導致其他人獲得您個人 Office 365 資料 (文件、電子郵件、交談等等) 的存取權。請先確定您信任要求您存取此工具的人員或組織，然後再繼續。",
      "warningLine2": "在這裡深入了解: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "載入偵錯資訊清單時發生錯誤。",
      "debugManifestErrorDismissButtonText": "關閉"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "是否允許偵錯指令碼?",
      "allowDebugLoaderTitle": "是否允許偵錯載入器?",
      "allowDebugLoaderAndManifestsTitle": "是否允許偵錯載入器和偵錯指令碼?",
      "debugManifestLoadingWarning": "警告: 此頁面包含不安全的指令碼，如果載入則可能會傷害您的電腦。除非您信任開發人員並了解相關風險，否則請勿繼續執行。",
      "debugManifestLoadingWarning2": "若您無法確定，請按一下 [{0}]。",
      "debugManifestLoadingConfirm": "載入偵錯指令碼",
      "debugManifestLoadingCancel": "不載入偵錯指令碼",
      "debugManifestLoadingCalloutText": "如果您不知道該怎麼做，請按一下這裡。"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "正在載入...",
      "developerToolsTabLoadingUnknownError": "載入開發人員工具模組時發生未知的錯誤。"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "資訊清單",
      "noManifestSelected": "未選取資訊清單"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "效能",
      "ErrorAccessingPerfDataErrorMessage": "無法擷取效能資料: 物件為 Null 或未定義。",
      "ErrorAccessingRedirectDataErrorMessage": "存取 HTTP 重新導向效能資料時發生問題。",
      "ErrorParsingPercievedLatencyErrorMessage": "剖析認知延遲資料時發現錯誤。",
      "ErrorParsingApiDataErrorMessage": "剖析 API 資料時發現錯誤。",
      "UnkownPerformanceDataErrorMessage": "發生未知的錯誤: {0}",
      "DefaultWebPartName": "網頁組件",
      "ServerResponseLabel": "伺服器回應",
      "ApplicationInitializationLabel": "應用程式初始化",
      "ScriptFetchEvalLabel": "指令碼擷取和評估",
      "SpLoaderStartLabel": "SPFx 初始化",
      "PageRenderLabel": "網頁轉譯",
      "LeftNavRenderLabel": "左方瀏覽轉譯",
      "CanvasRenderLabel": "畫布轉譯",
      "LayoutRenderLabel": "版面配置轉譯",
      "RedirectResponseLabel": "重新導向回應",
      "AppLoadLabel": "應用程式載入",
      "RenderWebPartsLabel": "網頁組件轉譯",
      "TotalRenderTimeLabel": "總計",
      "GeneralErrorMessage": "很抱歉，擷取效能資料時發生錯誤。",
      "ErrorMessagePrefix": "錯誤訊息: {0}",
      "PerformanceDataHint": "注意: 新增或移除網頁組件後，請重新整理頁面以查看更新後的效能資料。",
      "ModulesLoadedLegendLabel": "已載入模組",
      "InitializationLegendLabel": "初始化",
      "RenderTimeLegendLabel": "轉譯時間",
      "InitializationTimeLabel": "初始化時間",
      "ModuleLoadingTimeLabel": "模組載入時間",
      "ModuleLazyLoadingDelayLabel": "模組載入延遲",
      "DataFetchTimeLabel": "資料擷取時間",
      "DataFetchLegendLabel": "資料擷取",
      "ItemsColumnHeader": "項目",
      "DurationColumnHeader": "持續時間",
      "MillisecondsUnitLabel": "{0} 毫秒",
      "NAPlaceholder": "無"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "追蹤",
      "EmptyTraceData": "未載入任何追蹤。",
      "ExportCSVButtonLabel": "匯出 CSV",
      "LevelHeaderLabel": "層級",
      "MessageHeaderLabel": "訊息",
      "ScopeHeaderLabel": "範圍",
      "SourceHeaderLabel": "來源",
      "TimestampHeaderLabel": "時間戳記",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "存取追蹤資料時發生問題。"
    }
  };

  strings.default = strings;
  return strings;
});
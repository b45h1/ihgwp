define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "无法加载此页上的应用程序。请使用浏览器的“后退”按钮重试。如果问题仍然存在，请联系网站管理员并向其提供“技术详细信息”中的信息。",
      "platformFailedToLoadError": "平台加载失败。ID:“{0}”，名称:“{1}”",
      "platformFailedToLoadWithMessageError": "未能加载平台。ID:“{0}”名称:“{1}”。\r\n错误: {2}",
      "applicationFailedToInitializeError": "初始化应用程序时出错。错误: {0}",
      "invalidPreloadedDataError": "预加载的数据无效。",
      "manifestNotFoundByIdError": "找不到组件 ID“{0}”的清单。",
      "manifestNotFoundError": "无法为组件 ID “{0}”和版本“{1}”找到清单。",
      "systemConfigDisabledError": "不支持 System.config()。请使用清单来指定配置。",
      "loadComponentLog": "正在加载组件“{0}”({1})。",
      "loadComponentEndLog": "已加载组件“{0}”({1})。",
      "loadComponentRetryLog": "正在加载组件“{0}”({1})。第 {2} 次尝试(可尝试 {3} 次)。",
      "loadComponentError": "未能加载组件“{0}”({1})。\r\n原始错误: {2}",
      "loadComponentMaxRetriesError": "{2} 次尝试加载组件“{0}”({1})均未成功。",
      "loadComponentDependencyError": "未能加载组件“{1}”({2})中的组件依赖项“{0}”。\r\n原始错误: {3}",
      "loadComponentDependencyFailoverPathError": "未能通过故障转移路径“{1}”从组件“{2}”({3})加载组件依赖项“{0}”。\r\n原始错误: {4}",
      "loadPathDependencyLog": "正在从组件“{1}”({2})加载路径依赖项“{0}”",
      "loadPathDependencyError": "未能从组件“{1}”({2})加载路径依赖项“{0}”。\r\n原始错误: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "无法从组件“{1}”({2})加载路径依赖项“{0}”，因为另一个依赖项加载失败。",
      "loadEntryPointError": "未能从组件“{0}”({1})加载入口点。\r\n原始错误: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() 已返回组件 \"{0}\" ({1})的空对象。",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() 已返回组件 \"{0}\" ({1})的具有空默认属性的对象。",
      "moduleHasUndeclaredDependencyError": "组件“{0}”({1})的入口点在“{2}”上有依赖项，该依赖项未在清单中声明。",
      "loadScriptWithStringError": "loadScript 函数不允许作为第二个参数的字符串。请改为使用 ILoadScriptOptions。",
      "tooManyManifestsError": "为组件“{2}”找到了 {0} 个清单(版本 {1})。",
      "tooManyCompatibleVersionsError": "为版本“{3}”的组件“{2}”找到了 {0} 个兼容版本清单({1})。",
      "tooManyComponentsError": "找到太多 ID 为“{0}”的组件。",
      "noComponentFoundError": "未找到 ID 为“{0}”的组件。",
      "deleteComponentLog": "将从存储区删除组件“{0}”版本“{1}”。",
      "browserNotSupportedError": "不支持此版本的浏览器。\r\n请更新至最新版本的浏览器。",
      "ie9OrOlderNotSupportedError": "此页面不支持早于版本 10 的 Internet Explorer 版本。请更新 Web 浏览器。",
      "firefox43OrOlderNotSupportedError": "此页面不支持早于版本 44 的 Mozilla Firefox 版本。请更新 Web 浏览器。",
      "resourceNotFoundError": "未在清单的加载程序配置中找到组件 \"{1}\" ({2}) 的资源 \"{0}\"。",
      "noFailoverPathError": "不能在没有故障转移路径的组件上调用 resolveAddress()",
      "urlStatusLocalhostFileNotFoundError": "未能加载组件“{0}”({1})资源“{2}”的 URL“{3}”。服务器中未找到该文件。\r\n请确保正在运行 \"gulp serve\"。",
      "urlStatusFileNotFoundError": "未能加载组件“{0}”({1})资源“{2}”的 URL“{3}”。服务器中未找到该文件。",
      "urlStatusForbiddenError": "未能加载组件“{0}”({1})资源“{2}”的 URL“{3}”。禁止访问该文件。",
      "urlStatusClientErrorError": "未能加载组件“{0}”({1})资源“{2}”的 URL“{3}”。请求文件时遇到问题。",
      "urlStatusServerErrorError": "未能加载组件“{0}”({1})资源“{2}”的 URL“{3}”。服务器中存在问题。",
      "urlStatusLocalhostNetworkErrorError": "未能加载组件“{0}”({1})资源“{2}”的 URL“{3}”。遇到了网络问题。\r\n请确保正在运行 \"gulp serve\" 且已运行 \"gulp trust-dev-cert\"。",
      "urlStatusHttpsNetworkErrorError": "未能加载组件“{0}”({1})资源“{2}”的 URL“{3}”。遇到了网络问题。\r\n可能是 HTTPS 证书问题。请确保拥有正确的证书。",
      "urlStatusNetworkErrorError": "未能加载组件“{0}”({1})资源“{2}”的 URL“{3}”。遇到了网络问题。",
      "urlStatusUndefinedError": "由于未知问题，未能加载组件“{0}”({1})资源“{2}”的 URL“{3}”。",
      "isUndefinedValidateError": "必须定义“{0}”的值",
      "failedToCreateGlobalVariableError": "未能从脚本“{1}”创建全局变量“{0}”",
      "dependencyLoadError": "未能加载模块“{0}”，因为未加载依赖项 {1}",
      "missingPathDependencyError": "组件“{1}”({2})缺少路径依赖项“{0}”。现有路径依赖项: {3}",
      "listSeparator": "、"
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "加载调试脚本时出错。请确保服务器正在运行且“{0}”参数 URL 正确。",
      "errorLoadingDebugScriptHTTP": "加载调试脚本时出错。请确保服务器正在运行，“{0}”参数 URL 正确，且允许加载不安全的脚本。同时考虑使用开发证书并通过 HTTPS 处理调试脚本。",
      "errorLoadingDebugScriptMalformed": "加载调试脚本时出错。调试 URL ({0})似乎格式错误。",
      "errorLoadingDebugScriptUnknown": "加载调试脚本时出现未知错误。",
      "errorLoadingDebugLoaderTitle": "加载调试加载程序时出错。",
      "errorLoadingDebugManifestTitle": "加载调试清单时出错。",
      "errorLoadingUnknownTitle": "加载调试脚本时出错。"
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "缺少组件或初始值设定项函数。",
      "closeDeveloperToolsAriaLabel": "关闭开发人员工具。"
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "警告!",
      "warningLine1": "使用此工具会让你面临潜在的安全威胁，可能导致其他人访问你的个人 Office 365 数据(文档、电子邮件、对话等)。请确保你信任请你使用此工具的人员或组织，再继续操作。",
      "warningLine2": "在此了解详细信息: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "加载调试清单时出错。",
      "debugManifestErrorDismissButtonText": "忽略"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "允许使用调试脚本?",
      "allowDebugLoaderTitle": "是否允许调试加载程序?",
      "allowDebugLoaderAndManifestsTitle": "是否允许调试加载程序和调试脚本?",
      "debugManifestLoadingWarning": "警告: 此页面包含不安全的脚本，加载这些脚本可能会对你的计算机造成危害。如果你不信任此开发者并且不了解相关风险，请不要继续。",
      "debugManifestLoadingWarning2": "如果不确定的话，请单击 {0}。",
      "debugManifestLoadingConfirm": "加载调试脚本",
      "debugManifestLoadingCancel": "不加载调试脚本",
      "debugManifestLoadingCalloutText": "如果不知道如何操作，请单击此处。"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "正在加载...",
      "developerToolsTabLoadingUnknownError": "加载开发人员工具模块时出现未知错误。"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "清单",
      "noManifestSelected": "未选择任何清单"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "性能",
      "ErrorAccessingPerfDataErrorMessage": "无法检索性能数据: 对象为 null 或未定义。",
      "ErrorAccessingRedirectDataErrorMessage": "访问 HTTP 重定向性能数据时出错。",
      "ErrorParsingPercievedLatencyErrorMessage": "分析感知到的延迟数据时捕获到错误。",
      "ErrorParsingApiDataErrorMessage": "分析 API 数据时捕获到错误。",
      "UnkownPerformanceDataErrorMessage": "发生未知错误: {0}",
      "DefaultWebPartName": "Web 部件",
      "ServerResponseLabel": "服务器响应",
      "ApplicationInitializationLabel": "应用程序初始化",
      "ScriptFetchEvalLabel": "脚本提取与评估",
      "SpLoaderStartLabel": "SPFx 初始化",
      "PageRenderLabel": "页面呈现",
      "LeftNavRenderLabel": "左侧导航呈现",
      "CanvasRenderLabel": "画布呈现",
      "LayoutRenderLabel": "布局呈现",
      "RedirectResponseLabel": "重定向响应",
      "AppLoadLabel": "应用程序负载",
      "RenderWebPartsLabel": "Web 部件呈现",
      "TotalRenderTimeLabel": "总计",
      "GeneralErrorMessage": "很抱歉，检索性能数据时出错。",
      "ErrorMessagePrefix": "错误消息: {0}",
      "PerformanceDataHint": "注意: 添加或删除 Web 部件后，刷新页面可显示更新后的性能数据。",
      "ModulesLoadedLegendLabel": "加载的模块",
      "InitializationLegendLabel": "初始化",
      "RenderTimeLegendLabel": "呈现时间",
      "InitializationTimeLabel": "初始化时间",
      "ModuleLoadingTimeLabel": "模块加载时间",
      "ModuleLazyLoadingDelayLabel": "模块加载延迟",
      "DataFetchTimeLabel": "数据提取时间",
      "DataFetchLegendLabel": "数据提取",
      "ItemsColumnHeader": "项目",
      "DurationColumnHeader": "持续时间",
      "MillisecondsUnitLabel": "{0} 毫秒",
      "NAPlaceholder": "N/A"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "跟踪",
      "EmptyTraceData": "未加载跟踪。",
      "ExportCSVButtonLabel": "导出 CSV",
      "LevelHeaderLabel": "级别",
      "MessageHeaderLabel": "消息",
      "ScopeHeaderLabel": "范围",
      "SourceHeaderLabel": "源",
      "TimestampHeaderLabel": "时间戳",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "访问跟踪数据时出错。"
    }
  };

  strings.default = strings;
  return strings;
});
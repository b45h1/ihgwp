define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "이 페이지에서 응용 프로그램을 로드할 수 없습니다. 다시 시도하려면 브라우저의 [뒤로] 단추를 사용하세요. 문제가 지속될 경우 사이트의 관리자에게 연락하고 [기술 세부 사항]의 정보를 제공하세요.",
      "platformFailedToLoadError": "플랫폼을 로드하지 못했습니다. ID: \"{0}\", 이름: \"{1}\"",
      "platformFailedToLoadWithMessageError": "플랫폼을 로드하지 못했습니다. ID: \"{0}\", 이름: \"{1}\".\r\n오류: {2}",
      "applicationFailedToInitializeError": "응용 프로그램을 초기화하는 중 오류가 발생했습니다. 오류: {0}",
      "invalidPreloadedDataError": "미리 로드된 데이터가 잘못되었습니다.",
      "manifestNotFoundByIdError": "구성 요소 ID \"{0}\"에 대한 매니페스트를 찾을 수 없습니다.",
      "manifestNotFoundError": "구성 요소 ID \"{0}\" 및 버전 \"{1}\"에 대한 매니페스트를 찾을 수 없습니다.",
      "systemConfigDisabledError": "System.config()가 지원되지 않습니다. 구성을 지정하려면 매니페스트를 사용하세요.",
      "loadComponentLog": "구성 요소 \"{0}\"({1})을(를) 로드하는 중입니다.",
      "loadComponentEndLog": "구성 요소 \"{0}\"({1})이(가) 로드되었습니다.",
      "loadComponentRetryLog": "구성 요소 \"{0}\"({1})을(를) 로드하는 중입니다. {3} 중 {2}번째 시도입니다.",
      "loadComponentError": "구성 요소 \"{0}\"({1})을(를) 로드하지 못했습니다.\r\n원본 오류: {2}",
      "loadComponentMaxRetriesError": "구성 요소 \"{0}\"({1})의 로드를 {2}번 시도했지만 실패했습니다.",
      "loadComponentDependencyError": "구성 요소 \"{1}\"({2})에서 구성 요소 종속성 \"{0}\"을(를) 로드하지 못했습니다.\r\n원본 오류: {3}",
      "loadComponentDependencyFailoverPathError": "구성 요소 \"{2}\"({3})에서 장애 조치(failover) 경로 \"{1}\"(으)로 구성 요소 종속성 \"{0}\"을(를) 로드하지 못했습니다.\r\n원본 오류: {4}",
      "loadPathDependencyLog": "구성 요소 \"{1}\"({2})에서 경로 종속성 \"{0}\"을(를) 로드하는 중",
      "loadPathDependencyError": "구성 요소 \"{1}\"({2})에서 경로 종속성 \"{0}\"을(를) 로드하지 못했습니다.\r\n원본 오류: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "로드에 실패한 다른 종속성으로 인해 구성 요소 \"{1}\"({2})에서 경로 종속성 \"{0}\"을(를) 로드하지 못했습니다.",
      "loadEntryPointError": "구성 요소 \"{0}\"({1})에서 진입점을 로드하지 못했습니다.\r\n원본 오류: {2}",
      "loadComponentReturnsEmptyError": "loadComponent()에서 구성 요소 \"{0}\"({1})에 대해 비어 있는 개체를 반환했습니다.",
      "loadComponentReturnsDefaultEmptyError": "loadComponent()에서 구성 요소 \"{0}\"({1})에 대해 기본 속성이 비어 있는 개체를 반환했습니다.",
      "moduleHasUndeclaredDependencyError": "구성 요소 \"{0}\"의 진입점({1})에 매니페스트에서 선언되지 않은 \"{2}\"에 대한 종속성이 있습니다.",
      "loadScriptWithStringError": "loadScript 함수에는 문자열을 두 번째 매개 변수로 사용할 수 없습니다. 대신 ILoadScriptOptions를 사용하세요.",
      "tooManyManifestsError": "구성 요소 \"{2}\"에 대해 {0}개의 매니페스트(버전 {1})가 발견되었습니다.",
      "tooManyCompatibleVersionsError": "구성 요소 \"{2}\" 버전 \"{3}\"에 대해 {0}개의 호환 버전({1})이 발견되었습니다.",
      "tooManyComponentsError": "ID \"{0}\"에 대해 발견된 구성 요소가 너무 많습니다.",
      "noComponentFoundError": "ID \"{0}\"에 대한 구성 요소를 찾을 수 없습니다.",
      "deleteComponentLog": "구성 요소 \"{0}\" 버전 \"{1}\"을(를) 저장소에서 삭제합니다.",
      "browserNotSupportedError": "이 버전의 브라우저는 지원되지 않습니다.\r\n브라우저를 최신 버전으로 업데이트하세요.",
      "ie9OrOlderNotSupportedError": "이 페이지는 버전 10보다 오래된 Internet Explorer 릴리스를 지원하지 않습니다. 웹 브라우저를 업데이트하세요.",
      "firefox43OrOlderNotSupportedError": "이 페이지는 버전 44 이전의 Mozilla Firefox 릴리스를 지원하지 않습니다. 웹 브라우저를 업데이트하세요.",
      "resourceNotFoundError": "\"{1}\"({2}) 구성 요소에 대한 매니페스트의 로더 구성에서 \"{0}\" 리소스를 찾을 수 없습니다.",
      "noFailoverPathError": "장애 조치(failover) 경로가 없는 구성 요소에서 resolveAddress()를 호출할 수 없습니다.",
      "urlStatusLocalhostFileNotFoundError": "구성 요소 '{0}'({1})에서 리소스 '{2}'에 대한 URL '{3}'을(를) 로드하지 못했습니다. 서버에서 파일을 찾을 수 없습니다.\r\n'gulp serve'를 실행 중인지 확인하세요.",
      "urlStatusFileNotFoundError": "구성 요소 '{0}'({1})에서 리소스 '{2}'에 대한 URL '{3}'을(를) 로드하지 못했습니다. 서버에서 파일을 찾을 수 없습니다.",
      "urlStatusForbiddenError": "구성 요소 '{0}'({1})에서 리소스 '{2}'에 대한 URL '{3}'을(를) 로드하지 못했습니다. 파일 액세스가 금지되었습니다.",
      "urlStatusClientErrorError": "구성 요소 '{0}'({1})에서 리소스 '{2}'에 대한 URL '{3}'을(를) 로드하지 못했습니다. 파일을 요청하는 중 오류가 발생했습니다.",
      "urlStatusServerErrorError": "구성 요소 '{0}'({1})에서 리소스 '{2}'에 대한 URL '{3}'을(를) 로드하지 못했습니다. 서버에서 문제가 발생했습니다.",
      "urlStatusLocalhostNetworkErrorError": "구성 요소 '{0}'({1})에서 리소스 '{2}'에 대한 URL '{3}'을(를) 로드하지 못했습니다. 네트워크 문제가 발생했습니다.\r\n'gulp serve'를 실행 중인지, 'gulp trust-dev-cert'를 실행했는지 확인하세요.",
      "urlStatusHttpsNetworkErrorError": "구성 요소 '{0}'({1})에서 리소스 '{2}'에 대한 URL '{3}'을(를) 로드하지 못했습니다. 네트워크 문제가 발생했습니다.\r\nHTTPS 인증서에 문제가 있을 수 있습니다. 올바른 인증서가 있는지 확인하세요.",
      "urlStatusNetworkErrorError": "구성 요소 '{0}'({1})에서 리소스 '{2}'에 대한 URL '{3}'을(를) 로드하지 못했습니다. 네트워크 문제가 발생했습니다.",
      "urlStatusUndefinedError": "알 수 없는 문제 때문에 구성 요소 '{0}'({1})에서 리소스 '{2}'에 대한 URL '{3}'을(를) 로드하지 못했습니다.",
      "isUndefinedValidateError": "\"{0}\"에 대한 값은 정의되지 않음이 아니어야 합니다.",
      "failedToCreateGlobalVariableError": "스크립트 \"{1}\"에서 전역 변수 \"{0}\"을(를) 만들지 못했습니다.",
      "dependencyLoadError": "의존 관계 {1}이(가) 로드되지 않아 모듈 '{0}'을(를) 로드하지 못했습니다.",
      "missingPathDependencyError": "구성 요소 \"{1}\"({2})에 경로 종속성 \"{0}\"이(가) 없습니다. 기존 경로 종속성: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "디버그 스크립트를 로드하는 중 오류가 발생했습니다. 서버가 실행 중이며 \"{0}\" 매개 변수 URL이 정확한지 확인하세요.",
      "errorLoadingDebugScriptHTTP": "디버그 스크립트를 로드하는 중 오류가 발생했습니다. 서버가 실행 중이고, \"{0}\" 매개 변수 URL이 정확하며, 안전하지 않은 스크립트 로드가 허용되었는지 확인하세요. 또한 개발 인증서 사용 및 HTTPS를 통한 디버그 스크립트 제공도 고려하세요.",
      "errorLoadingDebugScriptMalformed": "디버그 스크립트를 로드하는 중 오류가 발생했습니다. 디버그 URL({0})의 형식이 잘못된 것 같습니다.",
      "errorLoadingDebugScriptUnknown": "디버그 스크립트를 로드하는 중 알 수 없는 오류가 발생했습니다.",
      "errorLoadingDebugLoaderTitle": "디버그 로더 로드 중 오류가 발생했습니다.",
      "errorLoadingDebugManifestTitle": "디버그 매니페스트 로드 중 오류가 발생했습니다.",
      "errorLoadingUnknownTitle": "디버그 매니페스트 로드 중 오류가 발생했습니다."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "구성 요소 또는 이니셜라이저 기능이 없습니다.",
      "closeDeveloperToolsAriaLabel": "개발자 도구를 닫습니다."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "경고!",
      "warningLine1": "이 도구를 사용하면 다른 사람이 개인 Office 365 데이터(문서, 전자 메일, 대화 등)에 액세스할 수 있는 잠재적 보안 위협에 노출될 수 있습니다. 계속하기 전에 이 도구에 액세스하도록 요청한 사람이나 조직을 신뢰할 수 있는지 확인하세요.",
      "warningLine2": "자세히 알아보기: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "디버그 매니페스트 로드 중 오류가 발생했습니다.",
      "debugManifestErrorDismissButtonText": "해제"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "디버그 스크립트를 허용하시겠습니까?",
      "allowDebugLoaderTitle": "디버그 로더를 허용하시겠습니까?",
      "allowDebugLoaderAndManifestsTitle": "디버그 로더와 디버그 스크립트를 허용하시겠습니까?",
      "debugManifestLoadingWarning": "경고: 이 페이지에는 로드될 경우 사용자의 컴퓨터를 손상할 수 있는 안전하지 않은 스크립트가 포함되어 있습니다. 개발자를 신뢰하며 위험성을 이해하는 경우 이외에는 계속하지 않는 것이 좋습니다.",
      "debugManifestLoadingWarning2": "확실하지 않은 경우 {0}을(를) 클릭하세요.",
      "debugManifestLoadingConfirm": "디버그 스크립트 로드",
      "debugManifestLoadingCancel": "디버그 스크립트 로드 안 함",
      "debugManifestLoadingCalloutText": "잘 모르는 경우 여기를 클릭하세요."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "로드 중...",
      "developerToolsTabLoadingUnknownError": "개발자 도구 모듈을 로드하는 중 알 수 없는 오류가 발생했습니다."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "매니페스트",
      "noManifestSelected": "선택된 매니페스트가 없습니다."
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "성능",
      "ErrorAccessingPerfDataErrorMessage": "성능 데이터를 검색할 수 없음: 개체가 null이거나 정의되지 않았습니다.",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP 리디렉션 성능 데이터에 액세스하는 동안 문제가 발생했습니다.",
      "ErrorParsingPercievedLatencyErrorMessage": "인지된 대기 시간 데이터를 구문 분석하는 중 오류가 발생했습니다.",
      "ErrorParsingApiDataErrorMessage": "API 데이터를 구문 분석하는 중 오류가 발생했습니다.",
      "UnkownPerformanceDataErrorMessage": "알 수 없는 오류 발생: {0}",
      "DefaultWebPartName": "웹 파트",
      "ServerResponseLabel": "서버 응답",
      "ApplicationInitializationLabel": "응용 프로그램 초기화",
      "ScriptFetchEvalLabel": "스크립트 가져오기 및 평가",
      "SpLoaderStartLabel": "SPFx 초기화",
      "PageRenderLabel": "페이지 렌더링",
      "LeftNavRenderLabel": "왼쪽 탐색 렌더링",
      "CanvasRenderLabel": "캔버스 렌더링",
      "LayoutRenderLabel": "레이아웃 렌더링",
      "RedirectResponseLabel": "리디렉션 응답",
      "AppLoadLabel": "응용 프로그램 로드",
      "RenderWebPartsLabel": "웹 파트 렌더링",
      "TotalRenderTimeLabel": "합계",
      "GeneralErrorMessage": "죄송합니다. 성능 데이터를 검색하는 동안 오류가 발생했습니다.",
      "ErrorMessagePrefix": "오류 메시지: {0}",
      "PerformanceDataHint": "참고: 웹 파트를 추가하거나 제거한 후에 업데이트된 성능 데이터를 보려면 페이지를 새로 고치세요.",
      "ModulesLoadedLegendLabel": "로드된 모듈",
      "InitializationLegendLabel": "초기화",
      "RenderTimeLegendLabel": "렌더링 시간",
      "InitializationTimeLabel": "초기화 시간",
      "ModuleLoadingTimeLabel": "모듈 로드 시간",
      "ModuleLazyLoadingDelayLabel": "모듈 로드가 지연됨",
      "DataFetchTimeLabel": "데이터 가져오기 시간",
      "DataFetchLegendLabel": "데이터 가져오기",
      "ItemsColumnHeader": "항목",
      "DurationColumnHeader": "기간",
      "MillisecondsUnitLabel": "{0}ms",
      "NAPlaceholder": "N/A"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "추적",
      "EmptyTraceData": "로드된 추적이 없습니다.",
      "ExportCSVButtonLabel": "CSV 내보내기",
      "LevelHeaderLabel": "수준",
      "MessageHeaderLabel": "메시지",
      "ScopeHeaderLabel": "범위",
      "SourceHeaderLabel": "소스",
      "TimestampHeaderLabel": "타임스탬프",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "추적 데이터에 액세스하는 중 문제가 발생했습니다."
    }
  };

  strings.default = strings;
  return strings;
});
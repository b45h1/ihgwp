define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Không thể tải ứng dụng trên trang này. Sử dụng nút Quay lại trong trình duyệt để thử lại. Nếu sự cố vẫn tiếp diễn, hãy liên hệ với người quản trị site và cung cấp cho họ thông tin trong Chi tiết Kỹ thuật.",
      "platformFailedToLoadError": "Nền tảng không tải được. Id: \"{0}\", tên: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Không tải được nền tảng. Id: \"{0}\", tên: \"{1}\".\r\nLỗi: {2}",
      "applicationFailedToInitializeError": "Đã xảy ra lỗi khi khởi tạo ứng dụng. Lỗi: {0}",
      "invalidPreloadedDataError": "Dữ liệu tải sẵn không hợp lệ.",
      "manifestNotFoundByIdError": "Không tìm thấy tệp kê khai cho id cấu phần \"{0}\".",
      "manifestNotFoundError": "Không tìm thấy tệp kê khai cho id cấu phần \"{0}\" và phiên bản \"{1}\".",
      "systemConfigDisabledError": "Không hỗ trợ System.config(). Sử dụng một tệp kê khai để chỉ định cấu hình.",
      "loadComponentLog": "Đang tải cấu phần \"{0}\" ({1}).",
      "loadComponentEndLog": "Đã tải cấu phần \"{0}\" ({1}).",
      "loadComponentRetryLog": "Đang tải cấu phần \"{0}\" ({1}). Lần thử {2} trên {3}.",
      "loadComponentError": "Không tải được cấu phần \"{0}\" ({1}).\r\nLỗi ban đầu: {2}",
      "loadComponentMaxRetriesError": "Đã tìm cách tải cấu phần \"{0}\" ({1}) {2} lần nhưng không thành công.",
      "loadComponentDependencyError": "Không tải được cấu phần phụ thuộc \"{0}\" từ cấu phần \"{1}\" ({2}).\r\nLỗi ban đầu: {3}",
      "loadComponentDependencyFailoverPathError": "Không tải được thành phần phụ thuộc cấu phần \"{0}\" với đường dẫn lướt qua lỗi \"{1}\" từ cấu phần \"{2}\" ({3}).\r\nLỗi gốc: {4}",
      "loadPathDependencyLog": "Đang tải tính phụ thuộc đường dẫn \"{0}\" từ cấu phần \"{1}\" ({2})",
      "loadPathDependencyError": "Không tải được thành phần phụ thuộc đường dẫn \"{0}\" từ cấu phần \"{1}\" ({2}).\r\nLỗi gốc: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Không tải được tính phụ thuộc đường dẫn \"{0}\" từ cấu phần \"{1}\" ({2}) do không tải được một tính phụ thuộc khác.",
      "loadEntryPointError": "Không tải được điểm nhập từ cấu phần \"{0}\" ({1}).\r\nLỗi gốc: : {2}",
      "loadComponentReturnsEmptyError": "loadComponent() đã trả về đối tượng trống cho cấu phần \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() trả về đối tượng với một thuộc tính mặc định trống cho cấu phần \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "Điểm mục nhập cho cấu phần \"{0}\" ({1}) có chứa một thành phần phụ thuộc trên \"{2}\" không được khai báo trong bản kê.",
      "loadScriptWithStringError": "Chức năng loadScript không cho phép sử dụng chuỗi làm tham số thứ hai. Hãy sử dụng ILoadScriptOptions thay vào đó.",
      "tooManyManifestsError": "Đã tìm thấy {0} tệp kê khai (phiên bản {1}) cho cấu phần \"{2}\".",
      "tooManyCompatibleVersionsError": "Đã tìm thấy {0} phiên bản tương thích ({1}) cho cấu phần \"{2}\" phiên bản \"{3}\".",
      "tooManyComponentsError": "Đã tìm thấy quá nhiều cấu phần cho id \"{0}\".",
      "noComponentFoundError": "Không tìm thấy cấu phần cho id \"{0}\".",
      "deleteComponentLog": "Xóa cấu phần \"{0}\" phiên bản \"{1}\" khỏi kho.",
      "browserNotSupportedError": "Không hỗ trợ phiên bản này của trình duyệt.\r\nVui lòng cập nhật trình duyệt của bạn lên phiên bản mới nhất.",
      "ie9OrOlderNotSupportedError": "Trang này không hỗ trợ bản phát hành Internet Explorer cũ hơn phiên bản 10. Vui lòng cập nhật trình duyệt web của bạn.",
      "firefox43OrOlderNotSupportedError": "Trang này không hỗ trợ các bản phát hành Mozilla Firefox cũ hơn phiên bản 44. Vui lòng cập nhật trình duyệt web của bạn.",
      "resourceNotFoundError": "Không tìm thấy tài nguyên \"{0}\" trong trình tải cấu hình của tệp kê khai cho cấu phần\" {1}\" ({2}).",
      "noFailoverPathError": "Không thể gọi resolveAddress() trên một cấu phần không có đường dẫn lướt qua lỗi",
      "urlStatusLocalhostFileNotFoundError": "Không tải được URL '{3}' cho tài nguyên '{2}' trong cấu phần '{0}' ({1}). Không tìm thấy tệp trong máy chủ.\r\nHãy đảm bảo rằng bạn đang chạy 'gulp serve'.",
      "urlStatusFileNotFoundError": "Không tải được URL '{3}' cho tài nguyên '{2}' trong cấu phần '{0}' ({1}). Không tìm thấy tệp trong máy chủ.",
      "urlStatusForbiddenError": "Không tải được URL '{3}' cho tài nguyên '{2}' trong cấu phần '{0}' ({1}). Truy nhập vào tệp bị cấm.",
      "urlStatusClientErrorError": "Không tải được URL '{3}' cho tài nguyên '{2}' trong cấu phần '{0}' ({1}). Đã xảy ra lỗi khi yêu cầu tệp.",
      "urlStatusServerErrorError": "Không tải được URL '{3}' cho tài nguyên '{2}' trong cấu phần '{0}' ({1}). Đã xảy ra sự cố trong máy chủ.",
      "urlStatusLocalhostNetworkErrorError": "Không tải được URL '{3}' cho tài nguyên '{2}' trong cấu phần '{0}' ({1}). Đã xảy ra sự cố mạng.\r\nHãy đảm bảo rằng bạn đang chạy 'gulp serve' và đã chạy 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "Không tải được URL '{3}' cho tài nguyên '{2}' trong cấu phần '{0}' ({1}). Đã xảy ra sự cố mạng.\r\nĐây có thể là một sự cố với chứng chỉ HTTPS. Hãy đảm bảo bạn có chứng chỉ chính xác.",
      "urlStatusNetworkErrorError": "Không tải được URL '{3}' cho tài nguyên '{2}' trong cấu phần '{0}' ({1}). Đã xảy ra sự cố mạng.",
      "urlStatusUndefinedError": "Không tải được URL '{3}' cho tài nguyên '{2}' trong cấu phần '{0}' ({1}) do sự cố không xác định.",
      "isUndefinedValidateError": "\"{0}\" không được phép mang giá trị không xác định",
      "failedToCreateGlobalVariableError": "Không tạo được biến toàn cục \"{0}\" từ tập lệnh \"{1}\"",
      "dependencyLoadError": "Không thể tải mô-đun '{0}' do chưa tải đối tượng phụ thuộc {1}",
      "missingPathDependencyError": "Thiếu thành phần phụ thuộc của đường dẫn \"{0}\" từ cấu phần \"{1}\" ({2}). Thành phần phụ thuộc của đường dẫn hiện tại: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Lỗi trong khi tải tập lệnh gỡ lỗi. Hãy đảm bảo rằng máy chủ đang chạy và URL tham số {0}\" là chính xác.",
      "errorLoadingDebugScriptHTTP": "Lỗi trong khi tải tập lệnh gỡ lỗi. Hãy đảm bảo rằng máy chủ đang chạy, URL tham số \"{0}\" là chính xác và đã cho phép tải các tập lệnh không an toàn. Đồng thời, hãy xem xét việc sử dụng chứng chỉ phát triển và cung cấp tập lệnh gỡ lỗi qua HTTPS.",
      "errorLoadingDebugScriptMalformed": "Lỗi trong khi tải tập lệnh gỡ lỗi. Có vẻ như URL gỡ lỗi ({0}) không có định dạng chuẩn.",
      "errorLoadingDebugScriptUnknown": "Lỗi không xác định khi tải tập lệnh gỡ lỗi.",
      "errorLoadingDebugLoaderTitle": "Lỗi trong khi tải trình tải gỡ lỗi.",
      "errorLoadingDebugManifestTitle": "Lỗi trong khi tải tệp kê khai gỡ lỗi.",
      "errorLoadingUnknownTitle": "Lỗi trong khi tải tập lệnh gỡ lỗi."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Thiếu hàm trình khởi tạo hoặc cấu phần.",
      "closeDeveloperToolsAriaLabel": "Đóng công cụ nhà phát triển."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Cảnh báo!",
      "warningLine1": "Việc sử dụng công cụ này sẽ khiến bạn đối mặt với mối đe dọa bảo mật tiềm ẩn, có thể dẫn đến việc những người khác có quyền truy nhập vào dữ liệu Office 365 cá nhân của bạn (tài liệu, email, cuộc hội thoại và các nội dung khác). Hãy đảm bảo rằng bạn tin tưởng người hoặc tổ chức yêu cầu bạn truy nhập công cụ này trước khi tiếp tục.",
      "warningLine2": "Tìm hiểu thêm ở đây: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Đã xảy ra lỗi khi tải tệp kê khai gỡ lỗi.",
      "debugManifestErrorDismissButtonText": "Bỏ"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Cho phép gỡ lỗi tập lệnh?",
      "allowDebugLoaderTitle": "Cho phép trình tải gỡ lỗi?",
      "allowDebugLoaderAndManifestsTitle": "Cho phép trình tải gỡ lỗi và tập lệnh gỡ lỗi?",
      "debugManifestLoadingWarning": "CẢNH BÁO: Trang này chứa các tập lệnh không an toàn, có thể gây hại cho máy tính của bạn nếu được tải! Đừng tiếp tục trừ khi bạn tin cậy nhà phát triển và hiểu rõ các rủi ro.",
      "debugManifestLoadingWarning2": "Nếu bạn không chắc chắn, hãy bấm vào {0}.",
      "debugManifestLoadingConfirm": "Tải tập lệnh gỡ lỗi",
      "debugManifestLoadingCancel": "Không tải tập lệnh gỡ lỗi",
      "debugManifestLoadingCalloutText": "Nếu bạn không biết phải làm gì, hãy bấm vào đây."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Đang tải...",
      "developerToolsTabLoadingUnknownError": "Đã xảy ra lỗi không xác định khi tải mô-đun công cụ nhà phát triển."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Tệp kê khai",
      "noManifestSelected": "Chưa chọn tệp kê khai nào"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Hiệu suất",
      "ErrorAccessingPerfDataErrorMessage": "Không thể truy xuất dữ liệu hiệu suất: đối tượng là null hoặc không xác định.",
      "ErrorAccessingRedirectDataErrorMessage": "Đã xảy ra sự cố khi truy nhập dữ liệu hiệu suất chuyển hướng HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Đã phát hiện lỗi khi phân tích dữ liệu độ trễ đã tiếp nhận.",
      "ErrorParsingApiDataErrorMessage": "Đã phát hiện lỗi khi phân tích dữ liệu API.",
      "UnkownPerformanceDataErrorMessage": "Đã xảy ra lỗi không xác định: {0}",
      "DefaultWebPartName": "Phần Web",
      "ServerResponseLabel": "Phản hồi Máy chủ",
      "ApplicationInitializationLabel": "Khởi tạo Ứng dụng",
      "ScriptFetchEvalLabel": "Tải tập lệnh và đánh giá",
      "SpLoaderStartLabel": "Khởi tạo SPFx",
      "PageRenderLabel": "Kết xuất Trang",
      "LeftNavRenderLabel": "Kết xuất Dẫn hướng Bên trái",
      "CanvasRenderLabel": "Kết xuất Bề mặt",
      "LayoutRenderLabel": "Kết xuất Bố trí",
      "RedirectResponseLabel": "Chuyển hướng Phản hồi",
      "AppLoadLabel": "Tải Ứng dụng",
      "RenderWebPartsLabel": "Kết xuất Phần Web",
      "TotalRenderTimeLabel": "Tổng",
      "GeneralErrorMessage": "Rất tiếc, đã xảy ra lỗi khi truy xuất dữ liệu hiệu suất.",
      "ErrorMessagePrefix": "Thông báo Lỗi: {0}",
      "PerformanceDataHint": "Lưu ý: Sau khi thêm hoặc loại bỏ phần web, hãy làm mới trang để xem dữ liệu hiệu suất cập nhật.",
      "ModulesLoadedLegendLabel": "Mô-đun Đã tải",
      "InitializationLegendLabel": "Khởi tạo",
      "RenderTimeLegendLabel": "Thời gian Kết xuất",
      "InitializationTimeLabel": "Thời gian khởi tạo",
      "ModuleLoadingTimeLabel": "Thời gian tải mô-đun",
      "ModuleLazyLoadingDelayLabel": "Tải mô-đun trễ",
      "DataFetchTimeLabel": "Thời gian tải dữ liệu",
      "DataFetchLegendLabel": "Tải Dữ liệu",
      "ItemsColumnHeader": "Mục",
      "DurationColumnHeader": "Thời lượng",
      "MillisecondsUnitLabel": "{0} mili giây",
      "NAPlaceholder": "N/A"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Dấu vết",
      "EmptyTraceData": "Chưa tải dấu vết nào.",
      "ExportCSVButtonLabel": "Xuất CSV",
      "LevelHeaderLabel": "Mức",
      "MessageHeaderLabel": "Thông báo",
      "ScopeHeaderLabel": "Phạm vi",
      "SourceHeaderLabel": "Nguồn",
      "TimestampHeaderLabel": "Dấu thời gian",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Đã xảy ra sự cố khi truy nhập dữ liệu dấu vết."
    }
  };

  strings.default = strings;
  return strings;
});
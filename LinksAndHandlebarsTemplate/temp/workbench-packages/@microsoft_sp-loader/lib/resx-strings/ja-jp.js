define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "このページ上のアプリケーションを読み込むことができません。ブラウザーの [戻る] ボタンを使用して、もう一度お試しください。問題が解決しない場合は、サイトの管理者に問い合わせて、技術的な詳細情報を提供してください",
      "platformFailedToLoadError": "プラットフォームの読み込みに失敗しました。ID: \"{0}\"、名前: \"{1}\"",
      "platformFailedToLoadWithMessageError": "プラットフォームを読み込めませんでした。ID: \"{0}\"、名前: \"{1}\"。\r\nエラー: {2}",
      "applicationFailedToInitializeError": "アプリケーションの初期化中にエラーが発生しました。エラー: {0}",
      "invalidPreloadedDataError": "プリロードのデータが無効です。",
      "manifestNotFoundByIdError": "コンポーネント ID \"{0}\" のマニフェストが見つかりませんでした。",
      "manifestNotFoundError": "コンポーネント ID \"{0}\" バージョン \"{1}\" のマニフェストは見つかりませんでした。",
      "systemConfigDisabledError": "System.config() はサポートされていません。構成を指定するにはマニフェストを使用してください。",
      "loadComponentLog": "コンポーネント \"{0}\" ({1}) を読み込んでいます。",
      "loadComponentEndLog": "コンポーネント\"{0}\" ({1}) が読み込まれました。",
      "loadComponentRetryLog": "コンポーネント \"{0}\" ({1}) を読み込んでいます。試行回数 {2}/{3}。",
      "loadComponentError": "コンポーネント \"{0}\" ({1}) を読み込むことができませんでした。\r\n元のエラー: {2}",
      "loadComponentMaxRetriesError": "コンポーネント \"{0}\" ({1}) の {2} 回の試行は成功しませんでした。",
      "loadComponentDependencyError": "コンポーネント \"{1}\" ({2}) からコンポーネントの依存関係 \"{0}\" を読み込むことができませんでした。\r\n元のエラー: {3}",
      "loadComponentDependencyFailoverPathError": "コンポーネント \"{2}\" ({3}) からフェールオーバー パス \"{1}\" でコンポーネントの依存関係 \"{0}\" を読み込むことができませんでした。\r\n元のエラー: {4}",
      "loadPathDependencyLog": "パスの依存関係 \"{0}\" をコンポーネント\"{1}\" ({2}) から読み込んでいます",
      "loadPathDependencyError": "コンポーネント \"{1}\" ({2}) からパスの依存関係 \"{0}\" を読み込むことができませんでした。\r\n元のエラー: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "他の依存関係の読み込みに失敗したため、パスの依存関係 \"{0}\" をコンポーネント \"{1}\" ({2}) から読み込めませんでした。",
      "loadEntryPointError": "コンポーネント \"{0}\" ({1}) からエントリ ポイントを読み込むことができませんでした。\r\n元のエラー: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() がコンポーネント \"{0}\" ({1}) の空のオブジェクトを返しました。",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() がコンポーネント \"{0}\" ({1}) の空の既定プロパティのオブジェクトを返しました。",
      "moduleHasUndeclaredDependencyError": "コンポーネント \"{0}\" ({1}) のエントリ ポイントは \"{2}\" と依存関係がありますが、マニフェストで宣言されていません。",
      "loadScriptWithStringError": "loadScript 関数では、2 番目のパラメーターとして文字列を使用できません。代わりに ILoadScriptOptions を使用してください。",
      "tooManyManifestsError": "コンポーネント \"{2}\" の {0} 個のマニフェスト (バージョン {1}) が見つかりました。",
      "tooManyCompatibleVersionsError": "コンポーネント \"{2}\" バージョン \"{3}\" の互換性のあるバージョン ({1}) が {0} 個見つかりました。",
      "tooManyComponentsError": "ID \"{0}\" のコンポーネントが多すぎます。",
      "noComponentFoundError": "ID \"{0}\" のコンポーネントが見つかりませんでした。",
      "deleteComponentLog": "コンポーネント \"{0}\" バージョン \"{1}\" をストアから削除しています。",
      "browserNotSupportedError": "このバージョンのブラウザーはサポートされていません。\r\nお使いのブラウザーを最新バージョンに更新してください。",
      "ie9OrOlderNotSupportedError": "このページでは、Internet Explorer バージョン 10 より前のリリースはサポートされていません。Web ブラウザーを更新してください。",
      "firefox43OrOlderNotSupportedError": "このページでは、Mozilla Firefox バージョン 44 より前のリリースはサポートされていません。Web ブラウザーを更新してください。",
      "resourceNotFoundError": "リソース \"{0}\" がコンポーネント \"{1}\" ({2}) のマニフェストのローダ―構成でみつかりません。",
      "noFailoverPathError": "フェイル オーバー パスを指定せずにコンポーネントの resolveAddress() を呼び出すことはできません",
      "urlStatusLocalhostFileNotFoundError": "コンポーネント '{0}' ({1}) のリソース '{2}' の URL '{3}' を読み込めませんでした。ファイルがサーバーで見つかりませんでした。\r\n'gulp serve' を実行していることを確認してください。",
      "urlStatusFileNotFoundError": "コンポーネント '{0}' ({1}) のリソース '{2}' の URL '{3}' を読み込めませんでした。ファイルがサーバーで見つかりませんでした。",
      "urlStatusForbiddenError": "コンポーネント '{0}' ({1}) のリソース '{2}' の URL '{3}' を読み込めませんでした。ファイルへのアクセスが禁止されています。",
      "urlStatusClientErrorError": "コンポーネント '{0}' ({1}) のリソース '{2}' の URL '{3}' を読み込めませんでした。ファイルのリクエスト中にエラーが発生しました。",
      "urlStatusServerErrorError": "コンポーネント '{0}' ({1}) のリソース '{2}' の URL '{3}' を読み込めませんでした。サーバーで問題が発生しました。",
      "urlStatusLocalhostNetworkErrorError": "コンポーネント '{0}' ({1}) のリソース '{2}' の URL '{3}' を読み込めませんでした。ネットワークに問題が発生しました。\r\n'gulp serve' が実行中で、'gulp trust-dev-cert' が実行済みであることを確認してください。",
      "urlStatusHttpsNetworkErrorError": "コンポーネント '{0}' ({1}) のリソース '{2}' の URL '{3}' を読み込めませんでした。ネットワークに問題が発生しました。\r\nHTTPS 証明書に問題がある可能性があります。正しい証明書があることを確認してください。",
      "urlStatusNetworkErrorError": "コンポーネント '{0}' ({1}) のリソース '{2}' の URL '{3}' を読み込めませんでした。ネットワークに問題が発生しました。",
      "urlStatusUndefinedError": "コンポーネント '{0}' ({1}) のリソース '{2}' の URL '{3}' を読み込めませんでした。不明な問題が発生しました。",
      "isUndefinedValidateError": "\"{0}\" の値を未定義にすることはできません",
      "failedToCreateGlobalVariableError": "スクリプト \"{1}\" からのグローバル変数 \"{0}\" の作成に失敗しました",
      "dependencyLoadError": "依存関係 {1} を読み込めなかったため、モジュール '{0}' を読み込めませんでした",
      "missingPathDependencyError": "コンポーネント \"{1}\" ({2}) のパスの依存関係 \"{0}\" がありません。既存のパスの依存関係: {3}",
      "listSeparator": "、"
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "デバッグ スクリプトの読み込み中にエラーが発生しました。サーバーが実行中で、\"{0}\" パラメーターの URL が正しいことを確認してください。",
      "errorLoadingDebugScriptHTTP": "デバッグ スクリプトの読み込み中にエラーが発生しました。サーバーが実行中で、\"{0}\" パラメーターの URL が正しいことを確認し、安全でないスクリプトの読み込みが許可されていることを確認してください。開発証明書を使用して、HTTPS 経由でのデバッグ スクリプトを提供することを検討してください。",
      "errorLoadingDebugScriptMalformed": "デバッグ スクリプトの読み込み中にエラーが発生しました。デバッグの URL ({0}) が不正な形式である可能性があります。",
      "errorLoadingDebugScriptUnknown": "デバッグ スクリプトの読み込み中に不明なエラーが発生しました。",
      "errorLoadingDebugLoaderTitle": "デバッグ ローダーの読み込み中にエラーが発生しました。",
      "errorLoadingDebugManifestTitle": "デバッグのマニフェストを読み込み中にエラーが発生しました。",
      "errorLoadingUnknownTitle": "デバッグ スクリプトの読み込み中にエラーが発生しました。"
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "コンポーネントまたは初期化関数がありません。",
      "closeDeveloperToolsAriaLabel": "開発者ツールを閉じます。"
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "警告!",
      "warningLine1": "このツールを使用すると、潜在的なセキュリティに関する脅威が生じ、他のユーザーが個人の Office 365 データ (ドキュメント、メール、会話など) にアクセスできるようになります。続ける前に、このツールへのアクセスを求めたユーザーまたは組織を信頼できることを確認してください。",
      "warningLine2": "詳細情報: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "デバッグのマニフェストの読み込み中にエラーが発生しました。",
      "debugManifestErrorDismissButtonText": "閉じる"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "スクリプトのデバッグを許可しますか?",
      "allowDebugLoaderTitle": "デバッグ ローダーを許可しますか?",
      "allowDebugLoaderAndManifestsTitle": "デバッグ ローダーとデバッグ スクリプトを許可しますか?",
      "debugManifestLoadingWarning": "警告: このページには、安全ではないスクリプトが含まれており、読み込むとお使いのコンピューターに損害を与える可能性があります。開発者を信頼しており、危険性を理解している場合以外は、操作を続行しないでください。",
      "debugManifestLoadingWarning2": "不明な場合は、{0} をクリックしてください。",
      "debugManifestLoadingConfirm": "デバッグ スクリプトを読み込む",
      "debugManifestLoadingCancel": "デバッグ スクリプトを読み込まない",
      "debugManifestLoadingCalloutText": "操作が不明な場合は、ここをクリックします。"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "読み込んでいます...",
      "developerToolsTabLoadingUnknownError": "開発者ツール モジュールの読み込み中に不明なエラーが発生しました。"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "マニフェスト",
      "noManifestSelected": "マニフェストが選択されていません"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "パフォーマンス",
      "ErrorAccessingPerfDataErrorMessage": "パフォーマンス データを取得できません: オブジェクトが null または未定義です。",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP リダイレクトのパフォーマンス データへのアクセス中に問題が発生しました。",
      "ErrorParsingPercievedLatencyErrorMessage": "認識された遅延データの解析中にエラーが発生しました。",
      "ErrorParsingApiDataErrorMessage": "API データの解析中にエラーが発生しました。",
      "UnkownPerformanceDataErrorMessage": "不明なエラーが発生しました: {0}",
      "DefaultWebPartName": "Web パーツ",
      "ServerResponseLabel": "サーバーの応答",
      "ApplicationInitializationLabel": "アプリケーションの初期化",
      "ScriptFetchEvalLabel": "スクリプトの取得と評価",
      "SpLoaderStartLabel": "SPFx の初期化",
      "PageRenderLabel": "ページのレンダリング",
      "LeftNavRenderLabel": "左側のナビゲーションのレンダリング",
      "CanvasRenderLabel": "キャンバスのレンダリング",
      "LayoutRenderLabel": "レイアウト レンダリング",
      "RedirectResponseLabel": "リダイレクトの応答",
      "AppLoadLabel": "アプリケーションの読み込み",
      "RenderWebPartsLabel": "Web パーツのレンダリング",
      "TotalRenderTimeLabel": "合計",
      "GeneralErrorMessage": "申し訳ございません。パフォーマンス データの取得中に問題が発生しました。",
      "ErrorMessagePrefix": "エラー メッセージ: {0}",
      "PerformanceDataHint": "注: Web パーツの追加または削除後は、ページを更新して、更新されたパフォーマンス データをご確認ください。",
      "ModulesLoadedLegendLabel": "読み込まれたモジュール",
      "InitializationLegendLabel": "初期化",
      "RenderTimeLegendLabel": "レンダリング時間",
      "InitializationTimeLabel": "初期化の時間",
      "ModuleLoadingTimeLabel": "モジュールの読み込み時間",
      "ModuleLazyLoadingDelayLabel": "モジュールの読み込みの遅延",
      "DataFetchTimeLabel": "データのフェッチ時間",
      "DataFetchLegendLabel": "データのフェッチ",
      "ItemsColumnHeader": "項目",
      "DurationColumnHeader": "時間",
      "MillisecondsUnitLabel": "{0} ミリ秒",
      "NAPlaceholder": "該当なし"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "トレース",
      "EmptyTraceData": "トレースが読み込まれませんでした。",
      "ExportCSVButtonLabel": "CSV にエクスポート",
      "LevelHeaderLabel": "レベル",
      "MessageHeaderLabel": "メッセージ",
      "ScopeHeaderLabel": "範囲",
      "SourceHeaderLabel": "ソース",
      "TimestampHeaderLabel": "タイムスタンプ",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "トレース データへのアクセス中に問題が発生しました。"
    }
  };

  strings.default = strings;
  return strings;
});
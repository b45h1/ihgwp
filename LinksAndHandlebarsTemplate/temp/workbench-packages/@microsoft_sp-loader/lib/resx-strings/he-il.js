define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "אין אפשרות לטעון את היישום בדף זה. השתמש בלחצן 'אחורה' של הדפדפן כדי לנסות שנית. אם הבעיה נמשכת, פנה למנהל האתר ומסור לו את המידע שב'פרטים טכניים'.",
      "platformFailedToLoadError": "טעינת הפלטפורמה נכשלה. מזהה: \"{0}\", שם: \"{1}\"",
      "platformFailedToLoadWithMessageError": "טעינת הפלטפורמה נכשלה. מזהה: \"{0}\", שם: \"{1}\".\r\nשגיאה: {2}",
      "applicationFailedToInitializeError": "שגיאה באתחול יישום. שגיאה: {0}",
      "invalidPreloadedDataError": "הנתונים שנטענו מראש אינם חוקיים.",
      "manifestNotFoundByIdError": "לא נמצא מניפסט עבור מזהה הרכיב \"{0}\".",
      "manifestNotFoundError": "המניפסט לא נמצא עבור מזהה הרכיב \"{0}\" והגירסה \"{1}\".",
      "systemConfigDisabledError": "System.config()‎ אינו נתמך. השתמש במניפסט כדי לציין את התצורה.",
      "loadComponentLog": "טוען את הרכיב \"{0}\" ‏({1}).",
      "loadComponentEndLog": "הרכיב \"{0}\" ‏({1}) נטען.",
      "loadComponentRetryLog": "טוען את הרכיב \"{0}\"‏ ({1}). ניסיון {2} של {3}.",
      "loadComponentError": "טעינת הרכיב \"{0}\" ‏({1}) נכשלה.\r\nהשגיאה המקורית: {2}",
      "loadComponentMaxRetriesError": "בוצע ניסיון לטעון את הרכיב \"{0}\"‏ ({1})‏ {2} ללא הצלחה.",
      "loadComponentDependencyError": "טעינת תלות הרכיב \"{0}\" מהרכיב \"{1}\" ‏({2}) נכשלה.\r\nהשגיאה המקורית: {3}",
      "loadComponentDependencyFailoverPathError": "טעינת תלות הרכיב \"{0}\" עם נתיב המעבר לגיבוי בעת כשל \"{1}\" מהרכיב \"{2}\" ‏({3}) נכשלה.\r\nהשגיאה המקורית: {4}",
      "loadPathDependencyLog": "טוען את תלות הנתיב \"{0}\" מהרכיב \"{1}\" ‏({2})",
      "loadPathDependencyError": "טעינת תלות הנתיב \"{0}\" מהרכיב \"{1}\" ‏({2}) נכשלה.\r\nהשגיאה המקורית: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "טעינת תלות הנתיב \"{0}\" מהרכיב \"{1}\" ‏({2}) נכשלה בשל תלות אחרת שטעינתה נכשלה.",
      "loadEntryPointError": "טעינת נקודת הכניסה מהרכיב \"{0}\" ‏({1}) נכשלה.\r\nהשגיאה המקורית: {2}",
      "loadComponentReturnsEmptyError": "loadComponent()‎ החזיר אובייקט ריק עבור הרכיב \"{0}\" ‏({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent()‎ החזיר אובייקט עם מאפיין ברירת מחדל ריק עבור הרכיב \"{0}\" ‏({1}).",
      "moduleHasUndeclaredDependencyError": "לנקודת הכניסה עבור הרכיב \"{0}\" ‏({1}) יש תלות \"{2}\" אשר אינה מוצהרת במניפסט.",
      "loadScriptWithStringError": "הפונקציה loadScript אינה מאפשרת מחרוזת כפרמטר שני. השתמש ב- ILoadScriptOptions במקום זאת.",
      "tooManyManifestsError": "נמצאו {0} מניפסטים (גירסאות {1}) עבור הרכיב \"{2}\".",
      "tooManyCompatibleVersionsError": "{0} גירסאות תואמות ({1}) נמצאו עבור הרכיב \"{2}\" גירסה \"{3}\".",
      "tooManyComponentsError": "נמצאו רכיבים רבים מדי עבור המזהה \"{0}\".",
      "noComponentFoundError": "לא נמצא רכיב עבור המזהה \"{0}\".",
      "deleteComponentLog": "מוחק את הרכיב \"{0}\" \"גירסה \"{1}\" מהחנות.",
      "browserNotSupportedError": "גירסה זו של הדפדפן שלך אינה נתמכת.\r\nעדכן את הדפדפן לגירסה החדשה ביותר.",
      "ie9OrOlderNotSupportedError": "דף זה אינו תומך במהדורות Internet Explorer ישנות יותר מגירסה 10. נא עדכן את דפדפן האינטרנט שלך.",
      "firefox43OrOlderNotSupportedError": "דף זה אינו תומך במהדורות Mozilla Firefox ישנות יותר מגירסה 44. עדכן את דפדפן האינטרנט שלך.",
      "resourceNotFoundError": "המשאב \"{0}\" לא נמצא בתצורת מטען של מניפסט עבור הרכיב \"{1}\" ‏({2}).",
      "noFailoverPathError": "אין אפשרות לבצע קריאה ל- resolveAddress()‎ ברכיב ללא נתיב מעבר לגיבוי בעת כשל",
      "urlStatusLocalhostFileNotFoundError": "טעינת כתובת ה- URL‏ '{3}' עבור המשאב '{2}' ברכיב '{0}' ‏({1}) נכשלה. הקובץ לא נמצא בשרת.\r\nודא שאתה מפעיל את 'gulp serve'.",
      "urlStatusFileNotFoundError": "טעינת כתובת ה- URL‏ '{3}' עבור המשאב '{2}' ברכיב '{0}' ‏({1}) נכשלה. הקובץ לא נמצא בשרת.",
      "urlStatusForbiddenError": "טעינת כתובת ה- URL‏ '{3}' עבור המשאב '{2}' ברכיב '{0}' ‏({1}) נכשלה. הגישה אל הקובץ אסורה.",
      "urlStatusClientErrorError": "טעינת כתובת ה- URL‏ '{3}' עבור המשאב '{2}' ברכיב '{0}' ‏({1}) נכשלה. אירעה שגיאה בבקשה לקובץ.",
      "urlStatusServerErrorError": "טעינת כתובת ה- URL‏ '{3}' עבור המשאב '{2}' ברכיב '{0}' ‏({1}) נכשלה. אירעה בעיה בשרת.",
      "urlStatusLocalhostNetworkErrorError": "טעינת כתובת ה- URL‏ '{3}' עבור המשאב '{2}' ברכיב '{0}' ‏({1}) נכשלה. אירעה בעיית רשת.\r\nודא ש- 'gulp serve' פועל ושהפעלת את 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "טעינת כתובת ה- URL‏ '{3}' עבור המשאב '{2}' ברכיב '{0}' ‏({1}) נכשלה. אירעה בעיית רשת.\r\nייתכן שמדובר בבעיה באישור HTTPS. ודא שהאישור המתאים נמצא ברשותך.",
      "urlStatusNetworkErrorError": "טעינת כתובת ה- URL‏ '{3}' עבור המשאב '{2}' ברכיב '{0}' ‏({1}) נכשלה. אירעה בעיית רשת.",
      "urlStatusUndefinedError": "טעינת כתובת ה- URL‏ '{3}' עבור המשאב '{2}' ברכיב '{0}' ‏({1}) נכשלה עקב בעיות לא ידועות.",
      "isUndefinedValidateError": "הערך עבור \"{0}\" אינו יכול להיות לא מוגדר",
      "failedToCreateGlobalVariableError": "יצירת המשתנה הכללי נכשלה \"{0}\" מקובץ ה- Script ‏\"{1}\"",
      "dependencyLoadError": "טעינת המודול '{0}' נכשלה מכיוון שהתלות {1} לא נטענה",
      "missingPathDependencyError": "חסרה תלות נתיב \"{0}\" ברכיב \"{1}\" ‏({2}). יחסי תלות קיימים של הנתיב: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "שגיאה בטעינת קובץ Script של איתור באגים. ודא שהשרת פועל ושכתובת ה- URL של הפרמטר \"{0}\" נכונה.",
      "errorLoadingDebugScriptHTTP": "שגיאה בטעינת קובץ Script של איתור באגים. ודא שהשרת פועל, שכתובת ה- URL של הפרמטר \"{0}\" נכונה ושמותר לטעון קבצי Script לא בטוחים. בנוסף, שקול להשתמש באישור פיתוח ולהגיש קבצי Script של איתור באגים באמצעות HTTPS.",
      "errorLoadingDebugScriptMalformed": "שגיאה בטעינת קובץ Script של איתור באגים. נראה שלכתובת ה- URL של איתור באגים ({0}) יש מבנה פגום.",
      "errorLoadingDebugScriptUnknown": "שגיאה לא ידועה בטעינת קובץ Script של איתור באגים.",
      "errorLoadingDebugLoaderTitle": "שגיאה בטעינת טוען איתור באגים.",
      "errorLoadingDebugManifestTitle": "שגיאה בטעינת מניפסטים של איתור באגים.",
      "errorLoadingUnknownTitle": "שגיאה בטעינת קבצי Script של איתור באגים."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "רכיב או פונקציית מאתחל חסרים.",
      "closeDeveloperToolsAriaLabel": "סגור כלי פיתוח."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "אזהרה!",
      "warningLine1": "השימוש בכלי זה חושף אותך לאיומי אבטחה פוטנציאליים, דבר שעלול לאפשר לאנשים אחרים לקבל גישה לנתוני Office 365 האישיים שלך (מסמכים, הודעות דואר אלקטרוני, שיחות ועוד). ודא שאתה נותן אמון באדם או בארגון שביקש ממך לגשת לכלי זה לפני שתמשיך.",
      "warningLine2": "קבל מידע נוסף כאן: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "אירעה שגיאה בעת טעינת מניפסטים של איתור באגים.",
      "debugManifestErrorDismissButtonText": "הפסק"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "האם לאפשר קבצי Script לאיתור באגים?",
      "allowDebugLoaderTitle": "האם לאפשר טוען איתור באגים?",
      "allowDebugLoaderAndManifestsTitle": "האם לאפשר טוען איתור באגים וקבצי Script של איתור באגים?",
      "debugManifestLoadingWarning": "אזהרה: דף זה מכיל קבצי Script לא בטוחים, שעלולים לגרום נזק למחשב שלך אם ייטענו. אל תמשיך אלא אם אתה נותן אמון במפתח ומבין את הסיכונים.",
      "debugManifestLoadingWarning2": "אם אינך בטוח, לחץ על '{0}'.",
      "debugManifestLoadingConfirm": "טען קבצי Script של איתור באגים",
      "debugManifestLoadingCancel": "אל תטען קבצי Script של איתור באגים",
      "debugManifestLoadingCalloutText": "אם אינך יודע מה לעשות, לחץ כאן."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "טוען...",
      "developerToolsTabLoadingUnknownError": "שגיאה לא ידועה בעת טעינת מודול כלי פיתוח."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "מניפסטים",
      "noManifestSelected": "לא נבחר מניפסט"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "ביצועים",
      "ErrorAccessingPerfDataErrorMessage": "לא ניתן לאחזר נתוני ביצועים: האובייקט Null או לא מוגדר.",
      "ErrorAccessingRedirectDataErrorMessage": "אירעה בעיה בעת גישה לנתוני הביצועים של ניתוב מחדש של HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "המערכת נתקלה בשגיאה בעת ניתוח נתוני ההשהיה הנתפסת.",
      "ErrorParsingApiDataErrorMessage": "המערכת נתקלה בשגיאה בעת ניתוח נתוני ה- API.",
      "UnkownPerformanceDataErrorMessage": "אירעה שגיאה לא ידועה: {0}",
      "DefaultWebPartName": "Web Part",
      "ServerResponseLabel": "תגובת שרת",
      "ApplicationInitializationLabel": "אתחול יישום",
      "ScriptFetchEvalLabel": "הבאת קבצי Script והערכה",
      "SpLoaderStartLabel": "אתחול SPFx",
      "PageRenderLabel": "עיבוד דף",
      "LeftNavRenderLabel": "עיבוד ניווט ימני",
      "CanvasRenderLabel": "עיבוד בד ציור",
      "LayoutRenderLabel": "עיבוד פריסה",
      "RedirectResponseLabel": "תגובת ניתוב מחדש",
      "AppLoadLabel": "טעינת יישום",
      "RenderWebPartsLabel": "עיבוד רכיבי Web Part",
      "TotalRenderTimeLabel": "סה\"כ",
      "GeneralErrorMessage": "מצטערים, משהו השתבש בעת אחזור נתוני הביצועים.",
      "ErrorMessagePrefix": "הודעת שגיאה: {0}",
      "PerformanceDataHint": "הערה: לאחר הוספה או הסרה של Web Part, רענן את הדף כדי לראות נתוני ביצועים מעודכנים.",
      "ModulesLoadedLegendLabel": "מודולים שנטענו",
      "InitializationLegendLabel": "אתחול",
      "RenderTimeLegendLabel": "זמן עיבוד",
      "InitializationTimeLabel": "זמן אתחול",
      "ModuleLoadingTimeLabel": "זמן טעינת מודול",
      "ModuleLazyLoadingDelayLabel": "טעינת המודול מושהית",
      "DataFetchTimeLabel": "זמן הבאת נתונים",
      "DataFetchLegendLabel": "הבאת נתונים",
      "ItemsColumnHeader": "פריטים",
      "DurationColumnHeader": "משך זמן",
      "MillisecondsUnitLabel": "{0} אלפיות שניה",
      "NAPlaceholder": "לא ישים"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "מעקב",
      "EmptyTraceData": "לא נטענו מעקבים.",
      "ExportCSVButtonLabel": "ייצא CSV",
      "LevelHeaderLabel": "רמה",
      "MessageHeaderLabel": "הודעה",
      "ScopeHeaderLabel": "טווח",
      "SourceHeaderLabel": "מקור",
      "TimestampHeaderLabel": "חותמת זמן",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "אירעה בעיה בגישה אל נתוני המעקב."
    }
  };

  strings.default = strings;
  return strings;
});
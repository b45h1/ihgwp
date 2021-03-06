define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "نمی تواند برنامه را در این صفحه بارگذاری کند. از دکمه بازگشت مرورگر برای کوشش دوباره استفاده کنید. اگر مشکل هنوز هم وجود داشت با سرپرست سایت به تماس شده و به آنها معلومات را با جزئیات تخنیکی بدهید.",
      "platformFailedToLoadError": "بارگذای پایگاه ناکام ماند. شناسه:‌ \"{0}\"، اسم:‌ \"{1}\"",
      "platformFailedToLoadWithMessageError": "پایگاه در بارگذاری ناکام ماند. Id: \"{0}\" اسم: \"{1}\".\r\n خطا: {2}",
      "applicationFailedToInitializeError": "خطا در آغاز به کار برنامه. خطا: {0}",
      "invalidPreloadedDataError": "داده های قبلا بارگذاری شده نامعتبر.",
      "manifestNotFoundByIdError": "Manifest برای جزئ شناسه \"{0}\" یافت نشد.",
      "manifestNotFoundError": "اظهارنامه برای جزء id \"{0}\" و نسخه \"{1}\" یافت نشد.",
      "systemConfigDisabledError": "System.config() پشتیبانی نشده است. برای مشخص کردن پیکربندی از یک اظهارنامه استفاده کنید.",
      "loadComponentLog": "در حال بارگذاری جزء \"{0}\" ({1}).",
      "loadComponentEndLog": "جزء \"{0}\" ({1}) بارگذاری شد.",
      "loadComponentRetryLog": "در حال بارگذاری جزء \"{0}\" ({1}). اقدام {2} از {3}.",
      "loadComponentError": "ناکامی در بارگذاری جزء \"{0}\" ({1}).\r\nخطای اصلی: {2}",
      "loadComponentMaxRetriesError": "اقدام به بارگذاری جزء \"{0}\" ({1}) {2} مرتبه بدون موفقیت شد.",
      "loadComponentDependencyError": "در بارگذاری وابستگی \"{0}\" جز از جز \"{1}\" ({2}) ناکام ماند.\r\nخطای اصلی: {3}",
      "loadComponentDependencyFailoverPathError": "در بارگذاری وابستگی \"{0}\" جز با مسیر احتمالی \"{1}\" از جز \"{2}\" ({3}) ناکام ماند.\r\nخطای اصلی: {4}",
      "loadPathDependencyLog": "در حال بارگذاری وابستگی مسیر \"{0}\" از جزء \"{1}\" ({2})",
      "loadPathDependencyError": "در بارگذاری وابستگی \"{0}\" مسیر از جز \"{1}\" ({2}) ناکام ماند.\r\nخطای اصلی: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "بارگذاری وابستگی مسیر \"{0}\" از جزء \"{1}\" ({2}) به علت وابستگی دیگر که بارگذاری آن ناکام مانده بود، ناکام ماند.",
      "loadEntryPointError": "در بارگذاری نقطه ورود از جز \"{0}\" ({1}) ناکام ماند.\r\nخطای اصلی: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() یک شیی خالی را برای جزء \"{0}\" ({1}) بازگرداند.",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() یک شیی را با یک خصوصیت حالت اصلی خالی برای جزء \"{0}\" ({1}) بازگرداند.",
      "moduleHasUndeclaredDependencyError": "نقطه ورود برای جز \"{0}\" ({1}) یک وابستگی به \"{2}\" دارد که در اظهارنامه اعلان نشده است.",
      "loadScriptWithStringError": "وظیفه loadScript یک نخ را منحیث یک پارامتر 2 اجازه نمی دهد. استفاده از ILoadScriptOptions به عوض آن.",
      "tooManyManifestsError": "{0} اظهارنامه ها (نسخه های {1}) برای جزء \"{2}\" یافت گردیدند.",
      "tooManyCompatibleVersionsError": "{0} نسخه های سازگار ({1}) برای جزء \"{2}\" نسخه \"{3}\" یافت گردید.",
      "tooManyComponentsError": "برای شناسه \"{0}\" تعداد زیادی اجزا یافت شد.",
      "noComponentFoundError": "برای id \"{0}\"‌جزء یافت نشد.",
      "deleteComponentLog": "در حال حذف کردن جزء \"{0}\" نسخه \"{1}\" از ذخیره گاه.",
      "browserNotSupportedError": "این نسخه مرورگر شما پشتیبانی نمی شود.\r\nلطفا مرورگر تان را به جدیدترین نسخه بهنگام سازید.",
      "ie9OrOlderNotSupportedError": "این صفحه نسخه های Internet Explorer قدیمی تر از نسخه 10 را پشتیبانی نمی کند. لطفا مرورگر وب خود را بهنگام سازید.",
      "firefox43OrOlderNotSupportedError": "این صفحه نسخه های Mozilla Firefox قدیمی تر از نسخه 44 را پشتیبانی نمی کند. لطفا مرورگر وب خود را بهنگام سازید.",
      "resourceNotFoundError": "منبع \"{0}\" در بار کننده پیکربندی اظهارنامه برای جزء \"{1}\" ({2}) یافت نشد.",
      "noFailoverPathError": "نمی تواند resolveAddress() را در یک جزء بدون مسیر عدم قطعیت فرا بخواند",
      "urlStatusLocalhostFileNotFoundError": "دربارگذاری URL '{3}' برای منبع '{2}' در جز '{0}' ({1}) ناکام ماند. فایل در سرور یافت نشد.\r\nمطمئن شوید که شما در حال اجرای 'gulp خدمت' هستید.",
      "urlStatusFileNotFoundError": "دربارگذاری URL '{3}' برای منبع '{2}' در جز '{0}' ({1}) ناکام ماند. فایل در سرور یافت نشد.",
      "urlStatusForbiddenError": "دربارگذاری URL '{3}' برای منبع '{2}' در جز '{0}' ({1}) ناکام ماند. دسترسی به فایل ممنوع شده است.",
      "urlStatusClientErrorError": "دربارگذاری URL '{3}' برای منبع '{2}' در جز '{0}' ({1}) ناکام ماند. در هنگام درخواست فایل خطایی وجود داشت.",
      "urlStatusServerErrorError": "دربارگذاری URL '{3}' برای منبع '{2}' در جز '{0}' ({1}) ناکام ماند. در سرور یک مشکل وجود داشت.",
      "urlStatusLocalhostNetworkErrorError": "دربارگذاری URL '{3}' برای منبع '{2}' در جز '{0}' ({1}) ناکام ماند. مشکلی در شبکه وجود داشت.\r\nمطمئن شوید که 'gulp serve' را اجرا می کنید و 'gulp trust-dev-cert' را اجرا کرده اید.",
      "urlStatusHttpsNetworkErrorError": "دربارگذاری URL '{3}' برای منبع '{2}' در جز '{0}' ({1}) ناکام ماند. یک مشکل در شبکه وجود داشت.\r\nممکن این یک مشکل با یک تصدیقنامه HTTPS باشد. مطمئن شوید که شما تصدیقنامه درست دارید.",
      "urlStatusNetworkErrorError": "دربارگذاری URL '{3}' برای منبع '{2}' در جز '{0}' ({1}) ناکام ماند. یک مشکل در شبکه وجود داشت.",
      "urlStatusUndefinedError": "در بارگذاری URL '{3}' برای منبع '{2}' در جز '{0}' ({1}) بخاطر مشکلات نامعلوم ناکام ماند.",
      "isUndefinedValidateError": "مقدار برای \"{0}\" تعریف نشده نباید باشد",
      "failedToCreateGlobalVariableError": "در ایجاد متغیر \"{0}\" جهانی از اسکرپت \"{1}\" ناکام ماند",
      "dependencyLoadError": "ناکامی در بارگذاری ماژول '{0}' بخاطر اینکه وابستگی {1} بارگذاری نشده بود",
      "missingPathDependencyError": "عدم وجود وابستگی مسیر \"{0}\" از جزء \"{1}\" ({2}). وابستگی های مسیر موجود: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "خطا در بارگذاری اسکرپت عیب زدایی. اطمینان حاصل کنید که سرور فعال است و URL پارامتر \"{0}\" درست است.",
      "errorLoadingDebugScriptHTTP": "خطا در بارگذاری اسکرپت عیب زدایی. اطمینان حاصل کنید که سرور فعال است و URL پارامتر \"{0}\" درست است و بارگذاری اسکرپت های نا امن اجازه داده شده اند. و نیز استفاده از تصدیقنامه انکشاف و خدمات اسکرپت های عیب زدایی در HTTPS را مدنظر بگیرید.",
      "errorLoadingDebugScriptMalformed": "خطا در بارگذاری اسکرپت عیب زدایی. معلوم میشود که URL ({0}) ناقص شکل باشد.",
      "errorLoadingDebugScriptUnknown": "در بار گذاری یک اسکرپت عیب زدایی، خطای ناشناخته رخ داد.",
      "errorLoadingDebugLoaderTitle": "خطا در بارگذاری بار گذاری کننده عیب زدایی.",
      "errorLoadingDebugManifestTitle": "خطا در بارگذاری اظهارنامه های عیب زدایی.",
      "errorLoadingUnknownTitle": "خطا در بارگذاری اسکرپت های عیب زدایی."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "جزء یا ویژگی آغاز کننده ناقص.",
      "closeDeveloperToolsAriaLabel": "بستن ابزار انکشاف دهنده."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "اخطار!",
      "warningLine1": "استفاده از این وسیله شما را در معرض تهدیدات امنیتی احتمالی قرار می دهد که می تواند باعث شود که دیگران به داده های شخصی Office 365 شما (مدارک، ایمیل ها، گفتگوها و بیشتر) دسترسی پیدا کنند. قبل از ادامه، مطمئن شوید که شما شخص یا سازمان که از شما درخواست کرده به این وسیله دسترسی پیدا کنید، مورد اعتماد تان هست.",
      "warningLine2": "آموختن بیشتر در اینجا: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "در بارگذاری اظهارنامه های عیب زدایی خطایی رخ داد.",
      "debugManifestErrorDismissButtonText": "رد کردن"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "اسکرپت های عیب زدایی اجازه داده شوند؟",
      "allowDebugLoaderTitle": "به بارگذاری کننده عیب زدایی اجازه داده شود؟",
      "allowDebugLoaderAndManifestsTitle": "به بار گذاری کننده عیب زدایی و اسکرپت عیب زدایی اجازه داده شود؟",
      "debugManifestLoadingWarning": "اخطار: این صفحه حاوی اسکرپت های نا امن هستند، که اگر بارگذاری شوند، می توانند بصورت بالقوه کامپیوتر شما را آسیب بزنند. ادامه ندهید مگر اینکه انکشاف دهنده مورد اعتماد شما باشد و از خطرات آن آگاه باشید.",
      "debugManifestLoadingWarning2": "اگر مطمئن نیستید، بالای {0} کلیک کنید.",
      "debugManifestLoadingConfirm": "بارگذاری کردن اسکرپت های عیب زدایی",
      "debugManifestLoadingCancel": "اسکرپت های عیب زدایی کردن را بارگذاری نکنید",
      "debugManifestLoadingCalloutText": "اگر نمی دانید چه کار کنید، اینجا کلیک کنید."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "در حال بارکردن...",
      "developerToolsTabLoadingUnknownError": "خطای نامعلوم در هنگام بارگذاری ماژول ابزار انکشاف دهنده."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "نمایش ها",
      "noManifestSelected": "انتخاب نشدن نمایش"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "کارآیی",
      "ErrorAccessingPerfDataErrorMessage": "عدم توانایی بدست آوردن داده های کارایی: شیی خالی و یا تعریف نشده است.",
      "ErrorAccessingRedirectDataErrorMessage": "در هنگام دستیابی به داده های کارایی هدایت دوباره HTTP مشکلی وجود داشت.",
      "ErrorParsingPercievedLatencyErrorMessage": "در هنگام تجزیه داده ها در مورد درک رکود خطا دریافت شد.",
      "ErrorParsingApiDataErrorMessage": "در هنگام تجزیه داده های API، یک خطا دریافت شد.",
      "UnkownPerformanceDataErrorMessage": "یک خطای نامعلوم رخ داد: {0}",
      "DefaultWebPartName": "بخش وب",
      "ServerResponseLabel": "پاسخگویی سرور",
      "ApplicationInitializationLabel": "در حال آغازبه کار برنامه",
      "ScriptFetchEvalLabel": "واکشی اسکرپت و ارزیابی",
      "SpLoaderStartLabel": "آغاز کار SPFx",
      "PageRenderLabel": "ارائه صفحه",
      "LeftNavRenderLabel": "ارایه راهیابی چپ",
      "CanvasRenderLabel": "ارائه بوم نقاشی",
      "LayoutRenderLabel": "ارائه طرح بندی",
      "RedirectResponseLabel": "پاسخ هدایت دوباره",
      "AppLoadLabel": "بارگذاری برنامه",
      "RenderWebPartsLabel": "ارایه بخش های وب",
      "TotalRenderTimeLabel": "مجموعی",
      "GeneralErrorMessage": "متاسفیم، در هنگام بدست آوردن داده های کارایی خطایی رخ داد.",
      "ErrorMessagePrefix": "پیام خطا: {0}",
      "PerformanceDataHint": "یادداشت: بعد از اضافه کردن یا دور ساختن یک بخش وب، صفحه را بصورت مجدد تازه کنید تا داده های کارآیی بهنگام شده را ببینید.",
      "ModulesLoadedLegendLabel": "ماژول های بارگذاری شده",
      "InitializationLegendLabel": "آغاز کردن",
      "RenderTimeLegendLabel": "زمان ارائه",
      "InitializationTimeLabel": "زمان آغاز به کار",
      "ModuleLoadingTimeLabel": "زمان بارگذاری ماژول",
      "ModuleLazyLoadingDelayLabel": "بارگذاری ماژول به تأخیر افتاد",
      "DataFetchTimeLabel": "زمان واکشی داده ها",
      "DataFetchLegendLabel": "واکشی داده ها",
      "ItemsColumnHeader": "عناصر",
      "DurationColumnHeader": "مدت زمان",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "در دسترس نیست"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "ردیابی کردن",
      "EmptyTraceData": "ردیابی ها بارگذاری نشده اند.",
      "ExportCSVButtonLabel": "صدور CSV",
      "LevelHeaderLabel": "سطح",
      "MessageHeaderLabel": "پیام",
      "ScopeHeaderLabel": "محدوده",
      "SourceHeaderLabel": "منبع",
      "TimestampHeaderLabel": "مهرزمان",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "در قسمت دسترسی به داده های ردیابی مشکلی وجود داشت."
    }
  };

  strings.default = strings;
  return strings;
});
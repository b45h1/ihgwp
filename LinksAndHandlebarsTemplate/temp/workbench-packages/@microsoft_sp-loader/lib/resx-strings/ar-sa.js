define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "لا يمكن تحميل التطبيق في هذه الصفحة. استخدم الزر \"للخلف\" في مستعرض الويب لإعادة المحاولة. إذا استمرت المشكلة، فاتصل بمسؤول الموقع وأخبره بالمعلومات الموجودة في \"التفاصيل التقنية\".",
      "platformFailedToLoadError": "فشل تحميل النظام الأساسي. المعرف: \"{0}\"، الاسم: \"{1}\"",
      "platformFailedToLoadWithMessageError": "فشل تحميل النظام الأساسي. المعرف: \"{0}\"، الاسم: \"{1}\".\r\nالخطأ: {2}",
      "applicationFailedToInitializeError": "خطأ في تهيئة التطبيق. الخطأ: {0}",
      "invalidPreloadedDataError": "البيانات التي تم تحميلها مسبقاً غير صالحة.",
      "manifestNotFoundByIdError": "لم يتم العثور على بيان لمعرف المكون \"{0}\".",
      "manifestNotFoundError": "لم يتم العثور على بيان لمعرف المكّون \"{0}\" والإصدار \"{1}\".",
      "systemConfigDisabledError": "System.config() غير مدعم. استخدم بياناً لتحديد التكوين.",
      "loadComponentLog": "يتم تحميل المكون \"{0}\" ({1}).",
      "loadComponentEndLog": "تم تحميل المكون \"{0}\" ({1}).",
      "loadComponentRetryLog": "تحميل المكون \"{0}\" ({1}). المحاولة {2} من {3}.",
      "loadComponentError": "فشل تحميل المكّون \"{0}\" ({1}).\r\nالخطأ الأصلي: {2}",
      "loadComponentMaxRetriesError": "تمت محاولة تحميل المكون \"{0}\" ({1}) {2} من المرات دون جدوى.",
      "loadComponentDependencyError": "فشل تحميل تبعية المكون \"{0}\" من المكون \"{1}\" ({2}).\r\nالخطأ الأصلي: {3}",
      "loadComponentDependencyFailoverPathError": "فشل تحميل تبعية المكون \"{0}\" بمسار تجاوز الفشل \"{1}\" من المكون \"{2}\" ({3}).\r\nالخطأ الأصلي: {4}",
      "loadPathDependencyLog": "تحميل تبعية المسار \"{0}\" من المكون \"{1}\" ({2})",
      "loadPathDependencyError": "فشل تحميل تبعية المسار \"{0}\" من المكون \"{1}\" ({2}).\r\nالخطأ الأصلي: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "فشل تحميل تبعية المسار \"{0}\" من المكون \"{1}\" ({2}) بسبب فشل تحميل تبعية أخرى.",
      "loadEntryPointError": "فشل تحميل نقطة الإدخال من المكون \"{0}\" ({1}).\r\nالخطأ الأصلي: {2}",
      "loadComponentReturnsEmptyError": "قام loadComponent() بإرجاع عنصر فارغ للمكون \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "قام loadComponent() بإرجاع عنصر بخاصية افتراضية فارغة للمكون \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "تتضمن نقطة الإدخال الخاصة بالمكون \"{0}\" ({1}) تبعية لـ \"{2}\" لم يتم تعريفها في البيان.",
      "loadScriptWithStringError": "لا تسمح وظيفة loadScript بسلسلة كمعلمة ثانية. استخدم ILoadScriptOptions بدلاً من ذلك.",
      "tooManyManifestsError": "تم العثور على {0} من البيانات (بالإصدارات {1}) للمكون \"{2}\".",
      "tooManyCompatibleVersionsError": "تم العثور على {0} من الإصدارات المتوافقة ({1}) للمكّون \"{2}\" بالإصدار \"{3}\".",
      "tooManyComponentsError": "تم العثور على الكثير من المكونات للمعرف \"{0}\".",
      "noComponentFoundError": "لم يتم العثور على مكون للمعرف \"{0}\".",
      "deleteComponentLog": "يتم حذف المكون \"{0}\" من الإصدار\"{1}\" من المتجر.",
      "browserNotSupportedError": "إصدار المستعرض هذا غير مدعم.\r\nالرجاء تحديث المستعرض إلى الإصدار الأخير.",
      "ie9OrOlderNotSupportedError": "لا تدعم هذه الصفحة إصدارات Internet Explorer الأقدم من الإصدار 10. الرجاء تحديث مستعرض الويب الخاص بك.",
      "firefox43OrOlderNotSupportedError": "لا تدعم هذه الصفحة إصدارات Mozilla Firefox الأقدم من الإصدار 44. الرجاء تحديث مستعرض الويب المثبت لديك.",
      "resourceNotFoundError": "لم يتم العثور على المورد \"{0}\" في تكوين أداة تحميل البيان للمكون \"{1}\" ({2}).",
      "noFailoverPathError": "تعذر استدعاء resolveAddress() على مكون بدون مسار تجاوز الفشل",
      "urlStatusLocalhostFileNotFoundError": "فشل تحميل URL '{3}' للمورد '{2}' في المكون '{0}' ({1}). لم يتم العثور على الملف في الخادم.\r\nتأكد من أنك تقوم بتشغيل 'gulp serve'.",
      "urlStatusFileNotFoundError": "فشل تحميل URL '{3}' للمورد '{2}' في المكون '{0}' ({1}). لم يتم العثور على الملف في الخادم.",
      "urlStatusForbiddenError": "فشل تحميل URL '{3}' للمورد '{2}' في المكون '{0}' ({1}). تم منع الوصول إلى الملف.",
      "urlStatusClientErrorError": "فشل تحميل URL '{3}' للمورد '{2}' في المكون '{0}' ({1}). حدث خطأ أثناء طلب الملف.",
      "urlStatusServerErrorError": "فشل تحميل URL '{3}' للمورد '{2}' في المكون '{0}' ({1}). حدثت مشكلة في الخادم.",
      "urlStatusLocalhostNetworkErrorError": "فشل تحميل عنوان URL '{3}' للمورد '{2}' في المكون '{0}' ({1}). حدثت مشكلة في الشبكة.\r\nتأكد من تشغيل 'gulp serve' وأنك قد شغلت 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "فشل تحميل URL '{3}' للمورد '{2}' في المكون '{0}' ({1}). هناك مشكلة في الشبكة.\r\nقد تكون المشكلة في شهادة HTTPS. تأكد من أن لديك الشهادة الصحيحة.",
      "urlStatusNetworkErrorError": "فشل تحميل URL '{3}' للمورد '{2}' في المكون '{0}' ({1}). هناك مشكلة في الشبكة.",
      "urlStatusUndefinedError": "فشل تحميل URL '{3}' للمورد '{2}' في المكون '{0}' ({1}) بسبب مشاكل غير معروفة.",
      "isUndefinedValidateError": "يجب ألا تكون قيمة \"{0}\" غير محددة",
      "failedToCreateGlobalVariableError": "فشل إنشاء المتغير العمومي \"{0}\" من البرنامج النصي \"{1}\"",
      "dependencyLoadError": "فشل تحميل الوحدة النمطية '{0}' لأنه لم يتم تحميل التبعية {1}",
      "missingPathDependencyError": "تبعية المسار \"{0}\" مفقود من مكون \"{1}\" ({2}). التبعيات المسار الحالية: {3}",
      "listSeparator": "، "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "حدث خطأ أثناء تحميل البرنامج النصي لتتبع الأخطاء. تأكد من تشغيل الخادم ومن صحة عنوان URL للمعلمة \"{0}\".",
      "errorLoadingDebugScriptHTTP": "حدث خطأ أثناء تحميل البرنامج النصي لتتبع الأخطاء. تأكد من تشغيل الخادم ومن صحة عنوان URL للمعلمة \"{0}\"، وتأكد من السماح بتحميل البرامج النصية غير الآمنة. من المستحسن أيضاً استخدام شهادة تطوير وتوصيل البرامج النصية لتتبع الأخطاء عبر HTTPS.",
      "errorLoadingDebugScriptMalformed": "حدث خطأ أثناء تحميل البرنامج النصي لتتبع الأخطاء. يبدو أن عنوان URL لتتبع الأخطاء ({0}) غير صحيح.",
      "errorLoadingDebugScriptUnknown": "حدث خطأ غير معروف أثناء تحميل برنامج نصي لتتبع الأخطاء.",
      "errorLoadingDebugLoaderTitle": "حدث خطأ أثناء تحميل أداة تحميل تتبع الأخطاء.",
      "errorLoadingDebugManifestTitle": "حدث خطأ أثناء تحميل بيانات تتبع الأخطاء.",
      "errorLoadingUnknownTitle": "حدث خطأ أثناء تحميل البرامج النصية لتتبع الأخطاء."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "دالة مهيئ أو مكون مفقود.",
      "closeDeveloperToolsAriaLabel": "إغلاق أدوات المطور."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "تحذير!",
      "warningLine1": "يُعرضك استخدام هذه الأداة للتهديدات الأمنية المحتملة التي يمكن أن تؤدي إلى وصول الآخرين إلى بيانات Office 365 الشخصية (المستندات ورسائل البريد الإلكتروني، والمحادثات وأكثر). تأكد من أنك تثق بالشخص أو المؤسسة التي طلبت منك الوصول إلى هذه الأداة قبل المتابعة.",
      "warningLine2": "التعرف على المزيد من هنا: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "حدث خطأ أثناء تحميل بيانات تتبع الأخطاء.",
      "debugManifestErrorDismissButtonText": "تجاهل"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "هل تريد السماح لبرامج تتبع الأخطاء النصية؟",
      "allowDebugLoaderTitle": "هل تريد السماح لأداة تحميل تتبع الأخطاء؟",
      "allowDebugLoaderAndManifestsTitle": "هل تريد السماح بتشغيل أداة تحميل تتبع الأخطاء والبرامج النصية لتتبع الأخطاء؟",
      "debugManifestLoadingWarning": "تحذير: تحتوي هذه الصفحة على برامج نصية غير آمنة، وإذا تم تحميلها فقد تضر بجهاز الكمبيوتر الخاص بك. لا تقم بالمتابعة إلا إذا كنت تثق بالمطور وتدرك المخاطر.",
      "debugManifestLoadingWarning2": "إذا لم تكن متأكداً، فانقر فوق {0}.",
      "debugManifestLoadingConfirm": "تحميل البرامج النصية لتتبع الأخطاء",
      "debugManifestLoadingCancel": "عدم تحميل البرامج النصية لتتبع الأخطاء",
      "debugManifestLoadingCalloutText": "إذا كنت لا تعرف ما هذا، فانقر هنا."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "يتم الآن التحميل...",
      "developerToolsTabLoadingUnknownError": "حدث خطأ غير معروف أثناء تحميل وحدة نمطية لأدوات المطور."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "بيانات",
      "noManifestSelected": "لا يوجد بيان محدد"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "الأداء",
      "ErrorAccessingPerfDataErrorMessage": "تعذر استرداد بيانات الأداء: يعتبر العنصر فارغاً أو غير معرّف.",
      "ErrorAccessingRedirectDataErrorMessage": "حدثت مشكلة أثناء الوصول إلى بيانات أداء HTTP لإعادة التوجيه.",
      "ErrorParsingPercievedLatencyErrorMessage": "تم اكتشاف خطأ عند تحليل بيانات زمن الانتقال المتوقع.",
      "ErrorParsingApiDataErrorMessage": "تم اكتشاف خطأ عند تحليل بيانات API.",
      "UnkownPerformanceDataErrorMessage": "حدث خطأ غير معروف: {0}",
      "DefaultWebPartName": "جزء ويب",
      "ServerResponseLabel": "استجابة الخادم",
      "ApplicationInitializationLabel": "تهيئة التطبيق",
      "ScriptFetchEvalLabel": "إحضار البرنامج النصي والتقييم",
      "SpLoaderStartLabel": "تهيئة SPFx",
      "PageRenderLabel": "عرض الصفحة",
      "LeftNavRenderLabel": "عرض التنقل الأيمن",
      "CanvasRenderLabel": "عرض اللوحة",
      "LayoutRenderLabel": "عرض التخطيط",
      "RedirectResponseLabel": "استجابة إعادة التوجيه",
      "AppLoadLabel": "تحميل التطبيق",
      "RenderWebPartsLabel": "عرض أجزاء الويب",
      "TotalRenderTimeLabel": "الإجمالي",
      "GeneralErrorMessage": "عذراً، حدث خطأ ما أثناء استرداد بيانات الأداء.",
      "ErrorMessagePrefix": "رسالة الخطأ: {0}",
      "PerformanceDataHint": "ملاحظة: بعد إضافة جزء ويب أو إزالته، قم بتحديث الصفحة لرؤية بيانات الأداء المحدثة.",
      "ModulesLoadedLegendLabel": "الوحدات النمطية التي تم تحميلها",
      "InitializationLegendLabel": "تهيئة",
      "RenderTimeLegendLabel": "وقت العرض",
      "InitializationTimeLabel": "وقت التهيئة",
      "ModuleLoadingTimeLabel": "وقت تحميل الوحدة النمطية",
      "ModuleLazyLoadingDelayLabel": "تأخر تحميل الوحدة النمطية",
      "DataFetchTimeLabel": "وقت إحضار البيانات",
      "DataFetchLegendLabel": "إحضار البيانات",
      "ItemsColumnHeader": "العناصر",
      "DurationColumnHeader": "المدة",
      "MillisecondsUnitLabel": "{0} مللي ثانية",
      "NAPlaceholder": "غير متوفر"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "تتبع",
      "EmptyTraceData": "لم يتم تحميل أي عمليات تتبع.",
      "ExportCSVButtonLabel": "تصدير CSV",
      "LevelHeaderLabel": "المستوى",
      "MessageHeaderLabel": "الرسالة",
      "ScopeHeaderLabel": "نطاق",
      "SourceHeaderLabel": "المصدر",
      "TimestampHeaderLabel": "الطابع الزمني",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "حدثت مشكلة أثناء الوصول إلى بيانات التتبع."
    }
  };

  strings.default = strings;
  return strings;
});
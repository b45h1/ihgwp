define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "इस पृष्ठ पर एप्लिकेशन लोड नहीं कर सकते. पुनर्प्रयास करने के लिए ब्राउज़र के वापस जाएँ बटन का उपयोग करें. अगर समस्या बनी रहती है, तो साइट के व्यवस्थापक से संपर्क करें और उन्हें तकनीकी विवरण में जानकारी दें.",
      "platformFailedToLoadError": "प्लेटफ़ॉर्म लोड होने में विफल रहा. Id: \"{0}\", नाम,: \"{1}\"",
      "platformFailedToLoadWithMessageError": "प्लेटफ़ॉर्म लोड होने में विफल रहा. Id: \"{0}\", नाम: \"{1}\".\r\nत्रुटि: {2}",
      "applicationFailedToInitializeError": "एप्लिकेशन प्रारंभ करने में त्रुटि. त्रुटि: {0}",
      "invalidPreloadedDataError": "पहले से लोड किया गया डेटा अमान्य है.",
      "manifestNotFoundByIdError": "घटक id \"{0}\" के लिए सूची नहीं मिली.",
      "manifestNotFoundError": "घटक id \"{0}\" और संस्करण \"{1}\" के लिए सूची नहीं मिली.",
      "systemConfigDisabledError": "System.config() समर्थित नहीं है. कॉन्फ़िगरेशन को निर्दिष्ट करने के लिए सूची का उपयोग करें.",
      "loadComponentLog": "घटक \"{0}\" ({1}) लोड हो रहा है.",
      "loadComponentEndLog": "घटक \"{0}\" ({1}) लोड हो गया है.",
      "loadComponentRetryLog": "घटक \"{0}\" ({1}) को लोड करना. {3} में से {2} प्रयास.",
      "loadComponentError": "घटक \"{0}\" लोड करना विफल रहा ({1}).\r\nमूल त्रुटि: {2}",
      "loadComponentMaxRetriesError": "बिना सफल हुए घटक \"{0}\" ({1}) को {2} बार लोड करने का प्रयास किया गया.",
      "loadComponentDependencyError": "\"{0}\" घटक से, घटक निर्भरता \"{1}\" ({2}) लोड करने में विफल रहा.\r\nमूल त्रुटि: {3}",
      "loadComponentDependencyFailoverPathError": "\"{2}\" ({3}) घटक से फ़ेलओवर पथ \"{1}\" वाली घटक निर्भरता \"{0}\" लोड करने में विफल.\r\nमूल त्रुटि: {4}",
      "loadPathDependencyLog": "घटक \"{1}\" ({2}) से पथ निर्भरता \"{0}\" लोड कर रहा है",
      "loadPathDependencyError": "\"{1}\" ({2}) घटक से पथ निर्भरता \"{0}\" लोड करने में विफल.\r\nमूल त्रुटि: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "किसी अन्य निर्भरता के लोड होने में विफल रहने के कारण घटक \"{1}\" ({2}) से पथ निर्भरता \"{0}\" लोड करने में विफल रहा.",
      "loadEntryPointError": "\"{0}\" ({1}) घटक से प्रवेश बिंदु को लोड करने में विफल.\r\nमूल त्रुटि: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() ने \"{0}\" ({1}) घटक के लिए कोई रिक्त ऑब्जेक्ट लौटाया.",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() ने \"{0}\" ({1}) घटक के लिए कोई रिक्त डिफ़ॉल्ट गुण के साथ एक ऑब्जेक्ट लौटाया.",
      "moduleHasUndeclaredDependencyError": "घटक \"{0}\" ({1}) के लिए प्रविष्टि बिंदु में \"{2}\" पर निर्भरता है जो सूची में घोषित नहीं की गई है.",
      "loadScriptWithStringError": "loadScript फ़ंक्शन किसी स्ट्रिंग को दूसरा पैरामीटर होने की अनुमति नहीं देता. इसके बजाय ILoadScriptOptions का उपयोग करें.",
      "tooManyManifestsError": "घटक \"{2}\" के लिए {0} सूचियाँ (संस्करण {1}) मिलीं.",
      "tooManyCompatibleVersionsError": "घटक \"{2}\" संस्करण \"{3}\" के लिए {0} संगत संस्करण ({1}) मिले.",
      "tooManyComponentsError": "id \"{0}\" के लिए कई घटक मिले.",
      "noComponentFoundError": "id \"{0}\" के लिए कोई भी घटक नहीं मिला.",
      "deleteComponentLog": "स्टोर से घटक \"{0}\" संस्करण \"{1}\" को हटाना.",
      "browserNotSupportedError": "आपके ब्राउज़र का यह संस्करण समर्थित नहीं है.\r\nकृपया अपने ब्राउज़र को नवीनतम संस्करण में अद्यतित करें.",
      "ie9OrOlderNotSupportedError": "यह पृष्ठ Internet Explorer के संस्करण 10 के बाद की रिलीजेज़ का समर्थन नहीं करता. कृपया अपना वेब ब्राउज़र अद्यतन करें.",
      "firefox43OrOlderNotSupportedError": "यह पृष्ठ Mozilla Firefox के संस्करण 44 के बाद की रिलीज़ का समर्थन नहीं करता है. कृपया अपने वेब ब्राउज़र का अद्यतन करें.",
      "resourceNotFoundError": "घटक \"{1}\" ({2}) के लिए सूची के लोडर कॉन्फ़िगरेशन में संसाधन \"{0}\" नहीं मिला.",
      "noFailoverPathError": "बिना failover पथ के किसी घटक पर ResolveAddress() को कॉल नहीं कर सकता",
      "urlStatusLocalhostFileNotFoundError": "घटक '{0}' ({1}) में संसाधन '{2}' के लिए URL '{3}' लोड करने में विफल रहा. फ़ाइल सर्वर में नहीं मिली थी.\r\nसुनिश्चित करें कि आप 'gulp serve' चला रहे हैं.",
      "urlStatusFileNotFoundError": "घटक '{0}' ({1}) में संसाधन '{2}' के लिए URL '{3}' लोड करने में विफल रहा. फ़ाइल सर्वर में नहीं मिली थी.",
      "urlStatusForbiddenError": "'{0}' ({1}) घटक में '{2}' संसाधन के लिए URL '{3}' लोड करने में विफल. फ़ाइल के लिए पहुँच निषिद्ध है.",
      "urlStatusClientErrorError": "'{0}' ({1}) घटक में '{2}' संसाधन के लिए URL '{3}' लोड करने में विफल. फ़ाइल को अनुरोधित करने में त्रुटि थी.",
      "urlStatusServerErrorError": "घटक '{0}' ({1}) में संसाधन '{2}' के लिए URL '{3}' लोड करने में विफल रहा. सर्वर में कोई समस्या थी.",
      "urlStatusLocalhostNetworkErrorError": "घटक '{0}' ({1}) में संसाधन '{2}' के लिए URL '{3}' लोड करने में विफल रहा. कोई नेटवर्क समस्या थी.\r\nसुनिश्चित करें कि आप 'gulp serve' चला रहे हैं और आपने ’gulp trust-dev-cert’ को चला लिया है.",
      "urlStatusHttpsNetworkErrorError": "घटक '{0}' ({1}) में संसाधन '{2}' के लिए URL '{3}' लोड करने में विफल रहा. कोई नेटवर्क समस्या थी.\r\nहो सकता है कि यह HTTPS प्रमाण पत्र की एक समस्या हो. सुनिश्चित करें कि आपके पास सही प्रमाण पत्र हैं.",
      "urlStatusNetworkErrorError": "घटक '{0}' ({1}) में संसाधन '{2}' के लिए URL '{3}' लोड करने में विफल रहा. कोई नेटवर्क समस्या थी.",
      "urlStatusUndefinedError": "अज्ञात समस्या के कारण घटक '{0}' ({1}) में संसाधन '{2}' के लिए URL '{3}' लोड करने में विफल रहा.",
      "isUndefinedValidateError": "\"{0}\" का मान अनिर्धारित नहीं होना चाहिए",
      "failedToCreateGlobalVariableError": "स्क्रिप्ट \"{1}\" से वैश्विक चर \"{0}\" बनाने में विफल",
      "dependencyLoadError": "मॉड्यूल '{0}' लोड करने में विफल क्योंकि निर्भरता {1} लोड नहीं हुई थी",
      "missingPathDependencyError": "घटक \"{1}\" ({2}) से गुम पथ निर्भरता \"{0}\". मौजूदा पथ निर्भरताएँ: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "डीबग सूची स्क्रिप्ट लोड करने में त्रुटि. सुनिश्चित करें कि सर्वर चल रहा है और \"{0}\" पैरामीटर URL सही है.",
      "errorLoadingDebugScriptHTTP": "डीबग स्क्रिप्ट लोड करने में त्रुटि. सुनिश्चित करें कि सर्वर चल रहा है, \"{0}\" पैरामीटर URL सही है और असुरक्षित स्क्रिप्ट्स लोड करने की अनुमति है. डेवलपमेंट प्रमाण पत्र का उपयोग करने और HTTPS पर डीबग स्क्रिप्ट्स सर्व करने पर विचार करें.",
      "errorLoadingDebugScriptMalformed": "डीबग स्क्रिप्ट लोड करने में त्रुटि. डीबग URL ({0}) विकृत लग रहा है.",
      "errorLoadingDebugScriptUnknown": "डीबग स्क्रिप्ट लोड करते समय अज्ञात त्रुटि.",
      "errorLoadingDebugLoaderTitle": "डीबग लोडर को लोड करने में त्रुटि.",
      "errorLoadingDebugManifestTitle": "डीबग सूचियाँ लोड करने में त्रुटि.",
      "errorLoadingUnknownTitle": "डीबग स्क्रिप्ट लोड करने में त्रुटि."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "घटक या आरंभक फ़ंक्शन गुम है.",
      "closeDeveloperToolsAriaLabel": "डेवलपर उपकरण बंद करें."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "चेतावनी!",
      "warningLine1": "इस उपकरण का उपयोग आपके समक्ष ऐसे संभावित सुरक्षा जोख़िमों को उजागर करता है जिसका परिणाम अन्य लोगों द्वारा आपके व्यक्तिगत Office 365 डेटा (दस्तावेज़, ईमेल्स, वार्तालाप इत्यादि) की पहुँच प्राप्त करना हो सकता है. आगे बढ़ने से पहले सुनिश्चित करें कि जिस व्यक्ति या संगठन ने इस उपकरण पर पहुँचने की आपसे अनुमति माँगी है, उस पर आपको विश्वास है.",
      "warningLine2": "यहाँ अधिक जानें: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "डीबग सूचियाँ लोड करते समय कोई त्रुटि उत्पन्न हुई.",
      "debugManifestErrorDismissButtonText": "ख़ारिज करें"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "डीबग स्क्रिप्ट्स की अनुमति दें?",
      "allowDebugLoaderTitle": "डीबग लोडर की अनुमति दें?",
      "allowDebugLoaderAndManifestsTitle": "डीबग लोडर और डीबग स्क्रिप्ट की अनुमति दें?",
      "debugManifestLoadingWarning": "चेतावनी: इस पृष्ठ में ऐसी असुरक्षित स्क्रिप्ट्स हैं, जिन्हें अगर लोड किया गया, तो संभवतः आपके कंप्यूटर को नुकसान पहुँच सकता है. जब तक आपको डेवलपर पर विश्वास न हो और आप जोखिमों को न समझते हों, तब तक आगे न बढ़ें.",
      "debugManifestLoadingWarning2": "अगर आप आश्वस्त नहीं हैं, तो {0} क्लिक करें.",
      "debugManifestLoadingConfirm": "डीबग स्क्रिप्ट लोड करें",
      "debugManifestLoadingCancel": "डीबग स्क्रिप्ट लोड नहीं करें",
      "debugManifestLoadingCalloutText": "यदि आप नहीं जानते कि क्या करना है, तो यहाँ क्लिक करें."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "लोड हो रहा है...",
      "developerToolsTabLoadingUnknownError": "डेवलपर उपकरण मॉड्यूल लोड करते समय अज्ञात त्रुटि."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "सूचियाँ",
      "noManifestSelected": "कोई सूची चयनित नहीं"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "प्रदर्शन",
      "ErrorAccessingPerfDataErrorMessage": "प्रदर्शन डेटा पुनर्प्राप्त करने में असमर्थ: ऑब्जेक्ट नल या अनिर्धारित है.",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP रीडायरेक्ट प्रदर्शन डेटा तक पहुँचने में कोई समस्या थी.",
      "ErrorParsingPercievedLatencyErrorMessage": "माना गया लेटेंसी डेटा पार्स करते समय कोई त्रुटि मिली.",
      "ErrorParsingApiDataErrorMessage": "API डेटा पार्स करते समय कोई त्रुटि मिली.",
      "UnkownPerformanceDataErrorMessage": "कोई अज्ञात त्रुटि हुई: {0}",
      "DefaultWebPartName": "वेब पार्ट",
      "ServerResponseLabel": "सर्वर प्रतिसाद",
      "ApplicationInitializationLabel": "ऐप्लिकेशन प्रारंभ करना",
      "ScriptFetchEvalLabel": "स्क्रिप्ट फ़ेच और मूल्यांकन",
      "SpLoaderStartLabel": "SPFx प्रारंभन",
      "PageRenderLabel": "पृष्ठ रेंडर",
      "LeftNavRenderLabel": "बायाँ नेविगेशन रेंडर",
      "CanvasRenderLabel": "कैनवास रेंडर",
      "LayoutRenderLabel": "लेआउट रेंडर",
      "RedirectResponseLabel": "प्रतिसाद रीडायरेक्ट करें",
      "AppLoadLabel": "एप्लिकेशन लोड",
      "RenderWebPartsLabel": "वेब पार्ट रेंडर करना",
      "TotalRenderTimeLabel": "कुल योग",
      "GeneralErrorMessage": "क्षमा करें, निष्पादन डेटा प्राप्त करते समय कुछ गलत हुआ.",
      "ErrorMessagePrefix": "त्रुटि संदेश: {0}",
      "PerformanceDataHint": "नोट: किसी वेब पार्ट को जोड़ने या निकालने के बाद, अद्यतन किया गया प्रदर्शन डेटा देखने के लिए पृष्ठ को ताज़ा करें.",
      "ModulesLoadedLegendLabel": "मॉड्यूल्स लोड किए गए",
      "InitializationLegendLabel": "प्रारंभन",
      "RenderTimeLegendLabel": "समय रेंडर करें",
      "InitializationTimeLabel": "प्रारंभ समय",
      "ModuleLoadingTimeLabel": "मॉड्यूल लोडिंग का मय",
      "ModuleLazyLoadingDelayLabel": "मॉड्यूल लोड करने में विलंब हुआ",
      "DataFetchTimeLabel": "डेटा प्राप्ति समय",
      "DataFetchLegendLabel": "डेटा प्राप्ति",
      "ItemsColumnHeader": "आइटम",
      "DurationColumnHeader": "अवधि",
      "MillisecondsUnitLabel": "{0} मिसे",
      "NAPlaceholder": "N/A"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "ट्रेस करें",
      "EmptyTraceData": "कोई ट्रेस लोड नहीं किया गया.",
      "ExportCSVButtonLabel": "CSV निर्यात करें",
      "LevelHeaderLabel": "स्तर",
      "MessageHeaderLabel": "संदेश",
      "ScopeHeaderLabel": "क्षेत्र",
      "SourceHeaderLabel": "स्रोत",
      "TimestampHeaderLabel": "Timestamp",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "ट्रेस डेटा तक पहुँचने में कोई समस्या थी."
    }
  };

  strings.default = strings;
  return strings;
});
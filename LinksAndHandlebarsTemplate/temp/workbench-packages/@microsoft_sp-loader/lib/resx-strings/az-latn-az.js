define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Bu səhifədə proqramı yükləmək olmur. Təkrar cəhd etmək üçün brauzerin Geri düyməsini istifadə edin. Problem davam edərsə, saytın inzibatçısı ilə əlaqə saxlayın və Texniki Təfərrüatlarda onlara məlumat verin.",
      "platformFailedToLoadError": "Platforma yüklənilmədi. İd: \"{0}\", adı: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Platforma yüklənmədi. Id: \"{0}\", ad: \"{1}\".\r\nSəhv: {2}",
      "applicationFailedToInitializeError": "Proqramı işə salmaqla bağlı səhv. Səhv: {0}",
      "invalidPreloadedDataError": "Əvvəlcədən yüklənmiş verilənlər yanlışdır.",
      "manifestNotFoundByIdError": "Manifest \"{0}\" komponent id-si üçün tapılmadı.",
      "manifestNotFoundError": "\"{0}\" komponent identifikatoru və \"{1}\" versiyası üçün manifest tapılmadı.",
      "systemConfigDisabledError": "System.config() dəstəklənmir. Konfiqurasiyanı göstərmək üçün manifestdən istifadə edin.",
      "loadComponentLog": "\"{0}\" ({1}) komponenti yüklənir.",
      "loadComponentEndLog": "\"{0}\" ({1}) komponenti yükləndi.",
      "loadComponentRetryLog": "\"{0}\" ({1}) komponenti yüklənir. Cəhd {2} / {3}.",
      "loadComponentError": "\"{0}\" ({1}) komponenti yüklənmədi.\r\nİlkin səhv: {2}",
      "loadComponentMaxRetriesError": "Heç bir uğur olmadan \"{0}\" ({1}) komponentini {2} dəfə yükləməyə cəhd edildi.",
      "loadComponentDependencyError": "\"{1}\" ({2}) komponentindən \"{0}\" komponent asılılığını yükləmək mümkün olmadı.\r\nİlkin səhv: {3}",
      "loadComponentDependencyFailoverPathError": "\"{2}\" komponentindən \"{1}\" keçid cığırı ilə \"{0}\" komponent asılılığını yükləmək mümkün olmadı ({3}).\r\nOrijinal səhv: {4}",
      "loadPathDependencyLog": "\"{0}\" yol asılılığı \"{1}\" ({2}) komponentindən yüklənir",
      "loadPathDependencyError": "\"{1}\" komponentindən \"{0}\" yol asılılığını yükləmək mümkün olmadı ({2}).\r\nOrijinal səhv: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Başqa bir asılı komponent yüklənmədiyindən, \"{0}\" yol asılılığını \"{1}\" ({2}) komponentindən yükləmək mümkün olmadı.",
      "loadEntryPointError": "\"{0}\" komponentindən daxiletmə nöqtəsini yükləmək mümkün olmadı ({1}).\r\nOrijinal səhv: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() \"{0}\" ({1}) komponenti üçün boş obyekt qaytardı.",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() \"{0}\" ({1}) komponenti üçün boş standart xüsusiyyət ilə obyekt qaytardı.",
      "moduleHasUndeclaredDependencyError": "\"{0}\" ({1}) komponenti üçün daxiletmə nöqtəsi bəyannamədə elan edilməmiş \"{2}\" asılılığına malikdir.",
      "loadScriptWithStringError": "loadScript funksiyası sətirə 2-ci parametr kimi icazə vermir. Əvəzində ILoadScriptOptions istifadə edin.",
      "tooManyManifestsError": "\"{2}\" komponenti üçün {0} manifestlər ({1} versiyalar) tapıldı.",
      "tooManyCompatibleVersionsError": "{0} uyğun versiyalar ({1}) \"{2}\" komponent \"{3}\" versiyası üçün tapıldı.",
      "tooManyComponentsError": "\"{0}\" id-si üçün çoxsaylı komponentlər tapıldı.",
      "noComponentFoundError": "\"{0}\" id-si üçün heç bir komponent tapılmadı.",
      "deleteComponentLog": "Mağazadan \"{0}\" komponentinin \"{1}\" versiyası silinir.",
      "browserNotSupportedError": "Brauzerinizin bu versiyası dəstəklənmir.\r\nBrauzerinizi ən son versiyaya yeniləyin.",
      "ie9OrOlderNotSupportedError": "Bu səhifə 10 versiyasından köhnə Internet Explorer buraxılışlarını dəstəkləmir. Veb-brauzerinizi yeniləyin.",
      "firefox43OrOlderNotSupportedError": "Bu səhifə 44 versiyasından köhnə Mozilla Firefox buraxılışlarını dəstəkləmir. Veb-brauzerinizi yeniləyin.",
      "resourceNotFoundError": "\"{0}\" resursu \"{1}\" ({2}) komponenti üçün manifestin yükləyici konfiqurasiyasında tapılmadı.",
      "noFailoverPathError": "İmtina zamanı dəyişmə yolu olmadığı üçün komponentdə resolveAddress() çağırmaq mümkün deyil",
      "urlStatusLocalhostFileNotFoundError": "'{0}' ({1}) komponentində '{2}' resursu üçün '{3}' URL-ni yükləmək alınmadı. Fayl serverdə tapılmadı.\r\n\"Gulp serve\"-in icra olunduğuna əmin olun.",
      "urlStatusFileNotFoundError": "'{0}' ({1}) komponentində '{2}' resursu üçün '{3}' URL-ni yükləmək alınmadı. Fayl serverdə tapılmadı.",
      "urlStatusForbiddenError": "'{0}' ({1}) komponentində '{2}' resursu üçün '{3}' URL-ni yükləmək alınmadı. Fayla müraciət qadağan olunub.",
      "urlStatusClientErrorError": "'{0}' ({1}) komponentində '{2}' resursu üçün '{3}' URL-ni yükləmək alınmadı. Faylı sorğulayan zaman səhv oldu.",
      "urlStatusServerErrorError": "'{0}' ({1}) komponentində '{2}' resursu üçün '{3}' URL-ni yükləmək alınmadı. Serverdə problem oldu.",
      "urlStatusLocalhostNetworkErrorError": "'{0}' ({1}) komponentində '{2}' resursu üçün '{3}' URL-ni yükləmək alınmadı. Şəbəkə problemi oldu.\r\n'gulp serve' seçiminin icra olunduğuna və 'gulp trust-dev-cert' icra etdiyinizə əmin olun.",
      "urlStatusHttpsNetworkErrorError": "'{0}' ({1}) komponentində '{2}' resursu üçün '{3}' URL-ni yükləmək alınmadı. Şəbəkə problemi oldu.\r\nBu, HTTPS sertifikatı ilə bağlı problem ola bilər. Düzgün sertifikata malik olduğunuza əmin olun.",
      "urlStatusNetworkErrorError": "'{0}' ({1}) komponentində '{2}' resursu üçün '{3}' URL-ni yükləmək alınmadı. Şəbəkə problemi oldu.",
      "urlStatusUndefinedError": "Naməlum problemlərə görə '{0}' ({1}) komponentində '{2}' resursu üçün '{3}' URL-ni yükləmək alınmadı.",
      "isUndefinedValidateError": "\"{0}\" üçün dəyər təyin olunmamış olmamalıdır",
      "failedToCreateGlobalVariableError": "\"{1}\" skriptindən \"{0}\" qlobal dəyişkənini yaratmaq mümkün olmadı",
      "dependencyLoadError": "'{0}' modulunu yükləmək mümkün olmadı, çünki {1} tabe elementi yüklənmədi",
      "missingPathDependencyError": "Missing path dependency \"{0}\" from component \"{1}\" ({2}). Existing path dependencies: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Sazlama skriptini yükləyən zaman səhv baş verdi. Serverin icra olunduğuna, \"{0}\" parametri URL-nin düzgün olduğuna əmin olun.",
      "errorLoadingDebugScriptHTTP": "Sazlama skriptini yükləyən zaman səhv baş verdi. Serverin icra olunduğuna, \"{0}\" parametri URL-nin düzgün olduğuna və təhlükəli skriptlərin yüklənməsinə icazə verilib-verilmədiyinə əmin olun. Bundan başqa, tərtibat sertifikatından istifadəni və HTTPS vasitəsilə sazlama skriptlərinin xidmət etdiyini nəzərə alın.",
      "errorLoadingDebugScriptMalformed": "Sazlama skriptini yükləyən zaman səhv baş verdi. Görünür, sazlama URL-i ({0}) korlanıb.",
      "errorLoadingDebugScriptUnknown": "Sazlama skriptini yükləyən zaman naməlum səhv baş verdi.",
      "errorLoadingDebugLoaderTitle": "Sazlama yükləyicisini yükləyən zaman səhv baş verdi.",
      "errorLoadingDebugManifestTitle": "Sazlama bəyannaməsini yükləyən zaman səhv.",
      "errorLoadingUnknownTitle": "Sazlama skriptlərini yükləyən zaman səhv baş verdi."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Buraxılan komponent və ya başladıcı funksiyası.",
      "closeDeveloperToolsAriaLabel": "Tərtibatçı alətlərini bağlayın."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Xəbərdarlıq!",
      "warningLine1": "Bu alətdən istifadə sizi, şəxsi Office 365 verilənlərinizə (sənədlər, e-poçtlar, söhbətlər və daha çox şey) digərlərinin müraciət qazanması ilə nəticələnə bilən potensial təhlükəsizlik risklərinə məruz qoyur. Davam etməzdən əvvəl bu alətə müraciət istəyən şəxs və ya təşkilata güvəndiyinizdən əmin olun.",
      "warningLine2": "Burada ətraflı öyrənin: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Sazlama bəyannaməsini yükləyən zaman səhv baş verdi.",
      "debugManifestErrorDismissButtonText": "Rədd edin"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Sazlama skriptlərinə icazə verilsin?",
      "allowDebugLoaderTitle": "Sazlama yükləyicisinə icazə verilsin?",
      "allowDebugLoaderAndManifestsTitle": "Sazlama yükləyicisi və sazlama skriptlərinə icazə verilsin?",
      "debugManifestLoadingWarning": "XƏBƏRDARLIQ: Bu səhifə, yüklənibsə, potensial olaraq kompüterinizə ziyan verə bilən təhlükəli skriptləri ehtiva edir! Tərtibatçıya etibar etməyənə və riskləri başa düşməyənə kimi davam etməyin.",
      "debugManifestLoadingWarning2": "Əgər əmin deyilsinizsə, {0} üzərinə klikləyin.",
      "debugManifestLoadingConfirm": "Sazlama skriptlərini yüklə",
      "debugManifestLoadingCancel": "Sazlama skriptlərini yükləmə",
      "debugManifestLoadingCalloutText": "Nə edəcəyinizi bilmirsinizsə, bura klikləyin."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Yüklənir...",
      "developerToolsTabLoadingUnknownError": "Tərtibatçı alətləri modulunu yükləməklə bağlı naməlum səhv."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifestlər",
      "noManifestSelected": "Manifest seçilmədi"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Məhsuldarlıq",
      "ErrorAccessingPerfDataErrorMessage": "Məhsuldarlıq verilənlərini əldə etmək mümkün deyil: obyekt sıfır və ya qeyri-müəyyəndir.",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP yönləndirmə məhsuldarlığı verilənlərinə müraciətlə bağlı səhv baş verdi.",
      "ErrorParsingPercievedLatencyErrorMessage": "Ləngimə verilənlərini parselləyən zaman səhv baş verdi.",
      "ErrorParsingApiDataErrorMessage": "API verilənlərini parselləyən zaman səhv baş verdi.",
      "UnkownPerformanceDataErrorMessage": "Naməlum səhv baş verib: {0}",
      "DefaultWebPartName": "Veb-hissə",
      "ServerResponseLabel": "Serverin Cavabı",
      "ApplicationInitializationLabel": "Proqramın İşə Salınması",
      "ScriptFetchEvalLabel": "Skriptin gətirilməsi və qiymətləndirmə",
      "SpLoaderStartLabel": "SPFx işəsalma",
      "PageRenderLabel": "Səhifənin Vizuallaşdırılması",
      "LeftNavRenderLabel": "Sol Naviqasiya Vizuallaşdırması",
      "CanvasRenderLabel": "Lövhənin Vizuallaşdırılması",
      "LayoutRenderLabel": "Düzən Vizuallaşdırıcısı",
      "RedirectResponseLabel": "Yönləndirmə Cavabı",
      "AppLoadLabel": "Proqramın Yüklənməsi",
      "RenderWebPartsLabel": "Veb Hissələrin Vizuallaşdırılması",
      "TotalRenderTimeLabel": "Yekun",
      "GeneralErrorMessage": "Üzr istəyirik, məhsuldarlıq verilənlərini əldə edərkən səhv baş verdi.",
      "ErrorMessagePrefix": "Səhv Mesajı: {0}",
      "PerformanceDataHint": "Qeyd: Veb hissəni əlavə etdikdən və ya sildikdən sonra yenilənmiş məhsuldarlıq verilənlərinə baxmaq üçün səhifəni təzələyin.",
      "ModulesLoadedLegendLabel": "Yüklənmiş Modullar",
      "InitializationLegendLabel": "İşəsalma",
      "RenderTimeLegendLabel": "Vizuallaşdırma Vaxtı",
      "InitializationTimeLabel": "İşəsalma vaxtı",
      "ModuleLoadingTimeLabel": "Modul yükləmə vaxtı",
      "ModuleLazyLoadingDelayLabel": "Modulun yüklənməsi gecikdi",
      "DataFetchTimeLabel": "Verilənlərin geri gətirilməsi vaxtı",
      "DataFetchLegendLabel": "Verilənlərin Gətirilməsi",
      "ItemsColumnHeader": "Elementlər",
      "DurationColumnHeader": "Müddət",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Q/M"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "İstiqaməti Göstərilmə",
      "EmptyTraceData": "İstiqaməti göstərilmə yüklənmədi.",
      "ExportCSVButtonLabel": "CSV-ni ixrac edin",
      "LevelHeaderLabel": "Səviyyə",
      "MessageHeaderLabel": "Mesaj",
      "ScopeHeaderLabel": "Miqyas",
      "SourceHeaderLabel": "Mənbə",
      "TimestampHeaderLabel": "Vaxt ştampı",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "İstiqaməti göstərilmə verilənlərinə müraciət edərkən problem baş verdi."
    }
  };

  strings.default = strings;
  return strings;
});
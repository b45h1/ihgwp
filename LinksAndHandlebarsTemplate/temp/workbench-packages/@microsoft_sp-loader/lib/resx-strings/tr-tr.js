define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Bu sayfadaki uygulama yüklenemiyor. Yeniden denemek için tarayıcıdaki Geri düğmesini kullanın. Sorun devam ederse sitenin yöneticisiyle görüşüp Teknik Ayrıntılar bölümündeki bilgileri verin.",
      "platformFailedToLoadError": "Platform yüklenemedi. Kimlik: \"{0}\", adı: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Platform yüklenemedi. Kimlik: \"{0}\", Ad: \"{1}\".\r\nHata: {2}",
      "applicationFailedToInitializeError": "Uygulama başlatılırken hata oluştu. Hata: {0}",
      "invalidPreloadedDataError": "Önceden yüklenmiş veriler geçersiz.",
      "manifestNotFoundByIdError": "\"{0}\" kimliğine sahip bileşen için bildirim bulunamadı.",
      "manifestNotFoundError": "\"{0}\" bileşen kimliği ve \"{1}\" sürümü için bildirim bulunamadı.",
      "systemConfigDisabledError": "System.config() desteklenmiyor. Yapılandırmayı belirtmek için bildirim kullanın.",
      "loadComponentLog": "\"{0}\" ({1}) bileşeni yükleniyor.",
      "loadComponentEndLog": "\"{0}\" ({1}) bileşeni yüklendi.",
      "loadComponentRetryLog": "\"{0}\" ({1}) bileşeni yükleniyor. Deneme {2}/{3}.",
      "loadComponentError": "\"{0}\" ({1}) bileşeni yüklenemedi.\r\nÖzgün hata: {2}",
      "loadComponentMaxRetriesError": "\"{0}\" ({1}) bileşenini yükleme işlemi {2} kez denendi ve başarısız oldu.",
      "loadComponentDependencyError": "\"{1}\" ({2}) bileşeninden \"{0}\" adlı bileşen bağımlılığı yüklenemedi.\r\nÖzgün hata: {3}",
      "loadComponentDependencyFailoverPathError": "\"{2}\" ({3}) bileşeninden \"{1}\" yük devretme yoluyla \"{0}\" adlı bileşen bağımlılığı yüklenemedi.\r\nÖzgün hata: {4}",
      "loadPathDependencyLog": "\"{0}\" yol bağımlılığı \"{1}\" ({2}) bileşeninden yükleniyor",
      "loadPathDependencyError": "\"{1}\" ({2}) bileşeninden \"{0}\" adlı yol bağımlılığı yüklenemedi.\r\nÖzgün hata: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Yüklenemeyen başka bir bağımlılık nedeniyle \"{0}\" yol bağımlılığı \"{1}\" ({2}) bileşeninden yüklenemedi.",
      "loadEntryPointError": "\"{0}\" ({1}) bileşeninden giriş noktası yüklenemedi.\r\nÖzgün hata: {2}",
      "loadComponentReturnsEmptyError": "loadComponent(), \"{0}\" kimlikli bileşen ({1}) için boş bir nesne döndürdü.",
      "loadComponentReturnsDefaultEmptyError": "loadComponent(), \"{0}\" kimlikli bileşen ({1}) için boş varsayılan özelliğe sahip bir nesne döndürdü.",
      "moduleHasUndeclaredDependencyError": "\"{0}\" ({1}) bileşeni için giriş noktası \"{2}\" üzerinde, bildirimde bildirilmemiş bir bağımlığa sahip.",
      "loadScriptWithStringError": "loadScript işlevi, bir dizeyi 2. parametre olarak kullanmanıza izin vermiyor. Bunun yerine ILoadScriptOptions işlevini kullanın.",
      "tooManyManifestsError": "\"{2}\" bileşeni için {0} bildirim (sürümler: {1}) bulundu.",
      "tooManyCompatibleVersionsError": "\"{2}\" bileşeninin \"{3}\" sürümü için uyumlu {0} sürüm ({1}) bulundu.",
      "tooManyComponentsError": "\"{0}\" kimliği için çok fazla bileşen bulundu.",
      "noComponentFoundError": "\"{0}\" kimliğine sahip bileşen bulunamadı.",
      "deleteComponentLog": "\"{0}\" bileşeninin \"{1}\" sürümü depodan siliniyor.",
      "browserNotSupportedError": "Tarayıcınızın bu sürümü desteklenmiyor.\r\nLütfen tarayıcınızı son sürüme güncelleştirin.",
      "ie9OrOlderNotSupportedError": "Bu sayfada, Internet Explorer'ın 10'dan önceki sürümleri desteklenmiyor. Lütfen web tarayıcınızı güncelleştirin.",
      "firefox43OrOlderNotSupportedError": "Bu sayfada, Mozilla Firefox'un 44'ten önceki sürümleri desteklenmiyor. Lütfen web tarayıcınızı güncelleştirin.",
      "resourceNotFoundError": "\"{0}\" kaynağı, \"{1}\" ({2}) bileşeninin bildirim dosyasındaki yükleyici yapılandırmasında bulunamadı.",
      "noFailoverPathError": "Yük devretme yoluna sahip olmayan bir bileşende resolveAddress() çağrılamaz",
      "urlStatusLocalhostFileNotFoundError": "'{0}' ({1}) bileşenindeki '{2}' kaynağına yönelik '{3}' URL'si yüklenemedi. Dosya, sunucuda bulunamadı.\r\n'gulp serve' komutunu çalıştırdığınızdan emin olun.",
      "urlStatusFileNotFoundError": "'{0}' ({1}) bileşenindeki '{2}' kaynağına yönelik '{3}' URL'si yüklenemedi. Dosya, sunucuda bulunamadı.",
      "urlStatusForbiddenError": "'{0}' ({1}) bileşenindeki '{2}' kaynağına yönelik '{3}' URL'si yüklenemedi. Dosyaya erişim yasaklandı.",
      "urlStatusClientErrorError": "'{0}' ({1}) bileşenindeki '{2}' kaynağına yönelik '{3}' URL'si yüklenemedi. Dosya istenirken bir hata oluştu.",
      "urlStatusServerErrorError": "'{0}' ({1}) bileşenindeki '{2}' kaynağına yönelik '{3}' URL'si yüklenemedi. Sunucuda bir sorun oluştu.",
      "urlStatusLocalhostNetworkErrorError": "'{0}' ({1}) bileşenindeki '{2}' kaynağına yönelik '{3}' URL'si yüklenemedi. Bir ağ sorunu oluştu.\r\n'gulp serve' komutunu çalıştırdığınızdan ve öncesinde 'gulp trust-dev-cert' komutunu çalıştırdığınızdan emin olun.",
      "urlStatusHttpsNetworkErrorError": "'{0}' ({1}) bileşenindeki '{2}' kaynağına yönelik '{3}' URL'si yüklenemedi. Bir ağ sorunu oluştu.\r\nBunun nedeni HTTPS sertifikasıyla ilgili bir sorun olabilir. Doğru sertifikaya sahip olduğunuzdan emin olun.",
      "urlStatusNetworkErrorError": "'{0}' ({1}) bileşenindeki '{2}' kaynağına yönelik '{3}' URL'si yüklenemedi. Bir ağ sorunu oluştu.",
      "urlStatusUndefinedError": "Bilinmeyen sorunlar nedeniyle '{0}' ({1}) bileşenindeki '{2}' kaynağına yönelik '{3}' URL'si yüklenemedi.",
      "isUndefinedValidateError": "\"{0}\" değişkeninin değeri tanımlanmamış olamaz",
      "failedToCreateGlobalVariableError": "\"{1}\" betiğinden \"{0}\" genel değişkeni oluşturulamadı",
      "dependencyLoadError": "{1} bağımlılığı yüklenmediğinden '{0}' modülü yüklenemedi",
      "missingPathDependencyError": "\"{1}\" ({2}) bileşeninde \"{0}\" yol bağımlılığı eksik. Mevcut yol bağımlılıkları: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Hata ayıklama betiği yüklenirken bir hata oluştu. Sunucunun çalıştığından ve \"{0}\" parametre URL'sinin doğru olduğundan emin olun.",
      "errorLoadingDebugScriptHTTP": "Hata ayıklama betiği yüklenirken bir hata oluştu. Sunucunun çalıştığından, \"{0}\" parametre URL'sinin doğru olduğundan ve güvenli olmayan betiklerin yüklenmesine izin verildiğinden emin olun. Ayrıca geliştirme sertifikası kullanmayı ve hata ayıklama betiklerini HTTPS üzerinden sunmayı düşünün.",
      "errorLoadingDebugScriptMalformed": "Hata ayıklama betiği yüklenirken bir hata oluştu. Hata ayıklama URL'si ({0}) hatalı oluşturulmuş gibi görünüyor.",
      "errorLoadingDebugScriptUnknown": "Hata ayıklama betiği yüklenirken bilinmeyen bir hata oluştu.",
      "errorLoadingDebugLoaderTitle": "Hata ayıklama yükleyicisi yüklenirken bir hata oluştu.",
      "errorLoadingDebugManifestTitle": "Hata ayıklama bildirimleri yüklenirken bir hata oluştu.",
      "errorLoadingUnknownTitle": "Hata ayıklama betikleri yüklenirken bir hata oluştu."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Eksik bileşen veya başlatıcı işlev.",
      "closeDeveloperToolsAriaLabel": "Geliştirici araçlarını kapatın."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Uyarı!",
      "warningLine1": "Bu aracı kullandığınızda maruz kalacağınız olası güvenlik tehditleri, kişisel Office 365 verilerinize (belgeler, e-postalar, konuşmalar ve daha fazlası) başkaları tarafından erişilmesine neden olabilir. Devam etmeden önce bu araca erişmenizi isteyen kişi veya kuruluşa güvendiğinizden emin olun.",
      "warningLine2": "{0} sayfasından daha fazla bilgi edinin"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Hata ayıklama bildirimleri yüklenirken bir hata oluştu.",
      "debugManifestErrorDismissButtonText": "Kapat"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Hata ayıklama betiklerine izin verilsin mi?",
      "allowDebugLoaderTitle": "Hata ayıklama yükleyicisine izin verilsin mi?",
      "allowDebugLoaderAndManifestsTitle": "Hata ayıklama yükleyicisine ve hata ayıklama betiklerine izin verilsin mi?",
      "debugManifestLoadingWarning": "UYARI: Bu sayfa, yüklenirse bilgisayarınıza zarar verebilecek, güvenli olmayan betikler içeriyor. Geliştiriciye güvenmiyorsanız ve risklerle ilgili bilgi sahibi değilseniz devam etmeyin.",
      "debugManifestLoadingWarning2": "Emin değilseniz {0} düğmesine tıklayın.",
      "debugManifestLoadingConfirm": "Hata ayıklama betiklerini yükle",
      "debugManifestLoadingCancel": "Hata ayıklama betiklerini yükleme",
      "debugManifestLoadingCalloutText": "Ne yapmanız gerektiğini bilmiyorsanız buraya tıklayın."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Yükleniyor...",
      "developerToolsTabLoadingUnknownError": "Geliştirici araçları modülü yüklenirken bilinmeyen bir hata oluştu."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Bildirimler",
      "noManifestSelected": "Seçili bildirim yok"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performans",
      "ErrorAccessingPerfDataErrorMessage": "Performans verileri alınamıyor: nesne null veya tanımsız.",
      "ErrorAccessingRedirectDataErrorMessage": "HTTP yeniden yönlendirme performans verilerine erişilirken bir sorun oluştu.",
      "ErrorParsingPercievedLatencyErrorMessage": "Algılanan gecikme süresi verileri işlenirken bir hatayla karşılaşıldı.",
      "ErrorParsingApiDataErrorMessage": "API verileri ayrıştırılırken bir hatayla karşılaşıldı.",
      "UnkownPerformanceDataErrorMessage": "Bilinmeyen bir hata oluştu: {0}",
      "DefaultWebPartName": "Web Bölümü",
      "ServerResponseLabel": "Sunucu Yanıtı",
      "ApplicationInitializationLabel": "Uygulama Başlatma",
      "ScriptFetchEvalLabel": "Betikleri getirme ve değerlendirme",
      "SpLoaderStartLabel": "SPFx başlatma",
      "PageRenderLabel": "Sayfa İşleme",
      "LeftNavRenderLabel": "Sol Gezinti İşleyicisi",
      "CanvasRenderLabel": "Tuval İşleme",
      "LayoutRenderLabel": "Düzeni İşleme",
      "RedirectResponseLabel": "Yeniden Yönlendirme Yanıtı",
      "AppLoadLabel": "Uygulama Yükleme",
      "RenderWebPartsLabel": "Web Bölümleri İşleyicisi",
      "TotalRenderTimeLabel": "Toplam",
      "GeneralErrorMessage": "Performans verileri alınırken bir sorun oluştu.",
      "ErrorMessagePrefix": "Hata İletisi: {0}",
      "PerformanceDataHint": "Not: Web bölümünü ekledikten veya kaldırdıktan sonra, güncel performans verilerini görmek için sayfayı yenileyin.",
      "ModulesLoadedLegendLabel": "Yüklü Modüller",
      "InitializationLegendLabel": "Başlatma",
      "RenderTimeLegendLabel": "İşleme Süresi",
      "InitializationTimeLabel": "Başlatma süresi",
      "ModuleLoadingTimeLabel": "Modül yükleme süresi",
      "ModuleLazyLoadingDelayLabel": "Modül yükleme işlemi gecikti",
      "DataFetchTimeLabel": "Veri alma süresi",
      "DataFetchLegendLabel": "Veri Alma",
      "ItemsColumnHeader": "Öğeler",
      "DurationColumnHeader": "Süre",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "Yok"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "İzleme",
      "EmptyTraceData": "İzleme yüklenmedi.",
      "ExportCSVButtonLabel": "CSV'yi Dışarı Aktar",
      "LevelHeaderLabel": "Düzey",
      "MessageHeaderLabel": "İleti",
      "ScopeHeaderLabel": "Kapsam",
      "SourceHeaderLabel": "Kaynak",
      "TimestampHeaderLabel": "Zaman Damgası",
      "TimestampFormat": "{2}/{1}/{0} {3}:{4}:{5},{6}",
      "ErrorAccessingTraceDataErrorMessage": "İzleme verilerine erişilirken bir sorun oluştu."
    }
  };

  strings.default = strings;
  return strings;
});
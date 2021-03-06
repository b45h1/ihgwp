define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Tidak dapat memuat aplikasi pada halaman ini. Gunakan tombol Kembali browser untuk mencoba lagi. Jika masalah tetap muncul, hubungi administrator situs dan berikan mereka informasi di Detail Teknis.",
      "platformFailedToLoadError": "Platform gagal dimuat. Id: \"{0}\", nama: \"{1}\"",
      "platformFailedToLoadWithMessageError": "Platform gagal dimuat. Id: \"{0}\", nama: \"{1}\".\r\nKesalahan: {2}",
      "applicationFailedToInitializeError": "Kesalahan saat menginisialisasi aplikasi. Kesalahan: {0}",
      "invalidPreloadedDataError": "Data yang dimuat sebelumnya tidak valid.",
      "manifestNotFoundByIdError": "Tidak ditemukan manifes untuk id komponen \"{0}\".",
      "manifestNotFoundError": "Tidak ditemukan manifes untuk id komponen \"{0}\" dan versi \"{1}\".",
      "systemConfigDisabledError": "Sistem.config() tidak didukung. Gunakan manifes untuk menentukan konfigurasi.",
      "loadComponentLog": "Memuat komponen \"{0}\" ({1}).",
      "loadComponentEndLog": "Komponen \"{0}\" ({1}) dimuat.",
      "loadComponentRetryLog": "Memuat komponen \"{0}\" ({1}). Percobaan {2} dari {3}.",
      "loadComponentError": "Gagal memuat komponen \"{0}\" ({1}).\r\nKesalahan asli: {2}",
      "loadComponentMaxRetriesError": "Gagal mencoba untuk memuat komponen \"{0}\" ({1}) sebanyak {2} kali.",
      "loadComponentDependencyError": "Gagal memuat dependensi komponen \"{0}\" dari komponen \"{1}\" ({2}).\r\nKesalahan asli: {3}",
      "loadComponentDependencyFailoverPathError": "Gagal memuat dependensi komponen \"{0}\" dengan jalur failover \"{1}\" dari komponen \"{2}\" ({3}).\r\nKesalahan asli: {4}",
      "loadPathDependencyLog": "Memuat dependensi jalur \"{0}\" dari komponen \"{1}\" ({2})",
      "loadPathDependencyError": "Gagal memuat dependensi jalur \"{0}\" dari komponen \"{1}\" ({2}).\r\nKesalahan asli: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Gagal memuat dependensi jalur \"{0}\" dari komponen \"{1}\" ({2}) karena dependensi lain yang gagal dimuat.",
      "loadEntryPointError": "Gagal memuat titik masuk dari komponen \"{0}\" ({1}).\r\nKesalahan asli: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() menghasilkan objek kosong untuk komponen \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() menghasilkan objek dengan properti default kosong untuk komponen \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "Titik masuk untuk komponen \"{0}\" ({1}) memiliki dependensi dengan \"{2}\" yang tidak dinyatakan dalam manifes.",
      "loadScriptWithStringError": "Karena fungsi loadScript tidak mengizinkan string sebagai parameter kedua, gunakan ILoadScriptOptions.",
      "tooManyManifestsError": "{0} manifes (versi {1}) ditemukan untuk komponen \"{2}\".",
      "tooManyCompatibleVersionsError": "{0} versi yang kompatibel ({1}) ditemukan untuk komponen \"{2}\" versi \"{3}\".",
      "tooManyComponentsError": "Ditemukan terlalu banyak komponen untuk id \"{0}\".",
      "noComponentFoundError": "Tidak ditemukan komponen untuk id \"{0}\".",
      "deleteComponentLog": "Menghapus komponen \"{0}\" versi \"{1}\" dari bursa.",
      "browserNotSupportedError": "Versi browser Anda tidak didukung.\r\nPerbarui browser Anda ke versi terbaru.",
      "ie9OrOlderNotSupportedError": "Halaman ini tidak mendukung Internet Explorer yang lebih lama dari versi 10. Silakan perbarui browser web Anda.",
      "firefox43OrOlderNotSupportedError": "Halaman ini tidak mendukung rilis Mozilla Firefox yang lebih lama dari versi 44. Silakan perbarui browser web Anda.",
      "resourceNotFoundError": "Sumber daya \"{0}\" tidak ditemukan dalam konfigurasi pemuat dari manifes untuk komponen\"{1}\" ({2}).",
      "noFailoverPathError": "Tidak dapat memanggil resolveAddress() pada komponen tanpa jalur kegagalan",
      "urlStatusLocalhostFileNotFoundError": "Gagal memuat URL '{3}' untuk sumber daya '{2}' dalam komponen '{0}' ({1}). File tidak ditemukan di server.\r\nPastikan Anda menjalankan 'gulp serve'.",
      "urlStatusFileNotFoundError": "Gagal memuat URL '{3}' untuk sumber daya '{2}' dalam komponen '{0}' ({1}). File tidak ditemukan di server.",
      "urlStatusForbiddenError": "Gagal memuat URL '{3}' untuk sumber daya '{2}' dalam komponen'{0}' ({1}). Akses ke file tersebut dilarang.",
      "urlStatusClientErrorError": "Gagal memuat URL '{3}' untuk sumber daya '{2}' dalam komponen '{0}' ({1}). Terdapat kesalahan saat meminta file.",
      "urlStatusServerErrorError": "Gagal memuat URL '{3}' untuk sumber daya '{2}' dalam komponen '{0}' ({1}). Terdapat masalah di server.",
      "urlStatusLocalhostNetworkErrorError": "Gagal memuat URL '{3}' untuk sumber daya '{2}' dalam komponen '{0}' ({1}). Terdapat masalah jaringan.\r\nPastikan Anda sedang menjalankan 'gulp serve' dan telah menjalankan 'gulp trust-dev-cert'.",
      "urlStatusHttpsNetworkErrorError": "Gagal memuat URL '{3}' untuk sumber daya '{2}' dalam komponen'{0}' ({1}). Terdapat masalah jaringan.\r\nMasalah ini mungkin berkaitan dengan sertifikat HTTPS. Pastikan Anda memiliki sertifikat yang benar.",
      "urlStatusNetworkErrorError": "Gagal memuat URL '{3}' untuk sumber daya '{2}' dalam komponen '{0}' ({1}). Terdapat masalah jaringan.",
      "urlStatusUndefinedError": "Gagal memuat URL '{3}' untuk sumber daya '{2}' dalam komponen '{0}' ({1}) karena masalah yang tidak diketahui.",
      "isUndefinedValidateError": "Nilai untuk \"{0}\" harus ditentukan",
      "failedToCreateGlobalVariableError": "Gagal membuat variabel global \"{0}\" dari skrip \"{1}\"",
      "dependencyLoadError": "Gagal memuat modul '{0}' karena dependensi {1} tidak dimuat",
      "missingPathDependencyError": "Dependensi jalur \"{0}\" tidak ada dari komponen \"{1}\" ({2}). Dependensi jalur yang sudah ada: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Kesalahan saat memuat skrip debug. Pastikan server berjalan dan URL parameter \"{0}\" benar.",
      "errorLoadingDebugScriptHTTP": "Kesalahan saat memuat skrip debug. Pastikan server berjalan dan URL parameter \"{0}\" sudah benar, serta pemuatan skrip yang tidak aman diizinkan. Pertimbangkan juga untuk menggunakan sertifikat pengembangan dan menjalankan skrip debug melalui HTTPS.",
      "errorLoadingDebugScriptMalformed": "Kesalahan saat memuat skrip debug. Format URL debug ({0}) sepertinya salah.",
      "errorLoadingDebugScriptUnknown": "Kesalahan tidak diketahui saat memuat skrip debug.",
      "errorLoadingDebugLoaderTitle": "Kesalahan saat memuat pemuat debug.",
      "errorLoadingDebugManifestTitle": "Kesalahan saat memuat manifes debug.",
      "errorLoadingUnknownTitle": "Kesalahan saat memuat skrip debug."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Fungsi komponen atau penginisialisasi tidak ada.",
      "closeDeveloperToolsAriaLabel": "Tutup alat pengembang."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Peringatan!",
      "warningLine1": "Penggunaan alat ini akan memperlihatkan ancaman keamanan potensial yang dapat menyebabkan orang lain memperoleh akses ke data Office 365 pribadi Anda (dokumen, email, percakapan dan lainnya). Sebelum melanjutkan, pastikan Anda memercayai orang atau organisasi yang meminta untuk mengakses alat ini.",
      "warningLine2": "Pelajari selengkapnya di sini: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Terjadi kesalahan saat memuat manifes debug.",
      "debugManifestErrorDismissButtonText": "Tutup"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Izinkan skrip debug?",
      "allowDebugLoaderTitle": "Izinkan pemuat debug?",
      "allowDebugLoaderAndManifestsTitle": "Izinkan pemuat dan skrip debug?",
      "debugManifestLoadingWarning": "PERINGATAN: Halaman ini berisi skrip yang tidak aman dan berpotensi membahayakan komputer jika dimuat. Jangan lanjutkan, kecuali jika Anda memercayai pengembang tersebut dan memahami risikonya.",
      "debugManifestLoadingWarning2": "Jika Anda tidak yakin, klik {0}.",
      "debugManifestLoadingConfirm": "Muat skrip debug",
      "debugManifestLoadingCancel": "Jangan muat skrip debug",
      "debugManifestLoadingCalloutText": "Jika Anda tidak tahu apa yang harus dilakukan, klik di sini."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Sedang memuat...",
      "developerToolsTabLoadingUnknownError": "Kesalahan tidak diketahui saat memuat modul alat pengembang."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifes",
      "noManifestSelected": "Tidak ada manifes yang dipilih"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Kinerja",
      "ErrorAccessingPerfDataErrorMessage": "Tidak dapat mengambil data kinerja: objek null atau tidak terdefinisi.",
      "ErrorAccessingRedirectDataErrorMessage": "Terjadi masalah saat mengakses data kinerja pengalihan HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Terjadi kesalahan saat menguraikan data latensi yang diketahui.",
      "ErrorParsingApiDataErrorMessage": "Terjadi kesalahan saat menguraikan data API.",
      "UnkownPerformanceDataErrorMessage": "Terjadi kesalahan yang tidak diketahui: {0}",
      "DefaultWebPartName": "Komponen Web",
      "ServerResponseLabel": "Waktu Respons Server",
      "ApplicationInitializationLabel": "Waktu Inisialisasi Aplikasi",
      "ScriptFetchEvalLabel": "Pengambilan skrip dan evaluasi",
      "SpLoaderStartLabel": "Inisialisasi SPFx",
      "PageRenderLabel": "Waktu Render Halaman",
      "LeftNavRenderLabel": "Waktu Render Navigasi Kiri",
      "CanvasRenderLabel": "Waktu Render Kanvas",
      "LayoutRenderLabel": "Render Tata Letak",
      "RedirectResponseLabel": "Alihkan Respons",
      "AppLoadLabel": "Waktu Muat Aplikasi",
      "RenderWebPartsLabel": "Waktu Render Komponen Web",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Maaf, terjadi kesalahan saat mengambil data kinerja.",
      "ErrorMessagePrefix": "Pesan Kesalahan: {0}",
      "PerformanceDataHint": "Catatan: Setelah menambahkan atau menghapus komponen web, refresh halaman untuk melihat data kinerja yang diperbarui.",
      "ModulesLoadedLegendLabel": "Modul Dimuat",
      "InitializationLegendLabel": "Inisialisasi",
      "RenderTimeLegendLabel": "Waktu Render",
      "InitializationTimeLabel": "Waktu inisialisasi",
      "ModuleLoadingTimeLabel": "Waktu pemuatan modul",
      "ModuleLazyLoadingDelayLabel": "Pemuatan modul tertunda",
      "DataFetchTimeLabel": "Waktu pengambilan data",
      "DataFetchLegendLabel": "Pengambilan Data",
      "ItemsColumnHeader": "Item",
      "DurationColumnHeader": "Durasi",
      "MillisecondsUnitLabel": "{0} mdtk",
      "NAPlaceholder": "N/A"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Jejak",
      "EmptyTraceData": "Jejak tidak dimuat.",
      "ExportCSVButtonLabel": "Ekspor CSV",
      "LevelHeaderLabel": "Tingkat",
      "MessageHeaderLabel": "Pesan",
      "ScopeHeaderLabel": "Lingkup",
      "SourceHeaderLabel": "Sumber",
      "TimestampHeaderLabel": "Stempel waktu",
      "TimestampFormat": "{2}/{1}/{0} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Terjadi masalah saat mengakses data jejak."
    }
  };

  strings.default = strings;
  return strings;
});
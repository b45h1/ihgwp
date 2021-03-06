define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "ไม่สามารถโหลดแอปพลิเคชันบนหน้านี้ ใช้ปุ่มย้อนกลับของเบราว์เซอร์เพื่อลองอีกครั้ง ถ้าปัญหายังคงอยู่ ให้ติดต่อผู้ดูแลของไซต์ แล้วให้ข้อมูลในรายละเอียดทางเทคนิค",
      "platformFailedToLoadError": "ไม่สามารถโหลดแพลตฟอร์ม ID: \"{0}\", ชื่อ: \"{1}\"",
      "platformFailedToLoadWithMessageError": "แพลตฟอร์มไม่สามารถโหลด Id: \"{0}\", ชื่อ: \"{1}\".\r\nข้อผิดพลาด: {2}",
      "applicationFailedToInitializeError": "ข้อผิดพลาดในการเตรียมใช้งานแอปพลิเคชัน ข้อผิดพลาด: {0}",
      "invalidPreloadedDataError": "ข้อมูลที่โหลดไว้ล่วงหน้าไม่ถูกต้อง",
      "manifestNotFoundByIdError": "ไม่พบไฟล์กำกับสำหรับคอมโพเนนต์ที่มี ID \"{0}\"",
      "manifestNotFoundError": "ไม่พบไฟล์กำกับสำหรับคอมโพเนนต์ที่มีรหัส \"{0}\" และเวอร์ชัน \"{1}\"",
      "systemConfigDisabledError": "System.config() ไม่ได้รับการสนับสนุน โปรดใช้ไฟล์กำกับเพื่อระบุการกำหนดค่า",
      "loadComponentLog": "กำลังโหลดคอมโพเนนต์ \"{0}\" ({1})",
      "loadComponentEndLog": "คอมโพเนนต์ \"{0}\" ({1}) โหลด",
      "loadComponentRetryLog": "กำลังโหลดคอมโพเนนต์ \"{0}\" ({1}) ความพยายามในการ {2} ของ {3}",
      "loadComponentError": "การโหลดคอมโพเนนต์ \"{0}\" ({1}) ล้มเหลว\r\nข้อผิดพลาดดั้งเดิม: {2}",
      "loadComponentMaxRetriesError": "มีความพยายามในการโหลดคอมโพเนนต์ \"{0}\" ({1}){2} ครั้งไม่ประสบความสำเร็จ",
      "loadComponentDependencyError": "ไม่สามารถโหลดการขึ้นต่อกันของคอมโพเนนต์ \"{0}\" จากคอมโพเนนต์ \"{1}\" ({2})\r\nข้อผิดพลาดดั้งเดิม: {3}",
      "loadComponentDependencyFailoverPathError": "ไม่สามารถโหลดการขึ้นต่อกันของคอมโพเนนต์ \"{0}\" ที่มีเส้นทางแทนที่เมื่อเกิดข้อผิดพลาด \"{1}\" จากคอมโพเนนต์ \"{2}\" ({3}) \r\nข้อผิดพลาดเดิม: {4}",
      "loadPathDependencyLog": "กำลังโหลดการขึ้นต่อกันของพาธ \"{0}\" จากคอมโพเนนต์ \"{1}\" ({2})",
      "loadPathDependencyError": "ไม่สามารถโหลดการขึ้นต่อกันของเส้นทาง \"{0}\" จากคอมโพเนนต์ \"{1}\" ({2}) \r\nข้อผิดพลาดเดิม: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "ไม่สามารถโหลดการขึ้นต่อกันของพาธ \"{0}\" จากคอมโพเนนต์ \"{1}\" ({2}) เนื่องจากมีการขึ้นต่อกันอื่นที่ไม่สามารถโหลดได้",
      "loadEntryPointError": "ไม่สามารถโหลดจุดเข้าใช้งานจากคอมโพเนนต์ \"{0}\" ({1}) \r\nข้อผิดพลาดเดิม: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() ส่งกลับวัตถุที่ไม่มีข้อมูลสำหรับคอมโพเนนต์ \"{0}\" ({1})",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() ส่งกลับวัตถุที่มีคุณสมบัติเริ่มต้นว่างเปล่าสำหรับคอมโพเนนต์ \"{0}\" ({1})",
      "moduleHasUndeclaredDependencyError": "จุดเข้าใช้งานสำหรับคอมโพเนนต์ \"{0}\" ({1}) มีการพึ่งพา \"{2}\" ที่ไม่ได้ประกาศไว้ในรายการ",
      "loadScriptWithStringError": "ฟังก์ชัน loadScript ไม่อนุญาตให้สตริงเป็นพารามิเตอร์ที่ 2 ใช้ ILoadScriptOptions แทน",
      "tooManyManifestsError": "พบไฟล์กำกับ {0} (เวอร์ชัน {1}) สำหรับคอมโพเนนต์ \"{2}\"",
      "tooManyCompatibleVersionsError": "{0} เวอร์ชันที่เข้ากันได้ ({1}) พบคอมโพเนนต์ \"{2}\" เวอร์ชัน \"{3}\"",
      "tooManyComponentsError": "พบคอมโพเนนต์สำหรับ id \"{0}\" มากเกินไป",
      "noComponentFoundError": "ไม่พบคอมโพเนนต์สำหรับ ID \"{0}\"",
      "deleteComponentLog": "กำลังลบคอมโพเนนต์ \"{0}\" เวอร์ชัน \"{1}\" ออกจากที่เก็บ",
      "browserNotSupportedError": "เบราว์เซอร์ของคุณในเวอร์ชันนี้ไม่ได้รับการสนับสนุน\r\nโปรดอัปเดตเบราว์เซอร์ของคุณเป็นเวอร์ชันล่าสุด",
      "ie9OrOlderNotSupportedError": "เพจนี้ไม่สนับสนุน Internet Explorer รุ่นที่เก่ากว่าเวอร์ชัน 10 โปรดอัปเดตเบราว์เซอร์ของคุณ",
      "firefox43OrOlderNotSupportedError": "หน้านี้ไม่สนับสนุน Mozilla Firefox รุ่นที่เก่ากว่าเวอร์ชัน 44 โปรดอัปเดตเว็บเบราว์เซอร์ของคุณ",
      "resourceNotFoundError": "ไม่พบทรัพยากร \"{0}\" ในตัวโหลดการกำหนดค่าของรายการสำหรับคอมโพเนนต์\"{1}\" ({2})",
      "noFailoverPathError": "ไม่สามารถเรียก resolveAddress() บนคอมโพเนนต์ที่ไม่มีเส้นทางการย้ายเมื่อเกิดข้อผิดพลาด",
      "urlStatusLocalhostFileNotFoundError": "ล้มเหลวในการโหลด URL '{3}' สำหรับทรัพยากร '{2}' ในคอมโพเนนต์ '{0}' ({1}) ไม่พบไฟล์ในเซิร์ฟเวอร์\r\nตรวจสอบให้แน่ใจว่า คุณกำลังเรียกใช้ 'gulp serve'",
      "urlStatusFileNotFoundError": "ล้มเหลวในการโหลด URL '{3}' สำหรับทรัพยากร' {2}' ในคอมโพเนนต์ '{0}' ({1}) ไม่พบไฟล์ในเซิร์ฟเวอร์",
      "urlStatusForbiddenError": "ล้มเหลวในการโหลด URL '{3}' สำหรับทรัพยากร '{2}' ในคอมโพเนนต์ '{0}' ({1}) ไม่อนุญาตให้เข้าถึงไฟล์",
      "urlStatusClientErrorError": "ล้มเหลวในการโหลด URL '{3}' สำหรับทรัพยากร '{2}' ในคอมโพเนนต์ '{0}' ({1}) มีข้อผิดพลาดในการร้องขอไฟล์",
      "urlStatusServerErrorError": "ล้มเหลวในการโหลด URL '{3}' สำหรับทรัพยากร '{2}' ในคอมโพเนนต์ '{0}' ({1}) มีปัญหาในเซิร์ฟเวอร์",
      "urlStatusLocalhostNetworkErrorError": "โหลด URL '{3}' สำหรับทรัพยากร '{2}' ในคอมโพเนนต์ '{0}' ({1}) ไม่สำเร็จ มีปัญหาด้านเครือข่าย\r\nโปรดตรวจสอบให้แน่ใจว่าคุณกำลังเรียกใช้ 'gulp serve' และคุณได้เรียกใช้ 'gulp trust-dev-cert'",
      "urlStatusHttpsNetworkErrorError": "ล้มเหลวในการโหลด URL '{3}' สำหรับทรัพยากร '{2}' ในคอมโพเนนต์ '{0}' ({1}) มีปัญหาเครือข่าย\r\nอาจมาจากปัญหากับใบรับรอง HTTPS กรุณาตรวจสอบให้แน่ใจว่าคุณมีใบรับรองถูกต้องแล้ว",
      "urlStatusNetworkErrorError": "ล้มเหลวในการโหลด URL '{3}' สำหรับทรัพยากร '{2}' ในคอมโพเนนต์ '{0}' ({1}) มีปัญหาเครือข่าย",
      "urlStatusUndefinedError": "ล้มเหลวในการโหลด URL '{3}' สำหรับทรัพยากร '{2}' ในคอมโพเนนต์ '{0}' ({1}) เนื่องจากปัญหาที่ไม่รู้จัก",
      "isUndefinedValidateError": "ค่าสำหรับ \"{0}\" ต้องไม่ได้กำหนดไว้",
      "failedToCreateGlobalVariableError": "สร้างตัวแปรส่วนกลาง \"{0}\" จากสคริปต์ \"{1}\" ไม่สำเร็จ",
      "dependencyLoadError": "ไม่สามารถโหลดโมดูล '{0}' ได้เนื่องจากการขึ้นต่อกัน {1} ไม่ได้ถูกโหลด",
      "missingPathDependencyError": "ไม่มีการขึ้นต่อกันของเส้นทาง \"{0}\" จากคอมโพเนนต์ \"{1}\" ({2}) การขึ้นต่อกันของเส้นทางที่มีอยู่: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "เกิดข้อผิดพลาดในการโหลดสคริปต์แก้จุดบกพร่อง ตรวจสอบให้แน่ใจว่า เซิร์ฟเวอร์กำลังทำงานอยู่ และ URL พารามิเตอร์ \"{0}\" ถูกต้อง",
      "errorLoadingDebugScriptHTTP": "เกิดข้อผิดพลาดในการโหลดสคริปต์แก้จุดบกพร่อง ตรวจสอบให้แน่ใจว่าเซิร์ฟเวอร์กำลังทำงานอยู่, URL พารามิเตอร์ \"{0}\" ถูกต้อง และการโหลดสคริปต์ที่ไม่ปลอดภัยได้รับอนุญาต นอกจากนี้ ให้พิจารณาการใช้ใบรับรองการพัฒนา และทำหน้าที่สคริปต์การตรวจแก้จุดบกพร่องผ่านทาง HTTPS",
      "errorLoadingDebugScriptMalformed": "เกิดข้อผิดพลาดในการโหลดสคริปต์แก้จุดบกพร่อง URL แก้จุดบกพร่อง ({0}) อยู่ในรูปแบบที่ผิดปกติ",
      "errorLoadingDebugScriptUnknown": "เกิดข้อผิดพลาดในการโหลดสคริปต์แก้จุดบกพร่องที่ไม่รู้จัก",
      "errorLoadingDebugLoaderTitle": "เกิดข้อผิดพลาดในการโหลดตัวโหลดแก้จุดบกพร่อง",
      "errorLoadingDebugManifestTitle": "เกิดข้อผิดพลาดในการโหลดรายการการตรวจแก้จุดบกพร่อง",
      "errorLoadingUnknownTitle": "เกิดข้อผิดพลาดในการโหลดสคริปต์แก้จุดบกพร่อง"
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "ไม่มีคอมโพเนนต์หรือฟังก์ชันตัวกำหนดค่าเริ่มต้น",
      "closeDeveloperToolsAriaLabel": "ปิดเครื่องมือสำหรับนักพัฒนา"
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "คำเตือน!",
      "warningLine1": "การใช้เครื่องมือนี้จะเป็นการเปิดช่องให้ภัยคุกคามด้านความปลอดภัยที่อาจเกิดขึ้น ซึ่งอาจทำให้ผู้อื่นสามารถเข้าถึงข้อมูล Office 365 ส่วนบุคคล (เอกสาร อีเมล การสนทนา และอื่นๆ) ของคุณ โปรดตรวจสอบให้แน่ใจว่าคุณเชื่อถือบุคคลหรือองค์กรที่ขอให้คุณเข้าถึงเครื่องมือนี้ก่อนดำเนินการต่อ",
      "warningLine2": "เรียนรู้เพิ่มเติมที่นี่: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "เกิดข้อผิดพลาดการโหลดรายการการตรวจแก้จุดบกพร่อง",
      "debugManifestErrorDismissButtonText": "ยกเลิก"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "อนุญาตให้ใช้สคริปต์แก้จุดบกพร่องหรือไม่",
      "allowDebugLoaderTitle": "อนุญาตตัวโหลดการแก้จุดบกพร่องหรือไม่",
      "allowDebugLoaderAndManifestsTitle": "อนุญาตตัวโหลดแก้จุดบกพร่องและสคริปต์แก้จุดบกพร่องหรือไม่",
      "debugManifestLoadingWarning": "คำเตือน: หน้านี้มีสคริปต์ที่ไม่ปลอดภัย ซึ่งอาจเป็นอันตรายกับคอมพิวเตอร์ของคุณถ้าถูกโหลด อย่าดำเนินการใดๆ นอกจากคุณจะเชื่อถือนักพัฒนาและเข้าใจถึงความเสี่ยง",
      "debugManifestLoadingWarning2": "ถ้าคุณไม่แน่ใจ ให้คลิก {0}",
      "debugManifestLoadingConfirm": "โหลดสคริปต์การดีบัก",
      "debugManifestLoadingCancel": "ไม่ต้องโหลดสคริปต์การดีบัก",
      "debugManifestLoadingCalloutText": "ถ้าคุณไม่ทราบว่าจะทำอะไร ให้คลิกที่นี่"
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "กำลังโหลด...",
      "developerToolsTabLoadingUnknownError": "ข้อผิดพลาดที่ไม่รู้จักในการโหลดมอดูลเครื่องมือสำหรับนักพัฒนา"
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "ไฟล์กำกับ",
      "noManifestSelected": "ไม่ได้เลือกไฟล์กำกับ"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "ประสิทธิภาพ",
      "ErrorAccessingPerfDataErrorMessage": "มีปัญหาในการเข้าถึงข้อมูลประสิทธิภาพ: วัตถุเป็นค่า Null หรือไม่ได้ระบุ",
      "ErrorAccessingRedirectDataErrorMessage": "มีปัญหาในการเข้าถึงข้อมูลประสิทธิภาพของการเปลี่ยนเส้นทาง HTTP",
      "ErrorParsingPercievedLatencyErrorMessage": "ตรวจพบข้อผิดพลาดขณะแยกวิเคราะห์ข้อมูลเวลาแฝงที่รับรู้",
      "ErrorParsingApiDataErrorMessage": "ตรวจพบข้อผิดพลาดขณะแยกวิเคราะห์ข้อมูล API",
      "UnkownPerformanceDataErrorMessage": "เกิดข้อผิดพลาดที่ไม่รู้จัก: {0}",
      "DefaultWebPartName": "Web Part",
      "ServerResponseLabel": "การตอบสนองของเซิร์ฟเวอร์",
      "ApplicationInitializationLabel": "การเตรียมใช้งานแอปพลิเคชัน",
      "ScriptFetchEvalLabel": "การดึงข้อมูลและประเมินผลสคริปต์",
      "SpLoaderStartLabel": "การเตรียมใช้งาน SPFx",
      "PageRenderLabel": "การแสดงหน้า",
      "LeftNavRenderLabel": "การแสดงการนำทางด้านซ้าย",
      "CanvasRenderLabel": "การแสดง Canvas",
      "LayoutRenderLabel": "แสดงเค้าโครง",
      "RedirectResponseLabel": "เวลาตอบสนองของการเปลี่ยนเส้นทาง",
      "AppLoadLabel": "การโหลดแอปพลิเคชัน",
      "RenderWebPartsLabel": "การแสดง Web Part",
      "TotalRenderTimeLabel": "ผลรวม",
      "GeneralErrorMessage": "ขออภัย มีบางอย่างผิดพลาดขณะดึงข้อมูลประสิทธิภาพ",
      "ErrorMessagePrefix": "ข้อความแสดงข้อผิดพลาด: {0}",
      "PerformanceDataHint": "หมายเหตุ: หลังจากเพิ่มหรือนำ Web Part ออกแล้ว ให้รีเฟรชหน้าเพื่อดูข้อมูลประสิทธิภาพที่อัปเดตแล้ว",
      "ModulesLoadedLegendLabel": "มอดูลที่โหลด",
      "InitializationLegendLabel": "การเตรียมใช้งาน",
      "RenderTimeLegendLabel": "เวลาแสดง",
      "InitializationTimeLabel": "เวลาเตรียมใช้งาน",
      "ModuleLoadingTimeLabel": "เวลาการโหลดมอดูล",
      "ModuleLazyLoadingDelayLabel": "การโหลดโมดูลล่าช้า",
      "DataFetchTimeLabel": "เวลาดึงข้อมูล",
      "DataFetchLegendLabel": "การดึงข้อมูล",
      "ItemsColumnHeader": "รายการ",
      "DurationColumnHeader": "ระยะเวลา",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "ไม่มี"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "ติดตาม",
      "EmptyTraceData": "ไม่ได้โหลดข้อมูลการติดตามใดๆ",
      "ExportCSVButtonLabel": "ส่งออกไฟล์ CSV",
      "LevelHeaderLabel": "ระดับ",
      "MessageHeaderLabel": "ข้อความ",
      "ScopeHeaderLabel": "ขอบเขต",
      "SourceHeaderLabel": "แหล่งที่มา",
      "TimestampHeaderLabel": "ประทับเวลา",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "พบปัญหาในการเข้าถึงข้อมูลการติดตาม"
    }
  };

  strings.default = strings;
  return strings;
});
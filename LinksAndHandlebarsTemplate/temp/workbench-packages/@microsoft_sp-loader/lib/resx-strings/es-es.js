define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "No se puede cargar la aplicación en esta página. Use el botón Atrás del explorador para intentarlo de nuevo. Si el problema persiste, póngase en contacto con el administrador del sitio y proporciónele la información que aparece en Detalles técnicos.",
      "platformFailedToLoadError": "No se pudo cargar la plataforma. Id.: \"{0}\"; nombre: \"{1}\"",
      "platformFailedToLoadWithMessageError": "No se pudo cargar la plataforma. ID: \"{0}\"; nombre: \"{1}\".\r\nError: {2}.",
      "applicationFailedToInitializeError": "Error al inicializar la aplicación. Error: {0}.",
      "invalidPreloadedDataError": "Los datos cargados previamente no son válidos.",
      "manifestNotFoundByIdError": "No se encontró el manifiesto para el identificador de componente \"{0}\".",
      "manifestNotFoundError": "No se encontró el manifiesto del ID de componente \"{0}\" y la versión \"{1}\".",
      "systemConfigDisabledError": "No se admite System.config(). Use un manifiesto para especificar la configuración.",
      "loadComponentLog": "Se está cargando el componente \"{0}\" ({1}).",
      "loadComponentEndLog": "El componente \"{0}\" ({1}) se ha cargado.",
      "loadComponentRetryLog": "Cargar el componente \"{0}\" ({1}). Intento {2} de {3}.",
      "loadComponentError": "Error al cargar el componente \"{0}\" ({1}).\r\nError original: {2}.",
      "loadComponentMaxRetriesError": "Se intentó cargar el componente \"{0}\" ({1}) {2} veces sin éxito.",
      "loadComponentDependencyError": "Error al cargar la dependencia \"{0}\" del componente \"{1}\" ({2}).\r\nError original: {3}",
      "loadComponentDependencyFailoverPathError": "No se pudo cargar la dependencia de componente \"{0}\" con la ruta de acceso de conmutación por error \"{1}\" del componente \"{2}\" ({3}).\r\nError original: {4}",
      "loadPathDependencyLog": "Cargando la dependencia de la ruta \"{0}\" del componente \"{1}\" ({2})",
      "loadPathDependencyError": "No se pudo cargar la dependencia de la ruta de acceso \"{0}\" del componente \"{1}\" ({2}).\r\nError original: {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "No se pudo cargar la dependencia de la ruta \"{0}\" del componente \"{1}\" ({2}) debido a otra dependencia que no se pudo cargar.",
      "loadEntryPointError": "No se pudo cargar el punto de entrada del componente \"{0}\" ({1}).\r\nError original: {2}",
      "loadComponentReturnsEmptyError": "loadComponent() devolvió un objeto vacío para el componente \"{0}\" ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() devolvió un objeto con una propiedad vacía predeterminada para el componente \"{0}\" ({1}).",
      "moduleHasUndeclaredDependencyError": "El punto de entrada para el componente \"{0}\" ({1}) tiene una dependencia en \"{2}\" que no se ha declarado en el manifiesto.",
      "loadScriptWithStringError": "La función loadScript no permite una cadena como 2º parámetro. Use la función ILoadScriptOptions.",
      "tooManyManifestsError": "Se encontraron {0} manifiestos (versiones {1}) del componente \"{2}\".",
      "tooManyCompatibleVersionsError": "Se encontraron {0} versiones compatibles ({1}) de la versión \"{3}\" del componente \"{2}\".",
      "tooManyComponentsError": "Se encontraron demasiados componentes para el id. \"{0}\".",
      "noComponentFoundError": "No se ha encontrado ningún componente para el id. \"{0}\".",
      "deleteComponentLog": "Eliminando el componente \"{0}\" versión \"{1}\" del almacén.",
      "browserNotSupportedError": "Esta versión del explorador no es compatible.\r\nActualice su explorador a la versión más reciente.",
      "ie9OrOlderNotSupportedError": "Esta página no admite versiones de Internet Explorer anteriores a la versión 10. Actualice el explorador web.",
      "firefox43OrOlderNotSupportedError": "Esta página no admite versiones de Mozilla Firefox anteriores a la versión 44. Actualice el explorador web.",
      "resourceNotFoundError": "El recurso \"{0}\" no se encuentra en la configuración del cargador del manifiesto del componente \"{1}\" ({2}).",
      "noFailoverPathError": "No puede llamar a resolveAddress() en un componente sin ruta de acceso de conmutación por error",
      "urlStatusLocalhostFileNotFoundError": "No se ha podido cargar la dirección URL \"{3}\" para el recurso \"{2}\" en el componente \"{0}\" ({1}). No se ha encontrado el archivo en el servidor.\r\nAsegúrese de estar ejecutando \"gulp serve\".",
      "urlStatusFileNotFoundError": "No se ha podido cargar la dirección URL \"{3}\" para el recurso \"{2}\" en el componente \"{0}\" ({1}). No se ha encontrado el archivo en el servidor.",
      "urlStatusForbiddenError": "No se ha podido cargar la dirección URL \"{3}\" para el recurso \"{2}\" en el componente \"{0}\" ({1}). Está prohibido el acceso al archivo.",
      "urlStatusClientErrorError": "No se ha podido cargar la dirección URL \"{3}\" para el recurso \"{2}\" en el componente \"{0}\" ({1}). Se ha producido un error al solicitar el archivo.",
      "urlStatusServerErrorError": "No se ha podido cargar la dirección URL \"{3}\" para el recurso \"{2}\" en el componente \"{0}\" ({1}). Ha habido un problema en el servidor.",
      "urlStatusLocalhostNetworkErrorError": "No se ha podido cargar la dirección URL \"{3}\" para el recurso \"{2}\" en el componente \"{0}\" ({1}). Ha habido un problema en la red.\r\nAsegúrese de haber ejecutado \"gulp serve\" y \"gulp trust-dev-cert\".",
      "urlStatusHttpsNetworkErrorError": "No se ha podido cargar la dirección URL \"{3}\" para el recurso \"{2}\" en el componente \"{0}\" ({1}). Ha habido un problema en la red.\r\nPuede tratarse de un problema con un certificado HTTPS. Asegúrese de tener el certificado correcto.",
      "urlStatusNetworkErrorError": "No se ha podido cargar la dirección URL \"{3}\" para el recurso \"{2}\" en el componente \"{0}\" ({1}). Ha habido un problema en la red.",
      "urlStatusUndefinedError": "No se ha podido cargar la dirección URL \"{3}\" para el recurso \"{2}\" en el componente \"{0}\" ({1}) debido a problemas desconocidos.",
      "isUndefinedValidateError": "El valor de \"{0}\" no puede estar sin definir",
      "failedToCreateGlobalVariableError": "No se pudo crear la variable global \"{0}\" del script \"{1}\"",
      "dependencyLoadError": "No se ha podido cargar el módulo \"{0}\" porque no se ha cargado la dependencia {1}",
      "missingPathDependencyError": "Falta la dependencia de ruta \"{0}\" del componente \"{1}\" ({2}). Dependencias de ruta existentes: {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Error al cargar el script de depuración. Asegúrese de que se está ejecutando el servidor y la URL del parámetro \"{0}\" es correcta.",
      "errorLoadingDebugScriptHTTP": "Error al cargar el script de depuración. Asegúrese de que el servidor se está ejecutando, la URL del parámetro \"{0}\" es correcta, y se permite cargar scripts peligrosos. Considere también el uso de un certificado de desarrollo y proporcione los scripts de depuración a través de HTTPS.",
      "errorLoadingDebugScriptMalformed": "Error al cargar el script de depuración. La URL de depuración ({0}) parece tener un formato incorrecto.",
      "errorLoadingDebugScriptUnknown": "Error desconocido al cargar un script de depuración.",
      "errorLoadingDebugLoaderTitle": "Error al cargar el cargador de depuración.",
      "errorLoadingDebugManifestTitle": "Error al cargar los manifiestos de depuración.",
      "errorLoadingUnknownTitle": "Error al cargar los scripts de depuración."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "Falta la función de componente o inicializador.",
      "closeDeveloperToolsAriaLabel": "Cierre las herramientas de desarrollo."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Advertencia",
      "warningLine1": "El uso de esta herramienta le expone a amenazas de seguridad potenciales que pueden provocar que otros usuarios obtengan acceso a sus datos personales de Office 365 (documentos, correos electrónicos, conversaciones y mucho más). Asegúrese de que confía en la persona o en la organización que le ha pedido que obtenga acceso a esta herramienta antes de continuar.",
      "warningLine2": "Obtenga más información aquí: {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Error al cargar los manifiestos de depuración.",
      "debugManifestErrorDismissButtonText": "Descartar"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "¿Desea permitir los scripts de depuración?",
      "allowDebugLoaderTitle": "¿Permitir cargador de depuración?",
      "allowDebugLoaderAndManifestsTitle": "¿Permitir cargador de depuración y scripts de depuración?",
      "debugManifestLoadingWarning": "ADVERTENCIA: Esta página contiene scripts no seguros que, si se cargan, podrían dañar el equipo. No continúe a menos que confíe en el desarrollador y comprenda los riesgos.",
      "debugManifestLoadingWarning2": "Si no lo tiene claro, haga clic en {0}.",
      "debugManifestLoadingConfirm": "Cargar scripts de depuración",
      "debugManifestLoadingCancel": "No cargar scripts de depuración",
      "debugManifestLoadingCalloutText": "Si no sabe lo que hacer, haga clic aquí."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Cargando...",
      "developerToolsTabLoadingUnknownError": "Se ha producido un error desconocido al cargar el módulo de herramientas de desarrollo."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifiestos",
      "noManifestSelected": "No se ha seleccionado ningún manifiesto"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Rendimiento",
      "ErrorAccessingPerfDataErrorMessage": "No se pueden recuperar los datos de rendimiento: el objeto es nulo o no se ha definido.",
      "ErrorAccessingRedirectDataErrorMessage": "No se pudo obtener acceso a los datos de rendimiento de redireccionamiento HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Se detectó un error al analizar los datos de latencia observados.",
      "ErrorParsingApiDataErrorMessage": "Se detectó un error al analizar los datos de la API.",
      "UnkownPerformanceDataErrorMessage": "Se ha producido un error desconocido: {0}",
      "DefaultWebPartName": "Elemento web",
      "ServerResponseLabel": "Respuesta del servidor",
      "ApplicationInitializationLabel": "Inicialización de aplicaciones",
      "ScriptFetchEvalLabel": "Obtención y evaluación de scripts",
      "SpLoaderStartLabel": "Inicialización de SPFx",
      "PageRenderLabel": "Representación de la página",
      "LeftNavRenderLabel": "Representación de navegación izquierda",
      "CanvasRenderLabel": "Representación de lienzo",
      "LayoutRenderLabel": "Representación del diseño",
      "RedirectResponseLabel": "Respuesta de redireccionamiento",
      "AppLoadLabel": "Carga de aplicaciones",
      "RenderWebPartsLabel": "Representación de elementos web",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Se produjo un error al recuperar los datos de rendimiento.",
      "ErrorMessagePrefix": "Mensaje de error: {0}",
      "PerformanceDataHint": "Nota: Después de agregar o quitar un elemento web, actualice la página para ver los datos de rendimiento actualizados.",
      "ModulesLoadedLegendLabel": "Módulos cargados",
      "InitializationLegendLabel": "Inicialización",
      "RenderTimeLegendLabel": "Tiempo de representación",
      "InitializationTimeLabel": "Tiempo de inicialización",
      "ModuleLoadingTimeLabel": "Tiempo de carga del módulo",
      "ModuleLazyLoadingDelayLabel": "Carga del módulo retrasada",
      "DataFetchTimeLabel": "Tiempo de captura de datos",
      "DataFetchLegendLabel": "Captura de datos",
      "ItemsColumnHeader": "Elementos",
      "DurationColumnHeader": "Duración",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/D"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Seguimiento",
      "EmptyTraceData": "No se ha cargado ningún seguimiento.",
      "ExportCSVButtonLabel": "Exportar CSV",
      "LevelHeaderLabel": "Nivel",
      "MessageHeaderLabel": "Mensaje",
      "ScopeHeaderLabel": "Ámbito",
      "SourceHeaderLabel": "Origen",
      "TimestampHeaderLabel": "Marca de tiempo",
      "TimestampFormat": "{2}/{1}/{0} a las {3}:{4}:{5}:{6}",
      "ErrorAccessingTraceDataErrorMessage": "Se ha producido un problema al obtener acceso a los datos de seguimiento."
    }
  };

  strings.default = strings;
  return strings;
});
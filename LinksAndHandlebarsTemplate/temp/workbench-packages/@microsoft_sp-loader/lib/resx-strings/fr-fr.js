define([], function() {
  var strings = {
    "_nQNACBeQ34aV6bVwtFBayA": {
      "loaderUserFriendlyError": "Nous ne pouvons pas charger l’application sur cette page. Utilisez le bouton Précédent du navigateur pour réessayer. Si le problème persiste, contactez l’administrateur du site et communiquez-lui les informations figurant dans la section Détails techniques.",
      "platformFailedToLoadError": "Le chargement de la plateforme a échoué. ID : « {0} », nom : « {1} »",
      "platformFailedToLoadWithMessageError": "Le chargement de la plate-forme a échoué. ID : « {0} », Nom : « {1} ».\r\nErreur : {2}",
      "applicationFailedToInitializeError": "Nous avons rencontré une erreur lors de l’initialisation de l’application. Erreur : {0}",
      "invalidPreloadedDataError": "Les données préchargées ne sont pas valides.",
      "manifestNotFoundByIdError": "Nous n’avons pas trouvé le manifeste pour l’ID de composant « {0} ».",
      "manifestNotFoundError": "Nous n’avons pas trouvé le manifeste pour l’ID de composant « {0} » et la version « {1} ».",
      "systemConfigDisabledError": "System.config() n’est pas pris en charge. Utilisez un manifeste pour spécifier la configuration.",
      "loadComponentLog": "Chargement du composant « {0} » ({1}).",
      "loadComponentEndLog": "Composant « {0} » ({1}) chargé.",
      "loadComponentRetryLog": "Chargement du composant « {0} » ({1}). Tentative {2} sur {3}.",
      "loadComponentError": "Le chargement du composant « {0} » a échoué ({1}).\r\nErreur initiale : {2}",
      "loadComponentMaxRetriesError": "Nous avons tenté de charger le composant « {0} » ({1}) {2} fois sans succès.",
      "loadComponentDependencyError": "Le chargement de la dépendance « {0} » à partir du composant « {1} » a échoué ({2}).\r\nErreur initiale : {3}",
      "loadComponentDependencyFailoverPathError": "Le chargement de la dépendance « {0} » avec le chemin de basculement « {1} » à partir du composant « {2} » a échoué ({3}).\r\nErreur d’origine : {4}",
      "loadPathDependencyLog": "Chargement de la dépendance de chemin d’accès « {0} » à partir du composant « {1} » ({2})",
      "loadPathDependencyError": "Le chargement de la dépendance de chemin d’accès « {0} » à partir du composant « {1} » a échoué ({2}).\r\nErreur d’origine : {3}",
      "loadPathDependencyBlockedByAnotherDependencyError": "Nous n’avons pas pu charger la dépendance de chemin d’accès « {0} » à partir du composant « {1} » ({2}) en raison d’une autre dépendance dont le chargement a échoué.",
      "loadEntryPointError": "Le chargement du point d’entrée à partir du composant « {0} » a échoué ({1}).\r\nErreur d’origine : {2}",
      "loadComponentReturnsEmptyError": "loadComponent() a renvoyé un objet vide pour le composant « {0} » ({1}).",
      "loadComponentReturnsDefaultEmptyError": "loadComponent() a renvoyé un objet avec une propriété par défaut vide pour le composant « {0} » ({1}).",
      "moduleHasUndeclaredDependencyError": "Le point d’entrée pour le composant « {0} » ({1}) a une dépendance sur « {2} » qui n’est pas déclarée dans le manifeste.",
      "loadScriptWithStringError": "La fonction loadScript n’autorise pas une chaîne comme deuxième paramètre. Utilisez ILoadScriptOptions à la place.",
      "tooManyManifestsError": "Nous avons détecté {0} manifestes (versions {1}) pour le composant « {2} ».",
      "tooManyCompatibleVersionsError": "Nous avons détecté {0} versions compatibles ({1}) pour le composant « {2} » version « {3} ».",
      "tooManyComponentsError": "Nous avons trouvé un trop grand nombre de composants pour l’ID « {0} ».",
      "noComponentFoundError": "Nous n’avons trouvé aucun composant correspondant à l’ID « {0} ».",
      "deleteComponentLog": "Suppression du composant « {0} », version « {1} », à partir du magasin.",
      "browserNotSupportedError": "Cette version de votre navigateur n’est pas prise en charge.\r\nMettez à jour votre navigateur vers la dernière version.",
      "ie9OrOlderNotSupportedError": "Cette page ne prend pas en charge les versions d’Internet Explorer antérieures à la version 10. Veuillez mettre à jour votre navigateur web.",
      "firefox43OrOlderNotSupportedError": "Cette page ne prend pas en charge les versions de Mozilla Firefox antérieures à la version 44. Veuillez mettre à jour votre navigateur web.",
      "resourceNotFoundError": "La ressource « {0} » est introuvable dans la configuration de chargeur du manifeste pour le composant « {1} » ({2}).",
      "noFailoverPathError": "Nous ne pouvons pas appeler resolveAddress() sur un composant qui ne dispose d’aucun chemin de basculement",
      "urlStatusLocalhostFileNotFoundError": "Le chargement de l’URL « {3} » associée à la ressource « {2} » dans le composant « {0} » a échoué ({1}). Nous n’avons pas trouvé le fichier sur le serveur.\r\nAssurez-vous d’exécuter la commande « gulp serve ».",
      "urlStatusFileNotFoundError": "Le chargement de l’URL « {3} » associée à la ressource « {2} » dans le composant « {0} » a échoué ({1}). Nous n’avons pas trouvé le fichier sur le serveur.",
      "urlStatusForbiddenError": "Le chargement de l’URL « {3} » associée à la ressource « {2} » dans le composant « {0} » a échoué ({1}). L’accès au fichier est interdit.",
      "urlStatusClientErrorError": "Le chargement de l’URL « {3} » associée à la ressource « {2} » dans le composant « {0} » a échoué ({1}). Nous avons rencontré une erreur lors de la demande du fichier.",
      "urlStatusServerErrorError": "Le chargement de l’URL « {3} » associée à la ressource « {2} » dans le composant « {0} » a échoué ({1}). Nous avons rencontré un problème sur le serveur.",
      "urlStatusLocalhostNetworkErrorError": "Le chargement de l’URL « {3} » associée à la ressource « {2} » dans le composant « {0} » a échoué ({1}). Nous avons rencontré un problème au niveau du serveur.\r\nAssurez-vous d’exécuter « gulp serve » et d’avoir exécuté la commande « gulp trust-dev-cert ».",
      "urlStatusHttpsNetworkErrorError": "Le chargement de l’URL « {3} » associée à la ressource « {2} » dans le composant « {0} » a échoué ({1}). Nous avons rencontré un problème réseau.\r\nCe problème est peut-être dû à un certificat HTTPS. Assurez-vous de disposer du certificat approprié.",
      "urlStatusNetworkErrorError": "Le chargement de l’URL « {3} » associée à la ressource « {2} » dans le composant « {0} » a échoué ({1}). Nous avons rencontré un problème réseau.",
      "urlStatusUndefinedError": "Le chargement de l’URL « {3} » associée à la ressource « {2} » dans le composant « {0} » a échoué ({1}), car nous avons rencontré des problèmes inconnus.",
      "isUndefinedValidateError": "La valeur de « {0} » ne doit pas être non définie",
      "failedToCreateGlobalVariableError": "Nous n’avons pas pu créer la variable globale « {0} » à partir du script « {1} »",
      "dependencyLoadError": "Le chargement du module « {0} » a échoué, car la dépendance {1} n’a pas été chargée",
      "missingPathDependencyError": "Il manque la dépendance de chemin d’accès « {0} » du composant « {1} » ({2}). Dépendances de chemin d’accès existantes : {3}",
      "listSeparator": ", "
    },
    "_FmFyAWZ1md7Z1R+V8t2S2Q": {
      "errorLoadingDebugScriptHTTPS": "Une erreur s’est produite lors du chargement du script du débogage. Assurez-vous que le serveur est en cours d’exécution et que l’URL du paramètre « {0} » est appropriée.",
      "errorLoadingDebugScriptHTTP": "Une erreur s’est produite lors du chargement du script de débogage. Assurez-vous que le serveur est en cours d’exécution, que l’URL du paramètre « {0} » est appropriée et que le chargement de scripts non sécurisés est autorisé. Envisagez également d’utiliser un certificat de développement et de proposer des scripts de débogage via HTTPS.",
      "errorLoadingDebugScriptMalformed": "Une erreur s’est produite lors du chargement du script de débogage. Le format de l’URL de débogage ({0}) semble incorrect.",
      "errorLoadingDebugScriptUnknown": "Une erreur inconnue s’est produite lors du chargement d’un script de débogage.",
      "errorLoadingDebugLoaderTitle": "Une erreur s’est produite lors du chargement du chargeur de débogage.",
      "errorLoadingDebugManifestTitle": "Une erreur s’est produite lors du chargement des manifestes de débogage.",
      "errorLoadingUnknownTitle": "Une erreur s’est produite lors du chargement de scripts de débogage."
    },
    "_RPELcTeq3ZByqi3N5dt18w": {
      "missingDeveloperToolsTabInitFunctionError": "La fonction d’initialiseur ou un composant est manquant.",
      "closeDeveloperToolsAriaLabel": "Fermer les outils de développement."
    },
    "_fwMQe6Xe08yEeCPNxngd+g": {
      "warningHeading": "Avertissement !",
      "warningLine1": "L’utilisation de cet outil vous expose à des menaces potentielles liées à la sécurité. Des personnes pourraient obtenir l’accès à vos données Office 365 personnelles (documents, courriers, conversations, etc.). Avant de continuer, vérifiez que la personne ou l’organisation qui vous a demandé d’accéder à cet outil est digne de confiance.",
      "warningLine2": "En savoir plus ici : {0}"
    },
    "_mraBnnuq2J9WjrAcnw9QNA": {
      "debugManifestErrorDetail": "Une erreur s’est produite lors du chargement des manifestes de débogage.",
      "debugManifestErrorDismissButtonText": "Masquer"
    },
    "_upo3vfLFBbnbzl2hKy2TwA": {
      "allowDebugManifestsTitle": "Voulez-vous autoriser les scripts de débogage ?",
      "allowDebugLoaderTitle": "Voulez-vous autoriser le chargeur de débogage ?",
      "allowDebugLoaderAndManifestsTitle": "Voulez-vous autoriser le chargeur de débogage et les scripts de débogage ?",
      "debugManifestLoadingWarning": "AVERTISSEMENT : cette page contient des scripts non sécurisés qui, en cas de chargement, pourraient endommager votre ordinateur. Ne poursuivez que si vous faites confiance au développeur et comprenez les risques.",
      "debugManifestLoadingWarning2": "Si vous n’êtes pas sûr, cliquez sur {0}.",
      "debugManifestLoadingConfirm": "Charger les scripts de débogage",
      "debugManifestLoadingCancel": "Ne pas charger les scripts de débogage",
      "debugManifestLoadingCalloutText": "Si vous ne savez pas quoi faire, cliquez ici."
    },
    "_SxImp5ewsUToxeAHBkB+pw": {
      "developerToolsTabLoadingText": "Chargement en cours...",
      "developerToolsTabLoadingUnknownError": "Nous avons rencontré une erreur inconnue lors du chargement du module des outils de développement."
    },
    "_sovI4qDAUPMnD4jg3Vsyfg": {
      "tabTitle": "Manifestes",
      "noManifestSelected": "Aucun manifeste n’est sélectionné"
    },
    "_g7G0QHJ5bQYlxe+lk+DcxA": {
      "TabTitle": "Performances",
      "ErrorAccessingPerfDataErrorMessage": "Nous n’avons pas pu récupérer les données de performance, car l’objet a la valeur null ou n’est pas défini.",
      "ErrorAccessingRedirectDataErrorMessage": "Nous avons rencontré un problème lors de l’accès aux données de performance de redirection HTTP.",
      "ErrorParsingPercievedLatencyErrorMessage": "Nous avons rencontré un problème lors de l’analyse des données de latence identifiées.",
      "ErrorParsingApiDataErrorMessage": "Nous avons rencontré une erreur lors de l’analyse des données de l’API.",
      "UnkownPerformanceDataErrorMessage": "Nous avons rencontré une erreur inconnue : {0}",
      "DefaultWebPartName": "Composant WebPart",
      "ServerResponseLabel": "Réponse du serveur",
      "ApplicationInitializationLabel": "Initialisation de l’application",
      "ScriptFetchEvalLabel": "Récupération et évaluation de scripts",
      "SpLoaderStartLabel": "Initialisation de SPFx",
      "PageRenderLabel": "Rendu de page",
      "LeftNavRenderLabel": "Rendu du menu de navigation gauche",
      "CanvasRenderLabel": "Rendu de la zone de dessin",
      "LayoutRenderLabel": "Restitution de la disposition",
      "RedirectResponseLabel": "Réponse redirigée",
      "AppLoadLabel": "Chargement de l’application",
      "RenderWebPartsLabel": "Rendu des composants WebPart",
      "TotalRenderTimeLabel": "Total",
      "GeneralErrorMessage": "Désolé... Nous avons rencontré un problème lors de la récupération des données de performance.",
      "ErrorMessagePrefix": "Message d’erreur : {0}",
      "PerformanceDataHint": "Remarque : après l’ajout ou la suppression d’un composant WebPart, actualisez la page pour afficher les données de performances mises à jour.",
      "ModulesLoadedLegendLabel": "Modules chargés",
      "InitializationLegendLabel": "Initialisation",
      "RenderTimeLegendLabel": "Heure du rendu",
      "InitializationTimeLabel": "Durée d’initialisation",
      "ModuleLoadingTimeLabel": "Durée de chargement du module",
      "ModuleLazyLoadingDelayLabel": "Chargement du module retardé",
      "DataFetchTimeLabel": "Durée de récupération des données",
      "DataFetchLegendLabel": "Récupération des données",
      "ItemsColumnHeader": "Éléments",
      "DurationColumnHeader": "Durée",
      "MillisecondsUnitLabel": "{0} ms",
      "NAPlaceholder": "N/A"
    },
    "_gqinlPQb8HZprTeCpwNz2w": {
      "TabTitle": "Trace",
      "EmptyTraceData": "Aucune trace n’a été chargée.",
      "ExportCSVButtonLabel": "Exporter au format CSV",
      "LevelHeaderLabel": "Niveau",
      "MessageHeaderLabel": "Message",
      "ScopeHeaderLabel": "Étendue",
      "SourceHeaderLabel": "Source",
      "TimestampHeaderLabel": "Horodateur",
      "TimestampFormat": "{0}/{1}/{2} {3}:{4}:{5}.{6}",
      "ErrorAccessingTraceDataErrorMessage": "Nous avons rencontré un problème lors de l’accès aux données de trace."
    }
  };

  strings.default = strings;
  return strings;
});
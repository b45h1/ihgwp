import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
import { ISPComponentLoader } from './ISPComponentLoader';
import { ILoadScriptOptions } from './ILoadScriptOptions';
import { IPreloadedData } from './IPreloadedData';
/**
 * Component loader.
 * Needs to be initialized with an implemented ISPComponentLoader.
 *
 * @public
 */
export default class SPComponentLoaderProxy {
    private static _instance;
    /**
     * Initializes the component loader with an implementation.
     * Must be called once before it can be used.
     *
     * @internal
     */
    static _initialize(componentLoader: ISPComponentLoader): void;
    /**
     * {@inheritdoc  ISPComponentLoader._startApplication}
     *
     * @internal
     */
    static _startApplication<TApplication>(preloadedData: IPreloadedData): Promise<TApplication>;
    /**
     * {@inheritdoc  ISPComponentLoader.loadCss}
     */
    static loadCss(url: string): void;
    /**
     * {@inheritdoc  ISPComponentLoader.loadScript}
     */
    static loadScript<TModule>(url: string, options?: ILoadScriptOptions): Promise<TModule>;
    /**
     * {@inheritdoc  ISPComponentLoader.loadComponent}
     */
    static loadComponent<TComponent>(manifest: IClientSideComponentManifest): Promise<TComponent>;
    /**
     * {@inheritdoc  ISPComponentLoader.loadComponentById}
     *
     * @alpha
     */
    static loadComponentById<TComponent>(id: string, version?: string): Promise<TComponent>;
    /**
     * {@inheritdoc  ISPComponentLoader.registerManifests}
     *
     * @alpha
     */
    static registerManifests(manifests: IClientSideComponentManifest[]): void;
    /**
     * {@inheritdoc  ISPComponentLoader.manifests}
     *
     * @alpha
     */
    static getManifests(): IClientSideComponentManifest[];
    /**
     * {@inheritdoc  ISPComponentLoader.tryGetLoadedComponent}
     *
     * @alpha
     */
    static tryGetLoadedComponent<TComponent>(manifest: IClientSideComponentManifest): TComponent | undefined;
    /**
     * {@inheritdoc  ISPComponentLoader.tryGetManifestById}
     *
     * @alpha
     */
    static tryGetManifestById(id: string, version?: string): IClientSideComponentManifest | undefined;
    /**
     * {@inheritdoc  ISPComponentLoader._loadDebugManifestsForWorkbench}
     *
     * @internal
     */
    static _loadDebugManifestsForWorkbench(manifestsFileUrl: string): Promise<void>;
}

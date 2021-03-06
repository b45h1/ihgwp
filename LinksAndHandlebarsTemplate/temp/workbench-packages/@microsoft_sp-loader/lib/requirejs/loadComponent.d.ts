import { IClientSideComponentManifest } from '@microsoft/sp-module-interfaces';
/**
 * Loads a component from a manifest.
 *
 * @param manifest - Manifest of the module to load.
 * @returns          A promise containing the loaded module.
 */
export default function loadComponent<TComponent>(manifest: IClientSideComponentManifest): Promise<TComponent>;

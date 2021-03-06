import { SPError } from '@microsoft/sp-core-library';
export declare enum SPLoaderErrorCode {
    loadComponentMaxRetriesError = 0,
    loadComponentError = 1,
    loadComponentReturnsEmptyError = 2,
    loadComponentReturnsDefaultEmptyError = 3,
    loadComponentDependencyError = 4,
    manifestNotFoundError = 5,
    loadPathDependencyBlockedByAnotherDependencyError = 6,
    moduleHasUndeclaredDependencyError = 7,
    loadEntryPointError = 8,
    loadPathDependencyError = 9,
    loadComponentDependencyFailoverPathError = 10,
    loadScriptWithStringError = 11,
    urlStatusLocalhostFileNotFoundError = 12,
    urlStatusFileNotFoundError = 13,
    urlStatusForbiddenError = 14,
    urlStatusClientErrorError = 15,
    urlStatusServerErrorError = 16,
    urlStatusLocalhostNetworkErrorError = 17,
    urlStatusHttpsNetworkErrorError = 18,
    urlStatusNetworkErrorError = 19,
    urlStatusUndefinedError = 20,
    failedToCreateGlobalVariable = 21,
    dependencyLoadError = 22,
    missingPathDependencyError = 23,
}
/**
 * sp-loader errors.
 *
 * @internal
 */
export default class SPLoaderError extends SPError {
    /**
     * Error id to string map
     */
    private static _errorCodeToMessageMap;
    private _loaderErrorCode;
    private _isExpected;
    constructor(errorCode: SPLoaderErrorCode, innerError: Error | undefined, isExpected: boolean, ...params: any[]);
    /**
     * Error id.
     */
    readonly id: number;
    /**
     * Error category.
     */
    readonly category: string;
    /**
     * True if the error is an expected error.
     * This can happen when it's surfacing an error that happened in the loader,
     * or there is a transient network problem.
     */
    readonly isExpected: boolean;
}

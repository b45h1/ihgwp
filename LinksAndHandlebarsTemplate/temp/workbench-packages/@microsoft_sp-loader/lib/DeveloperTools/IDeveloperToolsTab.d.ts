/// <reference types="react" />
/**
 * @file IDeveloperToolsTab.ts
 * @Copyright (c) Microsoft Corporation.  All rights reserved.
 */
import * as React from 'react';
export interface IComponentInitializer {
    (resolve: (component: React.ComponentClass<IDeveloperToolsCompPropBase>) => void, reject: (error: Error) => void): void;
}
export interface IDeveloperToolsTabParametersBase {
    /**
     * The title of the developer tools tab. Shown along the top of the developer tools panel.
     */
    title: string;
}
export interface IDeveloperToolsTabPromiseParameters extends IDeveloperToolsTabParametersBase {
    /**
     * A function that resolves to a React component to be shown in the developer tools panel or rejects with an error.
     */
    componentInitializer: IComponentInitializer;
}
export interface IDeveloperToolsCompPropBase {
}
export interface IDeveloperToolsTabComponentParameters extends IDeveloperToolsTabParametersBase {
    /**
     * A react component to be shown in the developer tools panel.
     */
    component: React.ComponentClass<IDeveloperToolsCompPropBase>;
}
/**
 * Initializer for a developer tools tab.
 *
 * @internal
 */
export declare type IDeveloperToolsTab = IDeveloperToolsTabPromiseParameters | IDeveloperToolsTabComponentParameters;

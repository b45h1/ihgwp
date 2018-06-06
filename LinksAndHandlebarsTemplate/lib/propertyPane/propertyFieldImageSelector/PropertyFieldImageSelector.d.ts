import IWebPartContext from '@microsoft/sp-webpart-base/lib/core/IWebPartContext';
import { IPropertyPaneField } from '@microsoft/sp-webpart-base';
export interface IPropertyFieldImageSelectorProps {
    properties?: any;
    context?: IWebPartContext;
    label: string;
    key?: string;
    imageMode: ImageDisplayType;
    changeImage?: (url: string, name?: string) => void;
    changeImageMode?: (imageDisplayMode: ImageDisplayType) => void;
}
export interface IPropertyFieldImageSelectorPropsInternal extends IPropertyFieldImageSelectorProps {
    onRender(elem: HTMLElement): void;
    context?: IWebPartContext;
    targetProperty: string;
    label: string;
    key?: string;
    imageMode: ImageDisplayType;
    changeImage?: (url: string, name?: string) => void;
    changeImageMode?: (imageDisplayMode: ImageDisplayType) => void;
}
export declare function PropertyPaneImageSelector(targetProperty: string, properties: IPropertyFieldImageSelectorProps): IPropertyPaneField<IPropertyFieldImageSelectorPropsInternal>;
export declare enum ImageDisplayType {
    Auto = 0,
    Custom = 1,
}

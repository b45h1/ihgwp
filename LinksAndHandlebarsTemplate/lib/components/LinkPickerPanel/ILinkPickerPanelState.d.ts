export declare enum NavState {
    site = 0,
    link = 1,
}
export interface ILinkPickerPanelState {
    isOpen?: boolean;
    navState?: NavState;
    isUrlValid?: boolean;
    url?: string;
}

import HubLinksWebPart from '../HubLinks';
import { IHubLinksLayout, HubLinksLayout } from './HubLinksLayout';
export default class FeaturedContentFactory {
    static getLayout(layout: HubLinksLayout, isAdvancedMode: boolean, webPart: HubLinksWebPart): IHubLinksLayout;
}

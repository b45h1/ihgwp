import { ISearchResult } from "../../../models/ISearchResult";

interface ITilesListViewProps {
    items?: ISearchResult[];
    showFileIcon: boolean;
    showCreatedDate: boolean;
    // layoutMode:boolean;
    layoutMode:any;
}

export default ITilesListViewProps;
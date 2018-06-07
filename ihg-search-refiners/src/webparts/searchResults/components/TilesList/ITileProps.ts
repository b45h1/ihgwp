import { ISearchResult } from "../../../models/ISearchResult";

interface ITileProps {
    item: ISearchResult;
    showFileIcon: boolean;
    showCreatedDate: boolean;
    // layoutMode:boolean;
    layoutMode:any;
}

export default ITileProps;
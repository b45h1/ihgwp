import ISearchDataProvider from "../../../dataProviders/ISearchDataProvider";

interface ISearchResultsContainerProps {
  searchDataProvider: ISearchDataProvider;
  queryKeywords: string;
  maxResultsCount: number;
  resultSourceId: string;
  enableQueryRules: boolean;
  selectedProperties: string[];
  refiners: string;
  showPaging: boolean;
  showFileIcon: boolean;
  showCreatedDate: boolean;
  showFilter:boolean;
  wpTitle:string;
  // layoutMode:boolean;
  layoutMode:any;
}

export default ISearchResultsContainerProps;
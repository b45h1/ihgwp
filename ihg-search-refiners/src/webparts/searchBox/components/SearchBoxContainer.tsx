import * as React from 'react';
import { ISearchBoxProps } from './ISearchBoxContainerProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { SearchBox } from "office-ui-fabric-react/lib/SearchBox";
import { Text } from "@microsoft/sp-core-library";
import * as strings from 'SearchBoxWebPartStrings';

import {showConsoleText} from '../../searchResults/components/FilterPanel/FilterPanel';

export default class SearchBoxContainer extends React.Component<ISearchBoxProps, {}> {

  public constructor() {
    super();

    this.onSearch = this.onSearch.bind(this);
  }

  public render(): React.ReactElement<ISearchBoxProps> {
    return (
        <SearchBox
            onChange={this.onSearch}
            onSearch={ this.onEnterSearch }
            placeholder={ strings.SearchInputPlaceholder }
        />
    );
  }

  /**
   * Handler when a user enters new keywords
   * @param queryText The query text entered by the user
   */
  public onSearch(queryText: string) {    
    const url = new URLSearchParams();
    url.append("k", queryText);
    // clearFilters._clearFilters;
    // clearingFilters._clearFilters();
    // The data parameter wil be caught by the search results WP
    history.pushState({ k: queryText}, '', Text.format("#{0}", url.toString()));
  }
  public onEnterSearch(queryText: string) {    
    const url = new URLSearchParams();
    url.append("k", queryText);
    showConsoleText();
    // clearFilters._clearFilters;
    // clearingFilters._clearFilters();
    // The data parameter wil be caught by the search results WP
    history.pushState({ k: queryText}, '', Text.format("#{0}", url.toString()));
  }
}

import * as React from "react";
import ITilesListViewProps from "./ITilesListViewProps";
import { List } from 'office-ui-fabric-react/lib/List';
import Tile from "./Tile";
import { IRectangle } from "office-ui-fabric-react/lib/Utilities";
import "../SearchResultsWebPart.scss";

const ROWS_PER_PAGE = 3;
const MAX_ROW_HEIGHT = 300;

export default class TilesList extends React.Component<ITilesListViewProps, null> {

    private _positions: any;
    private _columnCount: number;
    private _columnWidth: number;
    private _rowHeight: number;
    private _tileWidth: number;
    constructor() {
        super();

        this._positions = {};
        this._getItemCountForPage = this._getItemCountForPage.bind(this);
        this._getPageHeight = this._getPageHeight.bind(this);
    }

    public render() {
        
        const items = this.props.items;
        
        let listClass;

        // if(!this.props.showCreatedDate){
        //     listClass="searchWp__tile";
        // }else{   
        //     listClass=""
        // }
        
        if(this.props.layoutMode=="detailed"){
            listClass="searchWp__tile";
        }else if(this.props.layoutMode=="list"){
            listClass="";
        }else{
            listClass="";
        }
        return (
            <List
                items={items}
                getItemCountForPage={this._getItemCountForPage}
                getPageHeight={this._getPageHeight}
                renderedWindowsAhead={4}
                className="searchWp__list"
                onRenderCell={(item, index) => (        
                    <div className={listClass}
                        style={{
                            width: this._tileWidth + '%',
                        }}>
                        <div className={(this.props.layoutMode=="list" && (index%2!=0 && "oddRow"))}>
                        <Tile key={index} item={item} showFileIcon={this.props.showFileIcon} layoutMode={this.props.layoutMode} showCreatedDate={this.props.showCreatedDate} />
                        </div>
                    </div>
                )} />
        );
    }

    private _getItemCountForPage(itemIndex: number, surfaceRect: IRectangle) {
        if (itemIndex === 0) {
            this._columnCount = Math.ceil(surfaceRect.width / MAX_ROW_HEIGHT);
            //If compact mode is on column width needs to be 100%
            //if(!this.props.showCreatedDate){
            if(this.props.layoutMode=="detailed"){
                if(this._columnCount==2){
                    this._tileWidth = 49;
                }else if(this._columnCount==3){
                     this._tileWidth = 32.33;
                }else if(this._columnCount==4){
                    this._tileWidth = 24;
                }else if(this._columnCount==5){
                    this._tileWidth = 19;
                }

            }else{
                this._tileWidth = 100;
            }
            //Fix of one third column issue in normal mode
            
            
            this._columnWidth = Math.floor(surfaceRect.width / this._columnCount);
            this._rowHeight = this._columnWidth;
        }

        return this._columnCount * ROWS_PER_PAGE;
    }

    private _getPageHeight(itemIndex: number, surfaceRect: IRectangle) {
        return this._rowHeight * ROWS_PER_PAGE;
    }
}
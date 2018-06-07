import * as React from "react";
import ITileProps from "./ITileProps";
import {
    DocumentCard,
    DocumentCardActions,
    DocumentCardActivity,
    DocumentCardLocation,
    DocumentCardPreview,
    DocumentCardTitle,
    DocumentCardType,
    IDocumentCardPreviewProps
} from 'office-ui-fabric-react/lib/DocumentCard';
import { Link } from 'office-ui-fabric-react/lib/Link';
import { ImageFit } from 'office-ui-fabric-react/lib/Image';
import * as moment from "moment";
import { isEmpty } from '@microsoft/sp-lodash-subset';
import "../SearchResultsWebPart.scss";

const PREVIEW_IMAGE_WIDTH: number = 204;
const PREVIEW_IMAGE_HEIGHT: number = 111;

export default class Tile extends React.Component<ITileProps, null> {

    public render() {
        const item = this.props.item;

        let previewSrc = "";
        if (!isEmpty(item.SiteLogo)) previewSrc = item.SiteLogo;
        else if (!isEmpty(item.PreviewUrl)) previewSrc = item.PreviewUrl;
        else if (!isEmpty(item.PictureThumbnailURL)) previewSrc = item.PictureThumbnailURL;
        else if (!isEmpty(item.ServerRedirectedPreviewURL)) previewSrc = item.ServerRedirectedPreviewURL;

        let iconSrc = this.props.showFileIcon ? item.iconSrc : "";

        let previewProps: IDocumentCardPreviewProps = {
            previewImages: [
                {
                    url: item.ServerRedirectedURL ? item.ServerRedirectedURL : item.Path,
                    previewImageSrc: previewSrc,
                    iconSrc: iconSrc,
                    imageFit: ImageFit.cover,
                    height: PREVIEW_IMAGE_HEIGHT,
                }
            ],
        };
        let compactPreviewProps: IDocumentCardPreviewProps = {
            previewImages: [
                {
                    url: item.ServerRedirectedURL ? item.ServerRedirectedURL : item.Path,
                    previewImageSrc: previewSrc,
                    iconSrc: iconSrc,
                    imageFit: ImageFit.cover,
                    width: 130,
                }
            ],
        };

        let viewType;
        let compactView;
        if (this.props.layoutMode != "list") {
            if (this.props.layoutMode!="compact") { // If Tile Mode
                compactView="";
                viewType = <DocumentCard className="searchWp__resultCard" type={DocumentCardType.normal} onClickHref={item.ServerRedirectedURL ? item.ServerRedirectedURL : item.Path}>
                    <DocumentCardPreview {...previewProps} />
                    <DocumentCardTitle title={item.Title} shouldTruncate={true} />
                    <DocumentCardActivity
                        activity={moment(item.Created).isValid() ? "Last updated: " + moment(item.Created).format("L") : null}
                        people={
                            [
                                { name: '', profileImageSrc: "TestImages.personaFemale" }
                            ]
                        }
                    />
                </DocumentCard>
            } else { // if Compact Mode
                viewType = ""
                compactView = <DocumentCard className="compactDocCard" type={DocumentCardType.compact} onClickHref={item.ServerRedirectedURL ? item.ServerRedirectedURL : item.Path}>
                    <DocumentCardPreview {...compactPreviewProps} />
                    <DocumentCardTitle title={item.Title} shouldTruncate={true} />
                    <DocumentCardActivity
                        activity={moment(item.Created).isValid() ? "Last updated: " + moment(item.Created).format("L") : null}
                        people={
                            [
                                { name: '', profileImageSrc: "TestImages.personaFemale" }
                            ]
                        }
                    />
                </DocumentCard>
            }
        } else {
            compactView="";
            viewType = <div className="ms-Grid">
            <a className="listLinkHref" href={item.Path} target="_blank"> 
                <div className="ms-Grid-row ListEachRow">
                    <div className="ms-Grid-col ms-sm1 ms-md1 ms-lg1 ms-font-m-plus ListCellPadding ListImgCol"><img src={iconSrc}/></div>
                    <div className={this.props.showCreatedDate ? "ms-Grid-col ms-sm6 ms-md7 ms-lg7 ms-font-m-plus ListCellPadding" : "ms-Grid-col ms-sm11 ms-md11 ms-lg11 ms-font-m-plus ListCellPadding"}>{item.Title}</div>
                    {this.props.showCreatedDate && <div className="ms-Grid-col ms-sm5 ms-md4 ms-lg4 ms-font-m-plus ListCellPadding">{moment(item.Created).isValid() ? "Last updated: " + moment(item.Created).format("L") : null}</div>}
                </div>
            </a>
          </div>
        }


        return (<div>{viewType}{compactView}
        </div>
        );
    }
}
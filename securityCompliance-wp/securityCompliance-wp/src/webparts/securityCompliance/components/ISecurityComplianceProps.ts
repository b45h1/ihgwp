import { SPHttpClient } from '@microsoft/sp-http';

export interface ISecurityComplianceProps {
  listName: string;
  spHttpClient: SPHttpClient;
  userName: string;
  userEmail: string;
  siteUrl: string;
}
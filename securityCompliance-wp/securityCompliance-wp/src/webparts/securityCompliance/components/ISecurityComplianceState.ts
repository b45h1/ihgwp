import { IListItem } from './IListItem';

export interface ISecurityComplianceState {
  status: string;
  items: IListItem[];
  userName:string;
  userEmail:string;
  textValue: string;
  issueDesc:string;
  show:boolean;
  showConfirmation:boolean;
  showThanks:boolean;
  messages:string;
  checkBoxCheck:boolean;
}
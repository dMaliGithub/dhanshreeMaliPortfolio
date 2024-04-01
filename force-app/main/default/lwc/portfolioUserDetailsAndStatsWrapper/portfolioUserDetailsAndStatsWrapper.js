import { LightningElement,api } from 'lwc';

export default class PortfolioUserDetailsAndStatsWrapper extends LightningElement {

    @api recordId //= 'a0D5h00000KRB6CEAX';
    @api objectApiName //= 'Portfolio__c';
    @api rank
    @api badges
    @api points
    @api trails
}
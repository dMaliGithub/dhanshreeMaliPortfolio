import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement,wire,api } from 'lwc';
import SUPERBADGES from '@salesforce/schema/Portfolio__c.Superbadges__c'
import AWARDS from '@salesforce/schema/Portfolio__c.Awards__c'
import LANGUAGES from '@salesforce/schema/Portfolio__c.Languages__c'
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioOtherDetails extends LightningElement {

    awardIcon = `${PortfolioAssets}/PortfolioAssets/trophy.png`
    badgeIcon = `${PortfolioAssets}/PortfolioAssets/badge.png`
    languageIcon = `${PortfolioAssets}/PortfolioAssets/language.png`

    superbadges=[];
    languages=[];
    awards=[];

    @api recordId;

    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SUPERBADGES,AWARDS,LANGUAGES]
    })
    otherDetailsHandler({data,error}){
        if(data){
            console.log('data from others: ',data);
            this.formatData(data)
        }

        if(error){
            console.log('error from others: ',error);
        }
    }

    formatData(data){
        const {Superbadges__c,Awards__c,Languages__c} = data.fields;
        this.awards = Awards__c ? Awards__c.value.split(','):[];
        this.languages = Languages__c ? Languages__c.value.split(','):[];
        this.superbadges = Superbadges__c ? Superbadges__c.value.split(';'):[];
    }
}
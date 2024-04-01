import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement,wire,api } from 'lwc';
import SF_CERT_FIELDS from '@salesforce/schema/Portfolio__c.Salesforce_Certification__c'
import OTHER_CERT_FIELDS from '@salesforce/schema/Portfolio__c.Other_Certification__c'
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioCertifications extends LightningElement {

    certLogo = `${PortfolioAssets}/PortfolioAssets/cert_logo.png`
    sf_cert = [];
    other_cert=[];

    @api recordId;

    @wire(getRecord,{
        recordId:'$recordId',
        fields:[SF_CERT_FIELDS,  OTHER_CERT_FIELDS ]
    })
    getCertHandler({data,error}){
        if(data){
            console.log('data from cert:',data);
            this.formatData(data)
        }

        if(error){
            console.log('error: ',error);
        }
    }

    formatData(data){
        const{Salesforce_Certification__c, Other_Certification__c} = data.fields;
        this.sf_cert = Salesforce_Certification__c ? Salesforce_Certification__c.value.split(';').map(item=>{
            return `Salesforce Certified ${item}`
        }):[]

        this.other_cert = Other_Certification__c?Other_Certification__c.value.split(','):[];
    }
}
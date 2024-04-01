import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import TECH_FIELD from '@salesforce/schema/Portfolio__c.Technical_Skill__c'
import SOFT_FIELD from '@salesforce/schema/Portfolio__c.Soft_Skills__c'
import TOOLS_FIELD from '@salesforce/schema/Portfolio__c.Tools__c'
import SLDC_FIELD from '@salesforce/schema/Portfolio__c.SDLC__c'

export default class PortfolioSkills extends LightningElement {

    techSkills = [];
    softSkills = [];
    tools = [];
    sdlc = [];

    @api recordId
    
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[TECH_FIELD,SOFT_FIELD,TOOLS_FIELD,SLDC_FIELD]})
    skillHandler({data,error}){
        if(data){
            console.log('data from skills: ',JSON.stringify(data))
            this.formatSkills(data)
        }

        if(error){
            console.log('error from skills: ',error);
        }
    }

    formatSkills(data){
        //object destructing
        const {Technical_Skill__c,Soft_Skills__c,Tools__c,SDLC__c} = data.fields;
        //if value is found split it based on comma or treat it as empty array
        this.techSkills = Technical_Skill__c ? Technical_Skill__c.value.split(','):[];
        this.softSkills = Soft_Skills__c ? Soft_Skills__c.value.split(','):[];
        this.tools = Tools__c ? Tools__c.value.split(','):[];
        this.sdlc = SDLC__c ? SDLC__c.value.split(','):[];
    }
}
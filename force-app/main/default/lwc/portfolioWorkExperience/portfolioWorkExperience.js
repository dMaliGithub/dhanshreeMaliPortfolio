import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class PortfolioWorkExperience extends LightningElement {
    @api recordId
    workExperienceList = []
    @wire(getRelatedListRecords, {
        parentRecordId:'$recordId',
        relatedListId:'WorkExperience__r',
        fields:['Work_Experience__c.Job_Start_Date__c',
        'Work_Experience__c.Job_End_Date__c',
        'Work_Experience__c.Role__c',
        'Work_Experience__c.Company__c',
        'Work_Experience__c.Location__c',
        'Work_Experience__c.Description__c',
        'Work_Experience__c.Currently_Working__c'
    ]
    })WorkExperienceHandler({data, error}){
        if(data){
            console.log("WorkExperience Data", JSON.stringify(data))
            this.formatExperience(data)
        }
        if(error){
            console.error(error)
        }
    }

    formatExperience(data){
        this.workExperienceList = [...data.records].reverse().map(item=>{
            let id = item.id
            const {Job_Start_Date__c,Job_End_Date__c,Role__c,Company__c,
                Location__c,Description__c,Currently_Working__c } = item.fields;

                let CompanyName = this.getValue(Company__c);
                let JobStartDate = this.getValue(Job_Start_Date__c);
                let JobEndDate = this.getValue(Job_End_Date__c);
                let Role = this.getValue(Role__c);
                let WorkLocation = this.getValue(Location__c);
                let Description = this.getValue(Description__c);
                let IsCurrent = this.getValue(Currently_Working__c);

            return {id,JobStartDate,JobEndDate,CompanyName,WorkLocation, Description, IsCurrent, Role}
        })

        console.log("workExperienceList", JSON.stringify(this.workExperienceList))

    }

    getValue(data){
        return data && (data.displayValue || data.value)
    }

}
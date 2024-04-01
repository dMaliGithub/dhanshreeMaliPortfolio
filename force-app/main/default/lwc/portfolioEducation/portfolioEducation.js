import { LightningElement,wire,api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

const COLUMNS = [
    {label:'Education', fieldName: 'Education'},
    {label:'Institution Name',fieldName:'InstitutionName'},
    {label:'Passing Year',fieldName:'PassingYear'}
]
export default class PortfolioEducation extends LightningElement {

    @api recordId;
    tableData = [];
    columns = COLUMNS;

    @wire(getRelatedListRecords,{
        parentRecordId:'$recordId',
        relatedListId: 'Educations__r',
        fields:['Education__c.Institution_Name__c',
        'Education__c.Qualification__c',
        'Education__c.Year_of_passing__c'
        ]})
        educationHandler({data,error}){
            if(data){
                console.log('data from education:',data)
                this.formatData(data)
            }
            if(error){
                console.log('error from education: ',error)
            }
        }

        formatData(data){
            this.tableData = [...data.records].map(item=>{
                let Id = item.id
                //object destructuring
                const {Institution_Name__c, Year_of_passing__c, Qualification__c} = item.fields
                //fetch each property
                let Education = Qualification__c.value
                let InstitutionName = Institution_Name__c.value
                let PassingYear = Year_of_passing__c.value
                //return above properties
                return {
                    Id,Education, InstitutionName, PassingYear
                }
            })
    
            console.log("this.tableData", JSON.stringify(this.tableData))
        }
}
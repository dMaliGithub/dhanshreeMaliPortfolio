import { LightningElement,wire,api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'
import {getFieldValue, getRecord} from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';
import COMPANY from '@salesforce/schema/Portfolio__c.Company_Name__c';
import LOCATION from '@salesforce/schema/Portfolio__c.Location__c';


export default class PortfolioBanner extends LightningElement {

    //initially this properties are initialized with undefined
    // it gets data from Experience site
    @api recordId //= 'a0D5h00000KRB6CEAX';
    @api linkedinUrl //= 'https://www.linkedin.com/in/dhanshree-mali-4099a6192';
    @api trailheadUrl //= 'https://www.salesforce.com/trailblazer/dmali125';
    @api githubUrl //= 'https://github.com/dMaliGithub'
    
    //${PortfolioAssets} is reference to static resource folder
    userPic = `${PortfolioAssets}/PortfolioAssets/my_photo.jpg`;
    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;
    
    @wire(getRecord, {recordId: '$recordId',fields:[FULLNAME,DESIGNATION,COMPANY,LOCATION]})
    portfolioHandler  //contains single object returned by getRecord

    // using custom getters and LDS inbuilt getFieldValue to fetch value from wire property
    get fullName(){
        return getFieldValue(this.portfolioHandler.data, FULLNAME);
    }

    get designation(){
        return getFieldValue(this.portfolioHandler.data, DESIGNATION);
    }

    get company(){
        return getFieldValue(this.portfolioHandler.data, COMPANY);
    }

    get location(){
        return getFieldValue(this.portfolioHandler.data, LOCATION);
    }
}
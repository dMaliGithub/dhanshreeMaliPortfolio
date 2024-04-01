import { LightningElement,api } from 'lwc';

export default class PortfolioUserDetail extends LightningElement {
    
    @api recordId
    @api objectApiName

    downloadResume(){
        window.open("https://github.com/dMaliGithub/dhanshreeMaliResume/raw/main/Dhanshree%20Mali.pdf","_blank")
    }
}
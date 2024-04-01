import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioThankYouPage extends LightningElement {


    linkedin = `${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    trailhead = `${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;
    github = `${PortfolioAssets}/PortfolioAssets/Social/github.svg`;

    linkedinUrl = 'https://www.linkedin.com/in/dhanshree-mali-4099a6192';
    trailheadUrl = 'https://www.salesforce.com/trailblazer/dmali125';
    githubUrl = 'https://github.com/dMaliGithub';
}
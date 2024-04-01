import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioPersonalProjects extends LightningElement {

    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`;
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`;

    projects = [
        {
            name: 'BMI Calculator App',
            link: 'https://ajsd141-dev-ed.develop.my.site.com/bmicalculator',
            image: this.BMICalculator
        },
        {
            name: 'Alarm Clock App',
            link: 'https://ajsd141-dev-ed.develop.my.site.com/alarm-clock',
            image: this.AlarmClock
        }
    ]
}
import { LightningElement,api } from 'lwc';

export default class PortfolioStringHandler extends LightningElement {

    @api content
    isLoaded = false
    renderedCallback()
    {
        if(this.isLoaded)
        {
            return false
        }

        if(this.content){
            this.isLoaded = true;
            const container = this.template.querySelector('.htmlContainer');
            container.innerHTML = this.content;
        }
    }
}
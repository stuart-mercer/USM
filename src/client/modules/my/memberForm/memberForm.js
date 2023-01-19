import { LightningElement, track } from 'lwc';
import { getOppList } from 'data/oppService';
import { submitRegistration } from 'data/oppService';
export default class MemberForm extends LightningElement {
    @track showSpinner = false;
    oppList = [];

    @track regData = {
        oppId: '',
        firstName: 'Mickey',
        lastName: 'Mouse',
        phone: '345-555-3454',
        mobile: '345-555-1234'
    };

    connectedCallback() {
        getOppList().then((result) => {
            this.oppList = this.allOppList = result;
        });
    }

    handleSearchKeyInput(event) {
        const searchKey = event.target.value.toLowerCase();
        this.oppList = this.allOppList.filter((opp) =>
            opp.name.toLowerCase().includes(searchKey)
        );
    }

    async handleFormSubmit() {
        this.showSpinner = true;
        const regData = this.getRegData();
        submitRegistration({
            reg: regData
        })
            .then((result) => {})
            .catch((error) => {});
        this.showSpinner = false;
    }

    getRegData() {
        return this.regData;
    }
}

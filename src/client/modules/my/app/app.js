import { LightningElement, track } from 'lwc';
import { getLoggedInUser } from 'data/authService';

export default class App extends LightningElement {
    @track loggedUser = undefined;
    @track state;

    connectedCallback() {
        getLoggedInUser().then((response) => {
            if (response.user_id === undefined) {
                this.loggedUser = undefined;
                this.state = 'login';
            } else {
                this.loggedUser = response;
                this.state = 'memberform';
            }
        });
    }

    get isLoginView() {
        return this.state === 'login';
    }

    get isMemberFormView() {
        return this.state === 'memberform';
    }
}

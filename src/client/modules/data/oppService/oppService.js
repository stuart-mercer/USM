const URL = '/api/opp-details/';
let oppList = [];

export const getOppList = () =>
    fetch(URL)
        .then((response) => {
            if (!response.ok) {
                console.log(response.json);
                throw new Error('No response from server');
            }
            return response.json();
        })
        .then((result) => {
            oppList = result.data;
            return oppList;
        });

export const getOpp = (oppId) => {
    return oppList.find((opp) => {
        return opp.id === oppId;
    });
};

export const submitRegistration = (regData) => {
    const opts = { regData };
    return fetch(`${URL}/${regData}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(opts)
    }).then((response) => {
        if (!response.ok) {
            throw new Error('No response from server');
        }
    });
};

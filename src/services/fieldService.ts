import axios from 'axios'

const API = {
    save: 'https://run.mocky.io/v3/950dc5bf-71bf-4134-bb6c-541e9fc68e8d'
}

const fieldService = {
    getField: function (id: string) {
        console.log(id)
        return {
            label: 'Sales region',
            required: false,
            choices: [
                'Asia',
                'Australia',
                'Western Europe',
                'North America',
                'Eastern Europe',
                'Latin America',
                'Middle East and Africa'
            ],
            displayAlpha: true,
            default: 'North America'
        }
    },
    saveField: function (fieldJson: object) {
        // Add the code here to call the API (or temporarily, just log fieldJson to the console)
        console.log(fieldJson)
        axios
            .post(API.save, fieldJson, { withCredentials: false }) // only for dev
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export default fieldService

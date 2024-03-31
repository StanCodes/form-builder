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
    }
}

export default fieldService

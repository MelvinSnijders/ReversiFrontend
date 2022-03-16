Game.Data = (function () {

    let configMap = {
        mock: [{
            url: "api/Spel/Beurt",
            data: 0
        }],
        apiKey: '2bce53e0f162422c7108493ce597d291'
    };

    let stateMap = {
        environment: 'development'
    }

    const getMockData = function (url) {
        const mockData = configMap.mock;
        return new Promise((resolve, reject) => {
            resolve(mockData);
        })
    }

    const get = function (url) {

        if(stateMap.environment === "production") {
            return $.get(url)
                .catch(e => {
                    console.log(e.message);
                });
        }

        if(stateMap.environment === "development") {
            return getMockData(url);
        }

    }

    const privateInit = function (environment) {

        console.log("Init vanuit Data!");

        if(environment !== "development" && environment !== "production") {
            throw new Error("Environment must be production or development.");
        }

        stateMap.environment = environment;

    }

    return {
        init: privateInit,
        get
    }

})()
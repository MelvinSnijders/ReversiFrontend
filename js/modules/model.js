Game.Model = (function(){
    let configMap = {

    }

    const privateInit = function () {
        console.log("Init vanuit Model!")
    }

    const getWeather = function () {
        Game.Data.get('http://api.openweathermap.org/data/2.5/weather?q=zwolle&apikey=2bce53e0f162422c7108493ce597d291').then(function(data) {
           if(!data.weather[0].temp) throw Error("No temperature in result")
        });
    }

    const _getGameState = function () {
        const stateData = Game.Data.get('api/Spel/Beurt/<token>');
        return stateData.then(d => {
            if(d < 0 || d > 2) {
                throw Error("Game state is not valid");
            }
            return d;
        })
    }

    return {
        init: privateInit,
        getWeather,
        getGameState: _getGameState
    }

})()
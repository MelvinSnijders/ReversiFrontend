const apiUrl = 'url/super/duper/game'

const Game = (function (url) {

    let configMap = {
      apiUrl: url
    };

    let stateMap = {
        gameState: 0
    }

    const _getCurrentGameState = function() {
        Game.Model.getGameState().then(d => stateMap.gameState = d);
    }

    const privateInit = function(afterInit){
        console.log(configMap.apiUrl);
        setInterval(_getCurrentGameState, 2000);
        afterInit();
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit
    }

})(apiUrl);
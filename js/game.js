const apiUrl = 'url/super/duper/game'

const Game = (function (url) {

    let configMap = {
      apiUrl: url
    };
    // Private function init
    const privateInit = function(){
        console.log(configMap.apiUrl);
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit
    }

})(apiUrl);

Game.Reversi = (function(){
    let configMap = {

    }

    const privateInit = function () {
        console.log("Init vanuit Reversi!")
    }

    return {
        init: privateInit
    }

})()
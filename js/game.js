const apiUrl = 'url/super/duper/game'

const Game = (function (url) {

    let configMap = {
      api: url
    };
    // Private function init
    const privateInit = function(){
        console.log('Private information!');
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit
    }

})(apiUrl);
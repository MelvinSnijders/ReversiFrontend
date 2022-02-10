const Game = (function () {
    console.log("hello from module");

    // Private function init
    const privateInit = function(){
        console.log('Private information!');
    }

    // Waarde/object geretourneerd aan de outer scope
    return {
        init: privateInit
    }

})();
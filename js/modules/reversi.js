Game.Reversi = (function () {
    let configMap = {

    }

    const privateInit = function () {
        // Place fiches on board
        console.log("Initiating Reversi board");
        let board = $(".reversi-board");
        for (let x = 1; x <= 8; x++) {
            //    let row = $("<div class='reversi-board__row'></div>");
            //  board.append(row); 
            for (let y = 1; y <= 8; y++) {
                let cell = $(`<div class="reversi-board__cell" data-row="${x}" data-column="${y}"></div>`)
                cell.on('click', (e) => {
                    this.placeFiche(x, y, Math.random() < 0.5 ? "white" : "black");
                });
                board.append(cell);
            }
        }
    }

    const placeFiche = function (row, column, color) {
        // Place the fiche on the reversi board
        console.log("Place fiche at row: " + row + " column: " + column + " color: " + color);
        
        let cell = $(`[data-row="${row}"][data-column="${column}"]`);
        let fiche = $("<div class='reversi-board__fiche animate__animated animate__bounceIn'></div>");

        if(cell.children().length > 0) {
            return;
        }

        if (color === "white") {
            fiche.addClass("reversi-board__fiche--white");
        }
        else if (color === "black") {
            fiche.addClass("reversi-board__fiche--black");
        }
        
        cell.append(fiche);

    }

    return {
        init: privateInit,
        placeFiche
    }

})()
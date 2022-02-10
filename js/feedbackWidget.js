class FeedbackWidget {

    constructor(elementId) {
        this._elementId = elementId;
    }

    get elementId() {
        return this._elementId;
    }

    show(message, type) {

        let div = $(`#${this.elementId}`);
        div.css("display", div.css("display") === "none" ? "block" : "none" );
        div.text(message);

        switch (type) {
            case "success":
                div.addClass("alert-success")
                break;
            default:
                div.addClass("alert-danger")
                break;
        }

    }

    hide() {
        let div = $(`#${this.elementId}`);
        div.css("display", div.css("display") === "block" ? "none" : "block" );
    }

}
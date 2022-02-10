class FeedbackWidget {

    constructor(elementId) {
        this._elementId = elementId;
    }

    get elementId() {
        //getter, set keyword voor setter methode
        return this._elementId;
    }

    show(message, type) {
        var x = document.getElementById(this.elementId);
        x.style.display = x.style.display === "none" ? "block" : "none";
        var div = $(`#${this.elementId}`);
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
        var x = document.getElementById(this.elementId);
        x.style.display = x.style.display === "block" ? "none" : "block";
    }

}
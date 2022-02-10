class FeedbackWidget {

    constructor(elementId) {
        this._elementId = elementId;
    }

    get elementId() {
        return this._elementId;
    }

    show(message, type, skipLog) {

        let div = $(`#${this.elementId}`);
        div.css("display", div.css("display") === "none" && "block");
        div.text(message);

        switch (type) {
            case "success":
                div.addClass("alert-success")
                break;
            default:
                div.addClass("alert-danger")
                break;
        }

        if(!skipLog) this.log({message, type});

    }

    hide() {
        let div = $(`#${this.elementId}`);
        div.css("display", div.css("display") === "block" && "none");
    }

    log(message) {
        let logArray = JSON.parse(localStorage.feedback_widget ?? "[]");
        if(logArray.length >= 10) logArray.pop();
        logArray.unshift(message);
        localStorage.feedback_widget = JSON.stringify(logArray);
    }

    removeLog() {
        localStorage.removeItem("feedback_widget");
    }

    history() {
        const logArray = JSON.parse(localStorage.feedback_widget ?? "[]");
        // <type |success|error|>  -  <berichttekst> <\n>
        const formatted = logArray.map(d => `${d.type} - ${d.message}`).join("\n");
        this.show(formatted, "success", true);
    }

}
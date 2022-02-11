/**
 * Widget for showing feedback alerts in the browser.
 */
class FeedbackWidget {

    /**
     * Construct a new widget.
     * @param elementId The element of the alert component.
     */
    constructor(elementId) {
        this._elementId = elementId;
    }

    /**
     * The element to which to bind the alert to.
     * @returns {*} The id of the element.
     */

    get elementId() {
        return this._elementId;
    }

    /**
     * Show an alert message in the browser.
     * @param message The content of the alert.
     * @param type The type of alert (success|danger), default is danger.
     * @param skipLog Whether to skip logging the alert in the local storage.
     */

    show(message, type, skipLog) {

        let div = $(`#${this.elementId}`);
        div.css("display", div.css("display") === "none" && "block");
        div.text(message);

        switch (type) {
            case "success":
                div.addClass("alert-success")
                break;
            case "danger":
            default:
                div.addClass("alert-danger")
                break;
        }

        if(!skipLog) this.log({message, type});

    }

    /**
     * Hide the alert from the browser.
     */

    hide() {
        let div = $(`#${this.elementId}`);
        div.css("display", div.css("display") === "block" && "none");
    }

    /**
     * Log a message to the local storage.
     * The local storage holds the latest 10 alerts.
     * @param message The message to store (JSON object with message and type).
     */

    log(message) {
        let logArray = JSON.parse(localStorage.feedback_widget ?? "[]");
        if(logArray.length >= 10) logArray.pop();
        logArray.unshift(message);
        localStorage.feedback_widget = JSON.stringify(logArray);
    }

    /**
     * Clear the local storage logs.
     */

    removeLog() {
        localStorage.removeItem("feedback_widget");
    }

    /**
     * Retrieve the complete log (max 10 items), format them and show them in the browser.
     */

    history() {
        const logArray = JSON.parse(localStorage.feedback_widget ?? "[]");
        // <type |success|error|>  -  <berichttekst> <\n>
        const formatted = logArray.map(d => `${d.type} - ${d.message}`).join("\n");
        this.show(formatted, "success", true);
    }

}
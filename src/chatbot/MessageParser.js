class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        console.log(message);
        const lowercase = message.toLowerCase();

        if (lowercase.includes("hello")) {
            this.actionProvider.greet();
        }
        if (lowercase.includes("appointment")) {
            this.actionProvider.handleOption();
        }
        if (lowercase.includes("shedule")) {
            this.actionProvider.handleOption();
        }
        if (lowercase.includes("reshedule")) {
            this.actionProvider.handleOption();
        }
    }
}

export default MessageParser;
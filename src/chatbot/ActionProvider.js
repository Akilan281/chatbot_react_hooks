class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }
    greet = () => {
        const message = this.createChatBotMessage("Hello Friend")
        this.addMessageToState(message);
    };

    handleJavasscriptQuiz = (props) => {
        const message = this.createChatBotMessage(props.answer,{ 
        });
        this.addMessageToState(message)
    };

    handleOption = () => {
        const message = this.createChatBotMessage('Here what you are looking for', {
            widget: "Option",
        });

        this.addMessageToState(message)
    };
    addMessageToState = (message) => {
        this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;
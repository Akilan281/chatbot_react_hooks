import React from "react";

import { createChatBotMessage } from "react-chatbot-kit";
import Option from "../components/options/Option"


const config = {
  botName: "AppointmenetBot",
  initialMessages: [createChatBotMessage(`Hello how can I help you?`),
  ],
  state: {
    gist: "",
  },
  widgets: [
    {
      widgetName: "Option",
      widgetFunc: (props) => <Option {...props} />,
      mapStateToProps: ["gist"],
    },
    {
      widgetName: "Quiz",
    },
  ],
}

export default config

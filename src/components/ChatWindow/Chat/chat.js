import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { dataChats } from "../../../data/dataChats"
import { messages } from "../../../data/dataChats"

import "./chat.css"

let cloneMessages = structuredClone(messages);

function Chat() {
  const { userId } = useParams();
  const jsoneParse = JSON.parse(localStorage.getItem('message'));
  const [newMessages, setNewMessages] = useState(jsoneParse ? jsoneParse : cloneMessages)
  const [myMessage, setMyMessage] = useState("")

  const objUser = dataChats.find(item => item.id === +userId)
  const objUserMessages = newMessages.filter(item => item.chatId === +userId)

  const userMessages = objUserMessages.map(item => {
    return (
      <div className=
        {`message ${item.author === "me" ? "me" : "friend"}`}
        key={item.id}>
        {item.text}
      </div>
    )
  })

  function perfDef(e) {
    e.preventDefault()

    const newArr = {
      id: Date.now(),
      chatId: +userId,
      text: myMessage,
      author: "me"
    }
    const retArr = [...newMessages, newArr]

    setNewMessages(
      retArr
    )

    setMyMessage("")
  }

  useEffect(() => {
    const saveMessage = JSON.stringify(newMessages)
    localStorage.setItem('message', saveMessage)
  }, [newMessages])



  return (
    objUser && <div className="userChat">
      <div className="userInfo">
        <div className="userName">{objUser.name}</div>

      </div>
      <div className="userDialogue">
        {userMessages}
      </div>
      <form className="userForm" onSubmit={(e) => perfDef(e)}>
        <input type="text"
          className="userInput"
          value={myMessage}
          onChange={(e) => setMyMessage(e.target.value)} />
        <button className="userBtn">Отправить</button>
      </form>
    </div>
  )
}

export default Chat
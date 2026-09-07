import { useParams } from "react-router-dom"
import dataChats from "../../../data/dataChats"

import "./chat.css"

function Chat() {
  const { userId } = useParams()


  const objUser = dataChats.find(item => item.id === +userId)
  console.log(objUser)

  let isOnline = null
  if (objUser !== undefined) {
    isOnline = objUser.isOnline ? 'Online' : 'Offline';
  }


  return (
    objUser && <div className="userChat">
      <div className="userInfo">
        <div className="userName">{objUser.name}</div>
      
      </div>
      <div className="userDialogue">

      </div>
    </div>
  )
}

export default Chat
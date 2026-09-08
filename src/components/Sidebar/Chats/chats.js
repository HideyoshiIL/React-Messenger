import { Link } from "react-router-dom"
import { dataChats } from "../../../data/dataChats"

import "./chats.css"

function Chats() {

  const newDataChats = dataChats.map(item => {
    let link = "/messenger/" + item.id
    let isOnline = item.isOnline ? 'Online' : 'Offline'

    return (
      <div className="chatUser" key={item.id}>
        <Link to={link}>{item.name}</Link>
        <div className={isOnline}>{isOnline}</div>
      </div>
    )
  })

  return (
    <div className="chats">
      {newDataChats}
    </div>
  )
}

export default Chats 
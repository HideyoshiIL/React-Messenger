import Sidebar from "../Sidebar/sidebar"
import ChatWindow from "../ChatWindow/chat-window"

import "./MessengerPage.css"

function MessengerPage() {

  return (
    <div className="messengerPage">
      <Sidebar />
      <ChatWindow />
    </div>
  )
}

export default MessengerPage
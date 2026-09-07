import Chat from "./Chat/chat";
import EmptyDialog from "./EmptyDialog/empty-dialog";
import { Routes, Route } from "react-router-dom";

import "./chat-window.css"

function ChatWindow() {


  return (
    <div className="chatWindow">
      <Routes>
        <Route path="/messenger" element={<EmptyDialog/>} />
        <Route path="/messenger/:userId" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default ChatWindow
import Chats from "./Chats/chats";
import Settings from "./Settings/settings";

import "./sidebar.css"

function Sidebar() {

  return (
    <div className="sidebar">
      <Chats/>
      <Settings/>
    </div>
  )
}

export default Sidebar
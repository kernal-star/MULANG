import React from "react";
import { logChatPromiseExecution } from "stream-chat";
import { ChannelList, useChatContext } from "stream-chat-react";
import Cookies from "universal-cookie";
import logosvg from '..assests/mulang.png';
const sodeBar=()=>(
    <div className="channel-List_sidebar">
    <div className="channel-List_sidebar_icon1">
    
    <div className="icon1__inner">
      <img src={logosvg} alt="Mulang" width="30">
      </img>
    
    </div>
    </div>
    </div>
)


const ChannelListContainer =()=>{
    return(
        <div>

            ChannelListContainer
            </div>
    );
}
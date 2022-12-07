import React from "react";
import { StreamChat } from 'stream-chat';
import { ChannelList, Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import './App.css';

import { ChannelListContainer,ChannelContainer } from "./components";
const apiKey ='4ynken6zwh3u';
const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">

            <Chat client={client} theme="team light">
                <ChannelListContainer>

                </ChannelListContainer>
            </Chat>
            <h1>Chat application</h1>
            </div>
  );
}

export default App;

import React, { useState } from 'react';

import './App.css'

import ChatListItem from './components/ChatListItem';

import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
 
const App = () => {

    const [chatlist, setChatlist] = useState ([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]);

    return ( 
        <div className='app-window'>
            <div className="sidebar">
                
                <header>
                    <img className='header-avatar' src="https://www.getillustrations.com/photos/pack/3d-avatar-male_lg.png" alt="" />
                    <div className="header-buttons">
                        <div className="header-btn">
                            <DonutLargeIcon />
                        </div>
                        <div className="header-btn">
                            <ChatIcon />
                        </div>
                        <div className="header-btn">
                            <MoreVertIcon />
                        </div>
                    </div>
                </header>

                <div className="search">
                    <div className="search-input">
                        <SearchIcon fontSize='small' style={{color: 'var(--color-header-btn)'}}/>
                        <input type="search" placeholder='Procurar ou começar uma nova conversa' />
                    </div>
                </div>

                <div className="chatlist">
                    {chatlist.map((item, key) => (
                        <ChatListItem 
                        key={key}
                        />
                    ))}
                </div>

            </div>
            <div className="content-area">
                ...
            </div>
        </div>
    );
}
 
export default App;
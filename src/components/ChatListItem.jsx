import React from 'react'

import './ChatListItem.css';

const ChatListItem = () => {
    return ( 
        <div className='chat-list-item'>
            <img className='chat-list-item-avatar' src="https://yizhichoi.com/wp-content/uploads/2019/12/3d-avatar-1.jpg" alt="" />
            <div className="chat-list-item-lines">
                <div className="chat-list-item-line">
                    <div className="chat-list-item-name">Matheus Trindade</div>
                    <div className="chat-list-item-date">18:35</div>
                </div>
                <div className="chat-list-item-line">
                    <div className="chat-list-item-lastMsg">
                        <p>Opa, tudo bem? Meu nome é Matheus Lopes Trindade</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ChatListItem;
import React from 'react'
import {ChatBubble} from "./ChatBubble";

export const ChatHistory = (messages) => {
    messages = [
        {
            from: 'test',
            date: new Date(),
            text: 'Are we meeting today? Project has been already finished and I have results to show'
        },
        {
            from: 'test',
            date: new Date(),
            text: 'Are we meeting today? Project has been already finished and I have results to show'
        },
        {
            from: 'test',
            date: new Date(),
            text: 'Are we meeting today? Project has been already finished and I have results to show'
        },
        {
            from: 'test',
            date: new Date(),
            text: 'Are we meeting today? Project has been already finished and I have results to show'
        },
        {
            from: 'Kate',
            date: new Date(),
            text: 'Yes'
        },
        {
            from: 'Kate',
            date: new Date(),
            text: 'Are we meeting today? Project has been already finished and I have results to show'
        },
        {
            from: 'Kate',
            date: new Date(),
            text: 'Are we meeting today? Project has been already finished and I have results to show'
        },
        {
            from: 'Kate',
            date: new Date(),
            text: 'Are we meeting today? Project has been already finished and I have results to show'
        },
        {
            from: 'test',
            date: new Date(),
            text: 'Are we meeting today? Project has been already finished and I have results to show'
        },
    ];
    return (<div className="chat-history">
        <ul>
            {messages.map((message, i) => <ChatBubble
                key={i}
                isMy={message.from === 'test'}
                date={message.date}
                from={message.from}
                text={message.text}
            />)}
        </ul>
    </div>);
};
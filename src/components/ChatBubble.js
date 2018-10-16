import React from 'react'

export const ChatBubble = ({isMy, date, from, text}) => {
    const clearClass = !isMy ? 'clearfix' : '';
    const messageClass = !isMy ? 'other-message float-right' : ' my-message';
    return (
        <li className={clearClass}>
            {isMy && <TitleAuthor from={from} date={date}/>}
            {!isMy && <TitleOther from={from} date={date}/>}
            <div className={'message ' + messageClass}>
                {text}
            </div>
        </li>
    );
};

const TitleAuthor = ({isMy, from, date}) => {
    return (<div className='message-data'>
            <span className="message-data-name"> <i className="fa fa-circle online"></i> {from}</span>
            <span className="message-data-time">{date.toLocaleTimeString()}</span>
        </div>
    );
};

const TitleOther = ({isMy, from, date}) => {
    return (<div className='message-data  align-right'>
            <span className="message-data-time">{date.toLocaleString()}</span>
            <span className="message-data-name">&nbsp;{from}</span>
            &nbsp;<i className="fa fa-circle me"></i>
        </div>
    );
};
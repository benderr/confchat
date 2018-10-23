import React from 'react'

export class WriteBox extends React.Component {
    render() {
        return (<div className="chat-message clearfix">
            <textarea name="message-to-send"
                      id="message-to-send"
                      placeholder="Write..."
                      rows="2"></textarea>

            <button></button>
        </div>);
    }
}
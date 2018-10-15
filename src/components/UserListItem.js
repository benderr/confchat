import React from 'react'

export const UserListItem = ({avatar, login, active}) => {
    const status = active ? 'online' : 'offline';
    const color = stringToHslColor(login, 60, 80);
    return (<li className="clearfix">
        <span className="avatar"
              style={{backgroundColor: color}}>{login[0].toUpperCase()}</span>
        <div className="about">
            <div className="name" title={login}>{login}</div>
            <div className="status">
                <i className={'fa fa-circle ' + status}></i> {status}
            </div>
        </div>
    </li>);
};

function stringToHslColor(str, s, l) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    const h = hash % 360;
    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
}
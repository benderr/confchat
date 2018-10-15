import React from 'react'
import {UserListItem} from "./UserListItem";

export const UserList = ({users}) => {
    users = [
        {
            login: 'Kate',
            active: true
        },
        {
            login: 'Ilshat',
            active: true
        },
        {
            login: 'Long long long name Long long long name Long long long name Long long long name',
            active: true
        }
    ];
    return (<div className="people-list" id="people-list">
        <ul className="list">
            {users.map((user, index) => <UserListItem
                key={index}
                login={user.login}
                active={user.active}/>)}
        </ul>
    </div>);
};
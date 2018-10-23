import {combineReducers} from 'redux'
import users from './users';
import messages from './messages';
import login from './login'
import {createMutableReducer} from "../../util/createMutableReducer";

export default combineReducers({
    users: users(createMutableReducer),
    messages: messages(createMutableReducer),
    login: login(createMutableReducer)
});

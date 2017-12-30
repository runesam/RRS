import {
	createStore
} from 'redux';

import { users } from './../server/db';
import { getDefaultState } from './../server/getDefaultState';
import { initializeDB } from './../server/db/initializeDB';

initializeDB();

const currentUser = users[0];
const defaultState = getDefaultState(currentUser);

const reducer = state => state;
console.log(defaultState);
const store = createStore(reducer, defaultState);

export const getStore = () => store;

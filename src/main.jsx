import React from 'react';
import { render } from 'react-dom';
import { getStore } from './getStore';
import { App } from './App';

const appStore = getStore();

const Main = () => (
	<App />
);

const renderApp = (store) => {
	render(
		<div>
			<Main state={store.getState()} />
		</div>,
		document.getElementById('AppContainer'));
};

renderApp(appStore);

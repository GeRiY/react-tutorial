import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test';
import { ComponentProps } from './components/MAIN/MAIN.model';

const renderComponent = (appProps: AppProps) => {
	const root = ReactDOM.createRoot(document.getElementById(appProps.container) as HTMLElement);
	const APP = { root, ref: null };
	//Fejlesztés során a teszt komponenst adjuk vissza, aminek szabadon változtathatjuk a props-ait. Production során pedig az APP komponenst, ami csak továbbítja a render függvény argumentumait
	if (process.env.NODE_ENV === 'development') {
		root.render(
			<React.StrictMode>
				<Test
					{...appProps}
					ref={(ref: any) => {
						return (APP.ref = ref);
					}}
				/>
			</React.StrictMode>
		);
	} else {
		root.render(
			<React.StrictMode>
				<App
					{...appProps}
					ref={(ref: any) => {
						return (APP.ref = ref);
					}}
				/>
			</React.StrictMode>
		);
	}

	return APP;
};

//Fejlesztés során rögtön renderelünk, build során pedig a render függvényt adjuk vissza
if (process.env.NODE_ENV === 'development') {
	const props = {
		container: 'root',
	};
	renderComponent(props);
} else {
	window.renderComponent = renderComponent;
}
declare global {
	interface Window {
		renderComponent: any;
	}
}

interface AppProps extends ComponentProps {
	container: string;
}
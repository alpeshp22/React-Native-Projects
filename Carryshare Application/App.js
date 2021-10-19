import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "./src/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import API, { DevelopmentMode } from "react-native-gtlcomponent/GatewayAPI/GatewayAPI";
import { apiConfig } from "./src/Constants/Config";
import Containers from './src/Containers';
import { AppearanceProvider } from 'react-native-appearance';

const store = configureStore();
API.getInstance().build(DevelopmentMode.TESTING, apiConfig);

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const persistor = persistStore(store);
		return (
			<Provider store={store}>
				<AppearanceProvider>
					<PersistGate persistor={persistor} >
						<Containers />
					</PersistGate>
				</AppearanceProvider>
			</Provider>
		);
	}
};

export default App;

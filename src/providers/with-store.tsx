import {Provider} from "react-redux";
import {store} from "../app/store";
import React from "react";

const withStore = (component: () => React.ReactNode) => () => {
		return (
				<React.StrictMode>
						<Provider store={store}>
										{component()}
						</Provider>
				</React.StrictMode>
		)
}


export default withStore;
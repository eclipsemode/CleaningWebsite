import React from 'react';
import './App.css';
import Routing from "./router";
import withProviders from "./providers";

const App: React.FC = () => {
		return <Routing/>
}

export default withProviders(App);

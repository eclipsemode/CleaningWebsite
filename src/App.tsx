import React from 'react';
import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Layout from "./layout";
import RouterService from "./services/RouterService";

function App() {
		return (
						<Routes>
								<Route path="/" element={<Layout />}>
										<Route path={RouterService.HOME} element={<Home />} />
										<Route path={RouterService.SERVICES} element={<Services />} />
								</Route>
						</Routes>
				)
}

export default App;

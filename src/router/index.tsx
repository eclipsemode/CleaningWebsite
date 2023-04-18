import React from 'react';
import {Route, Routes} from "react-router-dom";
import Layout from "../layout";
import RouterService from "../services/RouterService";
import Home from "../pages/Home";

const Routing = () => {
		return (
				<Routes>
						<Route path="/" element={<Layout />}>
								<Route path={RouterService.HOME} element={<Home />} />
						</Route>
				</Routes>
		);
};

export default Routing;
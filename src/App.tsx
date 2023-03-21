import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Routes from "./utils/Routes";
import Layout from "./layout";

const router = createBrowserRouter([
		{
				path: Routes.LAYOUT,
				element: <Layout/>,
		},
		{
				path: Routes.HOME,
				element: <Home/>
		},
		{
				path: Routes.SERVICES,
				element: <Services/>
		}
]);

function App() {
		return <RouterProvider router={router}/>
}

export default App;

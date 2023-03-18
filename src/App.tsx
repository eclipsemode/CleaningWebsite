import React from 'react';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";

const router = createBrowserRouter([
		{
				path: "/",
				element: <Home/>,
		},
		{
				path: "/services",
				element: <Services/>
		}
]);

function App() {
		return (
				<>
						<Header/>
						<RouterProvider router={router}/>
						<Footer/>
				</>
		)
}

export default App;

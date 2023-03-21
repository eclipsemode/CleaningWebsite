import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";
import TopInfo from "../components/TopInfo";

const Layout = () => {
		return (
				<>
						<TopInfo/>
						<Container maxWidth={false} disableGutters
											 sx={{height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
								<Header/>
								<Outlet/>
								<Footer/>
						</Container>
				</>
		);
};

export default Layout;
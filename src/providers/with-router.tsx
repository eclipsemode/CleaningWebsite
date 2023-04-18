import {BrowserRouter} from "react-router-dom";
import React from "react";

const withRouter = (component: any) => () => {
		return (
				<BrowserRouter>
						{component()}
				</BrowserRouter>
		);
}

export default withRouter;
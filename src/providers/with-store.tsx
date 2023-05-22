"use client"
import {Provider} from "react-redux";
import {store} from "@store/store";
import React from "react";

interface IProps {
    children: React.ReactNode
}

const WithStore = ({children}: IProps) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}


export default WithStore;
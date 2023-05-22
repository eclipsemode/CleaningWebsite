"use client"
import React from "react";
import WithStore from "@providers/with-store";
interface IProps {
    children: React.ReactNode
}

const Providers = ({children}: IProps) => {
    return <WithStore>{children}</WithStore>
};

export default Providers;

import React from "react";
import { useSelector } from "react-redux";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
export default function Display() {

    const currentUser = useSelector(state => state.currentUser)

    return (
        <>
            {currentUser.length > 0 ? <Home/> : <SignIn/>}
        </>
    )
}

import React from "react";
import { useSelector } from "react-redux";
import SignIn from "./Components/SignIn";
import Home from "./Components/Home";
export default function Display() {

    const currentUser = useSelector(state => state.currentUser)

    return (
        <>
            {currentUser.length > 0 ? <Home/> : <SignIn/>}
        </>
    )
}

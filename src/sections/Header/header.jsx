import React from "react";
import SpotifyLogo from "./assets/spotify.png"
import "./header.css"

export default function Header(){
    return(
        <header className="header">
            <img src={SpotifyLogo}></img>
            SpotifyDashboard
        </header>
    )
}
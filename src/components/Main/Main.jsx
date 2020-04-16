import React from "react";
import Header from "../Header/Header";
import AudioCard from "../AudioCard/AudioCard";
import "./Main.css";

const Main = (props) => (
    <div id="Main" className="contracted-main">
        <Header />
        <div id="innerMain">
           {props.uploads.map((upload, idx) => 
            <AudioCard
                key={upload._id}
                upload={upload}
            />
           )}
        </div>
    </div>
)

export default Main;
import React from "react";
import SecondsCounter from "./SecondsCounter"; 

const Home = () => {
    return (
        <div>
            <h1>Contador de Segundos</h1>
            <SecondsCounter initialSeconds={0} countdown={false} alertTime={10} />
        </div>
    );
};

export default Home;

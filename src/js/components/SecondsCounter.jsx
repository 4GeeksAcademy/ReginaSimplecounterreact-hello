import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";

const SecondsCounter = ({ initialSeconds = 0, countdown = false, alertTime = null }) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [running, setRunning] = useState(true);

    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => {
            setSeconds(prev => (countdown ? Math.max(0, prev - 1) : prev + 1));
        }, 1000);

        return () => clearInterval(interval);
    }, [running, countdown]);

    useEffect(() => {
        if (alertTime !== null && seconds === alertTime) {
            alert(`Has alcanzado ${alertTime} segundos.`);
        }
    }, [seconds, alertTime]);

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            fontSize: "2rem",
            backgroundColor: "black",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            justifyContent: "center",
            gap: "10px"
        }}>
            <FaClock />
            <span>{String(seconds).padStart(6, "0")}</span>
            <button onClick={() => setRunning(!running)}>{running ? "Pausar" : "Reanudar"}</button>
            <button onClick={() => setSeconds(initialSeconds)}>Reiniciar</button>
        </div>
    );
};

export default SecondsCounter;

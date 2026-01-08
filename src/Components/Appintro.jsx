import { useEffect } from "react";
import "../App.css";

const AppIntro = () => {
    useEffect(() => {
        const dot = document.querySelector(".cursor-dot");
        const ring = document.querySelector(".cursor-ring");

        const move = (e) => {
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;
            ring.style.left = `${e.clientX}px`;
            ring.style.top = `${e.clientY}px`;
        };

        const clickDown = () => {
            dot.classList.add("active");
        };

        const clickUp = () => {
            dot.classList.remove("active");
        };

        window.addEventListener("mousemove", move);
        window.addEventListener("mousedown", clickDown);
        window.addEventListener("mouseup", clickUp);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mousedown", clickDown);
            window.removeEventListener("mouseup", clickUp);
        };
    }, []);


    return (
        <>
            <div className="cursor-dot"></div>
            <div className="cursor-ring"></div>
        </>
    );
};

export default AppIntro;

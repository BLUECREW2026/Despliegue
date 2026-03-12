import React from "react";
import Hero from "../components/sections/ong/HeroOng";
import Info from "../components/sections/ong/InfOng";
import Carrucel from "../components/common/carrucel";

export default function Ong() {
    return (
        <div className="flex-grow-1">
            <Hero />
            <Info />
            <Carrucel />
        </div>
    );
}
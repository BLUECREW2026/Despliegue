import React from "react";
import HeroSobreNosotros from "../components/sections/sobreNosotros/HeroSobreNosotros";
import QuienesSomos from "../components/sections/sobreNosotros/QuienesSomos";
export default function SobreNosotros() {
    return (
        <div className="flex-grow-1">
            <HeroSobreNosotros />
            <QuienesSomos />
        </div>
    );
}
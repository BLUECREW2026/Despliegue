import HeroSection from '../components/sections/HeroSection';
import SectionEstadisticas from '../components/sections/SectionEstadisticas';
import SectionONG from '../components/sections/SectionONG';
import GrupoDeCardEvento from '../components/cards/GrupoDeCardEvento';
import { useState } from "react";
import Carrucel from '../components/common/carrucel';
import LoginModal from "../components/sections/LoginModal";

function Home({ datos }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="flex-grow-1">
      <HeroSection />
      <SectionEstadisticas />
      <GrupoDeCardEvento datos={datos.slice(0, 4)} setOpenModal={setOpenModal} />
      <SectionONG />
      <Carrucel />
      <LoginModal open={openModal} setOpenModal={setOpenModal} />

    </div>
  );
}

export default Home;

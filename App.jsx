import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import HomePage from './Components/HomePage';
import SignInUpForm from './Components/SignInUpForm';
import Footer from './Components/Footer';
import VapeProducts from './Components/VapeProducts';
import DisposableVapes from './Components/DisposableVapes';
import SmokeProducts from './Components/SmokeProducts';
import VapeJuice from './Components/VapeJuice';
import PodKits from './Components/PodKits';
import AdvanceVape from './Components/AdvanceVape';
import RefillablePods from './Components/RefillablePods';
import TobaccoPipes from './Components/tobacco-pipes';
import PlasticPipes from './Components/PlasticPipes';
import WaterPipesAndAccessories from './Components/WaterPipesAndAccessories';
import MetalPipes from './Components/MetalPipes';
import PremiumPipe from './Components/PremiumPipes';
import WoodenPipe from './Components/WoodenPipes';
import AcrylicPipes from './Components/AcrylicPipes';
import GlassWaterPipes from './Components/GlassWaterPipes';
import CeramicPipes from './Components/CeramicPipes';
import DisposableKits from './Components/DisposableKits';
import DisposablePods from './Components/DisposablePods';
import SingleUse from './Components/SingleUse';
import NicotineSalts from './Components/NicotineSalts';
import FreeBase from './Components/FreeBase';
import Product from './Components/Product';

function App() {
  useEffect(() => {
    // Smooth scrolling behavior for internal anchor links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signinupform" element={<SignInUpForm />} />
          <Route path="/vape-products" element={<VapeProducts />} />
          <Route path="/smoke-products" element={<SmokeProducts />} />
          <Route path="/disposable-vapes" element={<DisposableVapes />} />
          <Route path="/vape-juice" element={<VapeJuice />} />
          <Route path="/pod-kits" element={<PodKits />} />
          <Route path="/advance-vape" element={<AdvanceVape />} />
          <Route path="/refillable-pods" element={<RefillablePods />} />
          <Route path="/tobacco-pipes" element={<TobaccoPipes />} />
          <Route path="/plastic-pipes" element={<PlasticPipes />} />
          <Route path="/water-pipes-and-accessories" element={<WaterPipesAndAccessories />} />
          <Route path="/metal-pipes" element={<MetalPipes />} />
          <Route path="/premium-pipe" element={<PremiumPipe />} />
          <Route path="/wooden-pipe" element={<WoodenPipe />} />
          <Route path="/acrylic-pipes" element={<AcrylicPipes />} />
          <Route path="/glass-water-pipes" element={<GlassWaterPipes />} />
          <Route path="/ceramic-pipes" element={<CeramicPipes />} />
          <Route path="/disposable-kits" element={<DisposableKits />} />
          <Route path="/disposable-pods" element={<DisposablePods />} />
          <Route path="/single-use" element={<SingleUse />} />
          <Route path="/nicotine-salts" element={<NicotineSalts />} />
          <Route path="/free-base" element={<FreeBase />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
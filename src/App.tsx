import React from 'react';
import MainLayout from "./layouts/MainLayout";
import Hero from "./components/Hero";
import LottieTech from "./assets/images/bg-2.png"
import SectionPortfolio from "./components/SectionPortfolio";
import SectionExperience from "./components/SectionExperience";

function App() {
  return (
    <MainLayout>
        <Hero title={'Software'} subtitle={'Engineer'} name={'Denny Ferdiansyah // since 2013'}
        backgroundImage={LottieTech} backgroundWidth={700} backgroundHeight={700}/>
        <SectionExperience />
        <SectionPortfolio heading={'My Works'}/>
    </MainLayout>
  );
}

export default App;

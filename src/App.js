import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import EpisodeList from './components/EpisodeList';
import LocationsList from './components/LocationsList';
import WelcomePage from './components/WelcomePage';


export default function App() {
  return (
    <main>
      <Header />
      <WelcomePage />
      {/* <TabNav /> */}
      {/* <CharacterList /> */}
      {/* <LocationsList /> */}
      {/* <EpisodeList /> */}
    </main>
  );
}

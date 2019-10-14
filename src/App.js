import React from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import {Route} from 'react-router-dom';
import CharacterList from "./components/CharacterList.js";
import LocationsList from "./components/LocationsList.js"
import Nav from "./components/Nav.js";
import SearchForm from "./components/SearchForm.js"


export default function App() {
  return (
    <main>
      <Nav />
      <SearchForm />
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characterlist" component={CharacterList} />
      <Route path="/locationlist" component={LocationsList} />
    </main>
  );
}

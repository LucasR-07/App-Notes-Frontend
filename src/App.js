import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "./components/Navigation";
import NotesList from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";
import EditNote from "./components/EditNote";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />

        <div className="container p-4">
          <Route path="/" exact component={NotesList} />
          <Route path="/notes/:id" component={EditNote} />
          <Route path="/create" component={CreateNote} />
          <Route path="/user" component={CreateUser} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

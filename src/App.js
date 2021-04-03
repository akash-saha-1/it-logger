import React, { Fragment, useEffect } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import SearchBar from "./components/layout/searchBar";
import Logs from "./components/logs/logs";
import AddBtn from "./components/layout/addBtn";
import AddLogModal from "./components/logs/addLogModal";
import EditLogModal from "./components/logs/editLogModal";
import AddtechModal from "./components/techs/addTechModal";
import TechListModal from "./components/techs/techListModal";

const App = () => {
  useEffect(() => {
    //initialize materialized js
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddtechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;

import React from "react";
// import styles from "./App.module.scss";
import Layout from "../../components/Layout/Layout";
import Users from "../Users/Users";
import UsersDetails from "../Hobbies/Hobbies";

function App() {
  return <Layout leftCol={<Users />} rightCol={<UsersDetails />} />;
}

export default App;

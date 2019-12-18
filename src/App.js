import React from "react";
import Toastify from "Components/Toastify/Toastify";
import LoadingScreen from "Components/LoadingScreen/LoadingScreen";
import { connect } from "react-redux";
import { getLoading } from "state/selectors/index";

const mapStateToProps = state => ({
  loading: getLoading(state)
});

function App(props) {
  const { loading } = props;
  return (
    <div className="App">
      <Toastify />
      <LoadingScreen show={loading} />
      {props.children}
    </div>
  );
}

export default connect(mapStateToProps, null)(App);

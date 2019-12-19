import React from "react";
import Toastify from "Components/Toastify/Toastify";
import LoadingScreen from "Components/LoadingScreen/LoadingScreen";
import { connect } from "react-redux";
import { getLoading } from "state/selectors/index";
import { INIT_DATA } from "state/reducers/initReducer";

const mapStateToProps = state => ({
  loading: getLoading(state)
});

const mapDispatchToProps = dispatch => ({
  initData: () => dispatch({ type: INIT_DATA })
});
class App extends React.Component {
  componentDidMount = () => {
    this.props.initData();
  };

  render() {
    const { loading, children } = this.props;
    return (
      <div className="App">
        <Toastify />
        <LoadingScreen show={loading} />
        {children}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

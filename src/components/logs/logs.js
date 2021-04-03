import React, { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../layout/preLoader";
import LogItem from "./logItem";
import PropTypes from "prop-types";
import { getLogs } from "./../../actions/logActions";

const Logs = ({ reducerLog: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {logs.length === 0 ? (
        <p className="center">No Logs to show...</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};
Logs.propType = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  reducerLog: state.logs, //coming from root reducer
});
export default connect(mapStateToProps, { getLogs })(Logs);

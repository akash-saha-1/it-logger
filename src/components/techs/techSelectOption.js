import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTechs } from "./../../actions/techActions";

const TechSelectOption = ({ getTechs, techs: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);
  return (
    !loading &&
    techs &&
    techs.map((tech) => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {tech.firstName} {tech.lastName}
      </option>
    ))
  );
};

TechSelectOption.propTypes = {
  getTechs: PropTypes.func.isRequired,
  techs: PropTypes.object.isRequired,
};
const mapStateToProp = (state) => ({
  techs: state.techs,
});

export default connect(mapStateToProp, { getTechs })(TechSelectOption);

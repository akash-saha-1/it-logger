import React, { Fragment, useEffect } from "react";
import TechItem from "./techItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "./../../actions/techActions";

const TechListModal = ({ techs: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div id="tech-list-modal" className="modal">
        <div className="modal-content">
          <h4>Technician List</h4>
          <ul className="collection">
            {!loading &&
              techs &&
              techs.map((tech) => <TechItem key={tech.id} tech={tech} />)}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
TechListModal.propTypes = {
  getTechs: PropTypes.func.isRequired,
  techs: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => ({
  techs: state.techs,
});

export default connect(mapStateToProp, { getTechs })(TechListModal);

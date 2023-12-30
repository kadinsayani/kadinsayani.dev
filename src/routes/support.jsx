import { PropTypes } from "prop-types";
import "./App.css";
// import ReactMarkdown from "react-markdown";

function Support() {
  //   const app = appData.find((item) => item.name == props.name);
  return (
    <div>
      <h1>Kanbo Support</h1>
      <p>Please contact us at me@kadinsayani.dev for support.</p>
      {/* <ReactMarkdown>{app.support}</ReactMarkdown> */}
    </div>
  );
}

Support.propTypes = {
  name: PropTypes.string,
};

export default Support;

import { appData } from "../data";
import { PropTypes } from "prop-types";
import ReactMarkdown from "react-markdown";

function PrivacyPolicy(props) {
  const app = appData.find((item) => item.name == props.name);
  return (
    <div>
      <ReactMarkdown>{app.privacyPolicy}</ReactMarkdown>
    </div>
  );
}

PrivacyPolicy.propTypes = {
  name: PropTypes.string,
};

export default PrivacyPolicy;

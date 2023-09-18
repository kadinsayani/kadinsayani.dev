import { appData } from "../data";

function Apps() {
  return (
    <>
      <h2>Apps</h2>
      <div className="app-container">
        {appData.map((data, key) => {
          return (
            <div key={key}>
              <a href={data.repo}>{data.name}</a>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Apps;

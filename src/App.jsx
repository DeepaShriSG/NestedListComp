import React, { useState, useEffect } from "react";

const App = () => {
  const folderData = {
    Applications: {
      Achild1: ["c1", "c2", "c3"],
      Achild2: ["c1", "c2", "c3"],
      Achild3: ["c1", "c2", "c3"],
      Achild4: ["c1", "c2", "c3"],
    },

    Library: {
      Lchild1: ["c1", "c2", "c3"],
      Lchild2: ["c1", "c2", "c3"],
      Lchild3: ["c1", "c2", "c3"],
      Lchild4: ["c1", "c2", "c3"],
    },

    System: {
      Schild1: ["c1", "c2", "c3"],
      Schild2: ["c1", "c2", "c3"],
      Schild3: ["c1", "c2", "c3"],
      Schild4: ["c1", "c2", "c3"],
    },

    Users: {
      adam: ["a1", "a2", "a3"],
      ghost: ["g1", "g2", "g3"],
      Guest: ["Desktop", "Documents", "Downloads", "Movies", "Music", "Pictures", "Public"],
      Shared: ["s1", "s2", "s3"],
      thing1: ["x1", "x2", "x3"],
      thing2: ["y1", "y2", "y3"],
      tonyae: ["t1", "t2", "t3"],
    },
  };

  let [data, setdata] = useState("");
  let [child1, setchild1] = useState([]);
  let [stateKey, setStateKey] = useState("");
  let [district, setDistricts] = useState([]);

  const handledataChange = (value) => {
    setdata(value);
  };

  useEffect(() => {
    if (data) {
      const stateList = Object.keys(folderData[data] || {});
      setchild1(stateList);
      setStateKey("");
      setDistricts([]);
    }
  }, [data]);

  const handleStateKey = (value) => {
    setStateKey(value);
  };

  useEffect(() => {
    if (stateKey) {
      const districtList = folderData[data][stateKey] || [];
      setDistricts(districtList);
    }
  }, [stateKey, data]);

  return (
    <div className="container">
      <div className="row my-4">
        <h3 className="text-center mb-4">Nested List Components</h3>

        {/* data Column */}
        <div className="col-md-4">
          <ul className="list-group">
            {Object.keys(folderData).map((dataItem) => (
              <li
                className={`list-group-item ${data === dataItem ? "active" : ""}`}
                key={dataItem}
                onClick={() => handledataChange(dataItem)}
                style={{ cursor: "pointer" }}>
                {dataItem}
                <i className="bi bi-caret-right float-end"></i>
              </li>
            ))}
          </ul>
        </div>

        {/* Child1 Column */}
        <div className="col-md-4">
          <ul className="list-group">
            {child1.map((stateItem) => (
              <li className={`list-group-item ${stateKey === stateItem ? "active" : ""}`} key={stateItem} onClick={() => handleStateKey(stateItem)} style={{ cursor: "pointer" }}>
                {stateItem}
                <i className="bi bi-caret-right float-end"></i>
              </li>
            ))}
          </ul>
        </div>

        {/* District Column */}
        <div className="col-md-4">
          <ul className="list-group">
            {district.map((districtItem) => (
              <li className="list-group-item" key={districtItem}>
                {districtItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;

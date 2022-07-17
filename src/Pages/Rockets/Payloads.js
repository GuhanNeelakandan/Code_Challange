import React from "react";

function Payloads({ element }) {
  return (
    <>
      <p>
        ID : <strong>{element.id}</strong>
      </p>
      <p>
        Name: <strong>{element.name}</strong>
      </p>
      <p>
        Kg: <strong>{element.kg}</strong>
      </p>
      <p>
        Lb: <strong>{element.lb}</strong>{" "}
      </p>
      <div class="dropdown-divider"></div>
    </>
  );
}

export default Payloads;

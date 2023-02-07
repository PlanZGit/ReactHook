import React, { useState } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);
  return (
    <div>
      DocTitleOne {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        increment
      </button>
    </div>
  );
}

export default DocTitleOne;

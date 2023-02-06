import React, { useEffect, useRef } from "react";

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    //foucus the input elememt
    inputRef.current.focus();
  }, []);

  return (
    <div>
      FocusInput
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default FocusInput;

// Utility Component, useful for when there are multiple input fields.

import { useState } from "react";

// custom hook
const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: e => setValue(e.target.value)
  };
};

export default useInputValue;

// Example Implementation

//  export default function() {
//    const text = useInputValue("");
//    const email = useInputValue("");
//
//    return (
//      div>
//       <input {...text} />
//       <input {...email} />
//      </div>
//    );
//  }

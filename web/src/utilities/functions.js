import { useEffect, useRef, useState } from "react";

// eslint-disable-next-line import/prefer-default-export
export const useStateRef = initialValue => {
  const [value, setValue] = useState(initialValue);

  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return [value, setValue, ref];
};

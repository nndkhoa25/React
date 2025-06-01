// src/PersistGate.jsx
import React, { useState, useEffect } from "react";

export const PersistGate = ({ loading = null, persistor, children }) => {
  const [bootstrapped, setBootstrapped] = useState(false);

  useEffect(() => {
    persistor.persist();
    persistor.flush().then(() => {
      setBootstrapped(true);
    });
  }, [persistor]);

  if (!bootstrapped) return loading;
  return children;
};

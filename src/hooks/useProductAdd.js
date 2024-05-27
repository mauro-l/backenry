import { addDoc } from "firebase/firestore";
import { useState } from "react";

function useProductAdd() {
  const [error, setError] = useState(null);

  const addDocument = async (collectionPath, data) => {
    try {
      await addDoc(collectionPath, data);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };
  return { addDocument, error };
}

export default useProductAdd;

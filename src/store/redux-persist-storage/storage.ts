import { WebStorage } from "redux-persist/lib/types";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";
// import { Storage } from "redux-persist";

const createPersistorStorage = () : WebStorage => {
  const isServerSide = typeof window === 'undefined'

  // Returns noop (dummy) storage.
  if(isServerSide){
    return {
      getItem() {
        return Promise.resolve(null);
      },
      setItem() {
        return Promise.resolve();
      },
      removeItem() {
        return Promise.resolve();
      },
    };
  }

  return createWebStorage('local')
};

export default createPersistorStorage;
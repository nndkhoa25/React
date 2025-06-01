import rootReducer from "./store/reducers/rootReducer";
import { persistStore } from "redux-persist";
import { createStore} from "redux";

const reuduxStore = () => {
    const store = createStore(rootReducer); //Hom sau sex them middleware o day
    // Middleware can be added here, e.g., applyMiddleware(thunk, logger)
    const persistor = persistStore(store);
    return { store, persistor };
}

export default reuduxStore;
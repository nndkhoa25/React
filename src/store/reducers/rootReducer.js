import authReducer from "./authReducer";
import userReducer from "./userReducer";        
import { combineReducers } from "redux";    
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const commonConfig = {
    storage,
    stateReconciler: autoMergeLevel2,   // see "Merge Process" section for details.
}

const authConfig = {
    ...commonConfig,
    key: "auth",
    whitelist: ["isLoggedIn", "token"] // only persist these keys
}

const rootReducer = combineReducers({
    auth: persistReducer(authConfig, authReducer), // persist auth state
    user: userReducer, // user state is not persisted
});

export default rootReducer;
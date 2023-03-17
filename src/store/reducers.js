import { combineReducers } from "redux";
import PostsReducer from "./posts/reducer";
import AuthReducer from "./auth/reducer";

const rootReducer = combineReducers({
    PostsReducer,
    AuthReducer
})

export default rootReducer
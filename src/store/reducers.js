import { combineReducers } from "redux";
import PostsReducer from "./posts/reducer";

const rootReducer = combineReducers({
    PostsReducer,
    //AuthReducer
})

export default rootReducer
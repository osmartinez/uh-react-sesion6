import {
    DO_LOGIN,
    DO_LOGIN_OK,
    DO_LOGIN_FAIL,

    DO_LOGOUT,
    DO_LOGOUT_OK,
    DO_LOGOUT_FAIL
} from "./actionTypes"

function recoverUser(){
    try{
       return JSON.parse(localStorage.getItem("_user"))
    }catch(err){
        return {}
    }
}

const initialState = {
    loadingLogin: false,
    user: recoverUser(),
    error: {
        message: ""
    }
}

export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case DO_LOGIN:
            state = {... state, loadingLogin: true}
            break

        case DO_LOGIN_OK:
            state = {... state, loadingLogin: false, user: action.payload}
            break

        case DO_LOGIN_FAIL:
            state = { ... state, loadingLogin: false, user: {}}
            break

        case DO_LOGOUT:
            state = {... state}
            break

        case DO_LOGOUT_OK:
            state = {... state, user: {}}
            break
    }
    return state
}
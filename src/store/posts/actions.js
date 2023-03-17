import axios from 'axios'
import {
    GET_POSTS,
    GET_POSTS_OK,
    GET_POSTS_FAIL,

    GET_SINGLE_POST,
    GET_SINGLE_POST_OK,
    GET_SINGLE_POST_FAIL
} from './actionTypes'

// accion para cuando lanzo la peticion al servidor
export function actionGetPosts(){
    return{
        type: GET_POSTS
    }
}

export function actionGetSinglePost(postId){
    return{
        type: GET_SINGLE_POST,
        payload: postId,
    }
}

// accion para cuando recibo bien los posts
export function actionGetPostsOk(posts){
    return{
        type: GET_POSTS_OK,
        payload: posts
    }
}

export function actionGetSinglePostOk(post){
    return{
        type: GET_SINGLE_POST_OK,
        payload: post
    }
}

// accion para cuando no recibo bien la peticion
export function actionGetPostsFail(error){
    return{
        type: GET_POSTS_FAIL,
        payload: error,
    }
}


export function actionGetSinglePostFail(error){
    return{
        type: GET_SINGLE_POST_FAIL,
        payload: error,
    }
}

export function getPosts(){
    return async (dispatch)=>{
        // empiezo a pedir los posts a la API
        dispatch(actionGetPosts())

        try{
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            dispatch(actionGetPostsOk(response.data))
        }catch(error){
            dispatch(actionGetPostsFail(error))
        }
    }
}

export function getSinglePost(postId){
    return async (dispatch)=>{
        // empiezo a pedir los posts a la API
        dispatch(actionGetSinglePost(postId))

        try{
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            dispatch(actionGetSinglePostOk(response.data))
        }catch(error){
            dispatch(actionGetSinglePostFail(error))
        }
    }
}
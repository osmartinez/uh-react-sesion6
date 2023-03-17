import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SinglePostComponent from "../components/SinglePostComponent/SinglePostComponent";
import { getSinglePost } from "../store/posts/actions";

export default function SinglePostPage(){
    const params = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getSinglePost(params.id))
    },[])
    return(
        <Container>
            <SinglePostComponent></SinglePostComponent>
        </Container>
    )
}
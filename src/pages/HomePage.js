import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import ImagenGato from "../assets/images/gato.jpg"


export default function HomePage(){

    const {user} = useSelector((state)=> state.AuthReducer)
    return (
        <Container>
            <h1>Home page</h1>
            {user && user.id? <h2>Bienvenid@ {user.firstName}</h2>: 'No estás loggeado'} 
        </Container>
    )
}
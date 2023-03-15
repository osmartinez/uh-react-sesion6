import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../store/posts/actions';
import { Bars } from 'react-loader-spinner';


const MultiPostsComponent = () => {
  // dipatcher para ejecutar acciones
  const dispatch = useDispatch()
  // las partes que nos interesan de la store qu están en el reducer PostsReducer
  const {posts,loadingPosts} = useSelector((state)=> state.PostsReducer)

  // cuando arranca el componente
  useEffect(()=>{
    // llamar a la acción para que obtenga los posts
    dispatch(getPosts())
  },[])

  if(loadingPosts){
    return (
      <Container>
        <Bars
        height={100}
        width={100}>

        </Bars>
      </Container>
    )
  }

  return(
    <Container>
      {posts.map(post=>{
        return (
          <Card className="px-4 py-2 mb-3">
            <Card.Title>
              {post.title}
            </Card.Title>
            <Card.Text>
              {post.body}
            </Card.Text>
          </Card>
        )
      })}
    </Container>
  )
};

MultiPostsComponent.propTypes = {};

MultiPostsComponent.defaultProps = {};

export default MultiPostsComponent;

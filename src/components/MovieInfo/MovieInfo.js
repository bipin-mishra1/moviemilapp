import React from "react";
import PropTypes from 'prop-types';
import {POSTER_SIZE,IMAGE_BASE_URL} from '../../config';
import Thumb from '../Thumbnail/Thumb';
//fallback image
import No_Image from '../../images/no_image.jpg';
import {Wrapper,Content,Text} from './MovieInfo.styles';

const MovieInfo = ({movie})=>(
  <Wrapper backdrop={movie.backdrop_path}>
    <Content>
        <Thumb
        image = {
            movie.poster_path?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`:No_Image
        }
        clickable = {true}
        />
        <Text>
            <h1>{movie.title}</h1>
            <h3>Plot</h3>
            <p>{movie.overview}</p>

            <div className="rating-directors">
                <h3>Rating</h3>
                <div className="score">
                   {movie.vote_average}
                </div>
                <div>
                    <h3>Director{movie.directors.length>1?'s':''}</h3>
                    {
                     movie.directors.map(director=>(
                         <p key={director.credit_id}>{director.name}</p>
                     ))
                    }
                    
                </div>
            </div>
        </Text>
        </Content>
    </Wrapper>
)
MovieInfo.propTypes = {
    movie: PropTypes.object
}
export default MovieInfo;
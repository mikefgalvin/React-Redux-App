import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../actions/charActions'

const Characters = props => {

    const error = useSelector( state => state.error);
    const isFetching = useSelector( state => state.isFetching)
    const characters = useSelector( state => state.characters)
   
    // useEffect(() => {
    //     dispatch(getCharacters());
    // }, []);

    const dispatch = useDispatch();
  
    const handleClick = ()=> {
      dispatch(getCharacters());
    console.log('Pickle Rick!!')

    };
  
    if (error) {
      return <h2>We got an error: {error}</h2>;
    }
  
    if (isFetching) {
      return <h2>I'm working on it, don't be impatient</h2>;
    }
  
    return (
      <>
        <button onClick={handleClick}>Pickle Rick!!!!!</button>
        {/* <button></button> */}
        <div className='characters'>
            {
                characters.map(item => (
                    <div className='char' key={item.id} >
                        <h2>{item.name}</h2>
                        <img src={item.image} />
                        <div className='info'>
                            <p>Status: {item.status}</p>
                            <p>Species: {item.species}</p>
                            <p>Location: {item.location.name}</p>
                            <p>Origin: {item.origin.name}</p>
                        </div>
                    </div>
                ))
            }
        </div>

      </>
    );
  };

  export default Characters;
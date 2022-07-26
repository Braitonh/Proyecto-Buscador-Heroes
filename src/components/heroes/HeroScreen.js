import React, { useMemo } from 'react'
import { useParams,useNavigate} from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById'

export const HeroScreen = () => {

  const {heroeId} = useParams();

  const hero = useMemo(() => getHeroById(heroeId), [heroeId]);


  const navigate = useNavigate();

  


  const {
    
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  const handleReturn = ( ) =>{

    if(publisher === "DC Comics" ){
      navigate('/dc')
    }else if (publisher === "Marvel Comics"){
      navigate('/marvel')
    }

      
  }

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
        src={`../assets/heroes/${heroeId}.jpg`}
        alt={ superhero }
        className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>

      <div className='col-8'>
          <h3> { superhero } </h3>
          <ul className='list-group list-group-flush'>
              <li className='list-group-item'> <b>Alter Ego:</b> { alter_ego } </li>
              <li className='list-group-item'> <b>publisher:</b> { publisher } </li>
              <li className='list-group-item'> <b>First Appearance:</b> { first_appearance } </li>
          </ul>

          <h5>Characters</h5>
          <p>{ characters }</p>

          <button className='btn btn-outline-info' onClick={handleReturn}>
            Return
          </button>
      </div>

    </div>
  )
}

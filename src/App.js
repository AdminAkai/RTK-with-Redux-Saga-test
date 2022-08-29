import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectAllCats } from './redux/features/catsSlice/selectors'
import { getCatsFetch } from './redux/features/catsSlice';

import './App.css';

function App() {
  const cats = useSelector(selectAllCats)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCatsFetch())
  }, [dispatch])

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>Different Cat Species</p>
      <hr />
      <div className='Gallery'>
        {
          cats.map(({ 
            id, 
            name, 
            image, 
            temperament, 
            description 
          }) => (
            <div key={id} className="row">
              <div className='column column-left'>
                <img
                  src={image.url}
                  alt={name}
                  width="200"
                  height="200"
                />
              </div>
              <div className='column column-right'>
                <h2>{ name }</h2>
                <h5>Temperament: { temperament }</h5>
                <p>{ description }</p>
              </div>
              <button>VIEW MORE CATS</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;

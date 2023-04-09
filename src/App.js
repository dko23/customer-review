import { useState } from 'react';
import './App.css';
import { rate } from './rating';


export default function App() {
 
  const [index, setIndex] = useState(0);
  function nextClick() {
    
    if (index < rate.length-1) {
      setIndex(index + 1)
        }
     ;
  }

    
  function previousClick() {
        if (index > 0) {
          setIndex(index - 1);
            }
}

let opinion = rate[index];
  return (
    <>
 <div className="container">
     <h2 className="text-center">Review</h2>
     <div className="text-center">         
 <p>Hi there, Thanks for dropping by! We would appreciate it if you left a review regarding our services.</p>
     </div>
    
     <div className="row test text-center d-flex align-items-stretch">
       
             <div className='reviewbody'>
                          <img src={opinion.img} className="portrait rounded-circle shadow-1-strong" alt="..." id="pic" />
                          <p className="review" id="rev">
                    {opinion.review}
                          </p>
              <p id="name">-{opinion.name}</p>
              <div className="next_buttons">
                     <a href="#" className="previous round" id="before" onClick={previousClick}>&#8249;</a>
                     <a href="#" className="next" id="after" onClick={nextClick}>&#8250;</a>
                 </div>
             </div>
      
     </div>
 </div>
    </>
  );
}


     
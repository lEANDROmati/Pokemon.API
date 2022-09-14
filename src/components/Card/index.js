
import './App.css';

const Card =({state})=>{
    return(
        <div className="App">
     
        {
         state && (
        <> 
         <div className='card_main  '>

             <img className='card_img' src={ state.sprites.front_default} alt = "cargando"  />
             <p className='card_name_hp' >{state.name}  <span>.   {state.stats[0].base_stat}hp </span> </p>
             <div className='card_stats'>

                 <p className='stat' >{state.stats[1].base_stat}  <span>attack </span></p> 
                 <p className='stat' >{state.stats[2].base_stat} <span>defense </span> </p> 
                 <p className='stat' >{state.stats[5].base_stat} <span>speed </span></p> 

             </div>
            
         </div>
             
        </>
         
          
         )
        }
       </div>
    )
}

export default Card;
const _add = () =>({
      type : 'ADD'
    })
  

  const _substract = () =>({
      type : 'SUBSTRACT'
    })

export function incrementAsync(){
    return async (dispatch) => {
        // const response = await fetch('https://icanhazdadjoke.com');
        // const data = await response.json();
        // console.log(data);
        // // dispatch({
        // //     type    :'GET_DATA',
        // //     payload : response.json()
        // // })
        setTimeout(() => {
            dispatch(_add());
        },1000) 
    }
}

export function decrementAsync(){
    return async (dispatch) =>{
        setTimeout(() => {
            dispatch(_substract());
        },1000) 
    }
}
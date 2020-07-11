// const todos = (state = [], action) =>{
//     switch (action.type) {
//         case 'ADD TODO':
//             //return suatu state yang baru
//             return [
//                 ...state,
//                 action.todo
//             ]
//             //return state yang lama
//         default:
//             return state;
//     }
// }

// export default todos;

//usefunction
const count = (state = 0, action) =>{
    switch (action.type) {
        case 'ADD':
            //return suatu state yang baru
            return state + 1
        case 'SUBSTRACT' :
            return state - 1
        default :
            return state;
    }
}

export default count;
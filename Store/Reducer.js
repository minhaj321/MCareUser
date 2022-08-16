const initialState = {
    user : {},
    count: 0 
}


const Reducer = (state=initialState,action)=>{

    switch(action.type){
        case 'getData':
            return {
                ...state,
                user:action.user
            }
            break;
        default:
            return{
                ...state
            }
            break;

    }

}

export default Reducer
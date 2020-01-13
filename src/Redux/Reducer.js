const ADDTOPIC = 'ADDTOPIC';
const COMMENT = 'COMMENT'
const initState = {
    data:[],
    commentData:[]
}

const addingData = (state = initState, action) => {
    switch(action.type){
        case ADDTOPIC:
             return {
                 ...state,
                 data: [...state.data, action.data]
             }

             case COMMENT:
                return {
                    ...state,
                    commentData: [...state.commentData, action.data]
                }

                   
        default:
            return state     
    }
}

export default addingData
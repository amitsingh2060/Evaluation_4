const ADDTOPIC = 'ADDTOPIC';

const COMMENT = 'COMMENT'

const LOG_IN = "LOG_IN";

const addTopic = (data) => {
  //  console.log(data)
    return{
        type: ADDTOPIC,
          data
        }
}

const addComment = (data) => {
    console.log(data)
    return{
        type: COMMENT,
          data
        }
}

const loginUser = (payload) => {
    console.log(payload);
    return {
        type: LOG_IN,
        payload
    }
}

export {addTopic,addComment,loginUser}
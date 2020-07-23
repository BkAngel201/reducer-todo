
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
export const CLEAR_COMPLETED_TODO = "CLEAR_COMPLETED_TODO";

export const initialListState = [{
    task: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    tags: 'code, enjoy, study'
  }]

  export const listReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
           return  [
                ...state,
                action.payload
              ];

        case COMPLETE_TODO: {
            let tempArray = state.map(item => {
                if(item.id === action.payload) {
                  return {
                    ...item,
                    completed: !item.completed
                  } 
                } else {
                  return item
                }
              })
            return tempArray;
        }
           
        case CLEAR_COMPLETED_TODO: {
            let tempArray = state.filter(item => {
                return item.completed === false
              })
            return tempArray;
        }
            

        default:
          return state;
      }
  };
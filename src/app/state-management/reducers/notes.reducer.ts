import {Action} from '@ngrx/store'

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export function notesReducer(state = [],action : Action){
  switch(action.type){
    case ADD_NOTE:
      return [action.payload, ...state];
    case DELETE_NOTE:
      return state.filter((item, index) => index !== action.payload);

    default:
      return state;
  }

}

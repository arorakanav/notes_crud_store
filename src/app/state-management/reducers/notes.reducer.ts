import {Action} from '@ngrx/store'

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SHOW_CHECK = 'SHOW_CHECK';
export const REMOVE_CHECK = 'REMOVE_CHECK';
export const UPDATE_NOTE ='UPDATE_NOTE';

export function notesReducer(state = [],action : Action){
  switch(action.type){
    case ADD_NOTE:
      return [action.payload, ...state];
    case DELETE_NOTE:
      return state.filter((item, index) => index !== action.payload);
    case UPDATE_NOTE:
      return state.map((item, index) => {
        return index === action.payload.index
          ? Object.assign({}, item, { value: action.payload.newValue })
          : item;
      });
    default:
      return state;
  }

}

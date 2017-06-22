import {Action} from '@ngrx/store'

export const SHOW_CHECK = 'CHECK';
export const HIDE_CHECK = 'HIDECHECK'

export function checkReducer(state: boolean=false, action:Action){

  switch(action.type){
    case SHOW_CHECK:
     return true;

    case HIDE_CHECK:
      return false;

    default:
      return state;

  }

}

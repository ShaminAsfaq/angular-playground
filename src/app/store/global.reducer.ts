import { createReducer, on } from '@ngrx/store';
import { updateGlobalState } from './global.actions';
import { GlobalState } from './global.model';

export const initialGlobalState: GlobalState = {};

export const globalReducer = createReducer(
  initialGlobalState,
  on(updateGlobalState, (state, { key, value }) => {
    if (key === 'alert_list') {
      const current = Array.isArray(state['alert_list']) ? state['alert_list'] : [];
      return {
        ...state,
        alert_list: [...current, value]
      };
    }
    return {
      ...state,
      [key]: value
    };
  })
); 
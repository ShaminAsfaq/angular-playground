import { createAction, props } from '@ngrx/store';

export const updateGlobalState = createAction(
  '[Global] Update State',
  props<{ key: string; value: any }>()
); 
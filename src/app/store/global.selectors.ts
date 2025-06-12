import { createFeatureSelector } from '@ngrx/store';
import { GlobalState } from './global.model';

export const selectGlobal = createFeatureSelector<GlobalState>('global'); 
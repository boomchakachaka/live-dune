
export { default } from './view';
export { name, reducer } from './store/slice';

export {
  resetStateAction,

  resetErrorAction,

  selectError,
  selectInProcess,
} from './store/slice';

export {
  signUp,
} from './store/commands';

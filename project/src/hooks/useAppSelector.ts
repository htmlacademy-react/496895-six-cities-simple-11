import {TState} from '../types/types';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

const useAppSelector: TypedUseSelectorHook<TState> = useSelector;

export {useAppSelector};

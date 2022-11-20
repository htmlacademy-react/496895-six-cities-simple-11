import {TAppDispatch} from '../types/types';
import {useDispatch} from 'react-redux';

const useAppDispatch = () => useDispatch<TAppDispatch>();

export {useAppDispatch};

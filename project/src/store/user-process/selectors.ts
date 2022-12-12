import {AuthorizationStatus, NameSpace} from '../../constants/constants';
import {TState, TUser} from '../../types/types';

const getAuthorizationStatus = (state: TState): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
const getUser = (state: TState): TUser | null => state[NameSpace.User].user;

export {
  getAuthorizationStatus,
  getUser
};

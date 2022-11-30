import {AuthorizationStatus} from './constants/constants';

const isAuthorized = (status: string) => status === AuthorizationStatus.Auth;

export {
  isAuthorized
};

import {User} from '../store/auth/type';
import requests from './requests';

const fetchUser = async (): Promise<User> =>
  requests.get('/api/current_user');

export const authService = {
  fetchUser,
};

import { setUserRole } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const removeUser = async (userSession, userId) => {
  const accessRoles = [ROLE.ADMIN];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: 'Доступ запрещен',
      res: null,
    };
  }

  setUserRole(userId);

  return {
    error: null,
    res: true,
  };
};

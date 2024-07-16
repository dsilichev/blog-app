import { authorize, fetchRoles, fetchUsers, logout, register, updateUserRole} from './operations';

export const server = {
  authorize,
  logout,
  register,
  fetchUsers,
  fetchRoles,
  updateUserRole,
};

import {
  authorize,
  fetchRoles,
  fetchUsers,
  logout,
  register,
  updateUserRole,
  removeUser,
  fetchPost
} from './operations';

export const server = {
  authorize,
  logout,
  register,
  fetchUsers,
  fetchRoles,
  updateUserRole,
  removeUser,
  fetchPost,
};

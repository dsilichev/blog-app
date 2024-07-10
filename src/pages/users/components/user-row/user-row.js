import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import { ROLE } from '../../../../constants';

const UserRowContainer = ({ className, login, registeredAt, roleId: userRoleId }) => {
  const dispatch = useDispatch();

  const roles = [];

  const onRoleChange = () => {};

  return (
    <div className={className}>
      <TableRow>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registeredAt}</div>
        <div className="role-column">
          <select value={userRoleId} onChange={onRoleChange}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option value={roleId}>{roleName}</option>
            ))}
          </select>
          <Icon
            id="fa-floppy-disk"
            margin="10px 0 0 15px"
            onClick={() => dispatch(/*TODO*/)}
          />
        </div>
      </TableRow>
      <Icon id="fa-trash-can" margin="10px 0 0 15px" onClick={() => dispatch(/*TODO*/)} />
    </div>
  );
};

export const UserRow = styled(UserRowContainer)``;

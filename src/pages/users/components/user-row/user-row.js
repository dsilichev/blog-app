import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';

const UserRowContainer = ({
  className,
  login,
  registeredAt,
  roleId: userRoleId,
  roles,
}) => {
  const dispatch = useDispatch();
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value));
  };

  const isSaveButtonDisabled = selectedRoleId === userRoleId;

  return (
    <div className={className}>
      <TableRow border>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registeredAt}</div>
        <div className="role-column">
          <select value={selectedRoleId} onChange={onRoleChange}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option key={roleId} value={roleId}>
                {roleName}
              </option>
            ))}
          </select>
          <Icon id="fa-save" margin="0 10px" disabled={isSaveButtonDisabled} onClick={() => dispatch(/*TODO*/)} />
        </div>
      </TableRow>
      <Icon id="fa-trash-alt" margin="0 0 0 10px" onClick={() => dispatch(/*TODO*/)} />
    </div>
  );
};

export const UserRow = styled(UserRowContainer)`
  display: flex;
  margin-top: 10px;

  & select {
    font-size: 16px;
    padding: 0 5px;
  }
`;

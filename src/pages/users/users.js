import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { H2 } from '../../components';
import { ROLE } from '../../constants';
import { UserRow, TableRow } from './components';
import { useServerRequest } from '../../hooks';
import { server } from '../../bff';
import { useEffect, useState } from 'react';

const UsersContainer = ({ className }) => {
  const [roles, setRoles] = useState([]);
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const users = [];

  useEffect(() => {
    requestServer('fetchRoles').then(({ error, res }) => {
      if (error) {
        return;
      }

      setRoles(res);
    });
  }, [requestServer]);

  return (
    <div className={className}>
      <H2>Пользователи</H2>
      <div>
        <TableRow>
          <div className="login-column">Логин</div>
          <div className="registered-at-column">Дата регистрации</div>
          <div className="role-column">Роль</div>
        </TableRow>

        {users.map(({ id, login, registeredAt, roleId }) => (
          <UserRow
            key={id}
            login={login}
            registeredAt={registeredAt}
            roleId={roleId}
            roles={roles}
          />
        ))}
      </div>
    </div>
  );
};

export const Users = styled(UsersContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 570px;
  margin: 0 auto;
`;

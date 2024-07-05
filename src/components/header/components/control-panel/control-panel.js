import { Link, useNavigate } from 'react-router-dom';
import { Icon, Button } from '../../../../components';
import { styled } from 'styled-components';
import { ROLE } from '../../../../constants';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../../selectors';
import { logout } from '../../../../actions';

const RightAligned = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledIcon = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const roleId = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);

  return (
    <div className={className}>
      <RightAligned>
        <Button>
          {roleId === ROLE.GUEST ? (
            <Link to="/login">Войти</Link>
          ) : (
            <>
              <div>{login}</div>
              <StyledIcon onClick={() => dispatch(logout(session))}>
                <Icon id="fa-sign-out-alt" margin="10px 0 0 0" />
              </StyledIcon>
            </>
          )}
        </Button>
      </RightAligned>
      <RightAligned>
        <StyledIcon onClick={() => navigate(-1)}>
          <Icon id="fa-backward" margin="10px 0 0 0" />
        </StyledIcon>
        <Link to="post">
          <Icon id="fa-file-alt" margin="10px 0 0 15px" />
        </Link>
        <Link to="users">
          <Icon id="fa-users" margin="10px 0 0 15px" />
        </Link>
      </RightAligned>
    </div>
  );
};

export const ControlPanel = styled(ControlPanelContainer)`
  // style
`;

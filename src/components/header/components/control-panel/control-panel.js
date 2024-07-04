import { Link, useNavigate } from 'react-router-dom';
import { Icon, Button } from '../../../../components';
import { styled } from 'styled-components';

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
  return (
    <div className={className}>
      <RightAligned>
        <Button>
          <Link to="/login">Войти</Link>
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

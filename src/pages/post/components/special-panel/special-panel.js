import styled from 'styled-components';
import { Icon } from '../../../../components';
import { useDispatch } from 'react-redux';
import { useServerRequest } from '../../../../hooks';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions';
import { useNavigate } from 'react-router-dom';

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();

  const onPostRemove = (id) => {
    dispatch(
      openModal({
        text: 'Удалить статью?',
        onConfirm: () => {
          dispatch(removePostAsync(requestServer, id)).then(() => navigate('/'));
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      }),
    );
  };

  return (
    <div className={className}>
      <div className="published-at">
        {publishedAt && (
          <Icon id="fa-calendar" margin="0 10px 0 0" size="18px" cursor="default" />
        )}
        <div>{publishedAt}</div>
      </div>
      <div className="buttons">
        {editButton}
        {publishedAt && (
          <Icon
            id="fa-trash-alt"
            margin="0 0 0 10px"
            size="18px"
            onClick={() => onPostRemove(id)}
          />
        )}
      </div>
    </div>
  );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
  display: flex;
  justify-content: space-between;
  margin: ${({ margin = '20px 0' }) => margin};
  font-size: 18px;

  & .buttons {
    display: flex;
    align-items: center;
  }

  & .published-at {
    display: flex;
    align-items: center;
  }
`;

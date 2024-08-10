import styled from 'styled-components';
import { Icon } from '../../../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { openModal, CLOSE_MODAL, removeCommentAsync } from '../../../../../../actions';
import { useServerRequest } from '../../../../../../hooks';
import { selectUserRole } from '../../../../../../selectors';
import { ROLE } from '../../../../../../constants';

const CommentContainer = ({ className, id, postId, author, publishedAt, content }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const userRole = useSelector(selectUserRole);

  const onCommentRemove = (id) => {
    dispatch(
      openModal({
        text: 'Удалить комментарий?',
        onConfirm: () => {
          dispatch(removeCommentAsync(requestServer, postId, id));
          dispatch(CLOSE_MODAL);
        },
        onCancel: () => dispatch(CLOSE_MODAL),
      }),
    );
  };

  const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);

  return (
    <div className={className}>
      <div className="comment">
        <div className="info-panel">
          <div>
            <Icon id="fa-user-circle" size="18px" margin="0 10px 0 0" />
            <div className="author">{author}</div>
          </div>
          <div>
            <Icon id="fa-calendar" size="18px" margin="0 10px 0 0" />
            <div className="published-at">{publishedAt}</div>
          </div>
        </div>
        <div className="content-text">{content}</div>
      </div>
      {isAdminOrModerator && (
        <Icon
          id="fa-trash-alt"
          size="18px"
          margin="0 0 0 12.25px"
          onClick={() => onCommentRemove(id)}
        />
      )}
    </div>
  );
};

export const Comment = styled(CommentContainer)`
  display: flex;
  margin-top: 10px;

  & .comment {
    padding: 5px 10px;
    border: 1px solid #000;
    width: 100%;
  }

  & .info-panel {
    display: flex;
    justify-content: space-between;
  }

  & .info-panel div {
    display: flex;
  }

  & .author {
    display: flex;
  }

  & .published-at {
    display: flex;
  }
`;

import styled from 'styled-components';
import { Icon } from '../../../../../../components';

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
  return (
    <div className={className}>
      <div className="info-panel">
        <Icon id="fa-user-circle" size="18px" margin="0 0 0 10px" />
        <div className="author">{author}</div>
        <Icon id="fa-calendar" size="18px" margin="0 0 0 10px" />
        <div className="published-at">{publishedAt}</div>
      </div>
      <div className="content-text">{content}</div>
    </div>
  );
};

export const Comment = styled(CommentContainer)`
  & .info-panel {
    display: flex;
    justify-content: space-between;
  }

  & .author {
    display: flex;
  }

  & .published-at {
    display: flex;
  }
`;

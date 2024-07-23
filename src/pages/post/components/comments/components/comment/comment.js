import styled from 'styled-components';
import { Icon } from '../../../../../../components';

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
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
      <Icon id="fa-trash-alt" size="18px" margin="0 0 0 12.25px" />
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

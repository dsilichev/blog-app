import styled from 'styled-components';
import { H2, Icon } from '../../../../components';

const PostContentContainer = ({
  className,
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  return (
    <div className={className}>
      <img src={imageUrl} alt={title} />
      <H2>{title}</H2>
      <div className="special-panel">
        <div className="published-at">
          <Icon id="fa-calendar" margin="0 10px 0 0" size="18px" />
          <div>{publishedAt}</div>
        </div>
        <div className="buttons">
          <Icon id="fa-edit" margin="0 10px 0 0" size="18px" />
          <Icon id="fa-trash-alt" margin="0 10px 0 0" size="18px" />
        </div>
      </div>
      <div className="post-text">{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  & img {
    float: left;
    margin: 0 20px 10px 0;
  }

  & .special-panel {
    display: flex;
    justify-content: space-between;
    margin: -20px 0 20px;
    font-size: 18px;
  }

  & .published-at {
    display: flex;
    align-items: center;
  }

  & .buttons {
    display: flex;
    align-items: center;
  }

  & .post-text {
    font-size: 18px;
  }
`;

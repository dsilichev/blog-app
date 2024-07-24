import styled from 'styled-components';
import { Icon, H2 } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';

const PostContentContainer = ({
  className,
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  const onEdit = () => {};

  return (
    <div className={className}>
      <img src={imageUrl} alt={title} />
      <H2>{title}</H2>
      <SpecialPanel
        publishedAt={publishedAt}
        margin="-20px 0 20px"
        editButton={
          <Icon id="fa-edit" margin="0 10px 0 0" size="18px" onClick={onEdit} />
        }
      />
      <div className="post-text">{content}</div>
    </div>
  );
};

export const PostContent = styled(PostContentContainer)`
  & img {
    float: left;
    margin: 0 20px 10px 0;
  }

  & .post-text {
    font-size: 18px;
    white-space: pre-line;
  }
`;

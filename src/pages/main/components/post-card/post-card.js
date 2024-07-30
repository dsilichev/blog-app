import { Icon } from '../../../../components';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostCardContainer = ({
  className,
  id,
  title,
  imageUrl,
  publishedAt,
  commentsCount,
}) => {
  console.log(publishedAt);
  return (
    <div className={className}>
      <Link to={`post/${id}`}>
        <img src={imageUrl} alt={title} />
        <div className="post-card-footer">
          <h3>{title}</h3>
          <div className="post-card-info">
            <div className="published-at">
              <Icon id="fa-calendar" margin="0 10px 0 0" size="18px" cursor="default" />
              <div>{publishedAt}</div>
            </div>
            <div className="comments-count">
              <Icon id="fa-comment" margin="0 10px 0 0" size="18px" cursor="default" />
              <div>{commentsCount}</div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const PostCard = styled(PostCardContainer)``;

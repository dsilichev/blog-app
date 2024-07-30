import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PostCard } from './components';
import { useServerRequest } from '../../hooks';

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer('fetchPosts').then((posts) => {
      if (posts.error) {
        return;
      }

      setPosts(posts.res);
    });
  }, []);

  return (
    <div className={className}>
      <div className="post-list">
        {posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) => (
          <PostCard
            key={id}
            id={id}
            title={title}
            imageUrl={imageUrl}
            publishedAt={publishedAt}
            commentsCount={commentsCount}
          ></PostCard>
        ))}
      </div>
    </div>
  );
};

export const Main = styled(MainContainer)`
  & .post-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 40px 40px;
  }
`;
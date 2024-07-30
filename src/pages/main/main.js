import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PostCard } from './components';
import { useServerRequest } from '../../hooks';

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer('fetchUsers').then((posts) => {
      if (posts.error) {
        return;
      }

      setPosts(posts.res);
    });
  }, []);

  return (
    <div className={className}>
      {posts.map(({ id, title, publishedAt, commentsCount }) => (
        <PostCard
          key={id}
          id={id}
          title={title}
          publishedAt={publishedAt}
          commentsCount={commentsCount}
        ></PostCard>
      ))}
    </div>
  );
};

export const Main = styled(MainContainer)``;

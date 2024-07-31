import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Pagination, PostCard } from './components';
import { useServerRequest } from '../../hooks';
import { PAGINATION_LIMIT } from '../../constants';
import { getLastPageFromLinks } from './utils';

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer('fetchPosts', page, PAGINATION_LIMIT).then(response => {
      setPosts(response.res.posts);
      setLastPage(getLastPageFromLinks(response.res.links));
    });
  }, [requestServer, page]);
  

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
      { lastPage > 1 && <Pagination page={page} setPage={setPage} lastPage={lastPage}/>}
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

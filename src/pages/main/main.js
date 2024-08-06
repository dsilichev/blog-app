import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import { Pagination, PostCard, Search } from './components';
import { useServerRequest } from '../../hooks';
import { PAGINATION_LIMIT } from '../../constants';
import { getLastPageFromLinks, debounce } from './utils';

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [shouldSearch, setShouldSearch] = useState(false);
  const requestServer = useServerRequest();

  useEffect(() => {
    requestServer('fetchPosts', searchPhrase, page, PAGINATION_LIMIT).then((response) => {
      setPosts(response.res.posts);
      setLastPage(getLastPageFromLinks(response.res.links));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [requestServer, page, shouldSearch]);

  const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    startDelayedSearch(!shouldSearch);
  };

  return (
    <div className={className}>
      <div className="posts-and-search">
        <Search searchPhrase={searchPhrase} onChange={onSearch} />
        {posts.length > 0 ? (
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
        ) : (
          <div className="no-posts-found">Статьи не найдены</div>
        )}
      </div>
      {lastPage > 1 && posts.length > 0 && <Pagination page={page} setPage={setPage} lastPage={lastPage} />}
    </div>
  );
};

export const Main = styled(MainContainer)`
  & .posts-and-search {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  & .post-list {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 40px 40px;
  }

  & .no-posts-found {
    margin-top: 40px;
    text-align: center;
    font-size: 18px;
  }
`;

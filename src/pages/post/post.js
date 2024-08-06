import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useParams } from 'react-router-dom';
import { Comments, PostContent, PostForm } from './components';
import { Error } from '../../components';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';
import { loadPostAsync, RESET_POST_DATA } from '../../actions';
import { selectPost } from '../../selectors';

const PostContainer = ({ className }) => {
  const [error, setError] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const params = useParams();
  const isEditing = useMatch('/post/:id/edit');
  const isCreating = useMatch('/post');
  const requestServer = useServerRequest();
  const post = useSelector(selectPost);

  useLayoutEffect(() => {
    dispatch(RESET_POST_DATA);
  }, [dispatch, isCreating]);

  useEffect(() => {
    if (isCreating) {
      setIsLoading(false);
      return;
    }

    dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
      setError(postData.error);
      setIsLoading(false);
    });
  }, [requestServer, dispatch, params.id, isCreating]);

  if (isLoading) {
    return null;
  }

  return error ? (
    <Error error={error} />
  ) : (
    <div className={className}>
      {isEditing || isCreating ? (
        <PostForm post={post} />
      ) : (
        <>
          <PostContent post={post} />
          <Comments comments={post.comments} postId={post.id} />
        </>
      )}
    </div>
  );
};

export const Post = styled(PostContainer)`
  margin: 40px 0;
  padding: 0 80px;
`;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Comments, PostContent } from './components';
import { useServerRequest } from '../../hooks';
import styled from 'styled-components';
import { loadPostAsync } from '../../actions';
import { selectPost } from '../../selectors';

const PostContainer = ({ className }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const requestServer = useServerRequest();
  const post = useSelector(selectPost);
  
  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.id));
  }, [requestServer, dispatch, params.id]);

  return (
    <div className={className}>
      <PostContent post={post} />
      <Comments comments={post.comments} postId={post.id} />
    </div>
  );
};

export const Post = styled(PostContainer)`
margin: 40px 0;  
padding: 0 80px;
`;

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Comments, PostContent } from './components';
import styled from 'styled-components';

const PostContainer = ({ className }) => {
  const post = useSelector(selector);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(loadPost(params.id));
  }, []);

  return (
    <div className={className}>
      <PostContent />
      <Comments />
    </div>
  );
};

export const Post = styled(PostContainer)``;

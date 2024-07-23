import { useState } from 'react';
import styled from 'styled-components';
import { Comment } from './components/comment';
import { Icon } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../../../selectors';
import { useServerRequest } from '../../../../hooks';
import { addCommentAsync} from '../../../../actions';

const CommentsContainer = ({ className, comments, postId }) => {
  const [newComment, setNewComment] = useState('');
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const requestServer = useServerRequest();

  const onCommentAdd = (userId, postId, content) => {
    dispatch(addCommentAsync(requestServer, userId, postId, content));
    setNewComment('');
  }

  return (
    <div className={className}>
      <div className="new-comment">
        <textarea
          name="comment"
          value={newComment}
          placeholder="Комментарий..."
          onChange={({ target }) => setNewComment(target.value)}
        ></textarea>
        <Icon
          id="fa-paper-plane"
          size="18px"
          margin="0 0 0 10px"
          onClick={() => onCommentAdd(userId, postId, newComment)}
        />
      </div>
      <div className="comments">
        {comments.map(({ id, author, content, publishedAt }) => (
          <Comment
            key={id}
            id={id}
            postId = {postId}
            author={author}
            content={content}
            publishedAt={publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export const Comments = styled(CommentsContainer)`
  
  margin: 20px auto;
  width: 580px;

  & .new-comment {
    margin: 20px 0 0;
    width: 100%;
    display: flex;
  }

  & .new-comment textarea {
    resize: none;
    width: 100%;
    height: 120px;
    font-size: 18px;
  }

  & .new-comment div {
    align-self: flex-start;
  }
`;

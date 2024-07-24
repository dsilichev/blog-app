import styled from 'styled-components';
import { useRef } from 'react';
import { Icon, Input } from '../../../../components';
import { SpecialPanel } from '../special-panel/special-panel';
import { sanitizeContent } from './utils';

const PostFormContainer = ({
  className,
  post: { id, title, imageUrl, content, publishedAt },
}) => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const onSave = () => {
    const newImageRef = imageRef.current.value;
    const newTitleRef = titleRef.current.value;
    const newContentRef = sanitizeContent(contentRef.current.innerHTML);


    console.log(newImageRef);
    console.log(newTitleRef);
    console.log(newContentRef);
  };

  return (
    <div className={className}>
      <Input ref={imageRef} defaultValue={imageUrl} placeholder="Изображение..." />
      <Input ref={titleRef} defaultValue={title} placeholder="Заголовок..." />
      <SpecialPanel
        publishedAt={publishedAt}
        margin="20px 0"
        editButton={
          <Icon id="fa-save" margin="0 10px 0 0" size="18px" onClick={onSave} />
        }
      />
      <div
        ref={contentRef}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="post-text"
      >
        {content}
      </div>
    </div>
  );
};

export const PostForm = styled(PostFormContainer)`
  & .post-text {
    font-size: 18px;
    white-space: pre-line;
  }
`;

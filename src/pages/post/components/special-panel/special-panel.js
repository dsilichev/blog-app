import styled from 'styled-components';
import { Icon } from '../../../../components';

const SpecialPanelContainer = ({ className, publishedAt, editButton }) => {
  return (
    <div className={className} >
      <div className="published-at">
        <Icon id="fa-calendar" margin="0 10px 0 0" size="18px" />
        <div>{publishedAt}</div>
      </div>
      <div className="buttons">
        {editButton}
        <Icon id="fa-trash-alt" margin="0 10px 0 0" size="18px" />
      </div>
    </div>
  );
};

export const SpecialPanel = styled(SpecialPanelContainer)`
  display: flex;
  justify-content: space-between;
  margin: ${({ margin = '20px 0' }) => margin};
  font-size: 18px;

  & .buttons {
    display: flex;
    align-items: center;
  }

  & .published-at {
    display: flex;
    align-items: center;
  }
`;

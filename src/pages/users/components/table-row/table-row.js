import styled from 'styled-components';

const TableRowContainer = ({ className, children }) => (
  <div className={className}>{children}</div>
);

export const TableRow = styled(TableRowContainer)`
  display: flex;
  
  & > div {
    padding: 0 0 0 10px;
    align-items: center;
  }

  & .login-column {
    width: 170px;
  }

  & .registered-at-column {
    width: 210px;
  }

  & .role-column {
    width: auto;
  }
`;

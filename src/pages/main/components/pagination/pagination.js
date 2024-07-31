import styled from 'styled-components';
import { Button } from '../../../../components';

const PaginationContainer = ({ className, page, setPage, lastPage }) => {
  return (
    <div className={className}>
      <Button disabled={page === 1} onClick={() => setPage(1)}>В начало</Button>
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Предыдущая</Button>
      <div className="current-page">Страница {page}</div>
      <Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>Следующая</Button>
      <Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>В конец</Button>
    </div>
  );
};

export const Pagination = styled(PaginationContainer)`
  display: flex;
  padding: 0 40px;
  justify-content: center;
  gap: 20px;

  & > * {
    flex: 1;
  }

  & .current-page {
    border: 1px solid #000;
    text-align: center;
    font-size: 18px;
    font-weight: 500;
  }
`;

import { useSelector } from 'react-redux';
import { selectUserSession } from '../selectors';
import { server } from '../bff';

export const useServerRequest = () => {
  const session = useSelector(selectUserSession);

  return (operation, ...params) => {
    const request = ['register', 'authorize'].includes(operation)
      ? params
      : [session, ...params];

    return server[operation](...request);
  };
};

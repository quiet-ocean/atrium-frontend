import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { CWindow } from '../types/Window';

declare let window: CWindow;

const Room = () => {
  const roomName = useAppSelector((state) => state.app.roomName);
  return (
    <>
      <div>room name is {roomName}</div>
      <div>account id is {window?.accountId}</div>
      <div>
        go to{' '}
        <Link to="/setting" style={{ color: 'black' }}>
          setting
        </Link>{' '}
        page
      </div>
    </>
  );
};

export { Room };

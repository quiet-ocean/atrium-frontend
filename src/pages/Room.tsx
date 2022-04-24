import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { WalletType } from '../stores/AppStore';
import { CWindow } from '../types/Window';

declare let window: CWindow;

const Room = () => {
  const roomName = useAppSelector((state) => state.app.roomName);
  const wallet = useAppSelector((state) => state.app.wallet);
  return (
    <>
      <div>room name is {roomName}</div>
      <div>connected by {wallet === WalletType.near ? 'near' : 'sender'} wallet</div>
      <div>account id is {window?.accountId || window.near.accountId}</div>
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

import { useState } from 'react';
import { Button, Box } from '@mui/material';
import { InputField } from '../elements';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setRoomName } from '../../stores/AppStore';
import { useNavigate } from 'react-router-dom';

const CreateRoom = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const roomName = useAppSelector((state) => state.app.roomName);
  const dispatch = useAppDispatch();

  const create = () => {
    if (roomName === '') {
      setError('you should enter room name');
      return;
    }
    navigate('/room');
  };
  const skip = () => {
    navigate('/room');
  };
  return (
    <>
      <h1>Create Room fff</h1>
      <p style={{ marginBottom: '12px' }}>
        Create a room by custom room name or your near account id.
      </p>
      <Box sx={{ mt: '36px' }}>
        <InputField
          label="room name"
          value={roomName}
          handleChange={(name: string) => dispatch(setRoomName({ roomName: name }))}
          error={error}
          setError={setError}
        />
      </Box>
      <Button onClick={create} className="atrium_btn atrium_btn_primary" sx={{ mt: '56px' }}>
        Create Room
      </Button>
      <Button className="atrium_btn" onClick={skip}>
        Skip
      </Button>
    </>
  );
};

export { CreateRoom };

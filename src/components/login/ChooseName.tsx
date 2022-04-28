import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { InputField, Stepper } from '../../components';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setPlayerName } from '../../stores/UserStore';

const ChooseName = () => {
  const navigate = useNavigate();
  // const playerName = useAppSelector((state) => state.user.playerName);
  const dispatch = useAppDispatch();
  const [name, setName] = React.useState('');
  const [confirmName, setConfirmName] = React.useState<string>('');
  const [nameError, setNameError] = React.useState<string>('');
  const [confirmError, setConfirmError] = React.useState<string>('');
  React.useEffect(() => {
    // console.log(username);
  }, [name]);
  const next = () => {
    if (name !== '') {
      if (name === confirmName) {
        dispatch(setPlayerName(name));
        navigate('/login/set-avatar');
      } else {
        setConfirmError('The name must be match.');
      }
    } else {
      // dispatch(showToast({message: "display name is not match."}));
      setNameError('This name has been taken.');
    }
  };
  const handleChange = (un: string) => {
    // dispatch(setUsername({ username: un }));
    setName(un);
    setNameError('');
    setConfirmError('');
  };
  return (
    <>
      <h1>Choose Display Name</h1>
      <p style={{ marginBottom: '12px' }}>
        Choose your display name to represent yourself in the digital world.
      </p>
      <InputField
        label="NAME"
        value={name}
        error={nameError}
        setError={setNameError}
        handleChange={handleChange}
      />
      <InputField
        label="CONFIRM DISPLAY NAME"
        error={confirmError}
        setError={setConfirmError}
        value={confirmName}
        handleChange={setConfirmName}
      />
      <Button onClick={next} className="atrium_btn atrium_btn_primary" sx={{ mt: '56px' }}>
        NEXT
      </Button>
      <Stepper length={5} step={1} />
    </>
  );
};

export { ChooseName };

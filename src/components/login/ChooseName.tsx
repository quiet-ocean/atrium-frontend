import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { InputField, Stepper } from '../../components';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { setUsername } from '../../stores/AppStore';

const ChooseName = () => {
  const navigate = useNavigate();
  const username = useAppSelector((state) => state.app.username);
  const dispatch = useAppDispatch();
  const [confirmName, setConfirmName] = React.useState<string>('');
  const [nameError, setNameError] = React.useState<string>('');
  const [confirmError, setConfirmError] = React.useState<string>('');
  React.useEffect(() => {
    // console.log(username);
  }, [username]);
  const next = () => {
    if (username !== '') {
      if (username === confirmName) {
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
    dispatch(setUsername({ username: un }));
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
        value={username}
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

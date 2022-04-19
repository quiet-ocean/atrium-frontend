import { Stack } from '@mui/material';

const Stepper = ({ length, step }: { length: number, step: number }) => {
  return (
    <Stack direction="row" spacing={1} className="stepper">
      {new Array(length).fill(1).map((_, key: number) => {
        return <div className={`stepper_item ${ step > key ? 'active' : ''}`} key={key} />
      })}
    </Stack>
  );
};

export { Stepper };

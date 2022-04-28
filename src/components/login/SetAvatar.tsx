import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import { Stepper } from '../../components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const SetAvatar = () => {
  const [avatar, setAvatar] = useState();
  const dispatch = useAppDispatch();
  const selectAvatar = (id: number) => {
    console.log('select avatar ', id);
  };
  return (
    <>
      <h1>Set your Avatar</h1>
      <p>Choose your avatar to represent yourself in the digital world.</p>
      <div className="login_panel_avatar_carousel">
        <Carousel
          responsive={responsive}
          showDots={true}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          autoPlay={false}
        >
          {new Array(8).fill(0).map((_, key: number) => {
            return (
              <Box
                sx={{ px: '6px' }}
                key={key}
                onClick={() => {
                  selectAvatar(key + 1);
                }}
              >
                <img
                  className={`${avatar === key + 1 ? 'selected' : ''}`}
                  src={`/avatars/Rectangle ${39 + key}.png`}
                  alt=""
                />
              </Box>
            );
          })}
        </Carousel>
      </div>
      <Button className="atrium_btn atrium_btn_primary" sx={{ mt: '56px' }}>
        <Link to="/login/connect-socials">NEXT</Link>
      </Button>
      <Button className="atrium_btn">
        <Link to="/login/connect-socials">SKIP FOR NOW</Link>
      </Button>
      <Stepper length={5} step={2} />
    </>
  );
};

export { SetAvatar };

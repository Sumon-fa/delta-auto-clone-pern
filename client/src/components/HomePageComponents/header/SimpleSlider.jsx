import React from 'react';
import { sliderData } from '../componentData/carouselData';
import Slider from 'react-slick';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };
  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <Slider {...settings}>
        {sliderData.map((item, i) => (
          <div key={i}>
            <img className="img" alt={item.title} src={item.img} />
            {i === 0 && (
              <AppBar position="static" color="secondary">
                <Toolbar disableGutters sx={{ minHeight: '130px !important' }}>
                  <Typography sx={{ paddingLeft: '4em', letterSpacing: '2px' }} variant="h2">
                    Parhaat Opel tarjoukset Deltalta
                  </Typography>
                </Toolbar>
              </AppBar>
            )}
            {i === 1 && (
              <AppBar position="static">
                <Toolbar disableGutters sx={{ minHeight: '130px !important' }}>
                  <Typography sx={{ paddingLeft: '4em', letterSpacing: '2px' }} variant="h2">
                    Delta & E-Expert huolto
                  </Typography>
                </Toolbar>
              </AppBar>
            )}
            {i === 2 && (
              <AppBar position="static" color="neutral">
                <Toolbar disableGutters sx={{ minHeight: '130px !important' }}>
                  <Typography sx={{ paddingLeft: '4em', letterSpacing: '2px' }} variant="h2">
                    Kevään parhaat tarjoukset autoiluun!
                  </Typography>
                </Toolbar>
              </AppBar>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
}

import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router';
import ScrollToTop from 'react-scroll-up';
import { ScrollUpIndicator } from './SharedLayout.styled';
import sprite from '../../images/icons_sprite.svg';


const SharedLayout = () => {
    return (
      <>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ScrollToTop
          showUnder={200}
          style={{
            position: 'fixed',
            bottom: 20,
            left: 'auto',
            cursor: 'pointer',
            transitionDuration: '0.2s',
            transitionTimingFunction: 'linear',
            transitionDelay: '0s',
          }}
        >
          <ScrollUpIndicator>
            <svg>
              <use href={sprite + `#up-arrow`} />
            </svg>
          </ScrollUpIndicator>
        </ScrollToTop>
      </>
    );
  };
  
  export default SharedLayout;
import React, { lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import SharedLayout from '../pages/SharedLayout/SharedLayout';

const Homepage = lazy(() => import('../pages/Home/Home'));
const Tweets = lazy(() => import('../pages/Tweets/Tweets'));


export const App = () => {
  return (
    <Routes>
       <Route path="/" element={<SharedLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Homepage />} />
      </Route>
    </Routes>
  );
};

'use client';

import Dapur from '@/app/dapur/page';
import Kasir from '@/app/kasir/page';
import Menu from '@/app/menu/page';
import Order from '@/app/order/page';
import Head from 'next/head';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function HomePage() {
  const [dapur, setDapur] = useState()
  const [menu, setMenu] = useState()
  const [kasir, setKasir] = useState()
  const [order, setOrder] = useState()

  return (
    <>
      <Router>
        <Routes >
          <Route path='/menu'  element={<Menu/>}/>
          <Route path='/order' element={<Order/>}/>
          <Route path='/dapur' element={<Dapur/>} />
          <Route path='/kasir' element={<Kasir />}/>
        </Routes>
      </Router>
    </>
  );
}

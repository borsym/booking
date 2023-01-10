import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

type Props = {};

export default function Hotels({}: Props) {
  return (
    <div>
      <Navbar />
      <Header type="hotels" />
    </div>
  );
}

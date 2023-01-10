import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

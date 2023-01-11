import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="flex flex-col items-center gap-[30px] mt-[50px]">
        <Featured />
        <h1 className="w-[1024px] text-lg">Browese by property</h1>
        <PropertyList />
        <h1 className="w-[1024px] text-lg">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

import React from 'react';
import './featured.css';
type Props = {};

export default function Featured({}: Props) {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/619896.jpg?k=9364e91ae738a47a4a37b0a7fb26d01e5e95db810f7167e9e5ecf58e5ca74e9b&o="
          alt="Budapest"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Budapest</h1>
          <h2>123 props</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/613105.jpg?k=1e85cf4dec7b0d5a6327be91c38cf9c1711f9da1a31c4cba736f9cb751443ff1&o="
          alt="Italy"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Italy</h1>
          <h2>123 props</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/600x600/653109.jpg?k=39834303d6af8adc39cc8218ea8efc5291a013bd3228d53a50cb836833f4777f&o="
          alt="Poland"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Poland</h1>
          <h2>123 props</h2>
        </div>
      </div>
    </div>
  );
}

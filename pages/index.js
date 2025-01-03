import React from 'react'

import { client } from '../lib/client';

//Import components
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({products, bannerData}) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Auto Parts Selection</h2>
        <p>Parts of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product.id} product={product}/>)
        }
      </div>


      <FooterBanner footerBanner={bannerData && bannerData[0]} />

    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
export default Home

import React from 'react'
import Hero from '../components/Hero/Hero.js'
import Popular from '../components/Popular/Popular.js'
import Offer from '../components/offers/Offer.js'
import Collection from '../components/Collection/Collection.js'
import Newsletter from '../components/NewsLetter/Newsletter.js'
const Shop = () => {
  return (
    <div>
   <Hero/>
   <Popular/>
   <Offer/>
   <Collection/>
   <Newsletter/>
    </div>
  )
}

export default Shop

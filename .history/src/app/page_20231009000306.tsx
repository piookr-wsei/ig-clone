import Image, { StaticImageData } from 'next/image'
import { FaMugHot, FaCookieBite, FaHamburger, FaFireAlt, FaBookmark, FaRegBookmark } from 'react-icons/fa'
import CookingSvg from './components/svgComponents/CookingSvg'
import Rating from './components/generic/rating'
import Button from './components/generic/button'

import breakfast from '../../public/media/breakfast.jpg'
import lunch from '../../public/media/lunch.jpg'
import dessert from '../../public/media/dessert.jpg'
import strawberryCake from '../../public/media/recipes/strawberryCake.jpg'
import greekMeatLoaf from '../../public/media/recipes/greekMeatLoaf.jpg'
import vanillaIceCream from '../../public/media/recipes/vanillaIceCream.jpg'
import { useState } from 'react'
import { RecipeListing } from './components/generic/recipeListing'
import { Input } from 'postcss'
import SearchBar from './components/generic/searchBar'
import PostList from './components/generic/postList'

export default function Home() {
  return (
    <>
      {/* <section id="searchbar-section" className='max-w-7xl bg-black/90 px-7 m-auto w-full p-8 lg:px-16 rounded-xl shadow-md shadow-black/40 flex-col'>
        <SearchBar/>
      </section> */}

      <section id="top-picks-section" className='max-w-7xl bg-black/90 m-auto w-full md:p-8 rounded-xl shadow-md shadow-black/40 flex-col'>
            <PostList/>
      </section>
    </>
  )
}
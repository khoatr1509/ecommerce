import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from './main'
import {banner} from '../public/assets/banner-bg.jpg'
import Header from '../components/Header';

export default function Home() {
  return (
      <>
      <Header />
       <div className=" bg-cover bg-no-repeat bg-center flex justify-between px-40 m-auto  w-full">
          
          <div className="container p-[20px]">
              <h1 className="text-6xl text-gray-800 font-bold mb-4 capitalize px-[40px] pt-[20px]">
                  Traveling to
              </h1>
              <h1 className="text-6xl text-gray-800 font-bold mb-4 capitalize px-[40px]">
                fulfill your life
              </h1>
              <p className="px-[40px]">Livel lifestyle superapp,  </p>
              <p className="px-[40px]"> provides users access to discover and purchase a wide range of travel, local services, and financial.</p>
              <div className="mt-12 px-[40px]">
                <a href="main" className="px-[40px] bg-primary bg-gray-200 border border-primary text-black py-3 font-medium 
                    rounded-md hover:text-primary hover:bg-blue-100 roun">Find trip</a>
             </div>
          </div>
          <img src="assets/banner-img.jpeg" alt="banner" className="rounded-sm object-cover ml-auto w-[600px] h-3/4"/>
      </div>
      <div className="container py-16 mx-auto mt-[50px]">
        <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">Popular trips</h2>
        <div className="grid grid-cols-3 gap-3">
            <div className="relative rounded-sm overflow-hidden group">
                <img src="italy.jpeg" alt="category 1" className="w-full" />
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Italy</a>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src="vietnam.jpeg" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Vietnam</a>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src="newzealand.jpeg" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Newzealand
                </a>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src="iceland.jpg" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">IceLand</a>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src="assets/category/category-5.jpg" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">Thailand
                    Room</a>
            </div>
            <div className="relative rounded-sm overflow-hidden group">
                <img src="assets/category/category-6.jpg" alt="category 1" className="w-full"/>
                <a href="#"
                    className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition">E</a>
            </div>
        </div>
    </div></>
  )
}

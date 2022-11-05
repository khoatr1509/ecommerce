import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Triplist from './trip/index.js'

export default function Home() {
  return (
    <div className="text-3xl text-fuchsia-500 font-bold">
      Hello khoaaa

      <Triplist />
    </div>
  )
}

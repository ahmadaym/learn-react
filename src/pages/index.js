import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile.js'
// import Snapshot from './qcomps/snapshot.js';
import Snapshot from './components/snapshot2.js';
import QueueUpdates from './components/queueUpdates.js'
import ShoppingCart from './solncomps/shoppingCart.js'
import UpdObjectsForm from './qcomps/updObjectsForm.js';
import ArtistArr from './qcomps/artistsArr.js'
export default function Home() {
  return (
    <div className={styles.main}>
        {/* <Profile /> */}
        {/* <Snapshot></Snapshot> */}
        {/* <QueueUpdates></QueueUpdates> */}
        {/* <ShoppingCart></ShoppingCart> */}
        {/* <UpdObjectsForm/> */}
        <ArtistArr/>

    </div>
  )
}

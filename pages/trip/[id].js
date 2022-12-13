import { useRouter } from 'next/router'
import { React, useState } from 'react'
import data from '../../data/data';
import Link from 'next/link';
import classes from '../../styles/TripDetail.module.css'
import {BsMap, BsCalendarMinus, BsPeople, BsTelephone} from 'react-icons/bs'
import {MdOutlinePlace} from 'react-icons/md'

let [...arr] = data;

console.log(arr)
const Trip = () => {
    const router = useRouter()
    const { id } = router.query;
    let trip = arr[id - 1];
    // console.log(arr[id - 1]);
    // const [idList, setidList] = useState([]);
    // const [tripNo, setTripNo] = useState([]);
    console.log(trip)
    return (
        // TODO: code screen trip detail
        //<img className={classes.logo} src={trip.img_url}></img>
        <div className=" ">
            <div className={classes.container}>
                <img className={classes.banner} src={trip?.img_url} alt="Photo here" ></img>
                <div className={classes.content} >
                    <div className={classes.details} >
                        <div className={classes.info}>
                            <h1>{trip?.tour_name}</h1>
                            <div className={classes.infoList}>
                                <li className={classes.tag}>
                                    <MdOutlinePlace className={classes.icon} />
                                    <p>Destination</p>
                                </li>
                                <li className={classes.tag}>
                                    <BsCalendarMinus className={classes.icon} />
                                    <p>9:00 to 20:00</p>
                                </li>
                                <li className={classes.tag}>
                                    <BsPeople className={classes.icon} />
                                    <p>10+ spots left</p>
                                </li>
                                <li className={classes.tag}>
                                    <BsTelephone className={classes.icon} />
                                    <p>() 090393939</p>
                                </li>
                            </div>
                        </div>
                        <a href={`/main`}> 
                        <button onClick={() => {
                                    
                                } }>
                                      back to list
                                </button>
                        </a>
                        {/* <a href={`/main}`}>
                            <button>
                                <BsMap className={classes.icon} />
                                <button onClick={() => {
                                    
                                } }>
                                      back
                                </button>
                            </button>
                        </a> */}
                        
                    </div>
                    <h2>Overview</h2>
                    <p className={classes.tripOverview}>{trip?.description}</p>
                    <p>The scenic wetlands of the Mekong Delta and the fascinating war site of the Cu Chi Tunnels are two of the most visited attractions in South Vietnam. Visiting both in one day means a long day trip with up to five hours of transit time, but this VIP tour ensures you travel in style aboard a luxurious Limousine Ford transit, with plush seats, Wi-Fi, charging ports, cold drinks, and snacks.The scenic wetlands of the Mekong Delta and the fascinating war site of the Cu Chi Tunnels are two of the most visited attractions in South Vietnam. Visiting both in one day means a long day trip with up to five hours of transit time, but this VIP tour ensures you travel in style aboard a luxurious Limousine Ford transit, with plush seats, Wi-Fi, charging ports, cold drinks, and snacks.The scenic wetlands of the Mekong Delta and the fascinating war site of the Cu Chi Tunnels are two of the most visited attractions in South Vietnam. Visiting both in one day means a long day trip with up to five hours of transit time, but this VIP tour ensures you travel in style aboard a luxurious Limousine Ford transit, with plush seats, Wi-Fi, charging ports, cold drinks, and snacks.The scenic wetlands of the Mekong Delta and the fascinating war site of the Cu Chi Tunnels are two of the most visited attractions in South Vietnam. Visiting both in one day means a long day trip with up to five hours of transit time, but this VIP tour ensures you travel in style aboard a luxurious Limousine Ford transit, with plush seats, Wi-Fi, charging ports, cold drinks, and snacks.The scenic wetlands of the Mekong Delta and the fascinating war site of the Cu Chi Tunnels are two of the most visited attractions in South Vietnam. Visiting both in one day means a long day trip with up to five hours of transit time, but this VIP tour ensures you travel in style aboard a luxurious Limousine Ford transit, with plush seats, Wi-Fi, charging ports, cold drinks, and snacks.</p>
                </div>
            </div>
        </div>
    )
}

export default Trip
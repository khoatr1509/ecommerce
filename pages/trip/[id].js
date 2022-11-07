import { useRouter } from 'next/router'
import React from 'react'
import data from '../../data/data';
import classes from '../../styles/TripDetail.module.css'
import {BsMap, BsCalendarMinus, BsPeople, BsTelephone} from 'react-icons/bs'
import {MdOutlinePlace} from 'react-icons/md'

let [...arr] = data;

const Trip = () => {
    const router = useRouter()
    const { id } = router.query;
    let tr = arr[id - 1];
    // console.log(arr[id - 1]);
    console.log(tr)
    return (
        // TODO: code screen trip detail
        <div className={classes.container}>
            <img className={classes.banner} src={tr.img_url} alt="Photo here" ></img>
            <div className={classes.content}>
                <div className={classes.details}>
                    <div className={classes.info}>
                        <h1>{tr.tour_name}</h1>
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
                    <button>
                        <BsMap className={classes.icon} />
                        Add to plan
                    </button>
                </div>
                <h2>Overview</h2>
                <p className={classes.tripOverview}>{tr.description}</p>
            </div>
        </div>
    )
}

export default Trip
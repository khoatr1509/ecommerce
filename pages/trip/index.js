import { React, useState, useEffect } from 'react'
import data from '../../data/data';
import classes from '../../styles/TripList.module.css'
import Link from 'next/link'
import Checkout from '../checkout/index.js'
import app from '../../firebase';
import { doc, onSnapshot, getFirestore} from "firebase/firestore";

const db = getFirestore(app);

let [...arr] = data;
// console.log(arr[0])

const object = {
    key1: 'value1',
    key2: 'value2'
};

function Triplist({ trips }) {
    const [curr_trip, updateTrip] = useState([]);
    const [search, updateSearch] =useState(0);
    useEffect(() => {
        const unsub = onSnapshot(doc(db, "TripList", "trip_"), 
            (doc) => {
                console.log("Current data: ", doc.data().trip_list);
                console.log("Current data: ", doc.data().trip_list[0]);
                // console.log(typeof(doc.data().trip_list));
                updateTrip(doc.data().trip_list);
        });
    },[])
    const [idList, setidList] = useState([]);
    const [tripNo, setTripNo] = useState([]);
    const [cart, setCart] = useState({});
    const [totalPrice, setPrice] = useState(['']);
    
    console.log(curr_trip);
    let [open,setOpen] = useState("true")
    return (
        <div className='w-full h-auto text-orange-500 font-bold text-lg'>
            
            <div className="text flex font-mono text-gray-900 w-fit m-auto h-20 p-2 ">
                <div className="border-solid border-2 mt-4 border-gray-600 rounded-xl p-2 hover:bg-yellow-100">
                Carts: {tripNo.length}
                <Link
                    href={{
                        pathname: '/checkout', query: {
                            object: JSON.stringify(tripNo)
                        }
                    }}
                    className="text-center font-semibold text-gray-900 w-fit m-auto"
                > Checkout
                    {console.log(tripNo)}</Link>
                </div>
            </div>            
            <div className={classes.container}>
            {
                search == 0 && curr_trip.map((trip) => (
                    
                    // TODO: CODE STYLING HERE
                    <div
                        key={trip.id} className={classes.table}
                        
                    >
                        <div>
                        <a href={`/trip/${trip.id}`}>
                            <img className={classes.logo} src={trip.img_url === '' ?  'https://media.istockphoto.com/id/481045024/vi/anh/tran-quoc-pagoda.jpg?s=1024x1024&w=is&k=20&c=vL-XK6D_3CPCQBHeCjj_mjHQwLct2sTkGeCODkryWhQ=' : trip.img_url}></img>
                        </a>
                            <h1 className={classes.tourName}>{trip.tour_name.slice(0, 40)}</h1>
                        <p className={classes.tourDescription}>{trip.description}</p>
                        <div className={classes.cate}>
                            <div className={classes.tag}>{trip.price.slice(0, 10)}</div>
                            <div className={classes.tag}>{trip.recommend_percent}</div>
                            <div className={classes.tag}>{trip.duration}</div>
                        </div>
                        </div>
                        <div className={classes.btn}>
                            <button onClick={() => {
                                if (!idList.includes(trip.id)) {
                                    setTripNo((tripNo) => [...tripNo, trip.id]);
                                    setidList([...idList, trip.id]);
                                    setOpen("false");
                                    setPrice([...totalPrice, trip.price])
                                }
                                
                                // setTripNo({...tripNo, id: {id: trip.id } })
                            }}>
                                {idList.includes(trip.id) ? `Added` : `Add to trip`}
                            </button>
                            <a href={`/trip/${trip.id}`} target="_blank">
                                <button>Details</button>
                            </a>
                        </div>
                    </div>
                ))
            }
            {
                arr.map((trip) => (
                    // TODO: CODE STYLING HERE
                    <div
                        key={trip.id} className={classes.table}
                        
                    >
                        <div>
                        <a href={`/trip/${trip.id}`}>
                            <img className={classes.logo} src={trip.img_url}></img>
                        </a>
                            <h1 className={classes.tourName}>{trip.tour_name.slice(0, 40)}</h1>
                        <p className={classes.tourDescription}>{trip.description}</p>
                        <div className={classes.cate}>
                            <div className={classes.tag}>{trip.price.slice(0, 10)}</div>
                            <div className={classes.tag}>{trip.recommend_percent}</div>
                            <div className={classes.tag}>{trip.duration}</div>
                        </div>
                        </div>
                        <div className={classes.btn}>
                            <button onClick={() => {
                                if (!idList.includes(trip.id)) {
                                    setTripNo((tripNo) => [...tripNo, trip.id]);
                                    setidList([...idList, trip.id]);
                                    setOpen("false");
                                    setPrice([...totalPrice, trip.price])
                                }
                                
                                // setTripNo({...tripNo, id: {id: trip.id } })
                            }}>
                                {idList.includes(trip.id) ? `Added` : `Add to trip`}
                            </button>
                            <a href={`/trip/${trip.id}`} target="_blank">
                                <button>Details</button>
                            </a>
                        </div>
                    </div>
                ))
            }
            </div>  
        </div>
    )
}

// async function getServerSideProps() {
//     // Call an external API endpoint to get posts.
//     // You can use any data fetching library
//     console.log("here");
//     const res = await fetch('http://127.0.0.1:8080/activity/all')
//     const trips = await res.json()

//     // By returning { props: { posts } }, the Blog component
//     // will receive `posts` as a prop at build time
//     console.log(trips)
//     // return {
//     //     props: {
//     //         trips,
//     //     },
//     // }
// }

export default Triplist;

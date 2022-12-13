import {MdOutlinePlace} from 'react-icons/md'
import { withRouter } from 'next/router';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import data from '../../data/data';
import { doc, onSnapshot, getFirestore, updateDoc,arrayUnion} from "firebase/firestore";
import app from '../../firebase';

const db = getFirestore(app);

const Checkout = (t) => {
    let trip_list = JSON.parse(t.a)
    let checkout_list = trip_list.reduce((acc, curr) => [...acc, data[curr]], [])
    let [price, setPrice] = useState('0');

    let total_price = '100';
    //checkout_list.reduce((acc, curr) => acc + parseInt(curr.price.split(' ')[1].slice(1)), 0);

    const [url, setUrl] = useState('');
    useEffect(() => {
        const getUrl = async (amount) => {
            const res = await fetch(`http://127.0.0.1:5000/momo?amount=${amount}`);
            const data = await res.json();
            return data
        }

        getUrl(total_price * 25000).then(res => { setUrl(res.payUrl) });
    }, [price])

    const payment = {
        price: total_price,
        status: 'processing',
        tripName: checkout_list[0].tour_name
    }
    updateDoc(doc(db, "payment", "HrSXH4rJgvMHeAlgjvom"), {
        "payment_list": arrayUnion(payment)
        // state: "CA",
        // country: "USA"
      });
    return (
        <>
            <Header />
            <div className='container mx-auto p-5 relative'>
                <h1 className='text-center font-bold text-4xl mb-5'>Checkout</h1>
                <h2 className='text-center font-normal mb-5 text-4xl'>Total: $23</h2>
                <div className='w-full m-auto flex justify-center'>
                    <Link target="_blank" href={url} className='bg-[#EAF7FF] text-[#3E3E3E] font-bold py-2 px-8 rounded hover:bg-[#d9e9f4]'>Checkout</Link>
                </div>
                <div className='flex flex-col mb-2 mt-16 items-center justify-center'>
                    {
                        checkout_list.map(i => {
                            return (
                                //TODO:
                                <div className='flex h-150px w-500px border-b border-black mb-6 p-1 mx-0'>
                                    <img src={i.img_url} alt="" className='w-32 h-32 rounded mr-12' />
                                    <div>
                                        <h1 className='font-bold text-2xl'>{i.tour_name.slice(0, 15)}</h1>
                                        <ul className='list-none'>
                                            <li className='flex justify-start items-center'>
                                                <MdOutlinePlace className='mr-1' />
                                                <p className='text-base text-[#333333]'>{i.description.slice(0, 15)}</p>
                                            </li>
                                            <li>
                                                <p className='text-base text-[#333333]'>Price: ${parseInt(i.price.split(' ')[1].slice(1))}</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}
export default withRouter(Checkout);

export async function getServerSideProps(context) {
    // console.log(context.query)
    let a = context.query.object;
    return {
        props: { a }, // will be passed to the page component as props
    }
}
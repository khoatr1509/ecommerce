import {MdOutlinePlace} from 'react-icons/md'
import { withRouter } from 'next/router';
import { useState, useEffect, use } from 'react';
import Link from 'next/link';
import data from '../../data/data';

// const getUrl = async (amount) => {
//     const res = await fetch(`http://127.0.0.1:5000/momo?amount=${amount}`);
//     const data = await res.json();
//     return data
// }

const Checkout = (a) => {
    let l = JSON.parse(a.a)
    console.log(l)
    let checkout_list = l.reduce((acc, curr) => [...acc, data[curr]], [])
    let [price, setPrice] = useState('0');

    let total_price = checkout_list.reduce((acc, curr) => acc + parseInt(curr.price.split(' ')[1].slice(1)), 0);

    const [url, setUrl] = useState('');
    useEffect(() => {
        const getUrl = async (amount) => {
            const res = await fetch(`http://127.0.0.1:5000/momo?amount=${amount}`);
            const data = await res.json();
            return data
        }

        getUrl(total_price * 1000).then(res => { setUrl(res.payUrl) });
    }, [price])

    console.log(url)
    // const object = JSON.parse(query.object);
    return (
        <div className='container mx-auto p-5 relative'>
            <h1 className='text-center font-bold text-4xl mb-5'>Checkout</h1>
            <h2 className='text-center font-normal mb-5 text-4xl'>Total: ~ {total_price * 25000} vnd</h2>
            <div className='flex flex-col mb-32 mt-16 items-center justify-center'>
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
                                        <MdOutlinePlace className='mr-1'/>
                                        <p className='text-base text-[#333333]'>{i.description.slice(0, 15)}</p>
                                    </li>
                                    <li>
                                        <p className='text-base text-[#333333]'>Price: {i.price}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <Link href={url} className='bg-[#EAF7FF] text-[#3E3E3E] font-bold py-2 px-8 rounded absolute left-[60%] '>Checkout</Link>
        </div>
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
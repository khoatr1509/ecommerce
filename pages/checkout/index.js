import {MdOutlinePlace} from 'react-icons/md'
import { withRouter } from 'next/router';
// export const Checkout = ({ props }) => {
//     return (
//         props.map(i => {
//             return <div>i</div>
//         })
//     )
// }

const Checkout = (a) => {
    let l = JSON.parse(a.a)
    // const object = JSON.parse(query.object);
    return (
        <div className='container mx-auto p-5 relative'>
            <h1 className='text-center font-bold text-4xl mb-5'>Checkout</h1>
            <h2 className='text-center font-normal mb-5 text-4xl'>Total:</h2>
            <div className='flex flex-col mb-32 mt-16 items-center justify-center'>
            {
                l.map(i => {
                    return (
                        //TODO:
                        <div className='flex h-150px w-500px border-b border-black mb-6 p-1 mx-0'>
                            <img src="https://cdn.haitrieu.com/wp-content/uploads/2021/09/Logo-DH-Bach-Khoa-HCMUT.png" alt="" className='w-32 h-32 rounded mr-12'/>
                            <div>
                                <h1 className='font-bold text-2xl'>Mì tôm</h1>
                                <ul className='list-none'>
                                    <li className='flex justify-center items-center'>
                                        <MdOutlinePlace className='mr-1'/>
                                        <p className='text-base text-[#333333]'>Ở nơi nào đó, Ho Chi Minh, Vietnam.</p>
                                    </li>
                                    <li>
                                        <p className='text-base text-[#333333]'>Price: 20.000 vnd</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            <button className='bg-[#EAF7FF] text-[#3E3E3E] font-bold py-2 px-8 rounded absolute left-[60%] '>Checkout</button>
        </div>
    );
}
export default withRouter(Checkout);

export async function getServerSideProps(context) {
    console.log(context.query)
    let a = context.query.object;
    return {
        props: { a }, // will be passed to the page component as props
    }
}
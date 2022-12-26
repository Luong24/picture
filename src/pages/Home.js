import { Input } from 'antd';
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetDisablePicture, GetOnePicture, SearchPicture } from '../redux/Actions/ManagePictureAction';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';



const { Search } = Input;

export default function Home() {
    const dispatch = useDispatch();
    const [search, setSearch] = useState();
    const [more, setMore] = useState(8);
    const [limit, setLimit] = useState(16);

    const [heart, setHeart] = useState(false)
    // console.log('heart', heart)

    const { lstPicture } = useSelector(state => state.ManagePictureReducer);
    // console.log('lstPicture', lstPicture)

    const renderPicture = () => {
        return lstPicture?.slice(0, more).map((item, index) => {
            return <div className='m-2 relative' key={index}>

                <img className='w-full h-52' src={item.images.downsized_large.url} alt='...' />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out" >
                    <button onClick={() => {
                        dispatch(GetOnePicture(item.id))
                    }} title='Like' className='absolute bottom-8 right-4 active:text-red-500 focus:text-red-500 '><AiFillHeart className='text-3xl' /></button>
                </div>

            </div>
        })
    }

    const onSearch = (value) => {
        setSearch(value)
        setMore(8)
        dispatch(SearchPicture(value, more))
        window.reload();
    };

    return (
        <Fragment>
            <div className='flex justify-center'>
                <div className='w-1/2'>
                    <Search size='large' placeholder="Bạn muốn tìm gì?..." onSearch={onSearch} enterButton />
                </div>

            </div>
            <div className='grid grid-cols-4 my-10'>
                {renderPicture()}
            </div>
            <div className='text-center mb-8'>
                <button className='border py-2 px-4 font-bold rounded-full hover:bg-green-500 hover:text-white' onClick={() => {
                    setMore(more + 8)
                    setLimit(limit + 8)
                    dispatch(SearchPicture(search, limit))

                }}>Load More</button>
            </div>


        </Fragment>

    )
}

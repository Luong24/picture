import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

export default function Picture() {
    const dispatch = useDispatch();
    const { lstFavourite } = useSelector(state => state.ManagePictureReducer);
    // console.log('lst', lstFavourite)

    const [heart, setHeart] = useState(true);
    // console.log('heart', heart)

    const renderPicture = () => {
        return lstFavourite?.map((product, index) => {
            return <div className='m-2 relative' key={index}>
                <img className='w-full h-52' src={product.images.downsized_large.url} alt='' />
                {heart == true ? <button onClick={() => {
                    dispatch({
                        type: "DISABLE",
                        data: {
                            item: product
                        }
                    })
                }} className='absolute bottom-8 right-4'><AiFillHeart className='text-red-500 text-3xl' /></button> : ''}
            </div>
        })

    }
    return (
        <div className='grid grid-cols-4'>
            {renderPicture()}
        </div>
    )
}

import React, { Fragment, useEffect, useState } from 'react'
import { Route } from 'react-router';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import { AiFillHeart, AiOutlineFileSearch } from "react-icons/ai";
import { useSelector } from 'react-redux';




export default function HomeTemplate(props) {
    const { Component, ...restRoute } = props;
    const { lstFavourite } = useSelector(state => state.ManagePictureReducer);

    useEffect(() => {
        window.scrollTo(0, 0);
    })
    return <Route {...restRoute} render={(propsRoute) => {
        return <Fragment>
            <Menu theme="white" mode="horizontal" style={{ paddingLeft: '50px' }}>
                <Menu.Item key='1' icon={<AiOutlineFileSearch style={{ fontSize: '25px', marginTop: '8px', marginLeft: '22px', marginBottom: '-10px' }} />}>
                    <NavLink className='uppercase text-black nav-link' to='/' >Search</NavLink>
                </Menu.Item>
                <Menu.Item key='2' icon={<AiFillHeart style={{ fontSize: '25px', marginTop: '8px', marginLeft: '35px', marginBottom: '-10px' }} />}>
                    <NavLink className='uppercase text-black nav-link' to='/picture' >Favourites({lstFavourite.length})</NavLink>
                </Menu.Item>
            </Menu>
            <div className='grid grid-cols-7 my-20'>
                <div className='col-start-2 col-span-5'>
                    <Component {...propsRoute} />
                </div>
            </div>
        </Fragment>
    }} />
}

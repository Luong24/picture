
import { message } from 'antd';
import { managePictureService } from './../../services/ManagePictureService';


export const SearchPicture = (value, more) => {
    return async dispatch => {
        try {
            const result = await managePictureService.search(value, more);
            // console.log('result', result)
            if (result.status === 200) {
                dispatch({
                    type: 'SEARCH',
                    dataPicture: result.data.data
                })
            }
            else {
            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}


export const GetOnePicture = (id) => {
    return async dispatch => {
        try {
            const result = await managePictureService.getOne(id);
            // console.log(result)
            if (result.status === 200) {
                dispatch({
                    type: 'FAVOURITE',
                    dataDetail: result.data.data
                })
            }
            else {
                message.warning('error!')
            }
        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}

export const GetDisablePicture = (id) => {
    return async dispatch => {
        try {
            const result = await managePictureService.getOne(id);
            // console.log(result)
            if (result.status === 200) {
                dispatch({
                    type: 'DISABLE',
                    dataDisable: result.data.data.id
                })
            }
            else {
                message.warning('error!')
            }
        } catch (error) {
            console.log('error', error.response?.data)

        }
    }
}
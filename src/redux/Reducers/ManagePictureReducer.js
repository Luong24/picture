
import { message } from 'antd';

const initialState = {
    lstPicture: [],
    lstFavourite: []
}

// eslint-disable-next-line import/no-anonymous-default-export
export const ManagePictureReducer = (state = initialState, action) => {
    switch (action.type) {

        case "SEARCH": {
            state.lstPicture = action.dataPicture
            return { ...state }
        }

        case "FAVOURITE": {
            let newList = [...state.lstFavourite]
            // newList.push(action.item)
            const index = newList.findIndex(product => product.id === action.dataDetail.id)
            if (index > -1) {
                message.success('Đã yêu thích rồi!')
            }
            else {
                newList.push(action.dataDetail)
            }
            // console.log('newList', newList)
            return { ...state, lstFavourite: newList }

        }

        case "DISABLE": {
            // console.log('disable', action.data)
            let newList = [...state.lstFavourite]
            const index = newList.findIndex(product => product.id === action.data.item.id)
            newList.splice(index, 1)
            // console.log('newList', newList)
            return { ...state, lstFavourite: newList }
        }

        default:
            return state
    }
}

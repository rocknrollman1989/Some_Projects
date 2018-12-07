import axios from 'axios'

export const deletePost = (id) => {
    return{
        type: 'DELETE_POST',
        id
    }
}

export const createPost = (createDataPost) => {
    return (dispatch) => {
        dispatch({ type: 'CREATE_POST', createDataPost})   
    }
}

export const fetchData = (data) => {
    // console.log('Get data')
    return{
        type: 'GET_DATA_TO_STORE',
        data
    }
  };

export const getInfoFromApi = (url) => {
    return (dispatch) => {
        return axios.get(url)

            .then(data=>{
                let ourPhoto = data.data.slice(0,5)
                dispatch(fetchData(ourPhoto))
                return ourPhoto
                
            })
        
    }
}

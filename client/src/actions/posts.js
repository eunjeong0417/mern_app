import * as api from '../Api';


//action 정의하기
//redux thunk사용해서 비동기처리
export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts();
         dispatch({type:'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }



   
}
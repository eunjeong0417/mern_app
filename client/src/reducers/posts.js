//store의 data를 변경할 수 있는 함수가 reducers


//switch문으로 action type에 따라
//적용할 함수 설정
// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return posts;

        default:
            return posts;
    }
}
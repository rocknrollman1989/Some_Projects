

const initialState = {
    posts: [
            {
            "postId": 1,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
            },
            {
            "postId": 1,
            "id": 2,
            "name": "quo vero reiciendis velit similique earum",
            "email": "Jayne_Kuhic@sydney.com",
            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
            },
            {
            "postId": 1,
            "id": 3,
            "name": "odio adipisci rerum aut animi",
            "email": "Nikita@garfield.biz",
            "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
            }
        ],
    images: []
}

const rootReduser = (state = initialState, action) => {
    // console.log(state, action) 
    switch(action.type){
        case 'DELETE_POST':
            let newPosts = state.posts.filter(post => {
                return action.id !== post.id
            });
        return{
            ...state,
            posts: newPosts
        }        
        case 'CREATE_POST':
        
            let newPostsIn = [...state.posts, action.createDataPost]
            // console.log(newPostsIn)
           
        return{
                ...state,
                posts: newPostsIn,
            }
        
        case 'GET_DATA_TO_STORE':  
            return{
                ...state,
                images: action.data
            }
       
        }
    return{
        ...state
    }
   
    
}

export default rootReduser
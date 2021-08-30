import postMessage from '../models/postMessage.js'

//비동기처리
export const getPosts = async (req,res) => {
    try {
        const postMessages = await postMessage.find();

        res.status(200).json(postMessages)
    } catch(error) {
        res.status(404).json({message:error.message})
    }
}

export const createPosts = async (req, res) => {
    const body = req.body;
    //req.body안에 있는 정보를 받아온다
    const newPost = new postMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
        //post success code 201
    } catch (error) {
        res.status(409).json({ message: error.message });
        //post 요청 실패 코드 409
    }
}
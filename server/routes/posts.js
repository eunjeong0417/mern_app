//route관리
import express from 'express';
import { getPosts, createPosts } from '../controllers/posts.js';

const router = express.Router();
//express router 모듈

router.get('/', getPosts)
router.post('/',createPosts)

export default router;
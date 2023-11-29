import { useUserContext } from '@/context/AuthContext';
import { Models } from 'appwrite';
import React from 'react';

type GridPostList = {
	posts: Models.Document[];
};

const GridPostList = ({ posts }: GridPostListProps) => {
	const { user } = useUserContext();

	return (
        <ul className='grid-container'>
            {posts.map((post) => {
                <li>{post.caption}</li>
            })}
        </ul>
    )
};

export default GridPostList;

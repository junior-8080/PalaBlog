import React from 'react';
import BlogEditor from '../components/BlogEditor';

const PostsBoard = () => {
    return (
        <div className="w-[80%] mr-auto ml-auto mb-20">
            <div>
                <BlogEditor />
                {/* <div className='w-[20%]'>
                {
                    [1,2,3,4].map(item => <div className='py-10 bg-slate-400'>
                        <p>{item.title || "Test data"}</p>
                    </div>)
                }
                </div> */}
               
            </div>

        </div>
    );
}

export default PostsBoard;

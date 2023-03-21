import React from 'react';
import { Link } from 'react-router-dom';
import Author from './Author';

const Articles = () => {


    return (
        <div className="grid  grid-cols-1 lg:grid-cols-2 py-5">
            {
                [1, 2, 4, 5].map(article => <div className="w-[100%] lg:w-[70%] mb-8">
                    <Link to={`/posts/${article}`}>
                        <div className="">
                            <img src={"/assets/img/demopic/11.jpg"} alt="banner" />
                        </div>
                        <div className="py-4">
                            <h2 className="text-2xl">{article.title || "We 're living some strange times"}</h2>
                            {/* <h4 className="">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4> */}
                        </div>
                    </Link>
                    <Author />
                </div>)
            }
        </div>
    );
}

export default Articles;

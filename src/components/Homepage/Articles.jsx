import React from 'react';
import Author from './Author';

const Articles = () => {


    return (
        <div className="grid  grid-cols-1 lg:grid-cols-2 py-5">
            {
                [1, 2, 4, 5].map(article => <div className="w-[100%] lg:w-[70%] mb-8">
                    <div className="">
                        <div className="">
                            <img src={"/assets/img/demopic/11.jpg"} />
                        </div>
                        <div className="">
                            <div className="">
                                <h2 className="text-2xl">{article.title || "We 're living some strange times"}</h2>
                                {/* <h4 className="">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4> */}
                            </div>
                            <Author />
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Articles;

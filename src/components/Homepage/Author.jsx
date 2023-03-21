import React from 'react';


const Author = () => {
    return (
        <div className="flex items-center py-4">
            <div className="mr-4">
                <img src={"/assets/img/user.png"} width={"50px"} />
            </div>
            <span className="author-meta">
                <span className=""><a href="author.html">Steve</a></span><br />
                <span className="text-slate-400">22 July 2017</span>
            </span>
        </div>
    );
}

export default Author;

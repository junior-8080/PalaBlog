import React from 'react';

const Article = ({ content }) => {
    return (
        <div className="w-[80%] mr-auto ml-auto mb-20">
            <div className="lg:h-[70vh] h-full overflow-hidden" >
                <img src={"/assets/img/demopic/11.jpg"} alt="test"  />
            </div>
            <h2 className="text-4xl py-10 font-semibold">What is Lorem Ipsum?</h2>
            <div className="text-xl leading-relaxed">
                {content || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMake"}
            </div>
        </div>
    );
}

export default Article;

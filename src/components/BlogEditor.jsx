import React from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'



const BlogEditor = ({ postId, article, handleBody }) => {

    const [content, setContent] = React.useState("");
    const handleContentChange = (value) => {
        setContent(value)
    };


    return (
        <div>
            <div className="flex py-6">
                <h2 className="text-3xl mr-4">Create Post</h2>
                <img src={"/assets/img/blog.png"} width={"30px"} alt="new"/>
            </div>
            <div className="w-[70%]">
                <Editor
                    value={content}
                    onValueChange={handleContentChange}
                    highlight={code => highlight(code, languages.js)}
                    padding={20}
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 16,
                        backgroundColor: "",
                        border: "1px solid gray",
                        minHeight: "500px",
                        maxHeight: "500px",
                        overflowY: "scroll",
                        borderRadius: "5px 0px 0px 5px",
                    }}

                />
                <div class="flex items-center justify-between">
                    <div></div>
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 mt-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                    >
                        Save
                    </button>
                </div>

            </div>
        </div>

    );
};

export default BlogEditor;
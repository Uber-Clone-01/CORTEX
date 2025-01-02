"use client";
import React, { useEffect, useRef, useState } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import EditorjsList from '@editorjs/list';
import ImageTool from '@editorjs/image';
import Quote from '@editorjs/quote';
import CodeTool from '@editorjs/code';

const rawDocument = {
    "time": 1550476186479,
    "blocks": [{
        data: {
            text: 'Document Name',
            level: 2
        },
        id: "123",
        type: 'header'
    }],
    "version": "2.8.1"
};

function Editor() {
    const ref = useRef();
    const [document, setDocument] = useState(rawDocument);

    useEffect(() => {
        initEditor();
    }, []);

    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editorjs',
            data: document,
            tools: {
                header: {
                    class: Header,
                    config: {
                        levels: [1, 2, 3, 4, 5, 6],
                        defaultLevel: 2
                    }
                },
                list: {
                    class: EditorjsList,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    }
                },
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            byFile: 'http://localhost:8008/uploadFile', // Your backend file uploader endpoint
                            byUrl: 'http://localhost:8008/fetchUrl' // Your endpoint that provides uploading by URL
                        }
                    }
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true,
                    config: {
                        quotePlaceholder: 'Enter a quote',
                        captionPlaceholder: 'Quote\'s author'
                    }
                },
                code: {
                    class: CodeTool,
                    inlineToolbar: true
                }
            }
        });
        ref.current = editor;
    };

    const saveData = () => {
        ref.current.save().then((outputData) => {
            console.log('Article data: ', outputData);
            setDocument(outputData);
        }).catch((error) => {
            console.log('Saving failed: ', error);
        });
    };

    return (
        <div>
            <div id='editorjs' className='ml-20'></div>
           
        </div>
    );
}

export default Editor;










import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { useState, useEffect, useRef } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import CodeEditor from './components/code-editor';
import Preview from './components/preview';
import bundle from './bundler';

const App = () => {
    // const ref = useRef<any>();
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    // const startService = async () => {
    //     ref.current = 
    // };
    // useEffect(() => {
    //     startService();
    // }, []);

    const onClick = async () => {
        const output = await bundle(input);
        // if (!ref.current) {
        //     return;
        // }

        // const result = 

        // const result = await ref.current.transform(input, {
        //     loader: 'jsx',
        //     target: 'es2015'
        // });

        // setCode(result.code);
        setCode(output);

        // try {
        //     eval(result.outputFiles[0].text);
        // } catch (err) {
        //     alert(err);
        // }

    };



    return (
        <div>
            <CodeEditor
                initialValue="console.log('<textarea> \n hi, this is a textarea built with iframe :) \n </textarea>')"
                onChange={(value) => setInput(value)}
            />

            <div>
                <button onClick={onClick}>Submit</button>
            </div>
            <Preview code={code} />
        </div>
    )
};

// const html = `
// <h1>Local HTML doc</h1>`;

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
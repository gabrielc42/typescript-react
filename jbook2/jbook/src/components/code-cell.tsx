import { useState } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';

const CodeCell = () => {

  const [input, setInput] = useState('');
  const [code, setCode] = useState('');
  // const ref = useRef<any>();

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
        initialValue="console.log('hi');"
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

export default CodeCell;
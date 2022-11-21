import { useState, useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import bundle from '../bundler';
import Resizable from './resizable';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';

interface CodeCellProps {
  cell: Cell
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {

  const { updateCell } = useActions();

  // const [input, setInput] = useState('');
  const [err, setErr] = useState('');
  const [code, setCode] = useState('');
  // const ref = useRef<any>();

  // const startService = async () => {
  //     ref.current = 
  // };
  // useEffect(() => {
  //     startService();
  // }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output.code);
      setErr(output.err);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  // const onClick = async () => {
  // const output = await bundle(input);
  // if (!ref.current) {
  //     return;
  // }

  // const result = 

  // const result = await ref.current.transform(input, {
  //     loader: 'jsx',
  //     target: 'es2015'
  // });

  // setCode(result.code);
  // setCode(output);

  // try {
  //     eval(result.outputFiles[0].text);
  // } catch (err) {
  //     alert(err);
  // }
  // };

  return (
    <Resizable direction='vertical'>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>

          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        {/* <div>
          <button onClick={onClick}>Submit</button>
        </div> */}
        <Preview
          code={code}
          err={err} />
      </div>
    </Resizable>
  )
};

// const html = `
// <h1>Local HTML doc</h1>`;

export default CodeCell;
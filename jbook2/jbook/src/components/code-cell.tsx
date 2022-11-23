import './code-cell.css';
import { useEffect } from 'react';
import CodeEditor from './code-editor';
import Preview from './preview';
import Resizable from './resizable';
import { Cell } from '../state';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { useCumulativeCode } from '../hooks/use-cumulative-code';

interface CodeCellProps {
  cell: Cell
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }) => {

  const cumulativeCode = useCumulativeCode(cell.id);
  const { updateCell, createBundle } = useActions();
  const bundle = useTypedSelector((state) => state.bundles[cell.id]);

  // const [input, setInput] = useState('');
  // const [err, setErr] = useState('');
  // const [code, setCode] = useState('');
  // const ref = useRef<any>();

  // const startService = async () => {
  //     ref.current = 
  // };
  // useEffect(() => {
  //     startService();
  // }, []);

  useEffect(() => {
    if (!bundle) {
      createBundle(cell.id, cumulativeCode);
      return;
    }
    const timer = setTimeout(async () => {
      // const output = await bundle(cell.content);
      // setCode(output.code);
      // setErr(output.err);
      createBundle(cell.id, cumulativeCode);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cumulativeCode, cell.id, createBundle]);

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
      <div style={{ height: 'calc(100%-10px)', display: 'flex', flexDirection: 'row' }}>
        <Resizable direction='horizontal'>

          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => updateCell(cell.id, value)}
          />
        </Resizable>
        <div className="progress-wrapper">
          {/* <div>
          <button onClick={onClick}>Submit</button>
        </div> */}
          {
            !bundle || bundle.loading
              ?
              <div className="progress-cover">
                <progress className="progress is-small is-primary" max="100">
                  Loading
                </progress>
              </div>
              : <Preview
                code={bundle.code}
                err={bundle.err} />
          }
        </div>
      </div>
    </Resizable>
  )
};

// const html = `
// <h1>Local HTML doc</h1>`;

export default CodeCell;
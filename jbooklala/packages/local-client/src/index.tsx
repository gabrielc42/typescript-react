import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
// import CodeCell from './components/code-cell';
// import TextEditor from './components/text-editor';
import CellList from './components/cell-list';
import { Provider } from 'react-redux';
import { store } from './state';


const App = () => {

    return (
        <Provider store={store}>
            <div>
                <CellList />
                {/* <TextEditor /> */}
                {/* <CodeCell /> */}
            </div>
        </Provider>
    )
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
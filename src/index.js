import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import { BrowserRouter} from 'react-router-dom'
const app=(
      <BrowserRouter>
        <App/>
      </BrowserRouter>

)
ReactDOM.render(app,document.getElementById('root')
);

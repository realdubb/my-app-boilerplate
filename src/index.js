import React from 'react';
import { launch } from '@extjs/reactor';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

launch( < App / > );
registerServiceWorker();

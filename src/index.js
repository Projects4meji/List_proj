import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//CHALLENGE:
//1. Implement the add note functionality.
//- Create a constant that keeps track of the title and content.//{Done}//
//- Pass the new note back to the App.//{done}//
//- Add new note to an array.//{Done}//
//- Take array and render seperate Note components for each item.//{Done}//

//2. Implement the delete note functionality.
//- Callback from the Note component to trigger a delete function.
//- Use the filter function to filter out the item that needs deletion.
//- Pass a id over to the Note component, pass it back to the App when deleting.

//This is the end result you're aiming for:
//https://pogqj.csb.app/


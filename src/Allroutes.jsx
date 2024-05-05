import React from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import { Provider } from 'react-redux';
import store from './redux/store';

const Allroutes = () => {
  return (
    <Provider store={store}>
      <div>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  )
}

export default Allroutes

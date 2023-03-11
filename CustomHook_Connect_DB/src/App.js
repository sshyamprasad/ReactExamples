import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useTestAPI from './customHooks/CallAPI';

function App() {
  const [tasks, isLoading, error] = useTestAPI()
  console.log(tasks);

  // useEffect(() => {
  //   fetchTasks();
  // }, []);

  // const taskAddHandler = (task) => {
  //   // setTasks((prevTasks) => prevTasks.concat(task));
  //   tasks.concat(task);
  // };

  return (
    <React.Fragment>
      {/* <NewTask onAddTask={taskAddHandler} /> */}
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        // onFetch={tasks}
      />
    </React.Fragment>
  );
}

export default App;

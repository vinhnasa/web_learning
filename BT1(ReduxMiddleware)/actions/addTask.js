import axios from 'axios';

const apiUrl = 'http://localhost:3000/tasks';

export const addTask = (task) => {
  return (dispatch) => {
    return axios.post(apiUrl, task).then((response) => {
      dispatch(createTask(response.data));
    });
  };
};

const createTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
};

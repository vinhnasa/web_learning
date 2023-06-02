import axios from 'axios';

const apiUrl = 'http://localhost:3000/tasks';

export const addTask = (task) => {
  return (dispatch) => {
    return axios.post(apiUrl, task).then((response) => {
      dispatch(createTask(response.data));
    });
  };
};

export const updateTask = (task) => {
  return (dispatch) => {
    return axios.put(apiUrl + '/' + task.id, task).then(() => {
      dispatch(editTask(task));
    });
  };
};

export const deleteTask = (id) => {
  return (dispatch) => {
    return axios.delete(apiUrl + '/' + id).then(() => {
      dispatch(removeTask(id));
    });
  };
};

export const fetchTasks = () => {
  return (dispatch) => {
    return axios.get(apiUrl).then((response) => {
      dispatch(setTasks(response.data));
    });
  };
};

const createTask = (task) => {
  return {
    type: 'ADD_TASK',
    payload: task,
  };
};

const editTask = (task) => {
  return {
    type: 'UPDATE_TASK',
    payload: task,
  };
};

const removeTask = (id) => {
  return {
    type: 'DELETE_TASK',
    payload: id,
  };
};

const setTasks = (tasks) => {
  return {
    type: 'FETCH_TASKS',
    payload: tasks,
  };
};

const baseUrl = 'https://6329db974c626ff832cc4bb0.mockapi.io/api/v1/events';

export const getEvents = () => fetch(baseUrl).then((response) => response.json());

export const createEvent = (taskData) =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to create the event');
    }
  });

export const updateEvent = (taskId, updatedTaskData) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to update the event');
    }
  });

export const deleteEvent = (taskId) =>
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to delete the event');
    }
  });

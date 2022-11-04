export default function getData() {
  return async (dispatch, getState) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    dispatch({
      type: "ADD_DATA",
      payload: data
    });
  };
 
}

import { useEffect, useState } from "react";
import { fetchData } from "../util/persistence";
import WorkoutForm from "./WorkoutForm";
import WorkoutList from "./WorkoutList";

function WorkoutApp() {
  const [workouts, setWorkouts] = useState([]);
  const APIURL = "http://localhost:3000/api";
  const clear = {
    id: "",
    exercise: "",
    reps: "",
    sets: "",
    weight: "",
    group: "",
  }
  const [input, setInput] = useState(clear);

  function getWorkouts(callback) {
    fetchData(APIURL, callback);
  }

  function handleDelete(id) {
    fetchData(`${APIURL}/${id}`, () => {}, "DELETE");
    setWorkouts([...workouts.filter((workout) => workout.id !== id)]);
  }

  function handleInput(event) {
    let { id, value } = event.target;
    setInput({ ...input, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let method;
    const data = input;
    if (data.group === "") data.group = "Chest";
    if (!data.id) {
      method = "POST";
      fetchData(
        APIURL,
        (data) => setWorkouts([...workouts, data]),
        method,
        data
      );
    } else {
      method = "PUT";
      fetchData(
        `${APIURL}/${data.id}`,
        () => {
          const filtered = workouts.filter((workout) => workout.id !== data.id);
          setWorkouts([...filtered, data].sort((a, b) => a.id - b.id));
        },
        method,
        data
      );
    }
    setInput(clear);
  }

  function handleEdit(workout) {
    setInput(workout);
  }

  useEffect(() => {
    getWorkouts((data) => setWorkouts(data));
  }, []);

  return (
    <div className="container">
      <div className="component">
        <h1>Workout Log</h1>
        <WorkoutList
          workouts={workouts}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
      <div className="component">
      <h1>Add workout</h1>
        <WorkoutForm
          handleSubmit={handleSubmit}
          handleInput={handleInput}
          handleCancel={() => setInput(clear)}
          input={input}
        />
      </div>
    </div>
  );
}
export default WorkoutApp;

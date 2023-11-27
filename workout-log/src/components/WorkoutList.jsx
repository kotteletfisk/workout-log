function WorkoutList({ workouts, handleDelete, handleEdit }) {
  // Group the workouts by group
  const groupedWorkouts = workouts.reduce((groups, workout) => {
    const group = workout.group;
    if (!groups[group]) {
      groups[group] = [];
    }
    groups[group].push(workout);
    return groups;
  }, {});

  return (
    <div className="main">
      <table>
        <tbody>
          <tr>
            <th>Muscle Group</th>
            <th>Exercises</th>
            <th>Reps</th>
            <th>Sets</th>
            <th>Weight (kg)</th>
            <th>Action</th>
          </tr>
          {Object.keys(groupedWorkouts).map((group) => (
            <tr key={group}>
              <td>
                <h4>{group}</h4>
              </td>
              <td>
                <ul>
                  {groupedWorkouts[group].map((workout) => (
                    <li key={workout.id}>{workout.exercise}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {groupedWorkouts[group].map((workout) => (
                    <li key={workout.id}>{workout.reps}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {groupedWorkouts[group].map((workout) => (
                    <li key={workout.id}>{workout.sets}</li>
                  ))}
                </ul>
              </td>
              <td>
                <ul>
                  {groupedWorkouts[group].map((workout) => (
                    <li key={workout.id}>{workout.weight}</li>
                  ))}
                </ul>
              </td>
              <td>
                <div className="container">
                  <ul className="action">
                    {groupedWorkouts[group].map((workout) => (
                      <li key={workout.id}>
                        <button onClick={() => handleEdit(workout)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(workout.id)}>
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkoutList;
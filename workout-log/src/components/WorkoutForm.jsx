function WorkoutForm({ handleSubmit, handleInput, handleCancel, input }) {
  return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="id">Id</label>
          <input
            id="id"
            type="number"
            readOnly
            placeholder="id"
            value={input.id}
            onChange={handleInput}
          />
          <label htmlFor="exercise">Exercise</label>
          <input
            id="exercise"
            type="text"
            placeholder="exercise"
            value={input.exercise}
            onChange={handleInput}
            required
          />
          <label htmlFor="reps">Reps</label>
          <input
            id="reps"
            type="number"
            min={1}
            max={120}
            placeholder="reps"
            value={input.reps}
            onChange={handleInput}
            required
          />
          <label htmlFor="sets">Sets</label>
          <input
            id="sets"
            type="number"
            min={1}
            max={120}
            placeholder="sets"
            value={input.sets}
            onChange={handleInput}
            required
          />
          <label htmlFor="weight">Weight</label>
          <input
            id="weight"
            type="number"
            min={0}
            max={500}
            placeholder="weight"
            value={input.weight}
            onChange={handleInput}
            required
          />
          <label htmlFor="group">
            Musclegroup
            <select name="musclegroup" id="group" onChange={handleInput} value={input.group}>
              <option defaultChecked value="Chest">Chest</option>
              <option value="Back">Back</option>
              <option value="Legs">Legs</option>
              <option value="Shoulders">Shoulders</option>
              <option value="Arms">Arms</option>
              <option value="Core">Core</option>
            </select>
          </label>
          <button type="submit">{input.id ? "Update" : "Add"}</button>
          <button type="button" onClick={() => handleCancel()}>{input.id ? "Cancel" : "Clear"}</button>
        </form>
      </div>
  );
}

export default WorkoutForm;

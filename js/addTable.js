function addRow() {
  const table = document.querySelector(".planner");

  const newRow = document.createElement("tr");

  newRow.innerHTML = `<td>
          <select name="selection" class="exerciseList"></select>
        </td>
        <td><input class="sets" type="number" /></td>
        <td><input class="reps" type="number" /></td>
        <td><input class="weight" type="number" /></td>
        <td><input class="duration" type="number" /></td>
`;

  const selectors = document.querySelectorAll(".exerciseList");

  for (let i = 0; i < selectors.length; i++) {
    selectors[i].innerHTML = "";
  }

  loadExercises();

  table.appendChild(newRow);
}

document.querySelector("#addButton").addEventListener("click", addRow);

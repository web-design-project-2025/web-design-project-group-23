function addRow() {

const table = document.querySelector(".planner");

const newRow = document.createElement("tr");

newRow.innerHTML = `        <td>
          <select name="selection" id="exerciseList"></select>
        </td>
        <td><input id="sets" type="number"/></td>
        <td><input id="reps" type="number"/></td>
        <td><input id="weight" type="number"/></td>
        <td><input id="duration" type="number"/></td>
        <td><button id="confirmButton">Confirm &checkmark;</button></td>
`;

table.appendChild(newRow);

}

document.querySelector(".button").addEventListener("click",addRow);
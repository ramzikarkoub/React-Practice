import { employees } from "../data/employees";

// console.log(`Employee Name ${employees[0].name}`);

// function handleClickE(e) {
//   console.log("clicked");
// }

function EmployeeListItem() {
  return (
    <>
      {employees.map((employee, index) => (
        <div
          className="employeeListItem"
          key={employee.name}
          //   onClick={handleClickE}
        >
          <img src={employee.imgSrc} id="profilePic" />
          <div className="employeeInfo">
            <h3>{employee.name}</h3>
            <p>{employee.tile}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default EmployeeListItem;

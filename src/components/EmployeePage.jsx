import Header from "./Header";
import { employees } from "../data/employees";

function EmployeePage({ selectedEmployee }) {
  // console.log(handleClick);
  // console.log(employee);
  console.log(selectedEmployee);
  return selectedEmployee ? (
    <div className="employeePage">
      <Header />
      <div className="employeeDetail" id={"index"}>
        <img src={selectedEmployee.imgSrc} id="profilePic" />
        <div id="employeeInfo">
          <h3 id="name">{selectedEmployee.name}</h3>
          <p id="title">{selectedEmployee.tile}</p>
        </div>
      </div>
      <div className="moreInfo">Call Office :{selectedEmployee.callOffice}</div>
      <div className="moreInfo">Call Mobile :{selectedEmployee.callMobile}</div>
      <div className="moreInfo">SMS :{selectedEmployee.sms}</div>
      <div className="moreInfo">Email :{selectedEmployee.email}</div>
    </div>
  ) : (
    <div className="employeePage">
      <Header />
      <div className="employeeDetail" id={"index"}>
        <img src={employees[0].imgSrc} id="profilePic" />
        <div id="employeeInfo">
          <h3 id="name">{employees[0].name}</h3>
          <p id="title">{employees[0].tile}</p>
        </div>
      </div>
      <div className="moreInfo">Call Office :{employees[0].callOffice}</div>
      <div className="moreInfo">Call Mobile :{employees[0].callMobile}</div>
      <div className="moreInfo">SMS :{employees[0].sms}</div>
      <div className="moreInfo">Email :{employees[0].email}</div>
    </div>
  );
}
export default EmployeePage;

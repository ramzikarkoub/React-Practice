import SearchBar from "./SearchBar";
import Header from "./Header";

function HomePage({ handleClick, employee }) {
  return (
    <div className="homepage">
      <Header />
      <SearchBar />
      <>
        {employee.map((employee, index) => (
          <div
            className="employeeListItem"
            key={employee.name}
            onClick={() => handleClick(employee)}
          >
            <img src={employee.imgSrc} id="profilePic" />
            <div className="employeeInfo">
              <h3>{employee.name}</h3>
              <p>{employee.tile}</p>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}

export default HomePage;

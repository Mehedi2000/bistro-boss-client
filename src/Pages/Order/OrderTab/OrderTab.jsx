import { useState } from "react";
import FoodCard from "../../Shared/FoodCard/FoodCard";
import "./Pagination.css";

const OrderTab = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = recordsPerPage * currentPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = items.slice(firstIndex, lastIndex);
  const numberOfPage = Math.ceil(items.length / recordsPerPage);
  const numbers = [...Array(numberOfPage + 1).keys()].slice(1);

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (number) => {
    setCurrentPage(number);
  };

  const nextPage = () => {
    if (currentPage !== numberOfPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <div className="grid justify-center md:grid-cols-3 gap-8">
        {records.map((item) => (
          <FoodCard item={item} key={item._id}></FoodCard>
        ))}
      </div>
      <nav className="mt-8">
        <ul className="flex justify-center">
          <li className="btn" onClick={previousPage}>
            <a href="#">Prev</a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`${currentPage === n ? `active` : ``} btn`}
              key={i}
              onClick={() => changeCurrentPage(n)}
            >
              <a href="#">{n}</a>
            </li>
          ))}
          <li className="btn" onClick={nextPage}>
            <a href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default OrderTab;

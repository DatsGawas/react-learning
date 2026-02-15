import RestaurantCard from "./RestaurantCard";
import "./../style/Body.css";
import { useEffect, useRef, useState } from "react";
import Shimmer from "./shimmer";
import { debounceTime, distinctUntilChanged, Subject } from "rxjs";

const Body = () => {
  const searchSubject = useRef(new Subject());
  const [restaurantList, setRestaurantList] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    console.log("Api call");
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://namastedev.com/api/v1/listRestaurants",
    );

    const json = await response.json();
    setRestaurantList(
      json.data.data.cards[1].card.card.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilterRestaurants(
      json.data.data.cards[1].card.card.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };

  const searchData = (searchText, restaurantList) => {
    const filterData = restaurantList.filter((r) =>
      r.info.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    return filterData;
  };

  useEffect(() => {
    const subscription = searchSubject.current
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((value) => {
        console.log("API Call for:", value);
        debugger;
        setFilterRestaurants(searchData(value, restaurantList));
        // call API here
      });

    return () => subscription.unsubscribe();
  }, []);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    searchSubject.current.next(e.target.value);
  };

  return restaurantList.length === 0 ? (
    <Shimmer listCount={10} />
  ) : (
    <div className="app-body">
      <div className="filter mb-3" style={{ marginLeft: "6%" }}>
        <div className="input-group">
          <input
            type="text"
            className="form-control search-input swiggy-search mt-2"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={handleChange}
          />
          <button
            className="btn btn-primary filter-btn ms-2"
            type="button"
            onClick={() => {
              setFilterRestaurants(
                restaurantList.filter((f) => f.info.avgRating > 4),
              );
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {filterRestaurants.map((restaurant) => (
            <div
              className="col-md-3 d-flex align-items-stretch mb-2 px-1"
              key={restaurant.info.id}
            >
              <RestaurantCard restData={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;

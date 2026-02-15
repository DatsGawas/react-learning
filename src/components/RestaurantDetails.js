import { useEffect, useState } from "react";
import "./../style/RestaurantDetails.css";
import { useParams } from "react-router";

const ResataurantDetails = () => {
  const [restInfo, setRestInfo] = useState(null);
  const [restMenu, setRestMenu] = useState([]);

  const restId = useParams().id;

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const response =
      await fetch(`https://namastedev.com/api/v1/listRestaurantMenu/${restId}
`);
    const json = await response.json();
    setRestInfo(json.data.cards[2].card.card.info);
    setRestMenu(
      json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards,
    );
    console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards);
  };

  return (
    <div className="container my-4">
      <div className="restaurant-header shadow-sm">
        <h2>{restInfo?.name}</h2>
        <p className="mb-1">{restInfo?.cuisines?.join(" • ")}</p>
        <div>
          <span className="badge bg-success">{restInfo?.avgRating} ⭐</span>
          <span className="ms-3">{restInfo?.sla.deliveryTime} mins</span>
          <span className="ms-3">{restInfo?.costForTwo} for two</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="bg-white p-3 rounded shadow-sm">
            <h5>Categories</h5>
            <div className="category-link">Recommended</div>
            <div className="category-link">Starters</div>
            <div className="category-link">Main Course</div>
            <div className="category-link">Biryani</div>
            <div className="category-link">Desserts</div>
          </div>
        </div>

        <div className="col-md-9">
          {restMenu.map((item) => (
            <div className="card menu-card mb-3 p-3" key={item.card.info.id}>
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h5>{item.card.info.name}</h5>
                  <p className="text-muted">₹{item.card.info.price / 100}</p>
                  <p>{item.card.info.description}</p>
                  <span className="badge bg-success">4.5 ⭐</span>
                </div>
                <div className="col-md-4 text-center">
                  {/* <img
                    src="https://via.placeholder.com/120"
                    className="img-fluid rounded mb-2"
                    alt="food"
                  /> */}
                  <button className="btn add-btn w-75">ADD</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResataurantDetails;

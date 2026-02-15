import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla} = props.restData.info;
    return (
      <div className="card" style={{ width: '18rem', margin: '1rem' }}>
        <img src={CDN_URL + cloudinaryImageId} className="card-img-top res-logo" alt={name} />
        <div className="card-body d-flex flex-column justify-content-between" style={{ minHeight: '220px' }}>
          <div>
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              {cuisines.join(', ')}<br/>
              <span className="badge bg-success">{avgRating} stars</span><br/>
              <span>{costForTwo}</span><br/>
              <span>{sla.deliveryTime} minutes</span>
            </p>
          </div>
          <button className="btn btn-outline-primary mt-2 w-100 fw-semibold" style={{borderRadius: '20px'}}>Add to Cart</button>
        </div>
      </div>
    );
  };

  export default RestaurantCard;
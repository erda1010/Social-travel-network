import React from "react";
import "./PlaceList.css";
import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

const PlaceList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No place found. How about to create one?</h2>
          <button>Share place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="place-list">
      {props.items.map(item => (
        <PlaceItem
          key={item.id}
          id={item.id}
          image={item.imageUrl}
          title={item.title}
          description={item.description}
          address={item.address}
          creator={item.creator}
          coordinates={item.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;

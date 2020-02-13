import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_DATA = [
  {
    id: "p1",
    title: "Luxembourg downtown",
    description: "Place where I soon will be living in",
    imageUrl: "https://i.redd.it/ly844mti8bzy.jpg",
    address: "23 Rue du Fossé, 1536 Luxembourg",
    location: {
      lat: 49.6114912,
      lng: 6.1279953
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Luxembourg downtown",
    description: "Place where I soon will be living in",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipM5IEA-LPyo3Vg3CNlRUuZPwzAa8gm3GmJZZMF-=w408-h270-k-no",
    address: "23 Rue du Fossé, 1536 Luxembourg",
    location: {
      lat: 49.6114912,
      lng: 6.1279953
    },
    creator: "u2"
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_DATA.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;

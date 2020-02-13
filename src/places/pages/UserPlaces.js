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
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.3310472616226!2d6.1299370157011595!3d49.61036327936828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548d329f88c8f%3A0x6ca3fac2dddd927!2s23%20Rue%20du%20Foss%C3%A9%2C%201536%20Luxembourg!5e0!3m2!1sen!2s!4v1581631657057!5m2!1sen!2s",
    creator: "u1"
  },
  {
    id: "p2",
    title: "Luxembourg downtown",
    description: "Place where I soon will be living in",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipM5IEA-LPyo3Vg3CNlRUuZPwzAa8gm3GmJZZMF-=w408-h270-k-no",
    address: "23 Rue du Fossé, 1536 Luxembourg",
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.3310472616226!2d6.1299370157011595!3d49.61036327936828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479548d329f88c8f%3A0x6ca3fac2dddd927!2s23%20Rue%20du%20Foss%C3%A9%2C%201536%20Luxembourg!5e0!3m2!1sen!2s!4v1581631657057!5m2!1sen!2s",
    creator: "u2"
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_DATA.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;

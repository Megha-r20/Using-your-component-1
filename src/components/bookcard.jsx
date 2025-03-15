import React from "react";



const BookCard = ({ title, author, genre, cover }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <img src={cover} alt={title} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-lg font-bold mt-4">{title}</h2>
      <p className="text-gray-600">Author: {author}</p>
      <p className="text-gray-500 text-sm">Genre: {genre}</p>
    </div>
  );
};

export default BookCard;

// Utility Examples for Managing State Immutably in React

const Notes = () => {
  // Add a new item to an array or object - RIGHT WAY using spread to clone original, then adding in new item
  let currentMovies = [
    { id: 1, title: "The Shawshank Redemption", year: 1994 },
    { id: 2, title: "The Godfather", year: 1972 },
    { id: 3, title: "The Dark Knight", year: 2008 },
  ];

  let newMovies = [
    ...currentMovies,
    {
      id: 4,
      title: "The Whale",
      year: 2022,
      synopsis:
        "A morbidly obese teacher attempts to reconnect with his daughter.",
    },
  ];

  // Remove an item from an array - RIGHT WAY using filter to create a new array without the removed item
  let idToDelete = 2;
  newMovies = currentMovies.filter((movie) => movie.id != idToDelete);

  // Replace/update an item in an array - RIGHT WAY using map to create a new array including the updated item
  let updatedSynopsis1 = "Iconic heart-warming prison break movie";
  newMovies = currentMovies.map((movie) =>
    movie.id === 1 ? { ...movie, synopsis: updatedSynopsis1 } : movie
  );

  // Sort/reverse an array - RIGHT WAY cloning the original first
  newMovies = [...currentMovies];
  newMovies.reverse(); // Reverse the cloned array
  newMovies.sort((a, b) => (a.title > b.title ? 1 : -1)); // Sort by title (example)

  return null; // This component does not render anything
};

export default Notes;

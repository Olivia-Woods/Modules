function MoviesList() {
  // Collection of Romcom Classics Representing Movies - Array
  const movies = [
    {
      id: 1,
      title: "Clueless",
      year: 1995,
      synopsis:
        "Cher, a wealthy and stylish high schooler, plays matchmaker in her social circle, but soon realizes she has a lot to learn about love.",
    },
    {
      id: 2,
      title: "10 Things I Hate About You",
      year: 1999,
      synopsis:
        "A modern retelling of Shakespeare’s 'The Taming of the Shrew', where a high school bad boy woos an uptight girl with a twist of humor and heart.",
    },
    {
      id: 3,
      title: "Legally Blonde",
      year: 2001,
      synopsis:
        "Elle Woods, a fashionable sorority queen, defies expectations and heads to Harvard Law to win back her ex-boyfriend, finding herself in the process.",
    },
    {
      id: 4,
      title: "Bridget Jones's Diary",
      year: 2001,
      synopsis:
        "A hilarious and relatable tale of a single woman navigating love, career, and self-improvement in London.",
    },
    {
      id: 5,
      title: "The Princess Diaries",
      year: 2001,
      synopsis:
        "Mia Thermopolis discovers she’s the heir to the throne of Genovia and undergoes a royal transformation under her grandmother's watchful eye.",
    },
  ];

  return (
    <div className="MoviesList componentBox">
      <h2>🎀 Romcom Classics 🎀</h2>
      <ul>
        {/* Iterate Over Each Movie - Print the Title in a list */}
        {movies.map((movie) => (
          <li key={movie.id}>
            <strong>{movie.title}</strong> ({movie.year})<p>{movie.synopsis}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;

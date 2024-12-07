// MoodChanger: Event Handlers for Dynamic State Updates

function MoodChanger() {
  const [mood, setMood] = useState("happy"); // Initial state is set to 'happy'

  // Calls setMood with a fixed value of 'ecstatic'
  // Naming convention: Prefix function with 'handle' to indicate it's an event handler
  const handleWinLotto = () => {
    setMood("ecstatic");
  };

  // Calls setMood with a conditional state value
  // Updates mood based on its current state
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";
    setMood(newMood);
  };

  // Using functional form of setMood to prevent stale state issues
  // Uncomment and replace above logic if necessary:
  /*
    const handleRunningLate = () => {
      setMood((prevMood) => {
        if (prevMood === 'stressed') return 'really stressed';
        if (prevMood === 'really stressed') return 'giving up';
        return 'stressed';
      });
    };
    */

  return (
    <div className="MoodChanger">
      {/* Display the current mood dynamically */}
      Current Mood: {mood}
      {/* Inline arrow function for simple, direct updates */}
      <button onClick={() => setMood("tired")}>Stay Up Late</button>
      {/* Custom event handler functions for more complex logic */}
      <button onClick={handleRunningLate}>Running Late</button>
      <button onClick={handleWinLotto}>Win Lotto</button>
    </div>
  );
}

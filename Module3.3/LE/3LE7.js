// Implementing a Digital Clock with Precision and Alarm Features in JavaScript
// PrecisionClock and AlarmClock are subclasses that inherit from the DigitalClock 

// Base DigitalClock Class
class DigitalClock {
    constructor(prefix) {
      this.prefix = prefix;
    }
  
    // Method to display the current time in HH:MM:SS format
    display() {
      let date = new Date();
      let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  
      if (hours < 10) hours = '0' + hours;
      if (mins < 10) mins = '0' + mins;
      if (secs < 10) secs = '0' + secs;
  
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
    }
  
    stop() {
      clearInterval(this.timer);
    }
  
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), 1000);
    }
  }
  
  // a) PrecisionClock class with adjustable tick precision
  class PrecisionClock extends DigitalClock {
    constructor(prefix, precision = 1000) {
      super(prefix);
      this.precision = precision; // Precision in ms, default to 1000ms (1 second)
    }
  
    // Override start to use the specified precision interval
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), this.precision);
    }
  }
  
  // b) AlarmClock class with wakeupTime feature
  class AlarmClock extends DigitalClock {
    constructor(prefix, wakeupTime = '15:05') {
      super(prefix);
      this.wakeupTime = wakeupTime; // Set the wakeup time, default to "07:00"
    }
  
    // Override display to check wakeupTime
    display() {
      let date = new Date();
      let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  
      if (hours < 10) hours = '0' + hours;
      if (mins < 10) mins = '0' + mins;
      if (secs < 10) secs = '0' + secs;
  
      const currentTime = `${hours}:${mins}`;
      console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  
      // Check if current time matches wakeupTime
      if (currentTime === this.wakeupTime) {
        console.log("Wake Up!"); // Print wake up message
        this.stop(); // Stop the clock
      }
    }
  }
  
  // Testing the classes
  
  // Test PrecisionClock with 500ms precision
  const preciseClock = new PrecisionClock("Precise clock:", 500);
  preciseClock.start();
  setTimeout(() => preciseClock.stop(), 5000); // Stops the clock after 5 seconds
  
  // Test AlarmClock with default wakeupTime (07:00)
  const alarmClock = new AlarmClock("Alarm clock:");
  alarmClock.start();
  setTimeout(() => alarmClock.stop(), 10000); // Stops the clock after 10 seconds for testing
  
  // Test AlarmClock with custom wakeupTime
  const customAlarmClock = new AlarmClock("Custom alarm clock:", "00:00");
  customAlarmClock.start();
  setTimeout(() => customAlarmClock.stop(), 10000); // Stops the clock after 10 seconds for testing
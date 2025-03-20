// Function to find the Superbowl win
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  // Export the function
  module.exports = { superbowlWin };
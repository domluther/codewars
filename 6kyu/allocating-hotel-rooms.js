// Task
// Allocate customers to hotel rooms based on their arrival and departure days. Each customer wants their own room, so two customers can stay in the same room only if the departure day of the first customer is earlier than the arrival day of the second customer. The number of rooms used should be minimized.

// Input
// A list or array of n customers, 1 ≤ n ≤ 1000. Each customer is represented by (arrival_day, departure_day), which are positive integers satisfying arrival_day ≤ departure_day.

// Output
// A list or array of size n, where element i indicates the room that customer i was allocated. Rooms are numbered 1,2, ..., k for some 1 ≤ k ≤ n. Any allocation that minimizes the number of rooms k is a valid solution.

// Example:
// Suppose customers is [(1,5), (2,4), (6,8), (7,7)].
// Clearly customers 1 and 2 cannot get the same room. Customer 3 can use the same room as either of them, because they both leave before customer 3 arrives. Then customer 4 can be given the other room.
// So any of [1,2,1,2], [1,2,2,1], [2,1,2,1], [2,1,1,2] is a valid solution.

// NOTE: The list of customers is not necessarily ordered by arrival_time.

function allocateRooms(customers) {
  // Have a list of rooms
  // Short cut to start - create a list of 50 rooms that are all 0.
  const rooms = Array(1000).fill(0);
  // In that list of rooms, the index represents the room number -1 and the number the departure date (0 is empty)
  // An array to store the bookings
  const bookings = [];
  // When trying to allocate a room, look through the list of rooms,
  for (let id = 0; id < customers.length; id++) {
    const [arrival, departure] = customers[id];
    let found = false;
    let roomNum = 1;
    while (!found) {
      // If that room is available, book it
      if (rooms[roomNum - 1] < arrival) {
        rooms[roomNum - 1] = departure;
        found = true;
        bookings.push(roomNum);
      }
      // No room available? Next room.
      roomNum++;
    }
  }
  //  find the first room where the current number >= arrival date
  // Found it? Update the number of that room to the departure date of that reservation
  return bookings;
}

// Works but not efficient if out of order

const input = [
  [8, 8],
  [5, 8],
  [8, 9],
  [1, 4],
  [1, 3],
  [5, 7],
  [4, 8],
  [2, 2],
  [4, 5],
  [6, 8],
];
const ans = allocateRooms(input);
console.log(ans);

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

// Let me suggest one approach. Go through the customers in order by arrival day. For each customer, go through the already allocated rooms. If that customer's arrival day is larger than the largest departure day of any customer who has been previously allocated that room, the customer can go into that room. If no such room exists, create a new room and put the customer there.

function allocateRooms(customers) {
  // Have a list of rooms
  const rooms = Array(0).fill(0);
  // An array to store the bookings

  const bookings = Array(customers.length).fill(0);
  let booked = 0;
  const bookedIds = [];
  // While I've not booked everyone
  while (booked < customers.length) {
    let earliestDetails = findEarliestArrival(customers, bookedIds);
    bookRoom(rooms, bookings, earliestDetails);
    booked++;
  }

  return bookings;
}

function findEarliestArrival(customers, bookedIds) {
  let earliestArrival = Infinity;
  let earliestId;
  let departureDay;
  // Iterate through the customers to find who arrives first
  for (let id = 0; id < customers.length; id++) {
    const [arrival, departure] = customers[id];
    // Find the earliest arrival that hasn't already been dealt with
    if (arrival < earliestArrival && !bookedIds.includes(id)) {
      earliestArrival = arrival;
      departureDay = departure;
      earliestId = id;
    }
  }
  // Keep track of which ids have been booked
  bookedIds.push(earliestId);
  return { earliestArrival, earliestId, departureDay };
}

function bookRoom(rooms, bookings, earliestDetails) {
  let arrival = earliestDetails.earliestArrival;
  let departure = earliestDetails.departureDay;
  let found = false;
  let roomNum = 1;
  // Not found a room and there's a room to look at
  while (!found && roomNum <= rooms.length) {
    // If that room is available, book it
    if (rooms[roomNum - 1] < arrival) {
      rooms[roomNum - 1] = departure;
      found = true;
      // This is where the problem was - I misunderstood that the array was meant to be ordered by customers not arrival time
      bookings[earliestDetails.earliestId] = roomNum;
    }
    // That room wasn't valid? Check the next
    roomNum++;
  }
  // Wasn't space? Add a new room and book it
  if (!found) {
    rooms.push(departure);
    bookings[earliestDetails.earliestId] = roomNum;
  }
}

function allocateRoomsOriginal(customers) {
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
  [15, 22],
  [2, 4],
  [6, 9],
  [3, 33],
  [12, 21],
];
const ans = allocateRooms(input);
console.log(ans);

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

function queueTime(customers, n) {
  let totalTime = 0;
  let nextCustomerIndex = 0;
  let numberOfCustomers = customers.length;
  const tills = Array(n).fill(0);
  //     process queue
  while (nextCustomerIndex < numberOfCustomers) {
    // Find and fill empty tills
    for (let till = 0; till < tills.length; till++) {
      if (tills[till] === 0) {
        //         Move the next customer into the till if there is one and increment the customer index
        if (nextCustomerIndex < numberOfCustomers) {
          tills[till] = customers[nextCustomerIndex];
          nextCustomerIndex++;
        }
      }
    }
    let served = false;
    //     Decrement tills
    for (let till = 0; till < tills.length; till++) {
      // Something in the till? Decrement it - stops decrementing empty tills
      if (tills[till] > 0) tills[till] = tills[till] - 1;
      served = true;
    }
    // Because if someone has been served, then we tick up.
    if (served) {
      totalTime++;
    }
    served = false;
  }
  //   Got out? Then add whatever the biggest value is as that's how much is left
  totalTime += Math.max(...tills);
  return totalTime;
}

// Cleaner
function queueTime(customers, n) {
  let tills = Array(n).fill(0);
  // For each customer
  customers.forEach((customer) => {
    // Add the customer to the position with the lowest value in it to decide what the queues are going to look like
    let nextTill = tills.indexOf(Math.min(...tills));
    tills[nextTill] += customer;
  });
  // Now you've distributed your customers, what's the biggest value?
  return Math.max(...tills);
}

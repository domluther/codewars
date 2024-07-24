// Linked Lists - Length & Count

// Implement length to count the number of nodes in a linked list.

// length(null) => 0
// length(1 -> 2 -> 3 -> null) => 3
// Implement Count() to count the occurrences of an integer in a linked list.

// count(null, 1) => 0
// count(1 -> 2 -> 3 -> null, 1) => 1
// count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) => 4
// I've decided to bundle these two functions within the same Kata since they are both very similar.

// The push()/Push() and buildOneTwoThree()/BuildOneTwoThree() functions do not need to be redefined.

// PREP

// Parameters
// Length function - a pointer to the head of a list (can be null)
// Count function - a pointer to the head of a list and an integer to search for in the list

// Returns
// lengh() an integer - the length of the list
// count() an integer - the number of occurrences of the number in the list

// Examples
// null, 1 - length() = 0, count = 0

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let len = 0;
  // No head? End of list.
  if (head === null) return len;
  let nextHead = head;
  while (nextHead !== null) {
    nextHead = nextHead.next;
    len++;
  }
  return len;
}

function count(head, data) {
  let count = 0;
  // No head? End of list.
  if (head === null) return count;
  let nextHead = head;
  while (nextHead !== null) {
    if (nextHead.data === data) count++;
    nextHead = nextHead.next;
  }
  return count;
}

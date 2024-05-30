// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  // Find the index of the # and slice up to it
  const hashAt = url.indexOf('#');
  return hashAt > -1 ? url.slice(0, url.indexOf('#')) : url;
}

console.log(removeUrlAnchor('www.codewars.com/katas/'));

// regex - find the part starting with # and replace it

function removeUrlAnchor(url) {
  return url.replace(/#.*/gi, '');
}

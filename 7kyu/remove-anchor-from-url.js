// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  // Find the index of the # and slice up to it
  return url.slice(0, url.indexOf('#'));
}

console.log(removeUrlAnchor('www.codewars.com#about'));

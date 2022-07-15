// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Match All Non-Numbers</h1>`;

/** TODO:
 * Use the shorthand character for non-digits \D to count how many non-digits are in movie titles.
 
 let movieName = "2001: A Space Odyssey";
 let noNumRegex = /change/;      // Change this line
 let result = movieName.match(noNumRegex).length;
 */

function NoDigitsCount(movieName) {
  let noNumRegex = /\D/g;
  let result = movieName.match(noNumRegex);
  if (result !== null) {
    return result.length;
  } else {
    return result;
  }
}

console.log(NoDigitsCount('9'));
console.log(NoDigitsCount('Catch 22'));
console.log(NoDigitsCount('101 Dalmatians'));
console.log(NoDigitsCount('One, Two, Three'));
console.log(NoDigitsCount('21 Jump Street'));
console.log(NoDigitsCount('2001: A Space Odyssey'));

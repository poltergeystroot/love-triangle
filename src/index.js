/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let length = preferences.length; 
  let count = 0;
  for (let number = 0; number<length; number++) { 
      let element1 = preferences[number] - 1;
      if (element1 == number) continue;
      let element2 = preferences[element1] - 1;
      if (element1 == element2) continue;
      let element3 = preferences[element2] - 1;
      if (element3 == element2) continue;
      if (element3 == number) {
        count++;
      }
   }
   count=count/3;
   return count;
};

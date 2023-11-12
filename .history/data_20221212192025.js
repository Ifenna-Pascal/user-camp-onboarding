obj1 = {
  positive: ["happy", "excited", "joyful"],
  negative: ["depressed", "sad", "unhappy"],
};
obj2 = { happy: 6, excited: 1, unhappy: 3 };

const result = {};

for (let key of Object.keys(obj1)) {
  result[key] = obj1[key].reduce((acc, value) => {
    return acc + (obj2[value] || 0);
  }, 0);
}

console.log(result);

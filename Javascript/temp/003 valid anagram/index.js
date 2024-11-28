// Ques 3 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

const isValidAnagram1 = (s, t) => {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  return s===t;
}

const isValidAnagram2 = (s, t) => { 
  if(s.length!== t.length) return false;

  let obj1 = {};
  let obj2 = {};
  
  for(let i=0; i<s.length; i++) { 
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  
  console.log('\n\n[+]: obj1', obj1);
  console.log('\n\n[+]: obj2', obj2);
  for(let key in obj1) {
    if(obj1[key]!== obj2[key]) return false;
  }
  return true;
}

console.log(isValidAnagram2("anagram", "nagarma"));
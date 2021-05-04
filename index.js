// ### The following verifications should occur;
// 1. The password should be larger than 8 chars
// 2. The password should not be null
// 3. The password should have one uppercase letter at least
// 4. The password should have one lowercase letter at least
// 5. The password should have one number at least

// Each one of these should throw an exception with a different message of your choosing.

function validatePassword(password) {
  const passwordHasUpperCase = hasUpperCase(password)
  const passwordHasLowerCase = hasLowerCase(password)
  const passwordHasNumber = hasNumber(password)
  let score = 0

  if (score >= 3) {
    return password
  } else if (!password || password === '') {
    return ('please enter a password')
  } else if (password && password.length <= 8) {
    score += 1
    return 'password must be more than 8 characters'
  } else if (password && !passwordHasUpperCase) {
    score += 1
    return 'password must contain at least one uppercase letter'
  } else if (password && !passwordHasLowerCase) {
    score += 1
    return 'password must contain at least one lowercase letter'
  } else if (password && !passwordHasNumber) {
    score += 1
    return 'password must contain at least one number'
  } else {
    return password
  }
}

function hasUpperCase(str) {
  return (str.match(/[A-Z]/g))
}

function hasLowerCase(str) {
  return (str.match(/[a-z]/g))
}

function hasNumber(str) {
  const numbers = /\d/
  return numbers.test(str)
}

module.exports = {
  validatePassword,
}











// const stringLength = str => {
//   if (!str) {
//     return null
//   } else if (str.length <= 8) {
//     return 'Please provide a valid password'
//   } 
//   return str
// }

// const doesStringInclude = (regex, str) => {
//   regex.test(str)
// }

// console.log(doesStringInclude) 

// module.exports = {
//   stringLength, 
// }
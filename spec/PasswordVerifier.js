const { validatePassword } = require('../index')

describe('PASSWORD VERIFICATION FUNCTION', () => {
  const Password = require('../index')

  it('Should check the password is greater than 8 characters', () => {
    // arrange
    let password = 'khj'
    // act
    const result = validatePassword(password)
    // assert
    expect(result).toBe('password must be more than 8 characters')
  })

  it('The password should not be null', () => {
    // arrange
    let password = ''
    // act
    const result = validatePassword(password)
    // assert
    expect(result).toBe('please enter a password')
  })

  it('The password should have at least one uppercase letter', () => {
    // arrange
    let password = 'jjjjjjjjjj'
    // act
    const result = validatePassword(password)
    // assert
    expect(result).toBe('password must contain at least one uppercase letter')
  })

  it('The password should have at least one lowercase letter', () => {
    // arrange
    let password = 'HHDJSFHJSDHFMH9879'
    // act
    const result = validatePassword(password)
    // assert
    expect(result).toBe('password must contain at least one lowercase letter')
  })

  it('Password must contain at least one number', () => {
    // arrange
    let password = 'HHDJSjkjkFHJSDHFMH'
    // act
    const result = validatePassword(password)
    // assert
    expect(result).toBe('password must contain at least one number')
  })

  it('Password is never OK if item 4 is not true', () => {
    // arrange
    let password = '457974385H47857398'
    // act
    const result = validatePassword(password)
    // assert
    expect(result).toBe('password must contain at least one lowercase letter')
  })

  // it('Password is OK if at least three of the previous conditions is true', () => {
  //   // arrange
  //   let password = 'aHAHSHdhcmhskdhs'
  //   // act
  //   const result = validatePassword(password)
  //   // assert
  //   expect(result).toBe(password)
  // })

})



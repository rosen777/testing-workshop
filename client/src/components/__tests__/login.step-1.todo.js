import React from 'react'
import ReactDOM from 'react-dom'
import Login from '../login'

// const flushPromises = () => {
//   return new Promise(resolve => {
//     setTimeout(resolve, 0)
//   })
// }

// Basic unit test
test('calls onSubmit with the username and password when submitted', async () => {
  // Arrange
  // create a fake object to hold the form field values (username and password)
  const handleSubmit = jest.fn()
  const container = document.createElement('div')
  ReactDOM.render(<Login onSubmit={handleSubmit} />, container)

  const form = container.querySelector('form')
  const {username, password} = form.elements
  username.value = 'chucknorris'
  password.value = 'I do not need a password'

  form.dispatchEvent(new window.Event('submit'))

  expect(handleSubmit).toHaveBeenCalledTimes(1)
  expect(handleSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value,
  })
})

// // Basic unit test
// test('calls onSubmit with the username and password when submitted', async () => {
//   // Arrange
//   // create a fake object to hold the form field values (username and password)
//   const fakeLogin = {
//     username: 'test',
//     password: 'test'
//   }
//   // create a jest.fn() for your submit handler
//   const handleSubmit = jest.fn()

//   // render the Login component to a div
//   // TIP: const div = document.createElement('div')
//   const div = document.createElement('div')
//   ReactDOM.render(
//     <Login onSubmit={handleSubmit} />,
//     div,
//   )
//   //
//   // get the field nodes
//   // TIP: const inputs = div.querySelectorAll('input')
//   // TIP: const form = div.querySelector('form')
//   const inputs = div.querySelectorAll('input')
//   const form = div.querySelector('form')

//   // fill in the field values
//   //
//   // Act
//   // submit the form:
//   // TIP: formNode.dispatchEvent(new window.Event('submit'))
//   const {username, password} = form.elements
//   username.value = fakeLogin.username
//   password.value = fakeLogin.password

//   const submitEvent = new window.Event('submit')
//   form.dispatchEvent(submitEvent)

//   await flushPromises()
//   //
//   // Assert
//   // ensure your submit handler was called properly
//   expect(handleSubmit).toHaveBeenCalledTimes(1)

// })

//////// Elaboration & Feedback /////////
// When you've finished with the exercises:
// 1. Copy the URL below into your browser and fill out the form
// 2. remove the `.skip` from the test below
// 3. Change submitted from `false` to `true`
// 4. And you're all done!
/*
http://ws.kcd.im/?ws=Testing&e=login.step-1&em=
*/
test.skip('I submitted my elaboration and feedback', () => {
  const submitted = false // change this when you've submitted!
  expect(submitted).toBe(true)
})
////////////////////////////////

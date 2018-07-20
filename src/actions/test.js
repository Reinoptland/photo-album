export const NEW_HELL_WORLD = 'NEW_HELLO_WORLD'

export function helloWorld(firstName, lastName) {
  return {
    type: NEW_HELL_WORLD,
    payload: {
      firstName: firstName,
      lastName: lastName
    }
  }
}

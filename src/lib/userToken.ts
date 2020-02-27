export const userToken = localStorage.getItem('userToken')

export const setUserToken = (tokenValue: string) => {
  localStorage.setItem('userToken', tokenValue)
}

export const removeUserToken = () => {
  localStorage.removeItem('userToken')
}

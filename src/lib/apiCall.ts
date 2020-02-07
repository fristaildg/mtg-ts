export const apiCall = async (params: string = '') => {
  const baseURL = 'https://api.scryfall.com/cards'
  const  response = await fetch(baseURL)
  return await response.json()
}
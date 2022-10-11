import axios from "axios"

const getAPIData = async () => {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto').then((resp) => {
    console.log(resp)
  })
  return response
}

export default getAPIData
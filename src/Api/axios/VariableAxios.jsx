// export const baseURL = "http://127.0.0.1:8000"
export const baseURL = "https://backen-du-projet-text1.onrender.com"

const register =`${baseURL}/api/register`;
const login = `${baseURL}/api/login`;
const hotel = `${baseURL}/api/hotels`;
const deleteAllHotels = `${baseURL}/api/hotels/delete-all`;



export { register, login, hotel, deleteAllHotels };

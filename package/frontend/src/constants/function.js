export const setSession=(id,value)=>{
    sessionStorage.setItem(id, JSON.stringify(value)); 
}
export const getSession=(id)=>{
    return JSON.parse(sessionStorage.getItem(id))
}
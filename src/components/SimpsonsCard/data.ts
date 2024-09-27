
export interface SimpsonCardProps {
  firstName: string;
  lastName: string;
  avatar?: string;
  job?: string;
  hobby?: string;
}


const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Safety Inspector",
    hobby: "beer Duff",
    avatar:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
  };
  
  const getFullName = () => {
    return `${homerSimpson.firstName} ${homerSimpson.lastName}`;
  };
  
  const getHobby = () => {
    return homerSimpson.hobby;
  };
  
  const sum = (a: number, b: number) => {
    return a + b;
  }
  
  let result = sum(200, 400);
  
  console.log(result) // 600
  
  // Экспортирование того что мы перечислим в фигурных скобках
  export { homerSimpson, getFullName };
  
  // Экспорт как default
  export default getHobby;
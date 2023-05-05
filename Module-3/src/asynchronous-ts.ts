//Mock Promise

//Declare a type
interface PromiseDataType {
    success: boolean;
    data: string;
  }
  
  //A promise with object return type
  const makePromise = (): Promise<PromiseDataType> => {
    return new Promise<PromiseDataType>((resolve, reject) => {
      const data: string = "Data in promise";
  
      if (data) {
        resolve({ success: true, data });
      } else {
        reject({ success: false, error: "Data not found" });
      }
    });
  };
  
  //Promise with return type can be void | string | array | any type
  const getPromiseData = async (): Promise<PromiseDataType> => {
    const result = await makePromise();
    return result;
  };
  
  //example with json place holder
  
  //todo type
  interface TodoType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }
  const fetchTodo = async () : Promise<TodoType> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response.json();
  };
  
  const getTodoData = async () : Promise<void>  => {
      const result = await fetchTodo()
      console.log(result)
  }
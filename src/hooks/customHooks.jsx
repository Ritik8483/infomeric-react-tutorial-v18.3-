import useFetch from "./useFetch";

const CustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log("data",data);
  
  return (
    <>
      <h1>Custom Hooks</h1>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

export default CustomHook;

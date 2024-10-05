type dataFetchProps = {status: "loading"| "error"|"success"}
const DataFetch = ({status}: dataFetchProps) => {
   if(status === "loading"){
return <h1>Data fetch loading..........</h1> 

   }
   else if(status === "error"){
   return <h1>Data could not fetch</h1> 

   }
    return (
        <div>
           <h1>Data fetch successfully</h1> 
        </div>
    );
};

export default DataFetch;
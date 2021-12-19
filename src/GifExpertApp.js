import react,{useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { CategoryGrid } from "./components/CategoryGrid";
const GifExpertApp=({value})=>{

     //const categories=["one punch man","samuari X","Dragon Ball"];
      const [categories, setcategories] = useState(["one punch man"])


      const handleAdd=(e)=>{

        //push new element
        setcategories((c)=>{
             return ["hellsing",...c];
        }
        
);
      } 


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setcategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category=>(
                         <CategoryGrid 
                         key={category}
                         category={category}
                         />
                    ))
                }
            </ol>

            <button onClick={handleAdd}>Agregar</button>
        </>
    );
}


export default GifExpertApp;
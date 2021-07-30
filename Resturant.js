import React,{useState} from 'react'


import Menu from "./menuApi.js";
import MenuCard from "./MenuCard";



const Resturant = () => {

    const [menuData, setmenuData] = useState(Menu);

    const filterItem=(category)=>{
        const updateList=Menu.filter((curElem)=>{
            return curElem.category===category;


        })

        setmenuData(updateList);


    };

   
    return (
        <>
        <nav className="navbar">
                <div className="btn-group">
                    <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>Breakfast</button>
                    <button className="btn-group__item" onClick={()=>filterItem("lunch")}>Lunch</button>
                    <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button>
                    <button className="btn-group__item"onClick={()=>setmenuData(Menu)}>All</button>


                </div>



        </nav>




        
        <MenuCard menuData={menuData} />










        </>
    );
};

export default Resturant;

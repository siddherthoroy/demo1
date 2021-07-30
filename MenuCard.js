import React from 'react'

const MenuCard = ({menuData}) => {
   // console.log(menuData);
    return (
        <>

        <section className="main-card--container">

        {menuData.map((curElem)=>{

            return(

                <>
<div className="card-container" >

<div className="card">

    <div className="card-body">
        <span className="card-number card-circle subtile" border-radius="20px" >{curElem.id}</span>
        <br />
        <span className="card-author subtle" style={{color:"red"}}>{curElem.name}</span>
        <h2 className="card tittle">{curElem.category}</h2>
        <span className="card-description subtle" style={{color:"red"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero ratione, a mollitia sed alias impedit voluptate officiis cupiditate recusandae totam, ducimus quae quasi maxime ullam pariatur necessitatibus perspiciatis autem id.

        </span>
        <div className="card-read">Read</div>
      <image src={curElem.image} alt="images" className="card-media"/>

        <span className="card-tag subtle">order now</span>


    </div>

</div>

</div>

</>


            )


        })}
        </section>




            
        </>
    );
};

export default MenuCard

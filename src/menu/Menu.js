import React from "react"
import "./Menu.css"

const Menu = ({header,items,active,setActive}) => {
    return ( 
    <div className={active ? "menu active" : "menu"} onClick={()=>{setActive(!active)}}> 
        <div className="blur"></div>
        <div className="menu__content" onClick={e=>e.stopPropagation()}>
            <div className="menu__header">{header}</div>
            <ul>
                {items.map((item,index)=>{
                    return <li key={index}>
                                <a href={item.href} onClick={()=>{setActive(!active)}}>{item.value}</a>                              
                            </li>
                })}
            </ul>
        </div>
    </div> );
}

export default Menu;

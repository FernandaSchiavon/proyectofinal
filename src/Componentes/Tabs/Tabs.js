import { useState, useEffect } from "react";
import  "./Tabs.css" ;

/* Uso esta funcion para convertir la url */
import { slugify } from "../Utils/Slugify";

/* recibo como parametro los div y el tab con el que se inicia, el que muestro */
const Tabs = ({ children, initialTab, iconTab, tituloTab }) => {
    /* siempre muestra el primer tab*/
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  
  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(slugify(newActiveTab));
  };

  useEffect(() => {
    if (initialTab.tab) {
      setActiveTab(initialTab.tab);
      console.log(initialTab);
    }
  }, []);


  return (
    <div>
      <ul className="tabs">
        {children.map((tab) => {
          const label = tab.props.label;
          const icono = tab.props.iconTab;
          return (
            <li
              className={slugify(label) == activeTab ? "current" : ""}
              key={label}
            >
              <a className="linkTab" href="#" onClick={(e) => handleClick(e, label)}>
              <i class={`${icono}`}></i>
              <span className="tituloTab">{tab.props.tituloTab}</span>
              </a>
            </li>
          );
        })}
      </ul>
      {children.map((cadaContenido) => {
        if (slugify(cadaContenido.props.label) == activeTab)
          return (
            <div key={cadaContenido.props.label} className={"content"}>
              {cadaContenido.props.children}
            </div>
          );
      })}
    </div>
  );
};

export default Tabs;
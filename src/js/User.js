import React from "react";
import Avatar from "../img/user-avatar.svg";
import { Link } from "react-router-dom";

function User(props) {
  let [clicked, setClicked] = React.useState(true);
  const handlerClick = () => setClicked((clicked = !clicked));

  let style = (clicked && "__closed") || "";

  let UserMenu = (
    <div className={`header__user-menu${style} user-menu`}>
      <ul className="header__user-menu__ul">
        {props.userMenuData.map((item, index) => (
          <li className="header__user-menu__li" onClick={item.action} key={index}>
            <Link
              to={(item.href && item.href) || window.location}
              className="header__user-menu__li__a"
              key={index}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div className={`header__user${style}`} onClick={handlerClick}>
        <img src={Avatar} alt="Avatar" />
        {UserMenu}
      </div>
    </>
  );
}

export default User;

import { Link } from "react-router-dom";
import User from "./User";

function Header(props) {
  return (
    <header className="header">
        <div>
          <Link to="/" className="header__title">
            Awesome Kanban Board
          </Link>
        </div>
        <User userMenuData={props.userMenuData} />
    </header>
  );
}

export default Header;

import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();

  const onClickHome = () => navigate("/");
  const onClickSearch = () => {};
  const onClickCreate = () => navigate("/create");
  const onClickFavorite = () => navigate("/component");
  const onClickProfile = () => navigate("/profile");

  const sideMenu = [
    { icon: <HomeRoundedIcon />, label: "Home", onClick: onClickHome },
    { icon: <SearchIcon />, label: "Search", onClick: onClickSearch },
    {
      icon: <AddCircleOutlineRoundedIcon />,
      label: "Create",
      onClick: onClickCreate,
    },
    {
      icon: <FavoriteBorderRoundedIcon />,
      label: "Favorite",
      onClick: onClickFavorite,
    },
    { icon: <AccountCircleIcon />, label: "Profile", onClick: onClickProfile },
  ];

  return (
    <div className="w-52 min-w-min bg-white border-r fixed h-screen">
      <p className="flex justify-start items-center font-bold bg-gradient-to-br from-pink-500 to-yellow-500 text-white text-2xl bg-clip-text text-transparent mt-4 w-4/5 m-auto">
        <a href="/">Ramen Patrol</a>
      </p>
      <ul>
        {sideMenu.map(({ icon, label, onClick }) => (
          <li
            className="flex items-center mt-4 justify-start w-4/5 m-auto py-2 hover:font-bold hover:cursor-pointer"
            key={label}
            onClick={onClick}
          >
            <div>{icon}</div>
            <p className="ml-2">{label}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

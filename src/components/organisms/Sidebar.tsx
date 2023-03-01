import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import AddCircleOutlineRoundedIcon from "@material-ui/icons/AddCircleOutlineRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import AssignmentReturnRoundedIcon from "@material-ui/icons/AssignmentReturnRounded";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/useAuth";

export const SideBar = () => {
  const navigate = useNavigate();
  const { logout, token, loginUser } = useAuth();

  const onClickHome = () => navigate("/");

  const onClickSearch = () => {};

  const onClickCreate = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/create");
    }
  };
  const onClickFavorite = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/component");
    }
  };
  const onClickProfile = () => {
    if (!token) {
      navigate("/login");
    } else {
      navigate("/profile");
    }
  };
  const onClickLogout = () => {
    logout();
    navigate("/login");
  };

  const noUserSideMenu = [
    {
      id: "home",
      icon: <HomeRoundedIcon />,
      label: "Home",
      onClick: onClickHome,
    },
    {
      id: "search",
      icon: <SearchIcon />,
      label: "Search",
      onClick: onClickSearch,
    },
    {
      id: "create",
      icon: <AddCircleOutlineRoundedIcon />,
      label: "Create",
      onClick: onClickCreate,
    },
    {
      id: "favorite",
      icon: <FavoriteBorderRoundedIcon />,
      label: "Favorite",
      onClick: onClickFavorite,
    },
    {
      id: "login",
      icon: <AssignmentReturnRoundedIcon />,
      label: "Login",
      onClick: onClickLogout,
    },
  ];

  const sideMenu = [
    {
      id: "home",
      icon: <HomeRoundedIcon />,
      label: "Home",
      onClick: onClickHome,
    },
    {
      id: "search",
      icon: <SearchIcon />,
      label: "Search",
      onClick: onClickSearch,
    },
    {
      id: "create",
      icon: <AddCircleOutlineRoundedIcon />,
      label: "Create",
      onClick: onClickCreate,
    },
    {
      id: "favorite",
      icon: <FavoriteBorderRoundedIcon />,
      label: "Favorite",
      onClick: onClickFavorite,
    },
    {
      id: "profile",
      icon: <AccountCircleIcon />,
      label: `${loginUser?.username}`,
      onClick: onClickProfile,
    },
    {
      id: "logout",
      icon: <AssignmentReturnRoundedIcon />,
      label: "Logout",
      onClick: onClickLogout,
    },
  ];
  // const noUserSideMenu = sideMenu.filter((menu) => menu.id !== "profile");

  return (
    <div className="w-52 min-w-min bg-white border-r fixed h-screen">
      <p className="flex justify-start items-center font-bold bg-gradient-to-br from-pink-500 to-yellow-500 text-white text-2xl bg-clip-text text-transparent mt-4 w-4/5 m-auto">
        <a href="/">Ramen Patrol</a>
      </p>
      <ul>
        {loginUser
          ? sideMenu.map(({ icon, label, onClick }) => (
              <li
                className="flex items-center mt-4 justify-start w-4/5 m-auto py-2 hover:font-bold hover:cursor-pointer"
                key={label}
                onClick={onClick}
              >
                <div>{icon}</div>
                <p className="ml-2">{label}</p>
              </li>
            ))
          : noUserSideMenu.map(({ icon, label, onClick }) => (
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

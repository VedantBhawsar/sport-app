"use client";
import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HouseIcon from "@mui/icons-material/House";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
export default function ButtomNavbar() {
  const [value, setValue] = React.useState("recents");
  const pathname = usePathname();
  const router = useRouter();
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (pathname === "/account") {
      setValue("user");
    } else if (pathname === "/") {
      setValue("home");
    } else {
      setValue("sports");
    }
  }, [pathname, value]);

  return (
    <BottomNavigation
      sx={{ width: "100%" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Home"
        value="home"
        icon={<HouseIcon />}
        sx={{
          py: 2,
        }}
        onClick={() => router.push("/")}
      />
      <BottomNavigationAction
        label="Sports"
        value="sports"
        icon={<SportsCricketIcon />}
        onClick={() => router.push("/sport/1")}
      />
      <BottomNavigationAction
        label="User"
        value="user"
        icon={<PermIdentityIcon />}
        onClick={() => router.push("/account")}
      />
    </BottomNavigation>
  );
}

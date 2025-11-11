import { useEffect, useState } from "react";
import { CircleUserRound } from "lucide-react";

import { style } from "./headerStyle";
import { useUser } from "@/features/auth/user/useUser";


export default function Header() {

  const {user, logout} = useUser();
  const avatarUrl = user?.avatar ?? null;

  const [isAvatarValid, setIsAvatarValid] = useState<boolean | null>(null);

  useEffect(() => {
    if (!avatarUrl) {
      setIsAvatarValid(false);
      return;
    }

    let cancelled = false;
    const img = new Image();

    img.onload = () => {
      if (!cancelled) setIsAvatarValid(true);
    };
    img.onerror = () => {
      if (!cancelled) setIsAvatarValid(false);
    };

    img.src = avatarUrl;

    const timeout = window.setTimeout(() => {
      if (!cancelled && isAvatarValid === null) setIsAvatarValid(false);
    }, 7000);

    return () => {
      cancelled = true;
      clearTimeout(timeout);
    };
  }, [avatarUrl]);

  // const handleLogout = () => {
  //   localStorage.removeItem("user");
  //   window.location.reload();
  // };

  return (
    <div style={style.header}>
      {isAvatarValid ? (
        <img
          src={avatarUrl!}
          alt="User avatar"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            objectFit: "cover",
          }}
          onError={() => setIsAvatarValid(false)}
        />
      ) : (
        <CircleUserRound size={40} />
      )}

      <button onClick={logout}>Log out</button>
    </div>
  );
}

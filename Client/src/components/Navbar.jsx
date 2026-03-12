import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");

    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-4 bg-slate-900 text-white">
      <div className="flex gap-6">
        <Link to="/dashboard" className="hover:text-gray-300">
          Dashboard
        </Link>

        <Link to="/profile" className="hover:text-gray-300">
          Profile
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback>U</AvatarFallback>
        </Avatar>

        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}

export default Navbar;

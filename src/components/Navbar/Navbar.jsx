import logo from "../../assets/logo.svg";
import ring from "../../assets/ring.svg";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";
import shoppingCart from "../../assets/shopping-cart.svg";
import Cart from "../CinemaPortal/Cart/Carts";
import { useState } from "react";
import { useCineContext } from "../../context/CineContext";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [cartOpen, setCartOpen] = useState(false);
  const carts = useCineContext();

  const handleShowCart = (e) => {
    e.preventDefault();
    setCartOpen(true);
  };

  const handleHideCart = (e) => {
    e.preventDefault();
    setCartOpen(false);
  };

  return (
    <header>
      {cartOpen && <Cart onCartHide={handleHideCart} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width={139} height={26} alt={"logo"} />
        </a>
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width={24} height={24} alt={"ring"} />
            </a>
          </li>
          <li>
            <a
              onClick={() => setDarkMode((prev) => !prev)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img
                src={darkMode ? sun : moon}
                width={24}
                height={24}
                alt={"moon"}
              />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleShowCart}
            >
              <img
                style={{ position: "relative" }}
                src={shoppingCart}
                width="24"
                height="24"
                alt="cart"
              />
              {carts.length > 0 && (
                <span
                  style={{
                    background: "#12CF6F",
                    position: "absolute",
                    top: "-12px",
                    right: "0px",
                    padding: "2px",
                    width: "20px",
                    height: "20px",
                    lineHeight: "20px",
                    textAlign: "center",
                    borderRadius: "50%",
                    color: "#fff",
                  }}
                >
                  {carts.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import { Box, Container, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    cartItems.forEach((item) => {
      sum += item.price;
    });
    setPrice(sum);
  }, [cartItems]);

  const addToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };

  const removeFromCart = (title) => {
    let newArr = cartItems.filter(function (item) {
      return item.title !== title;
    });
    setCartItems(newArr);
  };

  return (
    <Box>
      <NavBar
        isDark={isDark}
        toggleColorMode={toggleColorMode}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        price={price}
      />
      <Container maxW="6xl">
        <Main isDark={isDark} addToCart={addToCart} cartItems={cartItems} />
      </Container>
    </Box>
  );
}

export default App;

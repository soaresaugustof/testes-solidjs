import banner from './assets/banner.svg';
import logo from './assets/favicon.svg';
import { Show, createSignal } from 'solid-js';
import { Routes, Route, A } from '@solidjs/router';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import { useCartContext } from './context/CartContext';

function App() {
  console.log('oi')

  const [darkTheme, setDarkTheme] = createSignal(false)

  function toggleTheme() {
    setDarkTheme(!darkTheme())
  }

  const { items } = useCartContext()

  const quantity = () => {
    return items.reduce((acc, current) => {
      return acc + current.quantity
    }, 0)
  }

  return (
    <div class="m-auto text-white font-bold">
      <header
        class="my-4 p-2 text-x1 flex items-center gap-4"
      >
        <img class='w-16 h-16' src={logo} alt='mkpl logo'/>

        <A href="/">Home</A>
        <A href="/cart">Cart ({quantity()})</A>
      </header>

      <img class="rounded-md" src={banner} alt="site banner"/>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/product/:id" component={Product} />
      </Routes>
      
    </div>
  );
}

export default App;

import { For } from "solid-js";
import Card from "../components/Card";
import { useCartContext } from "../context/CartContext";

export default function Cart() {
    const { items } = useCartContext()

    const total = () => {
        return items.reduce((acc, p) => {
            return acc + p.quantity * p.price
          }, 0)
    }

    return (
        <div class="max-w-md my-8 mx-auto">
            <Card rounded={true}>
                <h2>Your shopping cart</h2>
                <For each={items}>
                    {(item) => (
                        <p class="my-3">{item.title} - R${item.price} x {item.quantity}</p>
                    )}
                </For>
                
                <p class="mt-8 pt-4 border-t-2 font-bold">Valor total do carrinho: R${total()}</p>
            </Card>
        </div>
    );
}
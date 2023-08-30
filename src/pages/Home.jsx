import { Show, createResource } from 'solid-js';
import Card from '../components/Card';
import { A } from '@solidjs/router';

const fetchProducts = async () => {
    const res = await fetch('http://localhost:4000/products')
    return res.json()
}

export default function Home() {

    const [data] = createResource(fetchProducts)

    return (
        <Show when={data()} fallback={<p>Carregando...</p>}>
            <div class="grid grid-cols-4 gap-10 my-4">
                <For each={data()}>
                    { (data) => (
                        <Card rounded={true} flat={true}>
                            <img class="rounded-md" src={data.img} alt='product img'/>
                            <h1 class="my-3 font-bold">{data.title}</h1>
                            <A href={"/product/" + data.id} class='btn'>Ver produto</A>
                        </Card>
                    )}
                </For>
            </div>
        </Show>
    );
}
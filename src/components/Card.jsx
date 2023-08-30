import { prototype } from "postcss/lib/previous-map";

export default function Card(props) {
    return (
        <div 
            class="bg-neutral-700 p-4 text-center"
            classList={{"rounded-md": props.rounded, "shadow-md": !props.flat}}
        >
            {props.children}
        </div>
    )
}
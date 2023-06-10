import { component$ } from "@builder.io/qwik";
import Screen from "~/components/commons/screen";
import { home } from "./style.css";

export default component$(() => {
    return (
        <Screen class={home}>
            <h1>Home</h1>
        </Screen>
    )
});

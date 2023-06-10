import { component$, Slot } from "@builder.io/qwik";
import { screen } from "./style.css";
import type { ClassList } from "@builder.io/qwik";

type Props = {
  class?: ClassList;
};

export default component$<Props>(({ class: className } = { class: "" }) => {
  return (
    <main class={[screen, className]}>
      <Slot></Slot>
    </main>
  );
});

import { $, component$, useOnWindow } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Screen from "~/components/commons/screen";
import Wallpaper from "~/components/commons/wallpaper";
import Clock from "~/components/lockscreen/clock";
import Profile from "~/components/lockscreen/profile";
import { lockscreen } from "~/components/lockscreen/style.css";
import { goFullScreen, isFullScreen } from "~/helpers";

export default component$(() => {

  useOnWindow("mousedown", $(() => {
    if (!isFullScreen()) goFullScreen();
  }));

  return (
    <Screen class={lockscreen}>
      <Clock />
      <Profile username="raja" />
      <Wallpaper />
    </Screen>
  );
});

export const head: DocumentHead = {
  title: "macOS Sonoma",
  meta: [
    {
      name: "description",
      content: "Webience macOS Sonoma",
    },
  ],
};

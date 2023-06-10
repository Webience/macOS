import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { isDarkMode } from "~/helpers";
import { wallpaper as wallpaperClass } from "./style.css";

const availableWallpapers = import.meta.glob("./imgs/*.webp", { eager: true });

function useWallpaper(name: string = "default") {
  const wallpaper = useSignal<string>();

  useVisibleTask$(() => {
    const theme = isDarkMode() ? "dark" : "light";
    const wallpaperImport: any =
      availableWallpapers[`./imgs/${name}-${theme}.webp`];
    wallpaper.value = wallpaperImport.default;
  });

  return wallpaper;
}

export default component$(() => {
  const wallpaper = useWallpaper();
  return <img src={wallpaper.value} class={wallpaperClass} alt="wallpaper" />;
});

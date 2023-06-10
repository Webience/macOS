import {
  $,
  component$,
  noSerialize,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { clock, date as dateStyle, time } from "./style.css";

type Clock = {
  top: string; // Saturday, 10 June
  bottom: string; // 10:00
};

function useDateTime() {
  const date = useSignal<Clock>({
    top: "",
    bottom: "",
  });

  useVisibleTask$(({ cleanup }) => {
    const DateFormatter = noSerialize(
      new Intl.DateTimeFormat(navigator.language, {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    );

    const TimeFormatter = noSerialize(
      new Intl.DateTimeFormat(navigator.language, {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );

    const updateDate = $(() => {
      const DateFactory = new Date();
      date.value = {
        top: DateFormatter!.format(DateFactory)!,
        bottom: TimeFormatter!.format(DateFactory)!,
      };
      date.value.bottom = date.value.bottom.replace(/(AM|PM)/, "").trim();
    });

    updateDate();
    const interval = setInterval(updateDate, 5e3);
    cleanup(() => clearInterval(interval));
  });

  return date;
}

export default component$(() => {
  const date = useDateTime();
  return (
    <div class={clock}>
      <div class={dateStyle}>{date.value.top}</div>
      <div class={time}>{date.value.bottom}</div>
    </div>
  );
});

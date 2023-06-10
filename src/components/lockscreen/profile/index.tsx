import {
  $,
  component$,
  useOnDocument,
  useSignal,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { pic, profile, card, passwordInput, caption, name } from "./style.css";
import { useNavigate } from "@builder.io/qwik-city";

type Props = {
  username: string;
};

export default component$<Props>(({ username }) => {
  const usePassword = useSignal(false);

  const password = useStore<{
    value: string;
    element?: HTMLInputElement;
  }>({
    value: "",
  });

  const focusPassword = $(() => {
    usePassword.value = true;
  });

  useOnDocument(
    "keydown",
    $((event) => {
      if (!usePassword.value) {
        password.value += (event as KeyboardEvent).key;
      }
      focusPassword();
    })
  );

  useTask$(({ track }) => {
    const passwordElem = track(() => password.element);
    if (usePassword.value) passwordElem?.focus();
  });

  // TODO: Add touch ID support

  const goto = useNavigate();
  useTask$(({ track }) => {
    const userPassWord = track(() => password.value);
    if (userPassWord === "1234") goto("/home");
  });

  return (
    <div class={card}>
      <div class={profile}>
        <img
          src={`https://api.dicebear.com/6.x/thumbs/svg?seed=${username}`}
          class={pic}
        />
      </div>
      <div>
        {usePassword.value ? (
          <input
            type="password"
            class={passwordInput}
            ref={(elem) => (password.element = elem as HTMLInputElement)}
            value={password.value}
            onInput$={() => {
              password.value = password.element!.value;
            }}
          />
        ) : (
          <span class={name}>{username}</span>
        )}
      </div>
      <span class={caption} onClick$={focusPassword}>
        Touch ID or Enter Password
      </span>
    </div>
  );
});

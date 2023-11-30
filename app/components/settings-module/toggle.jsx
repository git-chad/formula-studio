import { useState } from "react";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Toggle({ onToggle }) {
  const [enabled, setEnabled] = useState(false);

  const handleChange = (newEnabled) => {
    setEnabled(newEnabled);
    if (onToggle) {
      onToggle(newEnabled);
    }
  };

  return (
    <Switch
      checked={enabled}
      onChange={handleChange}
      className={classNames(
        enabled ? "bg-fsgreen" : "bg-gray-200",
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out"
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? "translate-x-5" : "translate-x-0",
          "pointer-events-none inline-block h-5 w-5 transform bg-white rounded-full transition duration-200 ease-in-out"
        )}
      />
    </Switch>
  );
}

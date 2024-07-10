import { RefObject, useEffect, useState } from "react";
import createScrollSnap, { ScrollSnapSettings } from "scroll-snap";

export default function useScrollSnap(
  ref: RefObject<HTMLElement>,
  settings: ScrollSnapSettings,
  callback: () => void
) {
  const [scrollBind, setBind] = useState(() => () => {});
  const [scrollUnbind, setUnbind] = useState(() => () => {});

  useEffect(() => {
    const element = ref.current;

    if (element) {
      const { bind, unbind } = createScrollSnap(element, settings, callback);
      setBind(() => bind);
      setUnbind(() => unbind);
    }
  }, [callback, ref, settings]);

  return [scrollBind, scrollUnbind];
}

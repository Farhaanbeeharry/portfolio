import { useEffect, useId, useRef, useState } from "react";
import Icon from "./Icon.jsx";

/**
 * The CV control: one button that opens a menu of the two real language editions
 * rather than silently defaulting to English.
 *
 * A real menu, not a hover popover — it answers to Enter/Space, Escape, arrow
 * keys and Home/End, closes on outside click and on blur, and returns focus to
 * the trigger. Hover-only menus are unusable by keyboard and hostile on touch.
 */

export const CVS = [
  { code: "en", label: "English", sub: "PDF", href: "/assets/Farhaan Beeharry CV.pdf" },
  { code: "fr", label: "Français", sub: "PDF", href: "/assets/Farhaan Beeharry CV_FRENCH.pdf" },
];

export default function CvMenu({ variant = "primary", size = "sm", label = "CV", align = "end" }) {
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(0);
  const rootRef = useRef(null);
  const btnRef = useRef(null);
  const itemsRef = useRef([]);
  const id = useId();

  // outside click / focus loss
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!rootRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open]);

  useEffect(() => {
    if (open) itemsRef.current[cursor]?.focus();
  }, [open, cursor]);

  const close = (restore = true) => {
    setOpen(false);
    if (restore) btnRef.current?.focus();
  };

  const onTriggerKey = (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setCursor(0);
      setOpen(true);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor(CVS.length - 1);
      setOpen(true);
    }
  };

  const onMenuKey = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (c + 1) % CVS.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => (c - 1 + CVS.length) % CVS.length);
    } else if (e.key === "Home") {
      e.preventDefault();
      setCursor(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setCursor(CVS.length - 1);
    } else if (e.key === "Tab") {
      // leaving the menu closes it, without stealing focus back
      setOpen(false);
    }
  };

  const cls = ["btn", variant === "primary" ? "btn-primary" : variant === "ghost" ? "btn-ghost" : "", size === "sm" ? "btn-sm" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`cvmenu${align === "start" ? " start" : ""}`} ref={rootRef}>
      <button
        ref={btnRef}
        className={cls}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? id : undefined}
        onClick={() => { setCursor(0); setOpen((o) => !o); }}
        onKeyDown={onTriggerKey}
      >
        <Icon name="download" size={size === "sm" ? 14 : 15} />
        {label}
      </button>

      {open && (
        <div className="cvmenu-pop" role="menu" id={id} aria-label="Download CV" onKeyDown={onMenuKey}>
          {CVS.map((cv, i) => (
            <a
              key={cv.code}
              ref={(el) => (itemsRef.current[i] = el)}
              role="menuitem"
              tabIndex={-1}
              href={cv.href}
              target="_blank"
              rel="noopener"
              className="cvmenu-item"
              onClick={() => close(false)}
              onMouseEnter={() => setCursor(i)}
            >
              <span className="lang">{cv.label}</span>
              <span className="fmt">{cv.sub}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

import { Link } from "react-router-dom";
import AppShell from "../components/AppShell.jsx";
import Footer from "../components/Footer.jsx";
import Icon from "../components/Icon.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";
import { MOD_KEY, useHasKeyboard } from "../lib/platform.js";

export default function NotFound() {
  usePageMeta("Not found — Farhaan Beeharry");
  const hasKeyboard = useHasKeyboard();

  return (
    <AppShell activeId="overview" home={false} routeLabel="404">
      <main className="main">
        <section className="view">
          <div className="view-head">
            <h1 className="view-title">No such route</h1>
            <span className="mono meta" style={{ color: "var(--fg-3)" }}>404</span>
          </div>
          <p className="view-lead">
            That address isn't wired to anything. Everything is reachable from the
            Overview
            {hasKeyboard ? (
              <>
                {" "}— or press <span className="kbd">{MOD_KEY}</span>{" "}
                <span className="kbd">K</span> and search for it.
              </>
            ) : (
              <> — or search from the top bar.</>
            )}
          </p>
          <Link className="btn btn-primary" to="/">
            <Icon name="arrowLeft" size={15} />
            Back to the Overview
          </Link>
        </section>
        <Footer />
      </main>
    </AppShell>
  );
}

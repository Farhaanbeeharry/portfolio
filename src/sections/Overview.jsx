import { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import Icon from "../components/Icon.jsx";
import { contact, work, stores } from "../data/site.js";

/* three.js is ~119 kB gzipped and must never sit in front of the first paint.
   The route renders complete without it; the lattice fades in when it lands. */
const Field = lazy(() => import("../components/Field.jsx"));

/**
 * Pinned by the owner, not derived. This was `work.slice(-3)`, which surfaced
 * whatever happened to be last in the list (Fruitopia, NexStock, Lokal). These
 * three are the chosen shop window: MotoGate ships on both app stores, Pryowl is
 * the broadest SaaS build, Fruitopia the marketplace.
 */
const FEATURED = ["motogate", "pryowl", "fruitopia"];
const RECENT = FEATURED.map((slug) => work.find((w) => w.slug === slug)).filter(Boolean);

export default function Overview() {
  return (
    <section className="overview" id="overview" data-depth>
      <Suspense fallback={null}>
        <Field />
      </Suspense>

      <div className="overview-inner">
        <div className="ident layer layer-near">
          <span className="ident-status">
            <span className="live" aria-hidden="true" />
            Available for work · {contact.location}
          </span>

          <h1>Farhaan Beeharry</h1>
          <span className="role">Software &amp; Mobile Engineer</span>

          <p className="thesis">
            Five years shipping software that went live — <b>Flutter apps on the
            App Store</b>, full-stack platforms for clients in Mauritius, the UAE
            and France, and an irrigation system running on a NodeMCU. Everything
            on this site links to something you can open and check.
          </p>

          <div className="ident-actions">
            <a href="#work" className="btn btn-primary">
              <Icon name="grid" size={15} />
              View the work
            </a>
            <a
              href="/assets/Farhaan Beeharry CV.pdf"
              target="_blank"
              rel="noopener"
              className="btn"
            >
              <Icon name="download" size={15} />
              Download CV
            </a>
            <span className="tip">
              <span className="kbd">⌘</span>
              <span className="kbd">K</span>
              to jump anywhere
            </span>
          </div>
        </div>

        <div className="layer layer-far">
          <div className="now">
            <div className="now-bar">
              <span className="live" aria-hidden="true" />
              <span className="label">Now</span>
              <span className="mono" style={{ marginLeft: "auto", color: "var(--fg-3)" }}>
                since oct 2024
              </span>
            </div>

            <dl className="now-body">
              <div className="now-row">
                <dt>Current role</dt>
                <dd>
                  Mobile Engineer — Flutter
                  <span className="sub">XEFI Mauritius Center</span>
                </dd>
              </div>
              <div className="now-row">
                <dt>Shipping to</dt>
                <dd>
                  {/* The separator is a real word, not whitespace: JSX collapses
                      the newline between two elements, so these were rendering
                      as "Apple App StoreGoogle Play". */}
                  <span className="stores">
                    <a href={stores.apple.href} target="_blank" rel="noopener">
                      {stores.apple.label}
                    </a>
                    <span className="sep">and</span>
                    <a href={stores.google.href} target="_blank" rel="noopener">
                      {stores.google.label}
                    </a>
                  </span>
                  <span className="sub">
                    MotoGate and PTMA are live on both; the XEFI apps ship under the{" "}
                    <a href={stores.xefi.href} target="_blank" rel="noopener">
                      XEFI Software
                    </a>{" "}
                    account
                  </span>
                </dd>
              </div>
              <div className="now-row">
                <dt>Also open to</dt>
                <dd>Freelance builds — web, mobile and design</dd>
              </div>
            </dl>

            {/* Labelled, because unlabelled it read as part of the row above it. */}
            <div className="now-strip">
              <span className="now-strip-label">Selected builds</span>
              <div className="now-thumbs">
                {RECENT.map((w) => (
                  <Link key={w.slug} to={`/portfolio/${w.slug}`} title={w.title} aria-label={w.title}>
                    <img src={w.thumb} alt="" loading="lazy" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#work" className="scroll-hint">
        Scroll
        <Icon name="arrowDown" size={12} />
      </a>
    </section>
  );
}

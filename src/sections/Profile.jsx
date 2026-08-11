import Icon from "../components/Icon.jsx";
import { contact } from "../data/site.js";

/**
 * What he is hired to do, as rows rather than as three equal columns of
 * pictogram + label + paragraph — that arrangement is the most recognisable
 * module on an AI-written page. Each row ends in something the visitor can open,
 * so the claim and its evidence sit on the same line.
 */
const DOES = [
  {
    icon: "mobile",
    title: "Mobile applications",
    body: "Flutter for iOS and Android, from state management and localisation through to release on both the Apple App Store and Google Play.",
    proof: { label: "See the mobile builds", href: "#work" },
  },
  {
    icon: "monitor",
    title: "Web platforms",
    body: "Full-stack builds in Angular, React, Java and Node — CRMs, dashboards, assessment systems and marketplaces, backed by real databases.",
    proof: { label: "Read the case files", href: "#work" },
  },
  {
    icon: "pen",
    title: "Interface design",
    body: "The flows, screens and prototypes that come before the build. Third prize at the FSC Mobile App Design Competition came out of it.",
    proof: { label: "Work on Behance", href: "https://www.behance.net/farhaanbeeharry" },
  },
];

export default function Profile() {
  return (
    <section className="view" id="profile">
      <div className="view-head">
        <h2 className="view-title">Profile</h2>
        <span className="mono meta" style={{ color: "var(--fg-3)" }}>
          {contact.location} · GMT+4
        </span>
      </div>

      <div className="profile-grid">
        <div className="prose">
          <p>
            I'm a software engineer with five years in development, four of them
            building commercial applications people actually use. Most of that has
            been Flutter — I'm currently a mobile engineer at XEFI Mauritius
            Center, where the apps I work on ship to the App Store.
          </p>
          <p>
            The rest has been broader than the job title suggests. I've written
            Angular and Java at ELCA, C# at Event Store, a Strapi backend and
            payment integration for a marketplace in the UAE, and a scraping stack
            for Stratalis. Before all of that I was wiring soil-moisture sensors
            to a NodeMCU to water plants from a phone.
          </p>
          <p>
            I care about work that is finished rather than merely delivered: clean
            code, considered interfaces, and being straightforward to work with.
          </p>
        </div>

        <dl className="spec">
          <div>
            <dt>Based in</dt>
            <dd>Port-Louis, MU</dd>
          </div>
          <div>
            <dt>Current role</dt>
            <dd>Mobile Engineer, XEFI</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>BSc Comp. Sci — First Class</dd>
          </div>
          <div>
            <dt>Languages</dt>
            <dd>English · French</dd>
          </div>
          <div>
            <dt>Email</dt>
            <dd><a href={`mailto:${contact.email}`}>{contact.email}</a></dd>
          </div>
          <div>
            <dt>Phone</dt>
            <dd><a href={contact.phoneHref}>{contact.phone}</a></dd>
          </div>
        </dl>
      </div>

      <div className="does">
        {DOES.map((d) => (
          <div className="does-row" key={d.title}>
            <h3>
              <Icon name={d.icon} size={17} />
              {d.title}
            </h3>
            <div>
              <p>{d.body}</p>
              <a
                className="proof"
                href={d.proof.href}
                {...(d.proof.href.startsWith("#") ? {} : { target: "_blank", rel: "noopener" })}
              >
                {d.proof.label}
                <Icon name={d.proof.href.startsWith("#") ? "arrowRight" : "external"} size={13} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

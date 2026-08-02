export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">About Me</span>
          <h2 className="section-title">
            Turning ideas into <span className="g">real products</span>
          </h2>
          <p className="section-lead">
            A responsible professional who loves clean code, thoughtful design
            and delivering high-quality work on time.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Experienced Software Engineer with nearly 5+ years in software
              development, including 4+ years in commercial application
              development. Proven ability to improve and develop software
              functionalities with a creative approach and strong problem-solving
              skills.
            </p>
            <p>
              A responsible professional, seeking to utilize skills and make a
              meaningful impact in an organization. Strong in communication and
              team-working, with excellent attention to detail and a commitment
              to producing high-quality work. Able to work independently and in a
              team, consistently delivering projects on time and to a high
              standard.
            </p>
          </div>

          <div className="reveal d1">
            <ul className="info-card">
              <li><span className="k">Age</span><span className="v">28</span></li>
              <li><span className="k">Residence</span><span className="v">Mauritius</span></li>
              <li><span className="k">Address</span><span className="v">Port-Louis</span></li>
              <li><span className="k">e-mail</span><span className="v"><a href="mailto:contact@farhaan.info">contact@farhaan.info</a></span></li>
              <li><span className="k">Phone</span><span className="v"><a href="tel:+23057076881">+230 5707 6881</a></span></li>
            </ul>
          </div>
        </div>

        <div className="services-grid">
          <article className="service reveal">
            <div className="ico"><i className="fa-solid fa-laptop-code"></i></div>
            <h3>Web Application Development</h3>
            <p>
              Web applications are foundational to the success of any
              organization. Building captivating tools with simplified user
              experiences facilitates a direct digital engagement with end users
              that is not possible via traditional means.
            </p>
          </article>
          <article className="service reveal d1">
            <div className="ico"><i className="fa-solid fa-pen-nib"></i></div>
            <h3>UI and UX Design</h3>
            <p>
              You have the vision; it's my job to turn it into a reality. I'll sit
              down with your team, listen to your ideas, and turn those ideas into
              a workable concept for a mobile/web application. Then I will work
              together with you to give your concept life.
            </p>
          </article>
          <article className="service reveal d2">
            <div className="ico"><i className="fa-solid fa-mobile-screen-button"></i></div>
            <h3>Mobile Application Development</h3>
            <p>
              With the proliferation of smartphone technology, it is more
              important than ever for brands to engage with their customers
              through effective and memorable mobile applications. I develop for
              both iOS and Android.
            </p>
          </article>
        </div>

        <div className="stats-grid" style={{ marginTop: "24px" }}>
          <div className="stat reveal">
            <i className="fa-solid fa-star"></i>
            <div className="num" data-count="62">0</div>
            <div className="lbl">Projects completed</div>
          </div>
          <div className="stat reveal d1">
            <i className="fa-solid fa-keyboard"></i>
            <div className="num"><span data-count="80">0</span>+ WPM</div>
            <div className="lbl">Fast typing speed</div>
          </div>
          <div className="stat reveal d2">
            <i className="fa-solid fa-mug-hot"></i>
            <div className="num" data-count="3">0</div>
            <div className="lbl">Cups of coffee daily</div>
          </div>
        </div>
      </div>
    </section>
  );
}

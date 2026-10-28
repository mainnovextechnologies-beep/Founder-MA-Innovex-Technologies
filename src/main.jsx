import React from 'react';
import { createRoot } from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ArrowDownRight, ArrowUpRight, Code2, Layers3, Lightbulb, Menu, MessageCircle, Phone, Mail, Sparkles, Target, X, Globe, BriefcaseBusiness } from 'lucide-react';
import './styles.css';

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://mainnovextechnologies.lovable.app';
const PROFILE_PATH = '/founder/ganesh-thirumalapudi';
const IMAGE_PATH = '/images/thirumalapudi-mano-ganesh-founder-ma-innovex-technologies.jpg';
const PROFILE_URL = `${SITE_URL}${PROFILE_PATH}`;
const IMAGE_URL = `${SITE_URL}${IMAGE_PATH}`;
const phone = '+919705074430';
const personSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization', '@id': `${SITE_URL}/#organization`,
      name: 'MA Innovex Technologies', url: SITE_URL,
      email: 'mainnovextechnologies@gmail.com',
      founder: { '@id': `${PROFILE_URL}#person` }
    },
    {
      '@type': 'ProfilePage', '@id': `${PROFILE_URL}#profilepage`, url: PROFILE_URL,
      name: 'Thirumalapudi Mano Ganesh | Founder of MA Innovex Technologies',
      mainEntity: { '@id': `${PROFILE_URL}#person` }, primaryImageOfPage: { '@type': 'ImageObject', url: IMAGE_URL }
    },
    {
      '@type': 'Person', '@id': `${PROFILE_URL}#person`,
      name: 'Thirumalapudi Mano Ganesh', alternateName: ['Ganesh Thirumalapudi', 'Thirumalapudi Ganesh', 'Ganesh'],
      jobTitle: 'Founder', image: [IMAGE_URL], url: PROFILE_URL,
      description: 'Thirumalapudi Mano Ganesh is the founder of MA Innovex Technologies, focused on building digital experiences and technology solutions for businesses.',
      email: 'ganeshthirumalapudi1101@gmail.com', telephone: phone,
      worksFor: { '@id': `${SITE_URL}/#organization` },
      sameAs: [SITE_URL]
    }
  ]
};

const services = [
  { icon: Code2, no: '01', title: 'Websites & digital experiences', text: 'Responsive, accessible business websites built to communicate clearly and turn visits into meaningful enquiries.' },
  { icon: Layers3, no: '02', title: 'Web & software solutions', text: 'Purpose-driven digital products that help turn business requirements into practical, maintainable software.' },
  { icon: Sparkles, no: '03', title: 'AI-enabled ideas', text: 'Exploring ways AI and automation can make digital workflows more useful, efficient and approachable.' },
  { icon: Target, no: '04', title: 'Digital presence & SEO', text: 'A considered foundation for discoverability: clear content, technical basics, performance and a consistent brand.' },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <>
    <HelmetProvider>
      <Helmet>
        <title>Thirumalapudi Mano Ganesh | Founder of MA Innovex Technologies</title>
        <meta name="description" content="Meet Thirumalapudi Mano Ganesh, also known as Ganesh Thirumalapudi, Founder of MA Innovex Technologies. Explore his founder vision, digital work and contact details." />
        <link rel="canonical" href={PROFILE_URL} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Thirumalapudi Mano Ganesh | Founder of MA Innovex Technologies" />
        <meta property="og:description" content="Official founder profile of Thirumalapudi Mano Ganesh, Founder of MA Innovex Technologies." />
        <meta property="og:url" content={PROFILE_URL} />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:image:alt" content="Thirumalapudi Mano Ganesh, Founder of MA Innovex Technologies" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      </Helmet>
    </HelmetProvider>
    <div className="site-shell">
      <div className="topline"><span><span className="live-dot"/> INDEPENDENT THINKING. PRACTICAL TECHNOLOGY.</span><a href="https://mainnovextechnologies.lovable.app/" target="_blank" rel="noreferrer">MA Innovex Technologies <ArrowUpRight size={13}/></a></div>
      <header className="nav wrap">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Ganesh founder portfolio home"><span className="brand-mark">G<span>.</span></span><span className="brand-copy"><b>GANESH</b><small>FOUNDER / BUILDER</small></span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation"><a href="#story" onClick={closeMenu}>My story</a><a href="#focus" onClick={closeMenu}>What I build</a><a href="#approach" onClick={closeMenu}>Approach</a><a href="#contact" onClick={closeMenu} className="nav-contact">Let's talk <ArrowUpRight size={15}/></a></nav>
      </header>

      <main>
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line"/> FOUNDER OF MA INNOVEX TECHNOLOGIES</div>
            <h1>Thirumalapudi<br/><span>Mano Ganesh.</span></h1>
            <p className="hero-lead">Turning thoughtful ideas into <em>digital experiences</em> that move businesses forward.</p>
            <p className="hero-description">I’m Ganesh Thirumalapudi, founder of MA Innovex Technologies. I care about useful technology, clear design, and building digital foundations that help businesses show up with confidence.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Start a conversation <ArrowUpRight size={17}/></a><a className="text-link" href="#story">Get to know me <ArrowDownRight size={16}/></a></div>
            <div className="hero-proof"><span className="proof-icon"><Lightbulb size={17}/></span><span><b>Curiosity-led. Purpose-built.</b><small>Technology with a reason behind it.</small></span></div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
            <div className="image-frame"><img src={IMAGE_PATH} alt="Thirumalapudi Mano Ganesh, Founder of MA Innovex Technologies" fetchPriority="high"/><div className="image-label"><span className="label-dot"/><span><b>THIRUMALAPUDI MANO GANESH</b><small>FOUNDER · MA INNOVEX TECHNOLOGIES</small></span></div></div>
            <div className="floating-note note-top"><span className="note-icon"><Sparkles size={17}/></span><span><b>Ideas → Impact</b><small>Build with intention</small></span></div>
            <div className="floating-note note-bottom"><span className="note-number">01</span><span><b>Founder mindset</b><small>Learn. Build. Improve.</small></span></div>
            <div className="visual-caption">A PERSONAL PORTFOLIO / 2026</div>
          </div>
          <a className="scroll-cue" href="#story"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="identity-strip"><div className="wrap identity-inner"><span>KNOWN AS</span><b>Thirumalapudi Mano Ganesh</b><i>✳</i><b>Ganesh Thirumalapudi</b><i>✳</i><b>Ganesh</b><i>✳</i><b>Founder, MA Innovex Technologies</b></div></section>

        <section className="story-section section wrap" id="story"><div className="section-kicker">01 / THE PERSON BEHIND THE WORK</div><div className="story-grid"><h2>Building for the<br/><span>real world.</span></h2><div className="story-body"><p className="large-copy">Technology matters most when it solves something real.</p><p>As the founder of MA Innovex Technologies, I’m working toward a simple idea: make digital technology more useful, accessible, and thoughtfully designed for businesses.</p><p>My focus is on understanding the need behind an idea, shaping a clear digital experience, and building solutions with care. I believe the best work combines curiosity, practical problem-solving, continuous learning, and attention to the details people actually experience.</p><a className="inline-link" href="https://mainnovextechnologies.lovable.app/" target="_blank" rel="noreferrer">Explore MA Innovex Technologies <ArrowUpRight size={16}/></a></div></div></section>

        <section className="focus-section section" id="focus"><div className="wrap"><div className="section-head"><div><div className="section-kicker">02 / AREAS OF FOCUS</div><h2>Ideas deserve<br/><span>good execution.</span></h2></div><p>From the first sketch to the live experience, I value clarity, usefulness, and thoughtful implementation.</p></div><div className="service-grid">{services.map(({icon: Icon,no,title,text})=><article className="service-card" key={no}><div className="service-top"><span className="service-icon"><Icon size={20}/></span><span className="service-no">{no}</span></div><h3>{title}</h3><p>{text}</p><div className="card-rule"/></article>)}</div></div></section>

        <section className="approach-section section wrap" id="approach"><div className="approach-panel"><div className="approach-left"><div className="section-kicker">03 / HOW I THINK</div><h2>Less noise.<br/><span>More meaning.</span></h2><p>Good digital work is not just about what looks impressive. It is about what works, what feels clear, and what helps someone take the next step.</p><a className="button button-light" href="#contact">Build something useful <ArrowUpRight size={17}/></a></div><div className="principles"><div><span>01</span><section><h3>Understand first</h3><p>Start with the problem, the people, and the purpose.</p></section></div><div><span>02</span><section><h3>Design with clarity</h3><p>Make the experience intuitive, accessible, and responsive.</p></section></div><div><span>03</span><section><h3>Build to improve</h3><p>Value performance, maintainability, and continuous learning.</p></section></div></div></div></section>

        <section className="contact-section section wrap" id="contact"><div className="contact-card"><div className="contact-orb"/><div className="section-kicker">04 / LET'S CONNECT</div><h2>Have an idea?<br/><span>Let's make it real.</span></h2><p>For project enquiries, collaborations, or a conversation about digital solutions, reach out directly.</p><div className="contact-actions"><a className="button button-primary" href={`https://wa.me/${phone.replace('+','')}?text=${encodeURIComponent('Hi Ganesh, I would like to discuss a project.')}`} target="_blank" rel="noreferrer"><MessageCircle size={17}/> Chat on WhatsApp <ArrowUpRight size={16}/></a><a className="button button-outline" href={`tel:${phone}`}><Phone size={17}/> Call Ganesh</a></div><div className="contact-details"><a href="mailto:ganeshthirumalapudi1101@gmail.com"><Mail size={16}/><span><small>PERSONAL EMAIL</small>ganeshthirumalapudi1101@gmail.com</span><ArrowUpRight size={14}/></a><a href="mailto:mainnovextechnologies@gmail.com"><BriefcaseBusiness size={16}/><span><small>COMPANY EMAIL</small>mainnovextechnologies@gmail.com</span><ArrowUpRight size={14}/></a></div></div></section>
      </main>
      <footer className="footer"><div className="wrap footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">G<span>.</span></span><span className="brand-copy"><b>GANESH</b><small>FOUNDER / BUILDER</small></span></a><p>Thirumalapudi Mano Ganesh<br/><span>Founder of MA Innovex Technologies</span></p><a className="back-top" href="#home">BACK TO TOP ↑</a></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Thirumalapudi Mano Ganesh. All rights reserved.</span><a href="https://mainnovextechnologies.lovable.app/" target="_blank" rel="noreferrer"><Globe size={13}/> MA Innovex Technologies</a></div></footer>
      <div className="floating-contact" aria-label="Quick contact"><a className="float-wa" href={`https://wa.me/${phone.replace('+','')}`} target="_blank" rel="noreferrer" aria-label="Chat with Ganesh on WhatsApp"><MessageCircle size={22}/></a><a className="float-phone" href={`tel:${phone}`} aria-label="Call Ganesh"><Phone size={21}/></a></div>
    </div>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);

import { useEffect, useState } from 'react'
import './App.css'
import cyberHero from './assets/cyber-hero.png'
import logo from './assets/logo.png'
import kaliIcon from './assets/kali.png'
import winServerIcon from './assets/win-server.png'
import ubuntuIcon from './assets/ubuntu.png'
import winIcon from './assets/windows.png'

function App() {
  const [navScrolled, setNavScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavScrolled(true)
      } else {
        setNavScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav id="main-nav" style={{
        padding: navScrolled ? '0.75rem 0' : '1.25rem 0',
        boxShadow: navScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.1)' : 'none'
      }}>
        <div className="nav-container">
          <a href="#" className="logo" id="nav-logo">
            <img src={logo} alt="SecOps Logo" className="logo-img" />
          </a>

          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#lab">Lab</a></li>
            <li><a href="#repository">Repository</a></li>
            <li><a href="#resume">Resume</a></li>
          </ul>

          <div className="nav-socials">
            <a href="https://github.com/MelvinViado" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
            </a>
            <a href="https://indeed.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="Indeed">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.69 17h-1.62v-7.2h1.62v7.2zm0-8.28h-1.62v-1.62h1.62v1.62zm7.38 8.28h-1.62v-4.14c0-1.103-.897-2-2-2s-2 .897-2 2v4.14h-1.62v-7.2h1.62v.975c.435-.615 1.155-.975 1.89-.975 1.378 0 2.5 1.122 2.5 2.5v4.7z" /></svg>
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <span className="badge animate">Melvin Viado — Security Specialist</span>
            <h1 className="animate delay-1">Hi, I'm <span>Melvin Viado.</span></h1>
            <p className="animate delay-2">Detail-oriented Cybersecurity graduate dedicated to protecting organizational assets through proactive threat identification, vulnerability assessment, and the implementation of resilient defense configurations.</p>

            <div className="btn-group animate delay-3">
              <a href="#repository" className="btn btn-primary">View Repository</a>
              <a href="#resume" className="btn btn-secondary">My Resume</a>
            </div>
          </div>
          <div className="hero-image animate delay-2">
            <img src={cyberHero} alt="Cybersecurity Research Graphic" />
          </div>
        </section>

        <section id="skills" className="skills">
          <div className="section-header animate">
            <h2>Security Expertise</h2>
            <p>Comprehensive knowledge across the modern threat landscape.</p>
          </div>
          <div className="skills-grid">
            <div className="skill-card animate delay-1">
              <div className="skill-icon">🛡️</div>
              <h3>Offensive Security</h3>
              <p>Penetration testing, vulnerability research, and red teaming operations.</p>
            </div>
            <div className="skill-card animate delay-2">
              <div className="skill-icon">☁️</div>
              <h3>Cloud Security</h3>
              <p>Securing AWS/Azure environments and implementing Zero Trust architectures.</p>
            </div>
            <div className="skill-card animate delay-3">
              <div className="skill-icon">🔍</div>
              <h3>Threat Hunting</h3>
              <p>Incident response, digital forensics, and proactive log analysis.</p>
            </div>
          </div>
        </section>

        <section id="lab" className="lab">
          <div className="section-header animate">
            <h2>Lab Environments</h2>
            <p>Hands-on experience configuring and securing multi-OS enterprise simulations.</p>
          </div>
          <div className="lab-grid">
            <div className="lab-card animate delay-1">
              <div className="lab-icon">
                <img src={kaliIcon} alt="Kali Linux" className="lab-icon-img" />
              </div>
              <h3>Kali Linux</h3>
              <p>Offensive security testing, network mapping with Nmap, and exploitation research via Metasploit.</p>
            </div>
            <div className="lab-card animate delay-2">
              <div className="lab-icon">
                <img src={winServerIcon} alt="Windows Server" className="lab-icon-img" />
              </div>
              <h3>Windows Server</h3>
              <p>Configuring Active Directory, Domain Controllers, and Group Policy Objects (GPOs) for enterprise security.</p>
            </div>
            <div className="lab-card animate delay-3">
              <div className="lab-icon">
                <img src={ubuntuIcon} alt="Ubuntu Linux" className="lab-icon-img" />
              </div>
              <h3>Ubuntu / Linux</h3>
              <p>Server hardening, SSH configuration, and log management for open-source infrastructures.</p>
            </div>
            <div className="lab-card animate delay-4">
              <div className="lab-icon">
                <img src={winIcon} alt="Windows Desktop" className="lab-icon-img" />
              </div>
              <h3>Windows Desktop</h3>
              <p>Analyzing endpoint security, vulnerability patching, and defense-in-depth configurations.</p>
            </div>
          </div>
        </section>


        <section id="repository" className="repository">
          <div className="repository-card animate">
            <div className="repo-icon">📂</div>
            <h2>Full Academic Repository</h2>
            <p>Looking for more? My entire college curriculum, including lab write-ups, semester projects, and technical research, is organized and available in a dedicated GitHub repository.</p>
            <a href="https://github.com/melvinmviado/Melvin-Viado-Security-Labs" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Explore Repository on GitHub</a>
          </div>
        </section>

        <section id="resume" className="contact">
          <div className="contact-card animate">
            <h2>Want my Resume?</h2>
            <p>Download my full professional resume to view my certifications, detailed experience, and academic background.</p>
            <a href="/Melvin_Viado_Resume.pdf" download className="btn btn-primary">Download Resume (PDF)</a>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <p>&copy; 2026 SecOps. Defending the digital world.</p>
          <div className="footer-links">
            <a href="#">X / Twitter</a>
            <a href="https://github.com/MelvinViado">GitHub</a>
            <a href="#">BugCrowd</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

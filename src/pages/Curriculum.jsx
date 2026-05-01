import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Curriculum.css'

const DirectoryItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = item.children && item.children.length > 0

  const handleHeaderClick = (e) => {
    if (item.type === 'folder') {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
  }

  return (
    <div className="directory-item">
      <div className="directory-row">
        {hasChildren && (
          <span
            className={`arrow ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            ▶
          </span>
        )}
        {!hasChildren && <span className="arrow-spacer"></span>}

        <a
          href={item.url || '#'}
          target={item.type === 'file' ? '_blank' : '_self'}
          rel="noopener noreferrer"
          className={`directory-header ${item.type}`}
          onClick={handleHeaderClick}
        >
          <span className="icon">{item.type === 'folder' ? '📁' : '📄'}</span>
          <span className="name">{item.name}</span>
        </a>
      </div>

      {isOpen && hasChildren && (
        <div className="directory-children">
          {item.children.map((child, index) => (
            <DirectoryItem key={index} item={child} />
          ))}
        </div>
      )}
    </div>
  )
}

const Curriculum = () => {
  const curriculumData = [
    {
      name: 'Cybersecurity Curriculum',
      type: 'folder',
      url: '#',
      children: [
        {
          name: 'Wireless Network Security (INFT1101)',
          type: 'folder',
          url: '#',
          children: [
            { name: 'Lab 1: Nmap & Port Scanning.pdf', type: 'file', url: 'https://github.com/melvinmviado/Melvin-Viado-Security-Labs/blob/main/Durham-College-Cybersecurity/INFT1101-Wireless-Network-Security/Labs/Lab1-Packet-Sniffing-Wireshark.pdf' },
            { name: 'Lab 2: Wireshark Traffic Analysis.pdf', type: 'file', url: 'https://github.com/melvinmviado/Melvin-Viado-Security-Labs/blob/main/Durham-College-Cybersecurity/INFT1101-Wireless-Network-Security/Labs/Lab2-Router-Access-Point-Configuration.pdf' },
            { name: 'Lab 3: Install VMWare Kali Linux ALFA Card', type: 'file', url: 'https://github.com/melvinmviado/Melvin-Viado-Security-Labs/blob/main/Durham-College-Cybersecurity/INFT1101-Wireless-Network-Security/Labs/Lab3-Install-VMWare-Kali-Linux-ALFA-Card.pdf' }
          ]
        },
        {
          name: 'Digital Forensics (CS-305)',
          type: 'folder',
          url: '#',
          children: [
            { name: 'Lab 1: Disk Imaging with FTK.pdf', type: 'file', url: '/reports/forensics_lab1.pdf' },
            { name: 'Lab 2: Memory Analysis with Volatility.pdf', type: 'file', url: '/reports/forensics_lab2.pdf' },
            { name: 'Report: Malware Behavioral Analysis', type: 'file', url: '/reports/malware_analysis.pdf' }
          ]
        },
        {
          name: 'Ethical Hacking (CS-402)',
          type: 'folder',
          url: '#',
          children: [
            { name: 'Lab 1: Metasploit Fundamentals.pdf', type: 'file', url: '/reports/hacking_lab1.pdf' },
            { name: 'Lab 2: SQL Injection & XSS.pdf', type: 'file', url: '/reports/hacking_lab2.pdf' },
            { name: 'Final: Penetration Test Report', type: 'file', url: '/reports/final_pentest.pdf' }
          ]
        }
      ]
    }
  ]

  return (
    <div className="curriculum-page">
      <nav className="curriculum-nav">
        <div className="nav-container">
          <Link to="/" className="back-link">← Back to Portfolio</Link>
          <span className="page-title">Curriculum Directory</span>
        </div>
      </nav>

      <main className="curriculum-content">
        <header className="curriculum-header">
          <h1>Academic Repository</h1>
          <p>Explore the full breakdown of my cybersecurity coursework, including detailed lab reports and semester projects.</p>
        </header>

        <div className="directory-explorer">
          <div className="explorer-header">
            <div className="dots">
              <span></span><span></span><span></span>
            </div>
            <div className="title">curriculum-v1.0.root</div>
          </div>
          <div className="explorer-body">
            {curriculumData.map((item, index) => (
              <DirectoryItem key={index} item={item} />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Curriculum

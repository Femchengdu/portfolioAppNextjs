import Link from 'next/link'

const Nav = () => (
  <header>
    <nav>
        <ul>
            <li>
            <h1>
                <Link href="/">
                <span className="fas fa-code" aria-hidden="true"></span>
                Freenovation &nbsp;<span role="img" aria-label="hacker">💻</span>
                </Link>
            </h1>
            </li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="about.html">Projects</Link></li>
            <li>
            <Link href="https://www.linkedin.com/in/samuel-ajayi-full-stack/" target="_blank">
                <span className="fab fa-linkedin" aria-hidden="true"></span>
                <span className="sr-only">LinkedIn</span>
            </Link>
            </li>
            <li>
            <Link href="https://github.com/Femchengdu" target="_blank">
                <span className="fab fa-github-square" aria-hidden="true"></span>
                <span className="sr-only">Github</span>
            </Link>
            </li>
            <li><Link href="https://www.dropbox.com/s/3z2hm5gu3v2lrfy/JenKramerCV.pdf?dl=0">Resume</Link></li>
        </ul>
    </nav>
  </header>
)

export default Nav

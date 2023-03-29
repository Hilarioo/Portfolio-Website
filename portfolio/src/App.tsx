import { FC, useEffect, useState } from 'react';
// Components
import AboutMe from './components/AboutMe';
import Accomplishments from './components/Accomplishments';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Qualifications from './components/Qualifications';
import Skills from './components/Skills';
// Context
import { SkillsProvider } from './context/SkillsContext';

const App: FC = () => {
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		const scrollUp = () => {
			if (window.scrollY >= 560) setShowScroll(true);
			else setShowScroll(false);
		};

		window.addEventListener('scroll', scrollUp);
	}, []);

	return (
		<>
			<Nav />

			<main className='main'>
				<Home />
				<AboutMe />
				<SkillsProvider>
					<Skills />
				</SkillsProvider>
				<Qualifications />
				<Portfolio />
				<Accomplishments />
				<Contact />
			</main>

			<Footer />

			<a
				href='#'
				className={showScroll ? 'show-scroll scroll-up' : 'scroll-up'}
				id='scroll-up'>
				<i className='uil uil-arrow-up scroll-up-icon'></i>
			</a>
		</>
	);
};

export default App;

import { FC, useEffect, useState } from 'react';

const Nav: FC = () => {
	const [icon, setIcon] = useState('uil-moon');
	const [theme, setTheme] = useState('light');
	const [showMenu, setShowMenu] = useState(false);

	useEffect(() => {
		const localIcon = window.localStorage.getItem('selected-icon');
		const localTheme = window.localStorage.getItem('selected-theme');
		const sections = document.querySelectorAll('section[id]');

		if (localIcon) setIcon(localIcon);
		if (localTheme) setTheme(localTheme);

		if (localTheme === 'dark') document.body.classList.add('dark-theme');
		else document.body.classList.remove('dark-theme');

		// Scroll section active link
		const scrollActive = () => {
			const scrollY = window.pageYOffset;

			sections.forEach((current) => {
				const ccurrent = current as unknown as HTMLElement;
				const sectionHeight = ccurrent.offsetHeight;
				const sectionTop = ccurrent.offsetTop - 50;
				const sectionId = ccurrent.getAttribute('id');

				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					document
						?.querySelector('.nav-menu a[href*=' + sectionId + ']')
						?.classList.add('active-link');
				} else {
					document
						?.querySelector('.nav-menu a[href*=' + sectionId + ']')
						?.classList.remove('active-link');
				}
			});
		};

		// Change background header
		const scrollHeader = () => {
			const nav = document.getElementById('header');
			// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
			if (scrollY >= 80) nav?.classList.add('scroll-header');
			else nav?.classList.remove('scroll-header');
		};

		window.addEventListener('scroll', scrollHeader);
		window.addEventListener('scroll', scrollActive);
	}, []);

	const toggleTheme = () => {
		if (theme === 'light') {
			setIcon('uil-sun');
			setTheme('dark');

			window.localStorage.setItem('selected-icon', 'uil-sun');
			window.localStorage.setItem('selected-theme', 'dark');

			document.body.classList.add('dark-theme');
		} else {
			setIcon('uil-moon');
			setTheme('light');

			window.localStorage.setItem('selected-icon', 'uil-moon');
			window.localStorage.setItem('selected-theme', 'light');

			document.body.classList.remove('dark-theme');
		}
	};

	return (
		<header className='header' id='header'>
			<nav className='nav container'>
				<a href='#' className='nav-logo'>
					Jose
				</a>

				<div className={showMenu ? 'show-menu nav-menu' : 'nav-menu'}>
					<ul className='nav-list grid'>
						<li className='nav-item'>
							<a
								href='#home'
								className='nav-link active-link'
								onClick={() => setShowMenu(false)}>
								<i className='uil uil-estate nav-icon'></i> Home
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='#about'
								className='nav-link'
								onClick={() => setShowMenu(false)}>
								<i className='uil uil-user nav-icon'></i> About Me
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='#skills'
								className='nav-link'
								onClick={() => setShowMenu(false)}>
								<i className='uil uil-file-alt nav-icon'></i> Skills
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='#portfolio'
								className='nav-link'
								onClick={() => setShowMenu(false)}>
								<i className='uil uil-code-branch nav-icon'></i> Portfolio
							</a>
						</li>
						<li className='nav-item'>
							<a
								href='#contact'
								className='nav-link'
								onClick={() => setShowMenu(false)}>
								<i className='uil uil-message nav-icon'></i> Contact Me
							</a>
						</li>
					</ul>
					<i
						className='uil uil-times nav-close'
						onClick={() => setShowMenu(false)}></i>
				</div>

				<div className='nav-btns'>
					<i className={'uil change-theme ' + icon} onClick={toggleTheme}></i>

					<div
						className='nav-toggle'
						onClick={() => {
							setShowMenu(true);
						}}>
						<i className='uil uil-apps'></i>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Nav;

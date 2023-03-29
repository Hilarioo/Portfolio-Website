import { FC, useState } from 'react';

const Qualifications: FC = () => {
	const [activeTab, setActiveTab] = useState('Education');

	const toggleTab = () => {
		if (activeTab === 'Education') setActiveTab('Work');
		else setActiveTab('Education');
	};

	return (
		<section className='qualification section'>
			<h2 className='section-title'>Qualifications</h2>
			<span className='section-subtitle'>My Personal Journey</span>

			<div className='qualification-container container'>
				<div className='qualification-tabs'>
					<div
						className={
							activeTab === 'Education'
								? 'qualification-button buton-flex qualification-active'
								: 'qualification-button buton-flex'
						}
						data-target='#education'
						onClick={toggleTab}>
						<i className='uil uil-graduation-cap qualification-icon'></i>
						Education
					</div>
					<div
						className={
							activeTab === 'Work'
								? 'qualification-button buton-flex qualification-active'
								: 'qualification-button buton-flex'
						}
						data-target='#work'
						onClick={toggleTab}>
						<i className='uil uil-briefcase-alt qualification-icon'></i>
						Work
					</div>
				</div>

				<div className='qualification-sections'>
					<div
						className={
							activeTab === 'Education'
								? 'qualification-content qualification-active'
								: 'qualification-content'
						}
						data-content
						id='education'>
						<div className='qualification-data'>
							<div>
								<h3 className='qualification-title'>Computer Science B.S</h3>
								<span className='qualification-subtitle'>
									San Francisco State University
								</span>
								<div className='qualification-calendar'>
									<i className='uil uil-calendar-alt'></i>
									&emsp;2019 - 2022
								</div>
							</div>

							<div>
								<span className='qualification-rounder'></span>
								<span className='qualification-line'></span>
							</div>
						</div>

						<div className='qualification-data'>
							<div></div>

							<div>
								<span className='qualification-rounder'></span>
								<span className='qualification-line'></span>
							</div>

							<div>
								<h3 className='qualification-title'>Concurrent Enrollment</h3>
								<span className='qualification-subtitle'>UC Berkeley</span>
								<div className='qualification-calendar'>
									<i className='uil uil-calendar-alt'></i>
									&emsp;2017
								</div>
							</div>
						</div>

						<div className='qualification-data'>
							<div>
								<h3 className='qualification-title'>
									Mathematics & Physics A.S
								</h3>
								<span className='qualification-subtitle'>
									Los Medanos Community College
								</span>
								<div className='qualification-calendar'>
									<i className='uil uil-calendar-alt'></i>
									&emsp;2015 - 2018
								</div>
							</div>

							<div>
								<span className='qualification-rounder'></span>
							</div>
						</div>
					</div>

					<div
						className={
							activeTab === 'Work'
								? 'qualification-content qualification-active'
								: 'qualification-content'
						}
						data-content
						id='work'>
						<div className='qualification-data'>
							<div>
								<h3 className='qualification-title'>Software Engineer</h3>
								<span className='qualification-subtitle'>Verint</span>
								<div className='qualification-calendar'>
									<i className='uil uil-calendar-alt'></i>
									&emsp;2022 - present
								</div>
							</div>

							<div>
								<span className='qualification-rounder'></span>
								<span className='qualification-line'></span>
							</div>
						</div>

						<div className='qualification-data'>
							<div></div>
							<div>
								<span className='qualification-rounder'></span>
								<span className='qualification-line'></span>
							</div>
							<div>
								<h3 className='qualification-title'>Sr. Customer Specialist</h3>
								<span className='qualification-subtitle'>CarMax</span>
								<div className='qualification-calendar'>
									<i className='uil uil-calendar-alt'></i>
									&emsp;2019 - 2022
								</div>
							</div>
						</div>

						<div className='qualification-data'>
							<div>
								<h3 className='qualification-title'>
									Computer Science Instructor
								</h3>
								<span className='qualification-subtitle'>Coding 4 Kids</span>
								<div className='qualification-calendar'>
									<i className='uil uil-calendar-alt'></i>
									&emsp;2018
								</div>
							</div>
							<div>
								<span className='qualification-rounder'></span>
								<span className='qualification-line'></span>
							</div>
						</div>

						<div className='qualification-data'>
							<div></div>
							<div>
								<span className='qualification-rounder'></span>
								<span className='qualification-line'></span>
							</div>
							<div>
								<h3 className='qualification-title'>Digital Marketing Guide</h3>
								<span className='qualification-subtitle'>Magnified Media</span>
								<div className='qualification-calendar'>
									<i className='uil uil-calendar-alt'></i>
									&emsp;2017 - 2018
								</div>
							</div>
						</div>

						<div className='qualification-data'>
							<div>
								<h3 className='qualification-title'>
									Student Ambassador & Tutor
								</h3>
								<span className='qualification-subtitle'>
									Los Medanos College
								</span>
								<div className='qualification-calendar'>
									<i className='uil uil-calendar-alt'></i>
									&emsp;2016 - 2018
								</div>
							</div>
							<div>
								<span className='qualification-rounder'></span>
								<span className='qualification-line'></span>
							</div>
						</div>

						<div className='qualification-data'>
							<div></div>
							<div>
								<span className='qualification-rounder'></span>
							</div>
							<div>
								<h3 className='qualification-title'>Line Cook</h3>
								<span className='qualification-subtitle'>
									Black Angus Steakhouse
								</span>
								<div className='qualification-calendar'>
									<i className='uil uil-calendar-alt'></i>
									&emsp;2014 - 2015
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Qualifications;

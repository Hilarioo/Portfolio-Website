import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import projects from '../assets/data/projects';

const Portfolio: FC = () => {
	return (
		<section className='portfolio section' id='portfolio'>
			<h2 className='section-title'>Porfolio</h2>
			<span className='section-subtitle'>Most recent work</span>

			<Swiper
				modules={[Navigation, Pagination, Scrollbar]}
				cssMode={true}
				loop={true}
				navigation={{
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}}
				pagination={{ el: '.swiper-pagination', clickable: true }}
				mousewheel={true}
				keyboard={true}
				className='portfolio-container container swiper-container'>
				<div className='swiper-wrapper'>
					{projects.map((project, i) => (
						<SwiperSlide
							key={i}
							className='portfolio-content grid swiper-slide'>
							<img
								src={project.image}
								className='portfolio-img'
								alt={project.title + ' gif'}
								id={project.title.toLowerCase().replace(/\s/g, '-') + '-gif'}
							/>
							<div className='portfolio-data'>
								<h3 className='portfolio-title'>{project.title}</h3>
								<p className='portfolio-description'>{project.description}</p>
								<a
									href={project.url}
									className='button button-flex button-small portfolio-button'>
									View
									<i className='uil uil-arrow-right button-icon'></i>
								</a>
							</div>
						</SwiperSlide>
					))}
				</div>
				<div className='swiper-button-next'>
					<i className='uil uil-angle-right-b swiper-portfolio-icon'></i>
				</div>
				<div className='swiper-button-prev'>
					<i className='uil uil-angle-left-b swiper-portfolio-icon'></i>
				</div>
				<div className='swiper-pagination'></div>
			</Swiper>
		</section>
	);
};

export default Portfolio;

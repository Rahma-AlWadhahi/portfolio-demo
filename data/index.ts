import nextConfig from '../next.config.mjs';
export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Testimonials', link: '#testimonials' },
	{ name: 'Contact', link: '#contact' },
];

export const gridItems = [
	{
		id: 1,
		title: 'I prioritize client collaboration, fostering open communication ',
		description: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: `${nextConfig.basePath}/b1.svg`,
		spareImg: '',
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'My tech stack',
		description: 'I constantly try to improve',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Tech enthusiast with a passion for development.',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: `${nextConfig.basePath}/grid.svg`,
		spareImg: `${nextConfig.basePath}/b4.svg`,
	},

	{
		id: 5,
		title: 'Currently building a JS Animation library',
		description: 'The Inside Scoop',
		className: 'md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center md:justify-start lg:justify-center',
		img: `${nextConfig.basePath}/b5.svg`,
		spareImg: `${nextConfig.basePath}/grid.svg`,
	},
	{
		id: 6,
		title: 'Do you want to start a project together?',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: '',
	},
];

export const projects = [
	{
		id: 1,
		title: 'Rahma Al-Wadhahi - Personal Profile',
		des: 'This website showcases the personal and professional profile of Rahma Al-Wadhahi. It includes sections on her educational background, professional experience, skills, projects, and contact information. The site is designed to highlight her expertise and accomplishments in a user-friendly and visually appealing manner.',
		img: `${nextConfig.basePath}/p1.svg`,
		iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
		link: 'https://rahma-alwadhahi.github.io/profile/',
	},
	{
		id: 2,
		title: 'Rahma Al-Wadhahi - Personal Blog',
		des: 'This personal blog by Rahma Al-Wadhahi features a variety of articles focused on technology and its impact on different aspects of life, particularly the workplace. It includes sections like Home, About, Blog, and Contact, and provides readers with insightful posts and updates in an engaging format. The blog is designed to share knowledge, experiences, and reflections on technological advancements and their broader implications.',
		img: `${nextConfig.basePath}/p2.svg`,
		iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
		link: 'https://rahma-alwadhahi.github.io/personal-blog-demo/',
	},
];

export const testimonials = [
	{
		quote:
			'Working with Rahma was a fantastic experience. Her attention to detail, creativity, and commitment to excellence are truly commendable. She consistently exceeded our expectations and brought innovative ideas to the table.',
		name: 'Samantha Lee',
		title: 'CEO of Innovatech Solutions',
	},
	{
		quote:
			"Rahma's expertise in web development is outstanding. Her ability to translate complex requirements into seamless user experiences is remarkable. She's a valuable asset to any project.",
		name: 'David Kim',
		title: 'CTO of NexaTech',
	},
	{
		quote:
			'Collaborating with Rahma has been a pleasure. Her professionalism and technical skills are top-notch. She consistently delivers high-quality work on time and within budget.',
		name: 'Emily Rivera',
		title: 'Project Manager at TechWave',
	},
	{
		quote:
			"Rahma's dedication and passion for her work shine through in every project. She brings a unique perspective and a high level of creativity that elevates the final product.",
		name: 'Alex Johnson',
		title: 'Founder of Creative Minds',
	},
	{
		quote:
			'Rahma is an exceptional developer with a keen eye for detail. Her ability to solve complex problems and deliver elegant solutions makes her an invaluable team member.',
		name: 'Jessica Martinez',
		title: 'Lead Developer at CodeCraft',
	},
];

export const companies = [
	{
		id: 1,
		name: 'cloudinary',
		img: `${nextConfig.basePath}/cloud.svg`,
		nameImg: `${nextConfig.basePath}/cloudName.svg`,
	},
	{
		id: 2,
		name: 'appwrite',
		img: `${nextConfig.basePath}/app.svg`,
		nameImg: `${nextConfig.basePath}/appName.svg`,
	},
	{
		id: 3,
		name: 'HOSTINGER',
		img: `${nextConfig.basePath}/host.svg`,
		nameImg: `${nextConfig.basePath}/hostName.svg`,
	},
	{
		id: 4,
		name: 'stream',
		img: `${nextConfig.basePath}/s.svg`,
		nameImg: `${nextConfig.basePath}/streamName.svg`,
	},
	{
		id: 5,
		name: 'docker.',
		img: `${nextConfig.basePath}/dock.svg`,
		nameImg: `${nextConfig.basePath}/dockerName.svg`,
	},
];

export const workExperience = [
	{
		id: 1,
		title: 'Freelance Frontend Web Developer',
		desc: 'Assisted in the development of a web-based platform using React.js, enhancing interactivity.',
		className: 'md:col-span-2',
		thumbnail: `${nextConfig.basePath}/exp1.svg`,
	},
	{
		id: 2,
		title: 'Mobile App Developer',
		desc: 'Designed and developed mobile app for both iOS & Android platforms using Flutter as well as native iOS.',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: `${nextConfig.basePath}/exp2.svg`,
	},
	{
		id: 3,
		title: 'Freelance App Dev Project',
		desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: `${nextConfig.basePath}/exp3.svg`,
	},
	{
		id: 4,
		title: 'Mobile iOS native Developer Intern',
		desc: 'Developed and maintained mobile applications for both iPhone and iPad users.',
		className: 'md:col-span-2',
		thumbnail: `${nextConfig.basePath}/exp4.svg`,
	},
];

export const socialMedia = [
	{
		id: 1,
		img: `${nextConfig.basePath}/git.svg`,
		url: `https://github.com/Rahma-AlWadhahi`,
	},
	{
		id: 2,
		img: `${nextConfig.basePath}/twit.svg`,
		url: `https://twitter.com/Rahma_AlWadhahi`,
	},
	{
		id: 3,
		img: `${nextConfig.basePath}/link.svg`,
		url: `https://www.linkedin.com/in/rahma-alwadhahi`,
	},
];

export const leftLists = ['Javascript', 'React.js', 'Next.js', 'Typescript'];

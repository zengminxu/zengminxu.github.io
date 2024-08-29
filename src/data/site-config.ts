export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    actions?: Link[];
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    pubsOnLandingPage?: number;
    pubsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Zengmin Xu',
    subtitle: 'Associate Professor',
    description: 'Website for Zengmin Xu and the research group.',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Researches',
            href: '/researches'
        },
        {
            text: 'Publications',
            href: '/pubs'
        },
        {
            text: 'People',
            href: '/people'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Contact via email',
            href: 'mailto:xzm@guet.edu.cn'
        }
    ],
    hero: {
        title: 'About me and the research group',
        text: '**Research interests:** Scientific exploration and application demonstrations in the fields of artificial intelligence and big data, including human behavior analysis, computer vision, natural language processing, operational statistics for industrial maintenance, deep learning, and machine learning.',
        actions: [
            {
                text: 'Get in touch',
                href: '/contact'
            },
            {
                text: 'More about me',
                href: '/about'
            },
            {
                text: 'Our members',
                href: '/people'
            }
        ]
    },
    pubsOnLandingPage: 5,
    pubsPerPage: 120
};

export default siteConfig;

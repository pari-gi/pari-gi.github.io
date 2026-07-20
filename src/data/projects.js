import laptopApple from '../assets/photos/image_59-removebg-preview_4__9b6414ba.png'
import laptopPits from '../assets/photos/image_105__66d2f9be.jpg'
import laptopHungie from '../assets/photos/image_143__70444b1d.jpg'

export const FILTERS = [
  { label: 'all work', icon: 'star' },
  { label: 'business strategy', icon: 'strategy' },
  { label: 'design psychology', icon: 'brain' },
  { label: 'AI', icon: 'lightning' },
  { label: 'user research & testing', icon: 'magnifier' },
  { label: 'software engineering', icon: 'code' },
]

export const PROJECTS = [
  {
    slug: 'applenj',
    name: 'AppleNJ',
    title: 'A Ground up business transformation.',
    read: '10 min read',
    highlights: [
      'New product-service strategy.',
      'New market position.',
      'New brand identity.',
      '',
      'New website design.',
      '30+ wireframes.',
      '5 testing methods.',
    ],
    stickers: [
      'new website design',
      'user research & testing',
      'new market position',
      'new product-service strategy',
      'new brand identity',
      '30+ wireframes',
    ],
    tags: ['business strategy', 'user research & testing'],
    image: laptopApple,
    alpha: true,
  },
  {
    slug: 'pits',
    name: 'Princeton IT Services',
    title: 'A high-traffic hero, redesigned to convert.',
    read: '5 min read',
    highlights: [
      'New hero section.',
      'New user insights.',
      'New conversion path.',
      '',
      'Data driven design.',
      'User testing.',
      'UX research.',
    ],
    stickers: [
      'data driven design',
      'user testing',
      'UX research',
      'C-suite collaboration',
      'new hero design',
      'conversion focused',
    ],
    tags: ['user research & testing', 'business strategy'],
    image: laptopPits,
  },
  {
    slug: 'hungie',
    name: 'Hungie',
    title: 'An AI-powered startup, branded and built.',
    read: '7 min read',
    highlights: [
      'New brand identity.',
      'New AI experience.',
      'New engagement loops.',
      '',
      'Design psychology.',
      'Behavioral principles.',
      'Gamified habits.',
    ],
    stickers: [
      'new brand identity',
      'design psychology',
      'gamified engagement',
      'AI-native design',
      'behavioral principles',
      'healthy habits',
    ],
    tags: ['design psychology', 'AI', 'business strategy'],
    image: laptopHungie,
  },
]

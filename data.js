import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Huseyin',
            email: 'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'Jhon',
            email: 'jhon@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        }
    ],
    products: [
        {
            name: 'Lemon Slim Jean',
            category: 'Jean',
            image: '/images/p1.jpg',
            price: 250,
            brand: 'Lemon',
            rating: 4.5,
            numReviews: 23,
            countInStock: 10,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula dui eget tortor fringilla tristique. Proin aliquet libero ac tellus hendrerit ultricies.'
        },
        {
            name: 'Lemon Medium Jean',
            category: 'Jean',
            image: '/images/p1.jpg',
            price: 354,
            brand: 'Lemon',
            rating: 3.5,
            numReviews: 76,
            countInStock: 10,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula dui eget tortor fringilla tristique. Proin aliquet libero ac tellus hendrerit ultricies.'
        },
        {
            name: 'Lemon Large Jean',
            category: 'Jean',
            image: '/images/p1.jpg',
            price: 586,
            brand: 'Lemon',
            rating: 2.5,
            numReviews: 54,
            countInStock: 10,
            description: 'Lorem ipsum dolor sit amet.'
        },
        {
            name: 'Factory Slim Jean',
            category: 'Jean',
            image: '/images/p1.jpg',
            price: 652,
            brand: 'Lemon',
            rating: 4.5,
            numReviews: 13,
            countInStock: 10,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula dui eget tortor fringilla tristique. Proin aliquet libero ac tellus hendrerit ultricies.'
        },
        {
            name: 'Factory Medium Jean',
            category: 'Jean',
            image: '/images/p1.jpg',
            price: 145,
            brand: 'Lemon',
            rating: 4,
            numReviews: 23,
            countInStock: 10,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula dui eget tortor fringilla tristique. Proin aliquet libero ac tellus hendrerit ultricies.'
        },
        {
            name: 'Factory Large Jean',
            category: 'Jean',
            image: '/images/p1.jpg',
            price: 185,
            brand: 'Lemon',
            rating: 3,
            numReviews: 36,
            countInStock: 10,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula dui eget tortor fringilla tristique. Proin aliquet libero ac tellus hendrerit ultricies.'
        }
    ]
};

export default data;

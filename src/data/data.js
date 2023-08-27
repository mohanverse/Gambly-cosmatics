const products = [
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 2,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 3,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/7897470/pexels-photo-7897470.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 4,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 4,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 5,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/8054395/pexels-photo-8054395.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 6,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 7,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6707337/pexels-photo-6707337.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 8,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/8140899/pexels-photo-8140899.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 8,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/8605908/pexels-photo-8605908.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 9,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6847858/pexels-photo-6847858.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 10,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/8140914/pexels-photo-8140914.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        id: 11,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6847854/pexels-photo-6847854.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        id: 12,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/7500359/pexels-photo-7500359.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        id: 13,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6619488/pexels-photo-6619488.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        id: 1,
        name: 'STUDIO FIX SPF 15',
        description: 'OUR #1, 24 HR, BUILDABLE, MEDIUM-TO-FULL COVERAGE FOUNDATION BREATHABLE NATURAL MATTE FOUNDATION',
        price: 1900,
        image: 'https://images.pexels.com/photos/6621462/pexels-photo-6621462.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
];

export {products};
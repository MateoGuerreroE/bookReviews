interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    key: string
    photo: string
}

interface Book {
    id: number
    title: string
    description: string
    image: string
}

interface Review {
    id: number,
    value: number,
    title: string,
    comment: string,
    book_id: number,
    user_id: number
}
import Media from "./Media";

type User = {
    id: string
    name: string
    lastname: string
    full_name: string
    email: string
    phone: string
    role: string
    profile_picture: Media
}

export default User;
import { Room } from "./Room";
import { User } from "./User";

export interface Reservation {
    checkInDate: Date,
    checkOutDate: Date,
    price: number,
    isApproved: boolean,
    room: Room,
    user: User
}
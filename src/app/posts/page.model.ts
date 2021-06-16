import { Post } from "./post.model";

export interface Page {
    currentPage: number, 
    totalItems: number, 
    totalPages: number
}
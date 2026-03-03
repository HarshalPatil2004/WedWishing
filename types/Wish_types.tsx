export interface Wish {
  _id: string;
  name: string;
  message: string;
  likes: number;
  approved: boolean;
  createdAt: string;
}
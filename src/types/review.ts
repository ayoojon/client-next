export interface IReview {
  _id: string;
  service: string;
  booking: string;
  rating: Number;
  text?: string;
  createdAt: string;
  updatedAt: string;
}

import mongoose, { Schema, Document } from "mongoose";

interface IOrderItem {
  product_id: mongoose.Schema.Types.ObjectId;
  quantity: number;
  Price: number; // ✅ Matching the Cart Model
  cart_image: string;
}

export interface IOrder extends Document {
  items: IOrderItem[];
  totalPrice: number;
  paymentMethod: string;
  status: string;
  cardDetails?: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
}

const orderSchema: Schema = new Schema(
  {
    items: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: { type: Number, required: true },
        Price: { type: Number, required: true }, // ✅ Matching Cart Model
        cart_image: { type: String },
      },
    ],
    totalPrice: { type: Number, required: true },
    paymentMethod: { type: String, enum: ["COD", "Card"], default: "COD" },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Shipped", "Delivered"],
      default: "Pending",
    },
    cardDetails: {
      cardNumber: { type: String },
      expiryDate: { type: String },
      cvv: { type: String },
    },
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>("Order", orderSchema);

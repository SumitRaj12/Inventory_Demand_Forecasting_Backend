import mongoose from "mongoose";

const salesSchema = new mongoose.Schema(
  {
    companyName:{
      type:String
    },
    id:{
      type:Number
    },
    productName:{
      type:String
    },
    region:{
      type:String
    },
    productId: {
      type: String,
      required: true,
    },
    customerId: {
      type: String,
    },
    unitsSold: {
      type: Number,
      required: true,
    },
    sales:{
      type:Number
    },
    month: {
      type: String,
      required: true,
    },
    date:{
      type:Date,
      required:true
    },
    weekday:{
      type:String,
    },
    festival:{
      type:Boolean
    },
    promotion:{
      type:Boolean
    },
    pricePerUnit:{
      type:Number
    },
    adSpent:{
      type:Number
    },
    Weather:{
      type:String
    },
    customerSegment:{
      type:String
    },
    stockLevel:{
      type:Number
    },
    filePath:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

export const Sales = mongoose.model("Sales", salesSchema);

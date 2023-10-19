import { instance } from "../server.js"


export const checkout=async(req,res)=>{

    var options = {
        amount: Number(req.body.amount*100),  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
      };
      const order =await instance.orders.create(options);
      console.log(order);
      res.status(200).json({
        success:"true",
        order
      })
}

export const paymentVerification=async(req,res)=>{

    
    res.status(200).json({
      success:"true",
     
    })
}
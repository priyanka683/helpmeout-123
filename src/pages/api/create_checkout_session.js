const stripe = require("stripe")(`${process.env.STRIPE_SECRET_KEY}`);

export default async (req,res) =>{
   const { items, email } = req.body;

   console.log(items,email);

   const transformatedItems = items.map((item) =>({
       description:item.description,
       quantity:1,
       price_data:{
           currency:"gbp",
           unit_amount: item.price * 100,
           product_data:{
               name: item.title,
               images: [item.image],
           },
       },
   }));

   const session = await stripe.checkout.sessions.create({
       payment_method_types:["card"],
       shipping_rates: ['shr_1IxSt3SF4p9hntUOaC9bseRG'],
       shipping_address_collection: {
           allowed_countries:["GB","IN","CA"],
       },
       line_items: transformatedItems,
       mode:"payment",
       success_url:`${process.env.Host}/success`,
       cancel_url:`${process.env.Host}/checkout`,
       metadata: {
           email,
           images: JSON.stringify(items.map((item)=> item.image))
       },
   });

 res.status(200).json({id : session.id});

};
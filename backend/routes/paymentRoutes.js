import express from 'express'
import {checkout} from '../controler/paymentControler.js'
const router=express.Router();


router.route('/checkout').post(checkout);
export default router;
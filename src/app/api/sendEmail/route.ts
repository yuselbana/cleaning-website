import { NextRequest, NextResponse } from "next/server";
import { transporter,mailOptions } from "@/nodemailer/nodemailer";

export async function POST(req:NextRequest,res:NextResponse) {
    const body = await req.json()
  
    const html = 
    `
    <strong>Full Name</strong>: <span>${body.fullName}</span><br/><br/>
    <strong>Email Address</strong>: <span>${body.email}</span><br/><br/>
    <strong>Phone Number</strong>: <span>${body.phone}</span><br/><br/>
    <strong>Date</strong>: <span>${body.dateAndTime}</span><br/><br/>
    <strong>Address</strong>: <span>${body.address}</span><br/><br/>
    <strong>Service</strong>: <span>${body.service}</span><br/><br/>
    <strong>Message</strong>: <span>${body.message}</span><br/><br/>
    <strong>Accepted Terms</strong>: <span>${body.acceptedTerms}</span>
    `
    const subject = 'A Better Cleaning Home Client Inquiry'




try {
    await transporter.sendMail({
        ...mailOptions,
        subject:subject,
        text:"",
        html:html
    })
    return NextResponse.json({status:'okay'})
} catch (error) {
    console.log(error)
    return NextResponse.json({status:'bad post'})
}
}
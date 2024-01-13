import { NextResponse,NextRequest } from "next/server";
import { transporter } from "@/nodemailer/nodemailer";


export async function POST(req:NextRequest,res:NextResponse) {
    const body = await req.json();
    
    const html = 
    `
    <span>${body.fullName},</span>:<br/><br/>
    <span>Thank you for contacting us!</span><br/><br/>
    <span>Please allow us 24 hours to respond.</span><br/><br/>
    <strong>A Better Home Services</span></strong>
    `

    
 const mailOptionsRest = {
    from:process.env.NODEMAILER_USER,
    to:body.email
}

const subject = 'A Better Home Service Thank You Message'

try {
    await transporter.sendMail({
        ...mailOptionsRest,
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
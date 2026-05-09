import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { sanityServer } from "@/lib/sanityServer";

export async function POST(req: Request) {
    try {
        const {
            name,
            email,
            phone,
            service,
            message
        } = await req.json();

        // 🔥 SAVE TO SANITY
        await sanityServer.create({
            _type: "message",
            name,
            email,
            phone,
            service,
            message,
            createdAt: new Date().toISOString(),
        });

        // 🔥 MAIL
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 📩 ADMIN MAIL
        await transporter.sendMail({
            from: `"Website Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New ${service} Inquiry 💍`,
            html: `
                <h2>New Contact Request</h2>

                <p><b>Name:</b> ${name}</p>

                <p><b>Email:</b> ${email}</p>

                <p><b>Phone:</b> ${phone}</p>

                <p><b>Service:</b> ${service}</p>

                <p>
                    <b>Message:</b><br/>
                    ${message}
                </p>
            `,
        });

        // 📩 AUTO REPLY
        await transporter.sendMail({
            from: `"Innovate Wedding" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "We received your enquiry 💌",
            html: `
                <div style="font-family: Arial; padding: 20px;">

                    <h2>Hi ${name},</h2>

                    <p>
                        Thanks for contacting us regarding
                        <b>${service}</b> 💍
                    </p>

                    <p>
                        We have received your enquiry and
                        will get back to you within 24 hours.
                    </p>

                    <br/>

                    <p>— Innovate Team</p>

                </div>
            `,
        });

        return NextResponse.json({
            message: "Success",
        });

    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Error" },
            { status: 500 }
        );
    }
}
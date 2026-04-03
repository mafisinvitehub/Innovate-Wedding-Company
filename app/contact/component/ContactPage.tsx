"use client";

import React, { useState } from "react";

const ContactPage: React.FC = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState<any>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const newErrors: any = {};

        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.includes("@")) newErrors.email = "Enter a valid email";
        if (form.phone.trim().length < 8)
            newErrors.phone = "Enter a valid phone number";
        if (form.message.trim().length < 10)
            newErrors.message = "Message should be at least 10 characters";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        console.log("Form Submitted:", form);

        // reset (optional)
        setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
        });

        setErrors({});
    };

    return (
        <div className="bg-background">

            {/* HERO */}
            <section className="py-24 text-center px-6">
                <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                    Contact
                </p>

                <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                    Let’s Create Something <br /> Beautiful Together
                </h1>

                <p className="text-foreground/70 max-w-xl mx-auto">
                    Tell us about your wedding and we’ll craft something elegant,
                    meaningful, and unforgettable.
                </p>

                <div className="mt-8 w-16 h-[2px] bg-primary mx-auto" />
            </section>

            {/* MAIN */}
            <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-16">

                {/* LEFT INFO */}
                <div className="space-y-10">

                    <div>
                        <p className="text-xs text-primary uppercase mb-2">Phone</p>
                        <p className="text-foreground text-lg">+91 98765 43210</p>
                    </div>

                    <div>
                        <p className="text-xs text-primary uppercase mb-2">Email</p>
                        <p className="text-foreground text-lg">hello@yourbrand.com</p>
                    </div>

                    <div>
                        <p className="text-xs text-primary uppercase mb-2">Location</p>
                        <p className="text-foreground text-lg">Tamil Nadu, India</p>
                    </div>

                    <p className="text-foreground/60 text-sm pt-6 max-w-sm">
                        We usually respond within 24 hours. Let’s craft something
                        truly premium for your special day.
                    </p>

                </div>

                {/* RIGHT FORM */}
                <div className="bg-secondary/40 backdrop-blur-md border border-primary/20 rounded-2xl p-8 shadow-xl">

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* NAME */}
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-primary/30 py-3 focus:outline-none focus:border-primary transition"
                            />
                            {errors.name && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* EMAIL */}
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-primary/30 py-3 focus:outline-none focus:border-primary transition"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* PHONE */}
                        <div>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-primary/30 py-3 focus:outline-none focus:border-primary transition"
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.phone}
                                </p>
                            )}
                        </div>

                        {/* MESSAGE */}
                        <div>
                            <textarea
                                name="message"
                                placeholder="Tell us about your wedding..."
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-primary/30 py-3 focus:outline-none focus:border-primary transition"
                            />
                            {errors.message && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.message}
                                </p>
                            )}
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-primary text-foreground py-3 rounded-lg hover:scale-[1.02] hover:shadow-md transition cursor-pointer"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </section>

            {/* MAP */}
            <section className="w-full h-[350px] opacity-80 hover:opacity-100 transition">

                <iframe
                    src="https://maps.google.com/maps?q=tamil%20nadu&t=&z=10&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                />

            </section>

            {/* CLOSING */}
            <section className="py-20 text-center px-6">
                <p className="text-foreground/70">
                    We usually respond within 24 hours.
                </p>
            </section>

        </div>
    );
};

export default ContactPage;
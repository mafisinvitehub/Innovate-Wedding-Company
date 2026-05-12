"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

type Props = {
    data: {
        title: string;
        email: string;
        phone: string;
        address: string;
    };
};

const ContactPage: React.FC<Props> = ({ data }) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [errors, setErrors] = useState<any>({});
    const [loading, setLoading] = useState(false);

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
        if (!form.service.trim())
            newErrors.service = "Please select a service";
        if (form.message.trim().length < 10)
            newErrors.message = "Message should be at least 10 characters";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true);

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error("Failed");

            toast.success("Message sent successfully!");

            setForm({
                name: "",
                email: "",
                phone: "",
                service: "",
                message: "",
            });

            setErrors({});
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Try again!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-background">

            {/* HERO */}
            <section className="py-24 text-center px-6">
                <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                    Contact
                </p>

                <h1 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                    Let’s Create Something <br /> Extraordinary Together
                </h1>

                <p className="text-foreground/70 max-w-xl mx-auto">
                    Tell us about your event, project, or idea — we’ll craft a modern, fun, and luxurious experience tailored just for you.
                </p>

                <div className="mt-8 w-16 h-[2px] bg-primary mx-auto" />
            </section>

            {/* MAIN */}
            <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-2 gap-16">

                {/* LEFT INFO */}
                <div className="space-y-10">

                    <div>
                        <p className="text-xs text-primary uppercase mb-2">Founder</p>
                        <p className="text-foreground text-lg">Mohammed Faizal Sulaiman</p>
                    </div>

                    <div>
                        <p className="text-xs text-primary uppercase mb-3">Reach Us Through</p>
                        {/* <p className="text-xs text-primary uppercase mb-2">Phone</p> */}
                        <a
                            href={`tel:${data.phone}`}
                            className="hover:text-primary transition"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <FaPhone className="text-primary" />
                                <p className="text-foreground text-lg">{data.phone}</p>
                            </div>
                        </a>
                        <a href={`mailto:${data.email}`}                        >
                            <div className="flex items-center gap-3 mb-2">
                                <FaEnvelope className="text-primary" />
                                <p className="text-foreground text-lg">{data.email}</p>
                            </div>
                        </a>
                        <a href="https://www.instagram.com/innovate_weddings/"  >
                            <div className="flex items-center gap-3 mb-2">
                                <FaInstagram className="text-primary" />
                                <p className="text-foreground text-lg">innovate_wedding</p>
                            </div>
                        </a>
                    </div>

                    {/* <div>
                        <p className="text-xs text-primary uppercase mb-2">Email</p>
                        <p className="text-foreground text-lg">{data.email}</p>
                    </div> */}

                    <div>
                        <p className="text-xs text-primary uppercase mb-2">Location</p>
                        <p className="text-foreground text-lg">
                            {data.address}
                        </p>
                    </div>

                    <div className="text-foreground/60 text-sm pt-6 max-w-sm space-y-2">
                        <p>
                            We usually respond within 24 hours. Let’s create something modern, fun, and truly premium together.
                        </p>
                        <p>
                            Available Monday – Saturday: 10 AM – 7 PM <br />
                            Sunday: By Appointment Only
                        </p>
                        <p>
                            We handle weddings, corporate events, photography, digital solutions, and more — all under one roof.
                        </p>
                    </div>

                </div>

                {/* RIGHT FORM */}
                <div className="bg-secondary/40 backdrop-blur-md border border-primary/20 rounded-2xl p-8 shadow-xl">

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-primary/30 py-3 focus:outline-none focus:border-primary transition"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-primary/30 py-3 focus:outline-none focus:border-primary transition"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-primary/30 py-3 focus:outline-none focus:border-primary transition"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        <div className="relative">

                            <select
                                name="service"
                                value={form.service}
                                onChange={(e) =>
                                    setForm({ ...form, service: e.target.value })
                                }
                                className={`
            w-full
            bg-transparent
            border-0
            border-b
            border-primary/30
            py-3
            px-0
            text-sm
            focus:outline-none
            focus:ring-0
            focus:border-primary
            transition
            cursor-pointer
            appearance-none
            ${form.service
                                        ? "text-foreground"
                                        : "text-foreground/50"
                                    }
        `}
                            >
                                <option value="" disabled hidden>
                                    Select Service
                                </option>

                                <option value="Wedding">
                                    Wedding
                                </option>

                                <option value="Corporate Event">
                                    Corporate Event
                                </option>

                                <option value="Photography / Video">
                                    Photography / Video
                                </option>

                                <option value="Digital / Website">
                                    Digital / Website
                                </option>
                            </select>

                            {/* PREMIUM MINIMAL ARROW */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/70 pointer-events-none"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>

                            {errors.service && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.service}
                                </p>
                            )}

                        </div>

                        <div>
                            <textarea
                                name="message"
                                placeholder="Tell us about your event, shoot, or project..."
                                rows={4}
                                value={form.message}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-primary/30 py-3 focus:outline-none focus:border-primary transition"
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-foreground py-3 rounded-lg hover:scale-[1.02] hover:shadow-md transition cursor-pointer disabled:opacity-50"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                    </form>

                </div>

            </section>

            {/* MAP (UNCHANGED) */}
            <section className="w-full py-24 px-6 bg-background">
                <div className="max-w-6xl mx-auto">

                    {/* HEADER */}
                    <div className="text-center mb-16">
                        <p className="text-sm tracking-[4px] text-primary uppercase mb-6">
                            Visit Us
                        </p>

                        <h2 className="text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
                            Our Studio Location
                        </h2>

                        <p className="text-foreground/70 max-w-xl mx-auto">
                            Visit our studio to discuss your ideas in person. Experience our creative approach and let’s craft something truly exceptional together.
                        </p>

                        <div className="mt-8 w-16 h-[2px] bg-primary mx-auto" />
                    </div>

                    {/* MAP CARD */}
                    <div className="relative rounded-2xl overflow-hidden border border-border shadow-sm group">

                        {/* CLICKABLE OVERLAY */}
                        <a
                            href="https://www.google.com/maps?q=8.160193704178129,77.4279139895681"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 z-10"
                        />

                        {/* MAP */}
                        <iframe
                            src="https://www.google.com/maps?q=8.160193704178129,77.4279139895681&hl=en&z=15&output=embed"
                            className="w-full h-[420px] border-0 transition duration-500 ease-out group-hover:scale-[1.02]"
                            loading="lazy"
                        />

                        {/* BOTTOM INFO BAR */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 bg-background/90 backdrop-blur-md border-t border-border px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                            {/* ADDRESS */}
                            <div>
                                <p className="text-xs uppercase tracking-widest text-primary mb-1">
                                    Address
                                </p>
                                <p className="text-sm text-foreground">
                                    {data.address}
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="text-sm font-medium text-primary">
                                Open in Google Maps →
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* CLOSING */}
            {/* <section className="py-20 text-center px-6">
                <p className="text-foreground/70">
                    We usually respond within 24 hours.
                </p>
            </section> */}

        </div>
    );
};

export default ContactPage;
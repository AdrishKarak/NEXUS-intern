import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import worldMap from '../assets/world-map.png';


const Home = () => {
    const { isSignedIn } = useUser();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Navbar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-pink-500/30' : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-6 py-5">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="text-4xl font-black tracking-tight">
                            <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                                NEXUS
                            </span>
                        </Link>

                        <div className="hidden md:flex items-center gap-10">
                            {['Features', 'Pricing', 'About'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="relative text-gray-300 hover:text-white transition-colors font-medium group"
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-rose-500 group-hover:w-full transition-all duration-300" />
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center gap-4">
                            {isSignedIn ? (
                                <>
                                    <Link to="/dashboard">
                                        <button className="px-6 py-2.5 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
                                            Dashboard
                                        </button>
                                    </Link>
                                    <UserButton afterSignOutUrl="/" />
                                </>
                            ) : (
                                <SignInButton mode="modal">
                                    <button className="px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full font-bold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
                                        Get Started
                                    </button>
                                </SignInButton>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center pt-20">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-600/20 rounded-full blur-[150px] animate-pulse" />
                    <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '6s' }} />
                </div>

                {/* Grid Pattern */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgba(236,72,153,0.15) 1px, transparent 0)`,
                    backgroundSize: '50px 50px'
                }} />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-7xl md:text-9xl font-black mb-8 leading-none"
                    >
                        Build{' '}
                        <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                            Beyond
                        </span>
                        <br />Limits
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto"
                    >
                        Transform your ideas into reality with cutting-edge technology.
                        <br />
                        <span className="text-pink-400">Power. Precision. Performance.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        {isSignedIn ? (
                            <Link to="/dashboard">
                                <button className="px-10 py-5 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300">
                                    Go to Dashboard →
                                </button>
                            </Link>
                        ) : (
                            <SignInButton mode="modal">
                                <button className="px-10 py-5 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300">
                                    Start Free Trial →
                                </button>
                            </SignInButton>
                        )}
                        <button className="px-10 py-5 border-2 border-pink-500/50 rounded-full font-bold text-lg hover:bg-pink-500/10 transition-all duration-300">
                            Watch Demo
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-6xl font-black mb-6">
                            Everything You{' '}
                            <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                                Need
                            </span>
                        </h2>
                        <p className="text-xl text-gray-400">Built for scale, designed for performance</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: '⚡', title: 'Lightning Fast', desc: 'Sub-millisecond response times' },
                            { icon: '🔒', title: 'Secure', desc: 'Enterprise-grade security' },
                            { icon: '📊', title: 'Analytics', desc: 'Real-time insights' },
                            { icon: '🚀', title: 'Deploy', desc: 'One-click deployment' },
                            { icon: '🎨', title: 'Beautiful UI', desc: 'Stunning interfaces' },
                            { icon: '🤖', title: 'AI Powered', desc: 'Smart automation' }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-pink-500/50 transition-all duration-300"
                            >
                                <div className="text-6xl mb-6">{feature.icon}</div>
                                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                                <p className="text-gray-400">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-6xl font-black mb-8">
                            Ready to{' '}
                            <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                                Transform
                            </span>
                            ?
                        </h2>
                        <p className="text-2xl text-gray-400 mb-12">
                            Join thousands building the future
                        </p>
                        {isSignedIn ? (
                            <Link to="/dashboard">
                                <button className="px-12 py-6 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300">
                                    Go to Dashboard
                                </button>
                            </Link>
                        ) : (
                            <SignInButton mode="modal">
                                <button className="px-12 py-6 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300">
                                    Start Building Today
                                </button>
                            </SignInButton>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* ================= PREMIUM BOTTOM SECTION ================= */}
            <section id="contact" className="relative py-40 bg-neutral-950 overflow-hidden">

                {/* Background Glow Effects */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[180px]" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[180px]" />

                <div className="relative max-w-7xl mx-auto px-6 space-y-32">

                    {/* ================= COMPANIES ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h3 className="text-4xl md:text-5xl font-black mb-12">
                            Trusted by Industry Leaders Since 2015
                        </h3>

                        <div className="flex flex-wrap justify-center gap-8">
                            {['Google', 'Meta', 'Netflix', 'Amazon', 'Uber', 'Stripe'].map((company, index) => (
                                <div
                                    key={index}
                                    className="px-10 py-5 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl text-gray-300 text-lg font-semibold backdrop-blur-xl hover:border-pink-500/50 hover:-translate-y-2 transition-all duration-300"
                                >
                                    {company}
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ================= MASSIVE FREE TRIAL CARD ================= */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Glow Background */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 rounded-[3rem] blur-3xl opacity-30" />

                        <div className="relative overflow-hidden bg-gradient-to-r from-pink-600 to-rose-600 rounded-[3rem] p-16 md:p-24 border border-pink-500/40 backdrop-blur-2xl flex items-center">

                            {/* LEFT CONTENT */}
                            <div className="relative z-10 max-w-2xl">
                                <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                                    Feel Free to Join our 15 Days Free Trial
                                </h3>

                                <p className="text-lg text-white/85 mb-10">
                                    Experience enterprise-level performance, automation and
                                    real-time analytics — completely free.
                                </p>

                                <SignInButton mode="modal">
                                    <button className="px-12 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-neutral-900 hover:scale-105 transition-all duration-300 shadow-2xl">
                                        Get Started →
                                    </button>
                                </SignInButton>
                            </div>

                            {/* RIGHT SIDE WORLD MAP */}
                            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 h-[120%] w-[60%] pointer-events-none">
                                <img
                                    src={worldMap}
                                    alt="World Map"
                                    className="h-full w-full object-contain opacity-35"
                                />
                            </div>

                            {/* Light overlay for readability */}
                            <div className="absolute inset-0 bg-black/20 pointer-events-none rounded-[3rem]" />
                        </div>
                    </motion.div>


                    {/* ================= CONTACT SECTION ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-14 backdrop-blur-xl">

                            <h2 className="text-5xl font-black text-center mb-6">
                                Get In Touch
                            </h2>

                            <p className="text-gray-400 text-center mb-12">
                                Have questions? We'd love to hear from you.
                            </p>

                            <form className="space-y-6">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full p-5 bg-black/60 border border-white/20 rounded-xl focus:border-pink-500 outline-none transition"
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-5 bg-black/60 border border-white/20 rounded-xl focus:border-pink-500 outline-none transition"
                                />
                                <textarea
                                    rows="5"
                                    placeholder="Your Message"
                                    className="w-full p-5 bg-black/60 border border-white/20 rounded-xl focus:border-pink-500 outline-none transition"
                                ></textarea>

                                <div className="text-center pt-4">
                                    <button
                                        type="submit"
                                        className="px-12 py-5 bg-gradient-to-r from-pink-600 to-rose-600 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </section>


            {/* Footer */}
            <footer className="border-t border-pink-500/20 py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-12 mb-12">
                        <div className="md:col-span-2">
                            <div className="text-4xl font-black bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent mb-4">
                                NEXUS
                            </div>
                            <p className="text-gray-400 mb-6">
                                Building the future of digital experiences.
                            </p>
                        </div>
                        {[
                            { title: 'Product', links: ['Features', 'Pricing', 'API'] },
                            { title: 'Company', links: ['About', 'Blog', 'Careers'] }
                        ].map((section, index) => (
                            <div key={index}>
                                <h4 className="font-bold mb-4">{section.title}</h4>
                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="pt-8 border-t border-pink-500/20 text-center text-gray-500">
                        <p>&copy; 2025 Nexus. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
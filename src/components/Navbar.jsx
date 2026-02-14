import React from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const { user } = useUser();

    return (
        <div className="sticky top-0 z-40 bg-black/50 backdrop-blur-xl border-b border-pink-500/20">
            <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Search Bar */}
                    <div className="flex-1 max-w-xl">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none transition-all duration-300"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                                🔍
                            </span>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-4 ml-6">
                        {/* Notifications */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/50 transition-all duration-300"
                        >
                            <span className="text-xl">🔔</span>
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-pink-500 rounded-full text-xs flex items-center justify-center font-bold">
                                3
                            </span>
                        </motion.button>

                        {/* Messages */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/50 transition-all duration-300"
                        >
                            <span className="text-xl">💬</span>
                        </motion.button>

                        {/* Divider */}
                        <div className="w-px h-8 bg-white/10" />

                        {/* User Info */}
                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <div className="text-sm font-semibold">
                                    {user?.firstName || 'User'} {user?.lastName || ''}
                                </div>
                                <div className="text-xs text-gray-400">
                                    {user?.primaryEmailAddress?.emailAddress || 'user@example.com'}
                                </div>
                            </div>
                            <UserButton afterSignOutUrl="/" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
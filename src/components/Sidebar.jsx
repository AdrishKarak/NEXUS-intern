import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { path: '/dashboard', icon: '📊', label: 'Dashboard' },
        { path: '/analytics', icon: '📈', label: 'Analytics' },
        { path: '/users', icon: '👥', label: 'Users' },
        { path: '/settings', icon: '⚙️', label: 'Settings' },
        { path: '/profile', icon: '👤', label: 'Profile' },
    ];

    return (
        <div className="fixed left-0 top-0 h-screen w-64 bg-gradient-to-b from-gray-900 to-black border-r border-pink-500/20 flex flex-col z-50">
            {/* Logo */}
            <div className="p-6 border-b border-pink-500/20">
                <Link to="/" className="text-3xl font-black">
                    <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                        NEXUS
                    </span>
                </Link>
                <p className="text-xs text-gray-500 mt-1">Dashboard v2.0</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 overflow-y-auto">
                <div className="space-y-2">
                    {menuItems.map((item) => {
                        const isActive = location.pathname === item.path;

                        return (
                            <Link key={item.path} to={item.path}>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                                            ? 'bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-500/30'
                                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <span className="text-2xl">{item.icon}</span>
                                    <span className="font-semibold">{item.label}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="ml-auto w-2 h-2 rounded-full bg-white"
                                        />
                                    )}
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Bottom Section */}
            <div className="p-4 border-t border-pink-500/20">
                <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20">
                    <div className="text-sm font-semibold mb-2">🚀 Upgrade to Pro</div>
                    <p className="text-xs text-gray-400 mb-3">Unlock advanced features</p>
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-pink-600 to-rose-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
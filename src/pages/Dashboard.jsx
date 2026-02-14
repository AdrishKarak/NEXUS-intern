import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '@clerk/clerk-react';

const Dashboard = () => {
    const { user } = useUser();
    const [timeRange, setTimeRange] = useState('7d');

    const stats = [
        { label: 'Total Revenue', value: '$124,593', change: '+23.5%', up: true, icon: '💰', color: 'from-green-500 to-emerald-500' },
        { label: 'Active Users', value: '24,891', change: '+12.3%', up: true, icon: '👥', color: 'from-blue-500 to-cyan-500' },
        { label: 'Conversion', value: '4.87%', change: '-1.2%', up: false, icon: '📈', color: 'from-purple-500 to-pink-500' },
        { label: 'Avg Response', value: '234ms', change: '-15.4%', up: true, icon: '⚡', color: 'from-yellow-500 to-orange-500' }
    ];

    const recentActivity = [
        { action: 'New user signup', user: 'Sarah Johnson', time: '2 min ago', icon: '👤', color: 'from-blue-500 to-cyan-500' },
        { action: 'Payment received', user: 'Invoice #1247', time: '8 min ago', icon: '💳', color: 'from-green-500 to-emerald-500' },
        { action: 'Project deployed', user: 'nexus-api-v2', time: '15 min ago', icon: '🚀', color: 'from-purple-500 to-pink-500' },
        { action: 'Database backup', user: 'Auto-scheduled', time: '1 hour ago', icon: '💾', color: 'from-orange-500 to-red-500' }
    ];

    const chartData = [45, 68, 52, 85, 72, 95, 78, 88, 75, 98, 90, 94];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-black mb-2">
                    <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                        Dashboard
                    </span>
                </h1>
                <p className="text-gray-400">Welcome back, {user?.firstName || 'User'}! Here's what's happening today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="relative group"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`} />
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                            <div className="flex items-start justify-between mb-4">
                                <div className="text-4xl">{stat.icon}</div>
                                <div className={`px-3 py-1 rounded-full text-sm font-bold ${stat.up ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                    }`}>
                                    {stat.change}
                                </div>
                            </div>
                            <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                            <div className="text-3xl font-black">{stat.value}</div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
                {/* Revenue Chart */}
                <div className="lg:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold">Revenue Overview</h3>
                        <select
                            value={timeRange}
                            onChange={(e) => setTimeRange(e.target.value)}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-pink-500/50 focus:outline-none"
                        >
                            <option value="7d">Last 7 days</option>
                            <option value="30d">Last 30 days</option>
                            <option value="90d">Last 90 days</option>
                        </select>
                    </div>

                    <div className="h-72 flex items-end justify-between gap-2">
                        {chartData.map((height, index) => (
                            <div key={index} className="flex-1 flex flex-col justify-end group">
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: `${height}%` }}
                                    transition={{ delay: index * 0.05, duration: 0.6 }}
                                    className="relative bg-gradient-to-t from-pink-600 to-pink-500 rounded-t-lg cursor-pointer hover:from-pink-500 hover:to-pink-400 transition-all duration-300"
                                >
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 px-3 py-1.5 rounded-lg text-xs whitespace-nowrap">
                                        ${(height * 1000).toLocaleString()}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-between mt-4 text-xs text-gray-500">
                        {months.map(month => <span key={month}>{month}</span>)}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                    <h3 className="text-2xl font-bold mb-6">Quick Actions</h3>
                    <div className="space-y-3">
                        {[
                            { label: 'New Project', icon: '➕', color: 'from-blue-500 to-cyan-500' },
                            { label: 'Invite Team', icon: '👥', color: 'from-purple-500 to-pink-500' },
                            { label: 'Deploy App', icon: '🚀', color: 'from-green-500 to-emerald-500' },
                            { label: 'View Reports', icon: '📊', color: 'from-orange-500 to-red-500' }
                        ].map((action, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ scale: 1.02, x: 5 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full p-4 rounded-xl bg-black/30 hover:bg-black/50 border border-white/10 hover:border-pink-500/50 transition-all duration-300 text-left group"
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center text-xl`}>
                                        {action.icon}
                                    </div>
                                    <span className="font-semibold">{action.label}</span>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                        Recent Activity
                    </h3>
                    <button className="text-sm text-pink-400 hover:text-pink-300">View All</button>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {recentActivity.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-black/30 hover:bg-black/50 transition-all duration-300 cursor-pointer group"
                        >
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${activity.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                                {activity.icon}
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold mb-1">{activity.action}</div>
                                <div className="text-sm text-gray-400">{activity.user}</div>
                            </div>
                            <div className="text-xs text-gray-500">{activity.time}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
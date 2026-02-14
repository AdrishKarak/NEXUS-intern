import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Analytics = () => {
    const [period, setPeriod] = useState('week');
    const [metric, setMetric] = useState('revenue');

    const metricsData = {
        revenue: { current: '$124,593', previous: '$98,432', change: '+26.5%', up: true },
        users: { current: '24,891', previous: '22,103', change: '+12.6%', up: true },
        sessions: { current: '156,384', previous: '162,491', change: '-3.8%', up: false },
        bounce: { current: '32.4%', previous: '35.7%', change: '-3.3%', up: true },
    };

    const chartData = [
        { day: 'Mon', value: 45, sessions: 320 },
        { day: 'Tue', value: 68, sessions: 450 },
        { day: 'Wed', value: 52, sessions: 380 },
        { day: 'Thu', value: 85, sessions: 520 },
        { day: 'Fri', value: 72, sessions: 490 },
        { day: 'Sat', value: 95, sessions: 610 },
        { day: 'Sun', value: 78, sessions: 540 },
    ];

    const topPages = [
        { page: '/dashboard', views: '45,382', bounce: '28.3%', time: '4:32' },
        { page: '/analytics', views: '32,491', bounce: '31.2%', time: '3:45' },
        { page: '/users', views: '28,103', bounce: '25.8%', time: '5:12' },
        { page: '/settings', views: '18,492', bounce: '35.4%', time: '2:48' },
        { page: '/profile', views: '12,384', bounce: '29.7%', time: '3:21' },
    ];

    const trafficSources = [
        { source: 'Direct', visitors: '12,384', percentage: 35, color: 'from-blue-500 to-cyan-500' },
        { source: 'Organic Search', visitors: '10,492', percentage: 30, color: 'from-green-500 to-emerald-500' },
        { source: 'Social Media', visitors: '7,193', percentage: 20, color: 'from-purple-500 to-pink-500' },
        { source: 'Referral', visitors: '3,589', percentage: 10, color: 'from-orange-500 to-red-500' },
        { source: 'Email', visitors: '1,795', percentage: 5, color: 'from-yellow-500 to-orange-500' },
    ];

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-black mb-2">
                        <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                            Analytics
                        </span>
                    </h1>
                    <p className="text-gray-400">Deep insights into your performance</p>
                </div>

                <div className="flex gap-3">
                    <select
                        value={period}
                        onChange={(e) => setPeriod(e.target.value)}
                        className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white focus:border-pink-500/50 focus:outline-none"
                    >
                        <option value="day">Today</option>
                        <option value="week">This Week</option>
                        <option value="month">This Month</option>
                        <option value="year">This Year</option>
                    </select>

                    <button className="px-6 py-2 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all">
                        Export Report
                    </button>
                </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {Object.entries(metricsData).map(([key, data], index) => (
                    <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="relative group cursor-pointer"
                        onClick={() => setMetric(key)}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${metric === key ? 'from-pink-500/30 to-rose-500/30' : 'from-pink-500/0 to-rose-500/0'
                            } rounded-2xl blur-xl transition-all duration-500`} />

                        <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border transition-all duration-300 ${metric === key ? 'border-pink-500/50' : 'border-white/10 hover:border-pink-500/30'
                            }`}>
                            <div className="text-sm text-gray-400 mb-2 capitalize">{key}</div>
                            <div className="text-3xl font-black mb-2">{data.current}</div>
                            <div className="flex items-center gap-2">
                                <span className={`text-sm font-semibold ${data.up ? 'text-green-400' : 'text-red-400'}`}>
                                    {data.change}
                                </span>
                                <span className="text-xs text-gray-500">vs last period</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Chart */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2 p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                    <h3 className="text-2xl font-bold mb-6">Performance Trends</h3>

                    <div className="h-80 flex items-end justify-between gap-3">
                        {chartData.map((data, index) => (
                            <div key={index} className="flex-1 flex flex-col items-center gap-2">
                                <div className="flex-1 w-full flex flex-col justify-end group">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        animate={{ height: `${data.value}%` }}
                                        transition={{ delay: index * 0.05, duration: 0.6 }}
                                        className="relative bg-gradient-to-t from-pink-600 to-pink-500 rounded-t-lg cursor-pointer hover:from-pink-500 hover:to-pink-400 transition-all"
                                    >
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 px-3 py-2 rounded-lg text-xs whitespace-nowrap">
                                            <div className="font-bold">{data.sessions} sessions</div>
                                            <div className="text-gray-400">{data.value}% conversion</div>
                                        </div>
                                    </motion.div>
                                </div>
                                <span className="text-xs text-gray-500 mt-2">{data.day}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Traffic Sources */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                    <h3 className="text-2xl font-bold mb-6">Traffic Sources</h3>

                    <div className="space-y-4">
                        {trafficSources.map((source, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="space-y-2"
                            >
                                <div className="flex items-center justify-between text-sm">
                                    <span className="font-semibold">{source.source}</span>
                                    <span className="text-gray-400">{source.visitors}</span>
                                </div>
                                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${source.percentage}%` }}
                                        transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                                        className={`h-full bg-gradient-to-r ${source.color} rounded-full`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Top Pages */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">Top Pages</h3>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left p-4 font-semibold text-gray-400">Page</th>
                                <th className="text-left p-4 font-semibold text-gray-400">Views</th>
                                <th className="text-left p-4 font-semibold text-gray-400">Bounce Rate</th>
                                <th className="text-left p-4 font-semibold text-gray-400">Avg. Time</th>
                                <th className="text-left p-4 font-semibold text-gray-400">Trend</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topPages.map((page, index) => (
                                <motion.tr
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                >
                                    <td className="p-4 font-mono text-pink-400">{page.page}</td>
                                    <td className="p-4 font-semibold">{page.views}</td>
                                    <td className="p-4">
                                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-500/20 text-green-400">
                                            {page.bounce}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-300">{page.time}</td>
                                    <td className="p-4">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className={`w-1 rounded-full ${i < 3 ? 'h-8 bg-pink-500' : 'h-6 bg-pink-500/30'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Users = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterRole, setFilterRole] = useState('all');
    const [filterStatus, setFilterStatus] = useState('all');
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch users from API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users');

                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }

                const data = await response.json();

                // Transform API data to match our UI structure
                const transformedUsers = data.map(user => ({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    username: user.username,
                    phone: user.phone,
                    website: user.website,
                    company: user.company.name,
                    address: `${user.address.city}, ${user.address.street}`,
                    // Add additional fields for our UI
                    role: ['Admin', 'Developer', 'Designer', 'Manager'][Math.floor(Math.random() * 4)],
                    status: Math.random() > 0.2 ? 'Active' : 'Inactive',
                    avatar: ['👨', '👩', '👨‍💻', '👩‍💻', '👨‍🎨', '👩‍🎨', '👨‍💼', '👩‍💼'][Math.floor(Math.random() * 8)],
                    joined: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString().split('T')[0],
                    projects: Math.floor(Math.random() * 20) + 1,
                }));

                setUsers(transformedUsers);
                setError(null);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching users:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const filteredUsers = users.filter(user => {
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRole = filterRole === 'all' || user.role === filterRole;
        const matchesStatus = filterStatus === 'all' || user.status === filterStatus;
        return matchesSearch && matchesRole && matchesStatus;
    });

    const stats = [
        { label: 'Total Users', value: users.length, icon: '👥', color: 'from-blue-500 to-cyan-500' },
        { label: 'Active', value: users.filter(u => u.status === 'Active').length, icon: '✅', color: 'from-green-500 to-emerald-500' },
        { label: 'Admins', value: users.filter(u => u.role === 'Admin').length, icon: '👑', color: 'from-purple-500 to-pink-500' },
        { label: 'New This Month', value: 3, icon: '📈', color: 'from-orange-500 to-red-500' }
    ];

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-black mb-2">
                        <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                            Users
                        </span>
                    </h1>
                    <p className="text-gray-400">Manage your team members and permissions</p>
                </div>
                <button className="px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 flex items-center gap-2">
                    <span className="text-xl">➕</span>
                    Add New User
                </button>
            </div>

            {/* Loading State */}
            {loading && (
                <div className="flex flex-col items-center justify-center py-20">
                    <div className="w-16 h-16 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-400">Loading users...</p>
                </div>
            )}

            {/* Error State */}
            {error && (
                <div className="p-6 rounded-2xl bg-red-500/10 border border-red-500/30 mb-8">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">⚠️</span>
                        <div>
                            <h3 className="font-bold text-red-400">Error Loading Users</h3>
                            <p className="text-sm text-gray-400">{error}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content - Only show when not loading */}
            {!loading && !error && (
                <>
                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-500`} />
                                <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-pink-500/50 transition-all duration-300">
                                    <div className="text-4xl mb-3">{stat.icon}</div>
                                    <div className="text-3xl font-black mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-400">{stat.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Filters */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Search by name or email..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
                        </div>

                        <select
                            value={filterRole}
                            onChange={(e) => setFilterRole(e.target.value)}
                            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-pink-500/50 focus:outline-none"
                        >
                            <option value="all">All Roles</option>
                            <option value="Admin">Admin</option>
                            <option value="Developer">Developer</option>
                            <option value="Designer">Designer</option>
                            <option value="Manager">Manager</option>
                        </select>

                        <select
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-pink-500/50 focus:outline-none"
                        >
                            <option value="all">All Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                    </div>

                    {/* Users Table */}
                    <div className="rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-white/0">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-white/10 bg-white/5">
                                        <th className="text-left p-4 font-semibold text-gray-400">User</th>
                                        <th className="text-left p-4 font-semibold text-gray-400">Username</th>
                                        <th className="text-left p-4 font-semibold text-gray-400">Company</th>
                                        <th className="text-left p-4 font-semibold text-gray-400">Phone</th>
                                        <th className="text-left p-4 font-semibold text-gray-400">Role</th>
                                        <th className="text-left p-4 font-semibold text-gray-400">Status</th>
                                        <th className="text-left p-4 font-semibold text-gray-400">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers.map((user, index) => (
                                        <motion.tr
                                            key={user.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="border-b border-white/5 hover:bg-white/5 transition-colors"
                                        >
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-2xl">
                                                        {user.avatar}
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold">{user.name}</div>
                                                        <div className="text-sm text-gray-400">{user.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-gray-300">@{user.username}</td>
                                            <td className="p-4 text-gray-300">{user.company}</td>
                                            <td className="p-4 text-gray-400 text-sm">{user.phone}</td>
                                            <td className="p-4">
                                                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-white/10">
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${user.status === 'Active'
                                                        ? 'bg-green-500/20 text-green-400'
                                                        : 'bg-gray-500/20 text-gray-400'
                                                    }`}>
                                                    {user.status}
                                                </span>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex gap-2">
                                                    <button className="p-2 rounded-lg bg-white/5 hover:bg-pink-500/20 border border-white/10 hover:border-pink-500/50 transition-all">
                                                        ✏️
                                                    </button>
                                                    <button className="p-2 rounded-lg bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/50 transition-all">
                                                        🗑️
                                                    </button>
                                                </div>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {filteredUsers.length === 0 && !loading && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold mb-2">No users found</h3>
                            <p className="text-gray-400">Try adjusting your search or filters</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Users;
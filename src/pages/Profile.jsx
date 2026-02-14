import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useUser } from '@clerk/clerk-react';

const Profile = () => {
    const { user } = useUser();
    const [isEditing, setIsEditing] = useState(false);

    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '+1 (555) 123-4567',
        bio: 'Product designer and developer passionate about creating beautiful user experiences.',
        company: 'Nexus Inc.',
        role: 'Senior Developer',
        location: 'San Francisco, CA',
        website: 'https://johndoe.com',
    });

    // Update profile data when user loads
    useEffect(() => {
        if (user) {
            setProfileData(prev => ({
                ...prev,
                firstName: user.firstName || '',
                lastName: user.lastName || '',
                email: user.primaryEmailAddress?.emailAddress || '',
            }));
        }
    }, [user]);

    const stats = [
        { label: 'Projects', value: '24', icon: '📁', color: 'from-blue-500 to-cyan-500' },
        { label: 'Tasks Completed', value: '156', icon: '✅', color: 'from-green-500 to-emerald-500' },
        { label: 'Team Members', value: '12', icon: '👥', color: 'from-purple-500 to-pink-500' },
        { label: 'Hours Logged', value: '892', icon: '⏰', color: 'from-orange-500 to-red-500' },
    ];

    const activities = [
        { action: 'Completed project', details: 'Mobile App Redesign', time: '2 hours ago', icon: '✅' },
        { action: 'Uploaded files', details: '15 design assets', time: '5 hours ago', icon: '📤' },
        { action: 'Joined team', details: 'Marketing Department', time: '1 day ago', icon: '👥' },
        { action: 'Updated profile', details: 'Changed bio and avatar', time: '3 days ago', icon: '👤' },
    ];

    const handleSave = () => {
        setIsEditing(false);
        // Save logic here
    };

    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-4xl font-black mb-2">
                        <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                            Profile
                        </span>
                    </h1>
                    <p className="text-gray-400">Manage your personal information</p>
                </div>

                {!isEditing ? (
                    <button
                        onClick={() => setIsEditing(true)}
                        className="px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                    >
                        Edit Profile
                    </button>
                ) : (
                    <div className="flex gap-3">
                        <button
                            onClick={() => setIsEditing(false)}
                            className="px-6 py-3 border border-white/10 rounded-xl font-semibold hover:bg-white/5 transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSave}
                            className="px-6 py-3 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all"
                        >
                            Save Changes
                        </button>
                    </div>
                )}
            </div>

            {/* Profile Card */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-1">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 text-center">
                        {/* Avatar */}
                        <div className="relative inline-block mb-6">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-6xl">
                                {user?.imageUrl ? (
                                    <img src={user.imageUrl} alt="Profile" className="w-full h-full rounded-full object-cover" />
                                ) : (
                                    '👤'
                                )}
                            </div>
                            {isEditing && (
                                <button className="absolute bottom-0 right-0 w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-all">
                                    📷
                                </button>
                            )}
                        </div>

                        <h2 className="text-2xl font-bold mb-2">
                            {profileData.firstName} {profileData.lastName}
                        </h2>
                        <p className="text-gray-400 mb-4">{profileData.role}</p>

                        <div className="flex justify-center gap-3">
                            <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/50 transition-all">
                                💬
                            </button>
                            <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/50 transition-all">
                                📧
                            </button>
                            <button className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-pink-500/50 transition-all">
                                🔗
                            </button>
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 space-y-4">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative group"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-xl blur-xl transition-all duration-500`} />
                                <div className="relative p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-pink-500/50 transition-all flex items-center gap-4">
                                    <div className="text-3xl">{stat.icon}</div>
                                    <div>
                                        <div className="text-2xl font-black">{stat.value}</div>
                                        <div className="text-sm text-gray-400">{stat.label}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Profile Details */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">Personal Information</h3>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { label: 'First Name', key: 'firstName', type: 'text' },
                                { label: 'Last Name', key: 'lastName', type: 'text' },
                                { label: 'Email', key: 'email', type: 'email' },
                                { label: 'Phone', key: 'phone', type: 'tel' },
                                { label: 'Company', key: 'company', type: 'text' },
                                { label: 'Role', key: 'role', type: 'text' },
                                { label: 'Location', key: 'location', type: 'text' },
                                { label: 'Website', key: 'website', type: 'url' },
                            ].map((field, index) => (
                                <div key={index}>
                                    <label className="block text-sm text-gray-400 mb-2">{field.label}</label>
                                    <input
                                        type={field.type}
                                        value={profileData[field.key]}
                                        onChange={(e) => setProfileData({ ...profileData, [field.key]: e.target.value })}
                                        disabled={!isEditing}
                                        className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm text-gray-400 mb-2">Bio</label>
                            <textarea
                                value={profileData.bio}
                                onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                                disabled={!isEditing}
                                rows={4}
                                className="w-full px-4 py-3 bg-black/30 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-pink-500/50 focus:outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed resize-none"
                            />
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">Recent Activity</h3>

                        <div className="space-y-4">
                            {activities.map((activity, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-black/30 hover:bg-black/50 transition-all"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-xl flex-shrink-0">
                                        {activity.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold mb-1">{activity.action}</div>
                                        <div className="text-sm text-gray-400">{activity.details}</div>
                                    </div>
                                    <div className="text-xs text-gray-500">{activity.time}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
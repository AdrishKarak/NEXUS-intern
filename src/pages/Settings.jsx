import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Settings = () => {
    const [notifications, setNotifications] = useState({
        email: true,
        push: false,
        sms: true,
    });

    const [privacy, setPrivacy] = useState({
        profilePublic: true,
        showActivity: false,
        allowMessages: true,
    });

    const toggleNotification = (key) => {
        setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const togglePrivacy = (key) => {
        setPrivacy(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const settingsSections = [
        {
            title: 'General Settings',
            icon: '⚙️',
            items: [
                { label: 'App Language', type: 'select', options: ['English', 'Spanish', 'French', 'German'] },
                { label: 'Time Zone', type: 'select', options: ['UTC', 'EST', 'PST', 'GMT'] },
                { label: 'Date Format', type: 'select', options: ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'] },
            ]
        },
        {
            title: 'Notifications',
            icon: '🔔',
            toggles: [
                { key: 'email', label: 'Email Notifications', description: 'Receive updates via email' },
                { key: 'push', label: 'Push Notifications', description: 'Get notified on your device' },
                { key: 'sms', label: 'SMS Notifications', description: 'Receive text messages' },
            ]
        },
        {
            title: 'Privacy & Security',
            icon: '🔒',
            toggles: [
                { key: 'profilePublic', label: 'Public Profile', description: 'Make your profile visible to everyone' },
                { key: 'showActivity', label: 'Show Activity', description: 'Display your recent activity' },
                { key: 'allowMessages', label: 'Allow Messages', description: 'Let users send you messages' },
            ]
        },
    ];

    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-black mb-2">
                    <span className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent">
                        Settings
                    </span>
                </h1>
                <p className="text-gray-400">Manage your application preferences</p>
            </div>

            {/* Settings Sections */}
            <div className="space-y-6">
                {settingsSections.map((section, sectionIndex) => (
                    <motion.div
                        key={sectionIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: sectionIndex * 0.1 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-3xl">{section.icon}</span>
                            <h2 className="text-2xl font-bold">{section.title}</h2>
                        </div>

                        {/* Select Inputs */}
                        {section.items && (
                            <div className="space-y-4">
                                {section.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-center justify-between p-4 rounded-xl bg-black/30">
                                        <label className="font-semibold">{item.label}</label>
                                        <select className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-pink-500/50 focus:outline-none">
                                            {item.options.map(option => (
                                                <option key={option} value={option}>{option}</option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Toggle Switches */}
                        {section.toggles && (
                            <div className="space-y-4">
                                {section.toggles.map((toggle, toggleIndex) => {
                                    const isEnabled = section.title.includes('Notification')
                                        ? notifications[toggle.key]
                                        : privacy[toggle.key];

                                    const handleToggle = section.title.includes('Notification')
                                        ? () => toggleNotification(toggle.key)
                                        : () => togglePrivacy(toggle.key);

                                    return (
                                        <div key={toggleIndex} className="flex items-center justify-between p-4 rounded-xl bg-black/30 hover:bg-black/50 transition-all">
                                            <div className="flex-1">
                                                <div className="font-semibold mb-1">{toggle.label}</div>
                                                <div className="text-sm text-gray-400">{toggle.description}</div>
                                            </div>
                                            <button
                                                onClick={handleToggle}
                                                className={`relative w-14 h-7 rounded-full transition-all duration-300 ${isEnabled
                                                        ? 'bg-gradient-to-r from-pink-600 to-rose-600'
                                                        : 'bg-gray-700'
                                                    }`}
                                            >
                                                <motion.div
                                                    animate={{ x: isEnabled ? 28 : 2 }}
                                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                                    className="absolute top-1 w-5 h-5 bg-white rounded-full"
                                                />
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </motion.div>
                ))}

                {/* Danger Zone */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-3xl">⚠️</span>
                        <h2 className="text-2xl font-bold text-red-400">Danger Zone</h2>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-black/30 border border-red-500/20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-red-400 mb-1">Delete Account</div>
                                    <div className="text-sm text-gray-400">Permanently delete your account and all data</div>
                                </div>
                                <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition-all">
                                    Delete
                                </button>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-black/30 border border-yellow-500/20">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="font-semibold text-yellow-400 mb-1">Reset Settings</div>
                                    <div className="text-sm text-gray-400">Reset all settings to default values</div>
                                </div>
                                <button className="px-6 py-2 bg-yellow-600 hover:bg-yellow-700 rounded-lg font-semibold transition-all">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Save Button */}
                <div className="flex justify-end gap-4">
                    <button className="px-8 py-3 border border-white/10 rounded-xl font-semibold hover:bg-white/5 transition-all">
                        Cancel
                    </button>
                    <button className="px-8 py-3 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
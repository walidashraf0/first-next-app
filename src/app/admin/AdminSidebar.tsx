'use client'

import React from 'react'
import Link from 'next/link'

interface NavItem {
  href: string
  label: string
  icon: string
}

interface AdminSidebarProps {
  isOpen?: boolean
  onClose?: () => void
}

const AdminSidebar = ({ isOpen = true, onClose }: AdminSidebarProps) => {
  const navItems: NavItem[] = [
    { href: '/admin', label: 'Dashboard', icon: '📊' },
    { href: '/admin/posts-table', label: 'Posts', icon: '📝' },
    { href: '/admin/comments-table', label: 'Comments', icon: '💬' },
  ]

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 sm:top-0 md:top-auto h-screen w-64 bg-gradient-to-b from-slate-900 to-slate-800 border-r border-slate-700 shadow-lg transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 `}
      >
        {/* Close Button for Mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:hidden text-slate-200 hover:text-white text-2xl"
        >
          ✕
        </button>

        {/* Logo Section */}
        <div className="flex items-center justify-center h-20 border-b border-slate-700">
          <h1 className="text-2xl font-bold text-white">Admin</h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-8 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-slate-200 hover:bg-slate-700 hover:text-white transition-all duration-200 group"
              onClick={onClose}
            >
              <span className="text-xl group-hover:scale-110 transition-transform">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* Footer Section */}
        <div className="border-t border-slate-700 p-4">
          <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors duration-200">
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}

export default AdminSidebar
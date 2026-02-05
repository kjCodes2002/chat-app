// ChatHeader component - displays the selected user's info at the top of the chat

import type { User } from '../types';

interface ChatHeaderProps {
  user: User;
}

export function ChatHeader({ user }: ChatHeaderProps) {
  return (
    <div className="flex items-center gap-3 p-4 border-b border-gray-700 bg-gray-800">
      {/* Avatar */}
      <div className="relative">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full bg-gray-600"
        />
        {user.isOnline && (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-gray-800 rounded-full" />
        )}
      </div>

      {/* User info */}
      <div>
        <h2 className="font-semibold text-white">{user.name}</h2>
        <p className="text-sm text-gray-400">
          {user.isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
}

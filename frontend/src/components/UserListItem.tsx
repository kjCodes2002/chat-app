// UserListItem component - displays a single user in the sidebar

import type { User } from '../types';

interface UserListItemProps {
  user: User;
  lastMessage: string;
  isSelected: boolean;
  onClick: () => void;
}

export function UserListItem({ user, lastMessage, isSelected, onClick }: UserListItemProps) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-3 cursor-pointer transition-colors rounded-lg mx-2 ${
        isSelected
          ? 'bg-blue-600 text-white'
          : 'hover:bg-gray-700 text-gray-200'
      }`}
    >
      {/* Avatar with online indicator */}
      <div className="relative flex-shrink-0">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-12 h-12 rounded-full bg-gray-600"
        />
        {user.isOnline && (
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-800 rounded-full" />
        )}
      </div>

      {/* Name and last message */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold truncate">{user.name}</h3>
        <p className={`text-sm truncate ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>
          {lastMessage}
        </p>
      </div>
    </div>
  );
}

// Sidebar component - displays the list of users/conversations

import type { User, Conversation } from '../types';
import { UserListItem } from './UserListItem';
import { getLastMessage } from '../data/mockData';

interface SidebarProps {
  users: User[];
  conversations: Conversation[];
  selectedUserId: string | null;
  onSelectUser: (userId: string) => void;
}

export function Sidebar({ users, conversations, selectedUserId, onSelectUser }: SidebarProps) {
  return (
    <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold text-white">Messages</h1>
        <p className="text-sm text-gray-400 mt-1">{users.length} conversations</p>
      </div>

      {/* User list */}
      <div className="flex-1 overflow-y-auto py-2">
        {users.map((user) => (
          <UserListItem
            key={user.id}
            user={user}
            lastMessage={getLastMessage(user.id, conversations)}
            isSelected={selectedUserId === user.id}
            onClick={() => onSelectUser(user.id)}
          />
        ))}
      </div>
    </div>
  );
}

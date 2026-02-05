// Main App component - manages state and renders the split-screen layout

import { useState } from 'react';
import type { Conversation, Message } from './types';
import { users, initialConversations, CURRENT_USER_ID } from './data/mockData';
import { Sidebar } from './components/Sidebar';
import { ChatWindow } from './components/ChatWindow';

function App() {
  // State for selected user and conversations
  const [selectedUserId, setSelectedUserId] = useState<string | null>(users[0]?.id || null);
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);

  // Get the selected user object
  const selectedUser = users.find((u) => u.id === selectedUserId);

  // Get messages for the selected conversation
  const selectedConversation = conversations.find((c) => c.userId === selectedUserId);
  const messages = selectedConversation?.messages || [];

  // Handle sending a new message
  const handleSendMessage = (text: string) => {
    if (!selectedUserId) return;

    const newMessage: Message = {
      id: `msg-${Date.now()}`,
      senderId: CURRENT_USER_ID,
      text,
      timestamp: new Date(),
    };

    setConversations((prev) => {
      const existingConversation = prev.find((c) => c.userId === selectedUserId);

      if (existingConversation) {
        // Add message to existing conversation
        return prev.map((c) =>
          c.userId === selectedUserId
            ? { ...c, messages: [...c.messages, newMessage] }
            : c
        );
      } else {
        // Create new conversation
        return [...prev, { userId: selectedUserId, messages: [newMessage] }];
      }
    });
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar
        users={users}
        conversations={conversations}
        selectedUserId={selectedUserId}
        onSelectUser={setSelectedUserId}
      />

      {/* Chat Window */}
      {selectedUser ? (
        <ChatWindow
          user={selectedUser}
          messages={messages}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gray-900 text-gray-500">
          <p>Select a conversation to start chatting</p>
        </div>
      )}
    </div>
  );
}

export default App;

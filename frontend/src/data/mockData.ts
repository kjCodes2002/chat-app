// Mock data for the chat application
// This data structure mirrors what would come from a real API

import type { User, Conversation } from '../types';

// Current user ID (simulating the logged-in user)
export const CURRENT_USER_ID = 'me';

// List of users to chat with
export const users: User[] = [
  {
    id: 'user1',
    name: 'Alice Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alice',
    isOnline: true,
  },
  {
    id: 'user2',
    name: 'Bob Smith',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bob',
    isOnline: true,
  },
  {
    id: 'user3',
    name: 'Carol Williams',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carol',
    isOnline: false,
  },
  {
    id: 'user4',
    name: 'David Brown',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David',
    isOnline: true,
  },
  {
    id: 'user5',
    name: 'Eva Martinez',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eva',
    isOnline: false,
  },
];

// Initial conversations with mock messages
export const initialConversations: Conversation[] = [
  {
    userId: 'user1',
    messages: [
      {
        id: 'msg1',
        senderId: 'user1',
        text: 'Hey! How are you doing?',
        timestamp: new Date('2026-02-05T10:00:00'),
      },
      {
        id: 'msg2',
        senderId: 'me',
        text: "I'm doing great! Just working on a new project.",
        timestamp: new Date('2026-02-05T10:02:00'),
      },
      {
        id: 'msg3',
        senderId: 'user1',
        text: "That sounds exciting! What's it about?",
        timestamp: new Date('2026-02-05T10:05:00'),
      },
    ],
  },
  {
    userId: 'user2',
    messages: [
      {
        id: 'msg4',
        senderId: 'me',
        text: 'Did you check the latest updates?',
        timestamp: new Date('2026-02-04T15:30:00'),
      },
      {
        id: 'msg5',
        senderId: 'user2',
        text: 'Yes, looks good! Ready for deployment.',
        timestamp: new Date('2026-02-04T15:35:00'),
      },
    ],
  },
  {
    userId: 'user3',
    messages: [
      {
        id: 'msg6',
        senderId: 'user3',
        text: 'Can we schedule a meeting for tomorrow?',
        timestamp: new Date('2026-02-03T09:00:00'),
      },
    ],
  },
  {
    userId: 'user4',
    messages: [
      {
        id: 'msg7',
        senderId: 'user4',
        text: 'Thanks for your help yesterday!',
        timestamp: new Date('2026-02-02T18:00:00'),
      },
      {
        id: 'msg8',
        senderId: 'me',
        text: 'No problem at all! Happy to help.',
        timestamp: new Date('2026-02-02T18:05:00'),
      },
    ],
  },
  {
    userId: 'user5',
    messages: [],
  },
];

// Helper to get the last message from a conversation
export function getLastMessage(userId: string, conversations: Conversation[]): string {
  const conversation = conversations.find((c) => c.userId === userId);
  if (!conversation || conversation.messages.length === 0) {
    return 'No messages yet';
  }
  return conversation.messages[conversation.messages.length - 1].text;
}

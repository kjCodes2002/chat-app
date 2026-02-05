// TypeScript interfaces for the chat application data models
// These can be easily extended when integrating with a real backend API

export interface User {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
}

export interface Message {
  id: string;
  senderId: string; // 'me' for current user, or the other user's ID
  text: string;
  timestamp: Date;
}

export interface Conversation {
  userId: string; // The other user in the conversation
  messages: Message[];
}

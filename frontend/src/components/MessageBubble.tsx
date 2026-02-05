// MessageBubble component - displays a single message with alignment based on sender

import type { Message } from '../types';
import { CURRENT_USER_ID } from '../data/mockData';

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isOwnMessage = message.senderId === CURRENT_USER_ID;

  // Format timestamp
  const timeString = message.timestamp.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
          isOwnMessage
            ? 'bg-blue-600 text-white rounded-br-sm'
            : 'bg-gray-700 text-gray-100 rounded-bl-sm'
        }`}
      >
        <p className="text-sm">{message.text}</p>
        <p
          className={`text-xs mt-1 ${
            isOwnMessage ? 'text-blue-200' : 'text-gray-400'
          }`}
        >
          {timeString}
        </p>
      </div>
    </div>
  );
}

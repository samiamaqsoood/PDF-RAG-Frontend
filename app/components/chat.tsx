'use client'

import * as React from 'react';

interface Doc {
    pageContent?: string;
    metadata?: {
        loc?: {
            pageNumber?: number
        }
    };
};

interface IMessage {
    role: 'assistant' | 'user';
    content?: string;
    documents?: Doc[];
};

const ChatComponent: React.FC = () => {
    const [message, setMessage] = React.useState<string>('');
    const [messages, setMessages] = React.useState<IMessage[]>([]);

    const handleSendChatMessage = async () => {
        setMessages((prev) => [...prev, {role: 'user', content: message}]);

        const res = await fetch(`http://localhost:8000/chat?message=${message}`);
        const data = await res.json();
        setMessages((prev) => [
            ...prev,
            {
                role: 'assistant',
                content: data?.result,
                documents: data?.docs,
            },
        ])
        console.log("this is data:",{data});
    }
    return (
        <div className='w-100 fixed bottom-4 '>
        <div className="flex-1 overflow-y-auto">
            <div>
                {messages.map((message, index) => <pre key={index}>{JSON.stringify(message, null, 2)}</pre>)}
            </div>
            <h2 className="text-xl font-semibold mb-4">Chat with AI</h2>

            {/* Chat messages */}
             {/* <div className="space-y-2">
                <p className="bg-gray-200 p-2 rounded w-fit">
                    Hello! Upload a PDF to start chatting.
                </p>
            </div> */}
        </div> 

        {/* Chat input */ }
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Ask something..."
            className="flex-1 border rounded px-3 py-2"
            value={message}
            onChange={(e) => {
                setMessage(e.target.value)
            }}
          />

          <button disabled={!message.trim()} onClick={handleSendChatMessage} className="bg-purple-600 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
        <div />
        </div>  
    
    )
}

export default ChatComponent;
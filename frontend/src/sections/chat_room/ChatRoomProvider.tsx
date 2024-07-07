import {ChatRoomContainer} from '@/sections/chat_room/ChatRoomContainer';

export const ChatRoomProvider = async () => {
  
  return <>
    <div className="flex justify-center pt-36">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
              Chat Rooms
            </h2>
          </div>
        </div>
        <ChatRoomContainer/>
      </div>
    </div>
    
  </>
  
}

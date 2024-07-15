import React from 'react'

const RenderReplyMessage = ({ item }) => {
  const renderReplyMessage = (replyMessage) => {
    if (!replyMessage) return null

    return (
      <div className='reply-message mb-2 border-l-4 border-gray-400 pl-2'>
        {/* <p className='text-sm text-gray-600'>Đang trả lời: {replyMessage.sender}</p> */}
        {renderMessageContent(replyMessage)}
      </div>
    )
  }

  const renderMessageContent = (message) => {
    switch (message.messageType) {
      case 'image':
        return (
          <img
            className='h-auto w-full'
            src={message.message}
            alt='Uploaded content'
            style={{ width: 'auto', height: '200px' }}
          />
        )
      case 'audio':
        return <audio className='w-full' controls src={message.message} />
      case 'video':
        return (
          <video
            className='w-full'
            controls
            src={message.message}
            style={{ width: 'auto', height: '400px' }}
          />
        )
      case 'file':
        return (
          <a href={message.message} download>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAzHuAroNuDhtPXeGxXfL-Idoctgcv2wPggA&s'
              alt='image file'
              style={{ width: '100px', height: 'auto' }}
            />
          </a>
        )
      case 'text':
        return <p className='break-words'>{message.message}</p>
      default:
        return null
    }
  }

  return (
    <div className='message-item mb-4'>
      {item.replyMessage && renderReplyMessage(item.replyMessage)}
      <div className='original-message'>{renderMessageContent(item)}</div>
    </div>
  )
}

export default RenderReplyMessage

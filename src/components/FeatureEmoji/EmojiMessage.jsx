import React from 'react'
import { useDispatch } from 'react-redux'
import EmojiPicker from 'emoji-picker-react'
import { selectEmoji } from '../../redux/Slice/messageSlice'

const EmojiMessage = () => {
  const dispatch = useDispatch()

  const handleEmojiClick = (event, emojiObject) => {
    dispatch(selectEmoji(emojiObject.target.currentSrc))
  }

  return (
    <div className='emoji-picker-wrapper'>
      <EmojiPicker onEmojiClick={handleEmojiClick} />
    </div>
  )
}

export default EmojiMessage

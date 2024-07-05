import { useEffect, useLayoutEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import ChatBody from '../../components/ChatPage/ChatBody/ChatBody'
import ToastMessage from '../../components/ToastMessage/ToastMessage'
import InformationConversation from '../../components/ChatPage/InformationConversation/InformationConversation'
import { useDispatch, useSelector } from 'react-redux'

import { useParams } from 'react-router-dom'
import { getMessagesById } from '../../redux/Slice/messageSlice'
import {
  clearToastMessage,
  getLsConversation,
  setConversation,
  setIdConversation,
} from '@/redux/Slice/userSlice'
import { connectSocket } from '@/redux/Slice/chatSlice'
import ChatHeaderSkeleton from '@/components/ChatPage/ChatHeader/ChatHeaderSkeleton/ChatHeaderSkeleton'
import LoadingSpinner from './ChatSkeleton/ChatSkeleton'

export default function Chat() {
  const [showInfo, setShowInfo] = useState(false)
  const dispatch = useDispatch()
  const toastMessage = useSelector((state) => state?.user?.toastMessage)

  const toggleInfo = () => {
    setShowInfo(!showInfo)
  }
  const idConversation = useParams()
  useEffect(() => {
    dispatch(connectSocket(idConversation))
  }, [dispatch, idConversation])
  const conversation = useSelector((state) => state.user.conversation)
  const lsConversation = useSelector((state) => state.user.lsConversation)
  useLayoutEffect(() => {
    dispatch(getLsConversation())
  }, [])
  useLayoutEffect(() => {
    dispatch(getMessagesById(idConversation))
    dispatch(setIdConversation(idConversation.idConversation))
  }, [idConversation])

  useEffect(() => {
    if (lsConversation) {
      console.log('check set conversation')
      dispatch(setConversation(idConversation))
    }
  }, [lsConversation, idConversation])

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        dispatch(clearToastMessage()) // Clear the toast message after 2 seconds
      }, 2000)
      return () => clearTimeout(timer) // Cleanup the timer on unmount
    }
  }, [dispatch, toastMessage])

  return (
    <div className='fixed w-full'>
      <div className='Login relative'>
        <main className='flex'>
          <Sidebar />
          {conversation ? <ChatBody toggleInfo={toggleInfo} /> : <LoadingSpinner />}
          {showInfo && (
            <div className='w-1/3'>
              <InformationConversation />
            </div>
          )}
        </main>
        {toastMessage && <ToastMessage message={toastMessage} />}
      </div>
    </div>
  )
}

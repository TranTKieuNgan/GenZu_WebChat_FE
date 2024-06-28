import { RiTranslate } from 'react-icons/ri'
import { MdOutlineQuickreply } from 'react-icons/md'
import { SlOptions } from 'react-icons/sl'
import DropdownOption from './DropdownOption/DropdownOption'
import { setAnswerSuggestion } from '../../../../redux/Slice/messageSlice'

import { answerSuggestion } from '@/utils/answerSuggestion'
import { useDispatch } from 'react-redux'
import { useRef, useState, useEffect } from 'react'

export default function FeatureAI(props) {
  const buttonRef = useRef(null)
  const dropdownRef = useRef(null)
  const dispatch = useDispatch()
  const [isOptionBtnClick, setIsOptionBtnClick] = useState(false)
  const handleMoreClick = (e) => {
    e.preventDefault()
    setIsOptionBtnClick(!isOptionBtnClick)
    props.callBackOptionClick()
    // props.isActiveOption(!isOptionBtnClick);
  }

  const handleClickOutside = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(e.target)
    ) {
      setIsOptionBtnClick(false)
    }
  }

  const handleAnswerQuestion = async (message) => {
    const answer = await answerSuggestion(message)
    dispatch(setAnswerSuggestion(answer))
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className='relative'>
      <ul className='mr-4 hidden overflow-x-hidden font-semibold md:flex md:items-center'>
        <li className='mr-1 p-1'>
          <button id='setting' className='rounded-md p-1 hover:bg-blue-400'>
            <RiTranslate size={14} />
          </button>
        </li>
        <li className='mr-1 p-1'>
          <button
            id='setting'
            className='rounded-md p-1 hover:bg-blue-400'
            onClick={() => handleAnswerQuestion(props.message)}
          >
            <MdOutlineQuickreply size={14} />
          </button>
        </li>
        <li className='mr-1 p-1'>
          <button
            id='setting'
            className='rounded-md p-1 hover:bg-blue-400'
            ref={buttonRef}
            onClick={handleMoreClick}
          >
            <SlOptions size={14} />
          </button>
        </li>
      </ul>
      <div className='' ref={dropdownRef}>
        {isOptionBtnClick && <DropdownOption />}
      </div>
    </div>
  )
}

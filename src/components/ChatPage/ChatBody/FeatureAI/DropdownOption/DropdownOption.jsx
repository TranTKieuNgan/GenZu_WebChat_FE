import DropdownItem from '../../../../Sidebar/DropdownItem/DropdownItem'
import { MdOutlineEdit, MdOutlineRedo } from 'react-icons/md'
import { useRef } from 'react'
import { deleteMessageOnesite } from '@/services/messageService'
import { useDispatch } from 'react-redux'
import { recallMessageSlice, setDeleteMessageOneSite } from '@/redux/Slice/messageSlice'
export default function DropdownOption(props) {
  const dropdownRef = useRef(null)
  const dispatch = useDispatch()
  const deleteOnesite = async () => {
    const response = await deleteMessageOnesite(props)
    console.log(props.idMessage)
    console.log(response.status)
    if (response.status === 200) {
      dispatch(setDeleteMessageOneSite(props.idMessage))
    }
  }
  const recallMes = () => {
    console.log(props.idMessage)
    dispatch(recallMessageSlice(props.idMessage))
  }
  return (
    <div
      className='absolute right-0 top-0 z-10 mt-12 w-40 rounded-lg border bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
      ref={dropdownRef}
    >
      {/* <div className="absolute left-48 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" /> */}
      {console.log(props.owner)}
      <ul>
        <DropdownItem
          icon={MdOutlineEdit}
          label={'Delete One Site'}
          iconStyle={''}
          dropdownStyle={'p-2'}
          onClick={deleteOnesite}
        />
        <hr />
        {props.owner ? (
          <DropdownItem
            icon={MdOutlineRedo}
            label={'Redo'}
            iconStyle={''}
            dropdownStyle={'p-2'}
            onClick={recallMes}
          />
        ) : (
          ''
        )}
        {/* <DropdownItem
          icon={MdOutlineRedo}
          label={'Redo'}
          iconStyle={''}
          dropdownStyle={'p-2'}
          onClick={recallMes}
        /> */}
      </ul>
    </div>
  )
}

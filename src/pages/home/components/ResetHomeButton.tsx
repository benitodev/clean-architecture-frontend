import { resetUser } from '@/redux/slices/user.slice'
import { useDispatch } from 'react-redux'

const ResetHomeButton = () => {
    const dispatch = useDispatch()
    const dispatchResetUser = () => {
      setTimeout(()=> {
        dispatch(resetUser())
      }, 200)
    }
  
  return (
    <button onClick={dispatchResetUser}>Reset Character</button>
  )
}

export default ResetHomeButton
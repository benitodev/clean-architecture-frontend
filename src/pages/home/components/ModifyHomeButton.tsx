import { modifyUser } from '@/redux/slices/user.slice'
import { useDispatch } from 'react-redux'

const ModifyHomeButton = () => {
    const dispatch = useDispatch()
    const dispatchModifyUser = () => {
      setTimeout(()=> {
        dispatch(modifyUser({name: 'admin modified'}))
      }, 200)
    }
  
  return (
    <button onClick={dispatchModifyUser}>Modify character Username</button>
  )
}

export default ModifyHomeButton
import { initialUser } from '@/models'
import { createUser } from '@/redux/slices/user.slice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useGetRickAndMortyCharacter } from '../hooks/useGetRickAndMortyCharacter'
import { getCharacter, rickAndMortyCharacter } from '../services'

const CreateHomeButton = () => {
    const dispatch = useDispatch()
    const { character } = useGetRickAndMortyCharacter()

    const dispatchCreateUser = () => {
      setTimeout(()=> {
        dispatch(createUser(character))
      }, 200)
    }
  
  return (
    <button onClick={dispatchCreateUser}>Create Character</button>
  )
}

export default CreateHomeButton
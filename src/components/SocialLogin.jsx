
import { doSocialLogin } from '../app/actions'

const SocialLogin = () => {
  return (
    <form action={doSocialLogin}>
      <button 
        className=' bg-pink-400 text-white rounded-md m-1 text-lg'
        type='submit' 
        name='action' 
        value="google">
        Sign In With Google
      </button>
      <button
        className=' bg-black text-white rounded-md m-1 text-lg'
        type='submit' 
        name='action' 
        value="github">
        Sign In With GitHub
      </button>
    </form>
  )
}

export default SocialLogin

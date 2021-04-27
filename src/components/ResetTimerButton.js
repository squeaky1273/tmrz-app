import { resetTimer } from '../actions';
import { useDispatch } from 'react-redux'
import './ResetTimerButton.css'

function ResetTimerButton() {
    const dispatcher = useDispatch()
    return (
        <button
        className="ClearTimerButton"
        onClick={() => dispatcher( resetTimer() )}
        >Clear Timer</button>
    )

}

export default ResetTimerButton
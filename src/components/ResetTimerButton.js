import { resetTimer } from '../actions';
import { useDispatch } from 'react-redux'

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
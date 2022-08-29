import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { AuthContext } from './AuthContext';
import firebase from './../helpers/firebase';
import '.././styling/SavedPolls.scss'




const SavedPolls = () => {
    const { currentUser } = useContext(AuthContext)
    const [savedPolls, setSavedPolls] = useState([]);

    useEffect(() => {
        if (currentUser) {
            const database = getDatabase(firebase)
            const userID = currentUser.uid
            const userRef = ref(database, `loggedIn/${userID}`);
            onValue(userRef, (response) => {
                let newState = [];
                const data = response.val();
                for (let key in data) {
                    newState.push({ key: key, question: data[key].question })
                }
                setSavedPolls(newState)
            })
        }
    }, [currentUser])

    const deletePoll = (e) => {
        const database = getDatabase(firebase)
        const dbRef = ref(database, `loggedIn/${currentUser.uid}/${e.target.parentNode.id}`)
        remove(dbRef)
    }

    return (
        <>
            <h2>These are your saved polls!</h2>
            {savedPolls.length !== 0 ? savedPolls.map((poll) => (
                <li key={poll.key}>
                    <p>{poll.question}</p>
                    <button className="button2">
                        <Link to={`/poll/${[currentUser.uid]}/${poll.key}`}>
                            Go to Poll
                        </Link>
                    </button>
                    <button className="button3">
                        <Link to={`/poll/${[currentUser.uid]}/${poll.key}/results`}>
                            Go to Results
                        </Link>
                    </button>
                    <button className="button1" onClick={deletePoll}>Delete Poll</button>
                </li>))
                
            
                : <Link to="/">Create Some Polls</Link>}
        </>
    )
}

export default SavedPolls;
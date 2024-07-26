import React, { useEffect, useState } from 'react';
import './PetitionList.css';
import { toast } from 'react-toastify';
import { getFirestore, collection, onSnapshot, doc, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { app } from '../Firebase';

const db = getFirestore(app);

const PetitionList = () => {
    const [petitions, setPetitions] = useState([]);
    const [userVotes, setUserVotes] = useState({}); // Track user votes

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'petitions'), (snapshot) => {
            const changes = snapshot.docChanges();
            setPetitions((prev) => {
                let newPetitions = [...prev];
                changes.forEach((change) => {
                    const petitionData = { ...change.doc.data(), id: change.doc.id };
                    if (change.type === 'added') {
                        newPetitions.push(petitionData);
                    } else if (change.type === 'modified') {
                        const index = newPetitions.findIndex((petition) => petition.id === change.doc.id);
                        if (index > -1) {
                            newPetitions[index] = petitionData;
                        }
                    } else if (change.type === 'removed') {
                        newPetitions = newPetitions.filter((petition) => petition.id !== change.doc.id);
                    }
                });
                return newPetitions;
            });
        });

        return () => unsubscribe();
    }, []);

    const handleVote = async (id, voteType) => {
        const docRef = doc(db, 'petitions', id);
        const docSnap = await getDoc(docRef);
        const currentVotes = docSnap.data().votes;
        let newVotes = currentVotes;

        // Update votes based on vote type
        if (voteType === 'upvote') {
            newVotes = currentVotes + 1;
        } else if (voteType === 'downvote') {
            newVotes = currentVotes - 1;
        }

        // Check if user has already voted
        if (userVotes[id] === voteType) {
            toast.info('You have already voted.', {
                position: "top-center"
            });
            return;
        }

        // Update or delete the vote count in Firestore
        if (newVotes < -20) {
            await deleteDoc(docRef);
            toast.success('Petition has been removed.', {
                position: "top-center"
            });
        } else {
            await updateDoc(docRef, { votes: newVotes });

            // Notify about vote exceeding 20
            if (newVotes > 20) {
                toast.success('Your grievance and email have been sent to the authority.', {
                    position: "top-center"
                });
                console.log('Email Sent!');
            }
        }

        // Update user vote status
        setUserVotes(prev => ({ ...prev, [id]: voteType }));
    };

    const handleUpvote = (id) => handleVote(id, 'upvote');
    const handleDownvote = (id) => handleVote(id, 'downvote');

    return (
        <div id="main">
            {petitions.map((petition) => (
                <div key={petition.id} id={petition.id} className="card">
                    <div className="card-header">{petition.issue}</div>
                    <div className="card-header">{petition.email}</div>
                    <div className="card-body">
                        <p>{petition.description}</p>
                    </div>
                    <div className="card-footer" style={{ margin: '0', padding: '0' }}>
                        <button
                            type="button"
                            className="btn-success"
                            id={`u${petition.id}`}
                            onClick={() => handleUpvote(petition.id)}
                        >
                            Upvote
                        </button>
                        <h3>
                            <span id={`dis${petition.id}`} className="dis">{petition.votes}</span>
                        </h3>
                        <button
                            type="button"
                            className="btn-danger"
                            id={`d${petition.id}`}
                            onClick={() => handleDownvote(petition.id)}
                        >
                            Downvote
                        </button>
                    </div>
                </div>
            ))}
            <br />
            <br />
            <br />
        </div>
    );
};

export default PetitionList;

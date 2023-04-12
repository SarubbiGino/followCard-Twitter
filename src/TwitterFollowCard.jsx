import React from 'react'
import { useState } from 'react'

export default function TwitterFollowCard({ userName, Text }) {
    //this will render the twitter follow card component
    const [isFollowing, setIsFollowing] = useState(false)
    //this will check if the user is following the profile or not

    const AddAt = (userName) => { return `@${userName}` }
    //this will add an @ to the username
    const Follow = isFollowing ? 'Siguiendo' : 'Seguir'
    //this will check if the user is following the profile, if not it will show the text "Seguir"
    const FollowClass = isFollowing ? 'tw-followCard-button isFollow' : 'tw-followCard-button'
    //this will check if the user is following the profile, if not it will show the button with the class "tw-followCard-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className='tw-followCard-header' >
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${Text}`}
                    alt="Foto de Paco Barel" />
                <div className='tw-followCard-info'>
                    <strong>{userName}</strong>
                    <span className='tw-followCard-infoUserName'>{AddAt(Text)}</span>
                </div>
            </header>

            <aside>
                <button className={FollowClass} onClick={handleClick}>
                    <span className='tw-followCard-text'>{Follow}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}

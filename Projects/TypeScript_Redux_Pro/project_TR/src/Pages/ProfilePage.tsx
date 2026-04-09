import '../styles/ProfilePage.css'

const profileDetails = [
    {
        id: 'phone',
        icon: (
            <svg viewBox="0 0 24 24" className="profile-detail__icon profile-detail__icon--stroke" fill="none">
                <path
                    d="M5 4h4l2 5-2.5 1.5a14 14 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C10.82 21 3 13.18 3 6a2 2 0 0 1 2-2Z"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        label: 'Phone Number',
        value: '+972 50 123 4567',
    },
    {
        id: 'location',
        icon: (
            <svg viewBox="0 0 24 24" className="profile-detail__icon profile-detail__icon--fill">
                <path d="M12 21s-6.5-5.2-6.5-11A6.5 6.5 0 1 1 18.5 10C18.5 15.8 12 21 12 21Zm0-8.25A2.75 2.75 0 1 0 12 7.25a2.75 2.75 0 0 0 0 5.5Z" />
            </svg>
        ),
        label: 'My Location',
        value: 'Akko, Israel',
    },
    {
        id: 'cards',
        icon: (
            <svg viewBox="0 0 24 24" className="profile-detail__icon profile-detail__icon--stroke" fill="none">
                <path
                    d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v9A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-9ZM3 9.5h18M7 15h3"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
        label: 'Cards',
        value: 'Visa •••• 4582',
    },
]

export default function ProfilePage() {
    return (
        <section className="profile-page">
            <div className="profile-card">
                <div className="profile-card__top">
                    <div className="profile-card__avatar">EM</div>

                    <div className="profile-card__identity">
                        <h1 className="profile-card__name">Ehab Mj</h1>
                        <p className="profile-card__email">ehab@example.com</p>
                    </div>
                </div>

                <div className="profile-card__details">
                    {profileDetails.map((item) => (
                        <article key={item.id} className="profile-detail">
                            <div className="profile-detail__left">
                                <div className="profile-detail__icon-wrap">{item.icon}</div>

                                <div className="profile-detail__text">
                                    <span className="profile-detail__label">{item.label}</span>
                                    <strong className="profile-detail__value">{item.value}</strong>
                                </div>
                            </div>

                            <span className="profile-detail__arrow">›</span>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
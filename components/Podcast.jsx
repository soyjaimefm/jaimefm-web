export const Podcast = ({ episode }) => {
    return (
        <iframe className="max-w-2xl" src={`https://open.spotify.com/embed/episode/${episode}?utm_source=generator`} width="100%" height="352" frameBorder='0' allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    )
}
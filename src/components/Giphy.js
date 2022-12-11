const Giphy = ({giphy}) => {
        console.log(giphy)
    
        return giphy.data ? (
            <>
            <h1>Let's see what GIF you will get!!!</h1>
            <img src={giphy.data.images.downsized.url} alt={giphy.data.title}/>
            </>
        ) : (
            <h1>Merry Chrsistmas
            </h1>
        )
    }
    
    export default Giphy;
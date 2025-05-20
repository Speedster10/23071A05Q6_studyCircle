export default function Buy() {

    function handleClick(e) {
        e.preventDefault();
        const amount = e.target[0].value;
        // add credits to that user
    }

    return(
        <>
            <h1>Buy Credits!</h1>
            <form onSubmit={handleClick}>
                <input type="number" />
                <button type="submit" />
            </form>
        </>
    );
}
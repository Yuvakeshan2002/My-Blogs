import Bloglist from "./Bloglist";
import useFetch from "./usefetch";


const Homepage = () => {

    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');
    //grab the data but call it as blogs
    return (
        <div className="home">

            {error && <div> {error} </div>}
            {isLoading && <div> Hang in there...Loading </div>}
            {blogs && <Bloglist blogs={blogs} title="All Blogs!" />}



        </div>
    );
}

export default Homepage;

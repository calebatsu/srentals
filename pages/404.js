//customer are rapperesented with a more user friendly message when accessing 
//a non existant page
import Link from "next/link"

//message displayed + link to redirect back to home
const PageNotFound = () => {
    return (
        <div> 
            {" "}
            <h1> Page Not Found</h1>{" "}
            <h3> Check to see if you are in the correct page.</h3>
            
            <Link href="/"> Click here to go back to the hom page</Link>
        </div>
    )

}

export default PageNotFound;
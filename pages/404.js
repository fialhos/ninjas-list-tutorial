import Link from "next/link";
import { useEffect } from "react";
import { Router, useRouter } from "next/router";

const NotFound = () => {


    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            //router.go()
            router.push('/');
        }, 3000)
    }, [])

    return ( 
        <div className="not-found">
            <h1>Ooooppss.........</h1>
            <h2>That Page can not be found</h2>
            <p> GO Back to The<Link href="/">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound; 
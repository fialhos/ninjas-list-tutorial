import styles from '../../styles/Nijas.module.css';
import Link from 'next/link';

export const getStaticProps = async () =>{

    const resp = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await resp.json();

    return {
        props: { ninjas:data }
    }
}

const Ninjas = ({ ninjas }) => {
    return ( 
        <div>
            <h1>All ninjas</h1>
            {ninjas.map(ninja => (
                <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
                    <h1 className={styles.single}>
                        <h3>
                            {ninja.name}
                        </h3>
                    </h1>
                </Link>
            ))}
        </div>
     );
}
 
export default Ninjas;

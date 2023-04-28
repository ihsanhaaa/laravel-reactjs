import PostsList from '@/Components/Homepage/PostsList';
import Navbar from '@/Components/Navbar';
import { Link, Head } from '@inertiajs/react';

export default function Homepage(props) {
    console.log(props);
    return (
        <>
            <div className='min-h-screen'>
                <Head title="Beranda" />
                <Navbar />
                <PostsList posts={props.posts} />

                {/* <h1>{props.description}</h1>

                {props.posts ? props.posts.map((data, i) => {
                    return (
                        <div key={i} className='p-4 m-2 bg-white text-black'>
                            <p>{data.title}</p>
                            <p>{data.category}</p>
                            <p>{data.author}</p>
                            <p>{data.content}</p>
                        </div>
                    )
                }): <p>tidak ada data</p> } */}
            </div>
        </>
    );
}

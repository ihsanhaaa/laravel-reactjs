import PostsList from '@/Components/Homepage/PostsList';
import Pagination from '@/Components/Homepage/Pagination';
import Navbar from '@/Components/Navbar';
import { Link, Head } from '@inertiajs/react';

export default function Homepage(props) {
    // console.log('props = ', props);
    return (
        <>
            <div className='min-h-screen'>
                <Head title="Beranda" />
                <Navbar user={props.auth.user} />
                <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:item-stretch items-center gap-4'>
                    <PostsList posts={props.posts.data} />
                </div>
                <div className='flex justify-center items-center'>
                    <Pagination meta={props.posts} />
                </div>
            </div>
        </>
    );
}

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { Inertia } from "@inertiajs/inertia";

export default function Dashboard(props) {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');
    const [isNotif, setIsNotif] = useState(false);
    const [errors, setErrors] = useState({});

    // const handleSubmit = () => {
    //     const data = {
    //         title, content, category
    //     }
    //     Inertia.post('/posts', data)
    //     setIsNotif(true)
    //     setTitle('')
    //     setContent('')
    //     setCategory('')
    // }

    function handleSubmit(event) {
        event.preventDefault();
        if (!title) {
            setErrors({ title: 'title is required.' });
            return;
        }
        if (!category) {
            setErrors({ category: 'category is required.' });
            return;
        }
        if (!content) {
            setErrors({ content: 'content is required.' });
            return;
        }

        const data = {
            title, content, category
        }

        Inertia.post('/posts', data);
        setTitle('')
        setContent('')
        setCategory('')
    }

    // console.log('data from = ', props)

    // useEffect(() => {
    //     Inertia.get('/posts')
    //     console.log('data useeffect = ', props)
    // }, []) 

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Postingan Saya</h2>}
        >
            <Head title="Dashboard" />

            <h2>title: {title}</h2>
            <h2>content: {content}</h2>
            <h2>category: {category}</h2>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {isNotif &&
                        <div className="alert alert-info shadow-lg">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <span>{props.flash.message}</span>
                            </div>
                        </div>
                    }
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Judul" className="input input-bordered w-full m-2" onChange={e => setTitle(e.target.value)} value={title} />
                        {errors.title && <p>{errors.title}</p>}
                        <input type="text" placeholder="Kategori" className="input input-bordered w-full m-2" onChange={e => setCategory(e.target.value)} value={category} />
                        {errors.category && <p>{errors.category}</p>}
                        <input type="text" placeholder="Konten" className="input input-bordered w-full m-2" onChange={e => setContent(e.target.value)} value={content} />
                        {errors.content && <p>{errors.content}</p>}
                        <button type="submit" className='btn btn-success'>Submit</button>
                    </form>
                    
                </div>
            </div>

            <div>
                Postingan
            </div>
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Judul
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>Konten</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Kategori</div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
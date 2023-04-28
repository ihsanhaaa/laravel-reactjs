const isPost = ( posts ) => {
    return posts.map((data, i) => {
        return (
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.content}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{data.author}</div> 
                        <div className="badge badge-outline">{data.category}</div>
                    </div>
                </div>
            </div>
        )
    })
}

const noPost = () => {
    return (
        <p>Tidak ada postingan</p>
    )
}

const PostsList = ({ posts }) => {
    return !posts ? noPost() : isPost(posts)
}

export default PostsList
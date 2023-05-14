<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    public function index()
    {
        $posts = new Collection(Post::paginate(6));

        // dd($posts);

        return Inertia::render('Homepage', compact('posts'));
    }

    public function store(Request $request)
    {
        $post = new Post();
        $post->title = $request->title;
        $post->category = $request->category;
        $post->content = $request->content;
        $post->author = Auth::user()->email;
        $post->save();

        return redirect()->back()->with('message', 'postingan berhasil dibuat');
    }

    public function show(Post $post)
    {
        $post = Post::where('author', Auth::user()->email)->get();

        dd($post);

        return redirect()->back()->with('message', 'postingan berhasil dibuat');
    }
}

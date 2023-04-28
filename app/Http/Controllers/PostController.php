<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = new Collection(Post::paginate(6));

        // dd($posts);

        return Inertia::render('Homepage', compact('posts'));
    }
}

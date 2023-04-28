<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return Inertia::render('Homepage', compact('posts'));
    }
}

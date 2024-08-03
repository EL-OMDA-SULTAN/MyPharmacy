<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Wishlists;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class WishlistController extends Controller
{
    //
    public function index()
    {
        // var_dump('omda');
        $wishlist = Wishlists::where('Is_deleted', 0)->get();
        return response()->json($wishlist);

    }

    public function store(Request $request, $user_id, $product_id)
    {
        $wishlist = new Wishlists();
        $wishlist->Customer_ID = $user_id;
        $wishlist->Product_ID = $product_id;
        $wishlist->Is_deleted = 0;
        $wishlist->save();
        return response()->json($wishlist);
    }
    public function show($user_id)
    {
            return Wishlists::where('Customer_ID', $user_id)
                        ->where('Is_deleted', 0)
                        ->get();
        }

    public function destroy($id)
    {
        $wishlist = Wishlists::where('Product_ID', $id)->first();
        $wishlist->delete();
        // $wishlist->Is_deleted = 1;
        // $wishlist->save();
        return response()->json($wishlist);
    }
}

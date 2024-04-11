import { HiOutlineDotsVertical } from "react-icons/hi"

export default function Post({post}) {
  return (
    <div className="bg-white my-7 broder rounded-md">
        <div className="flex items-center p-5 border-b border-gray-100">
            <img src={post.profileImg} alt={post.username} className="h-12 w-12 rounded-full object-cover border p-1 mr-3" />
            <p className="flex-1 font-bold">{post.username}</p>
        <HiOutlineDotsVertical className="cursor-pointer h-5"/>
        </div>
        <img src={post.image} alt={post.caption} className="object-cover w-full"/>
       
        <p className="p-5 truncate">
            <span className="mr-2 font-bold">{post.username}</span>
            {post.caption}</p>
    </div>
  )
}

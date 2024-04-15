import React from 'react'
import {Navbar }from '@/components/custom/Navbar'
import User from '@/components/custom/User'
import Hero from '@/components/custom/Hero'
import {RecentPost} from '@/components/custom/RecentPost'
import Footer from '@/components/custom/Footer'


const posts = [
    {
      image: "path/to/image1.jpg",
      profilePic: "path/to/profile1.jpg",
      username: "John Doe",
      description: "This is the first post's description. It can be a short summary of the content in the image.",
    },
    {
      image: "path/to/image2.jpg",
      profilePic: "path/to/profile2.jpg",
      username: "Jane Smith",
      description: "This is the second post's description. You can add some details about the picture here.",
    },
    {
      image: "path/to/image3.jpg",
      profilePic: "path/to/profile3.jpg",
      username: "Alice Walker",
      description: "Write a creative description for the third post's image to make it engaging.",
    },
    {
      image: "patha/to/image1.jpg",
      profilePic: "path/to/profile1.jpg",
      username: "John Doe",
      description: "This is the first post's description. It can be a short summary of the content in the image.",
    },
  ];
  
const users = [

    {
      image: "/card-top.jpg",
      username: "John Doe",
      description: "Software Engineer",
    },
    {
      image: "/card-top.jpg",
      username: "Jane Smith",
      description: "Archtect",
    },
    {
      image: "/card-top.jpg",
      username: "Hewan Abebe",
      description: "Artist",
    },
    {
      image: "/card-top.jpg",
      username: "Yidnekachew Tebeje",
      description: "Designer",
    },
]

const page = () => {
  return (
    <div>
         <Navbar />
        <div className="h-screen">
        <Hero />
        <div className=" overflow-y-auto px-2 pt-[450px] flex py-1 ">  
        {
          users.map((user) => (
            <User key={user.username} {...user} />
          ))
        }
        </div>
        
      </div>
        <h1 className='text-5xl pt-[200px] text-center font-bold text-gray-700 '>Recent Posts</h1>
        
        <div className='flex flex-wrap w-full gap-4 justify-center py-8 '>
          {posts.map((post) => (
            <div className='w-2/5'>
              <RecentPost 
              key={post.image} {...post} 
               />

            </div>
              
          ))}

        </div>

        <Footer /> 
        

    </div>
  )
}

export default page
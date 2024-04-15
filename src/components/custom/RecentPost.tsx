import React from 'react'
import { post } from '@/types/post'
import Image from 'next/image'


//i temporarly made the profile pic and username like this it should be modified later
interface RecentPostProps { 
  image : post['image']
  profilePic : post['image']
  username : post['userId']
  description : post['description']
}

export const RecentPost = ({ image, profilePic, username, description }: RecentPostProps) => {
    return (
      <div className='w-full '>
        <div className="rounded overflow-hidden shadow-lg">
        <img className="w-full" src="/card-top.jpg" alt="Sunset in the mountains" />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>

        <div className="flex items-center px-6 py-4">
          <img className="w-10 h-10 rounded-full mr-4" src="/card-top.jpg" alt="Avatar of Jonathan Reinink" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">Jonathan Reinink</p>
            <p className="text-gray-600">Aug 18</p>
          </div>
        </div>

        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
    </div>
      </div>
    )
}





  /**
         <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={image}
          alt="User Post"
          className="h-64 object-cover w-full"
        />
        <div className="flex items-center px-4 py-3">
          <img
            src={profilePic}
            alt="Profile Picture"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="flex flex-col">
            <span className="text-base font-bold">{username}</span>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
   */
// import mongoose from 'mongoose';



export interface post {
    // userId: mongoose.Schema.Types.ObjectId;
    userId: string;
    image: string;
    description?: string; 
    location: {
      type: string;
      coordinates: number[];
    };
    createdAt?: Date; 
    updatedAt?: Date; 
  }

  
import { FunctionComponent, useState } from 'react';
import { IProject } from '../type';
import { AiOutlineGithub } from 'react-icons/ai';
import {MdClose} from 'react-icons/md';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animation';



const ProjectCard:FunctionComponent<{

    project:IProject;
    showDetails:null|number;
    setShowDetails: (id: null|number) => void;

}> = ({

    project:{
        name,image_path,category,deployed_url,description,github_url,key_techs,id,
    },
    showDetails,
    setShowDetails,


}) => {



    
    
    return (
        
        <div>
               <Image src={image_path} alt={name} className='cursor-pointer' onClick={()=>setShowDetails(id)} width='400' layout='responsive' height='200'/>
               <p className='my-2 text-center'>{name}</p>

                {
                    showDetails === id && ( 
               
             <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-300 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-gray-900">
              

                    

                    
                   <motion.div variants={stagger} initial="initial" animate="animate">
                       <motion.div variants={fadeInUp} className="border-4 border-blue-100">
                   <Image src={image_path} alt={name} width='400' layout='responsive' height='200'/></motion.div>
                   <motion.div variants={fadeInUp}   className="flex justify-center my-4 space-x-3">
                       <a href={github_url} className="flex items-center px-4 py-4 space-x-3 text-lg text-white bg-gray-700 rounded-md dark:text-white dark:bg-gray-700"><AiOutlineGithub/>
                       <span>Github</span></a>
                       
                       <a href={deployed_url} className="flex items-center px-4 py-4 space-x-3 text-lg text-white bg-gray-700 rounded-md dark:text-white dark:bg-gray-700" > <AiOutlineGithub/>
                       <span>Project</span> </a>
                      
                   </motion.div>
                   
                   
                   
                   </motion.div>

                    <motion.div variants={stagger} initial='initial' animate='animate'>
                        <motion.h2 variants={fadeInUp} className='mb-2 text-xl font-medium md:text-2xl'>
                            {name}
                        </motion.h2>
                        <motion.h3 variants={fadeInUp}  className='mb-2 font-medium'>{description}</motion.h3>
                        <motion.div variants={fadeInUp} className="flex flex-wrap space-x-2 text-sm tracking-wider">
                            {
                                key_techs.map((tech) => <span key={tech} className="px-2 py-1 my-1 text-white bg-gray-700 rounded-sm dark:bg-gray-700">
                                    {tech}
                                </span>)
                                }
                            
                        </motion.div>


                    </motion.div>

                    <button  className='absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-gray-500' onClick={()=>setShowDetails(null)}>
                        <MdClose  size={30}/>
                    </button>

               </div>
          
                
              
               )}
        </div>
        
    )
}

export default ProjectCard

import React from 'react'
import novel from '../assets/images/project_novel.png'
import rotc from '../assets/images/project_rotc.png'
import clinic from '../assets/images/project_clinic.png'

const Projects = () => {
    return (
        <div className='mt-4'>
            <h1 className='text-center text-2xl font-bold text-teal-500 tracking-widest my-3'>Projects</h1>

            <div className='flex gap-3 justify-center'>
                <a target='_blank' href="http://alexander-novo.free.nf/novel_arch/index.php" class="overflow-hidden pl-5 flex w-[50%] flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
                    <img class="object-cover w-full rounded-t-lg md:w-48 md:rounded-none " src={novel} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-white">Novel System</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Created a Novel Sytem for user to read novels with awesome UI and Interface.</p>
                        <p className='text-white text-[13px]'>Username: admin@gmail.com</p>
                        <p className='text-white text-[13px]'>Password: 123</p>
                    </div>
                </a>
                <a target='_blank' href="http://alexander-novo.free.nf/ROTC" class="overflow-hidden pl-5 flex w-[50%] flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
                    <img class="object-cover w-full rounded-t-lg md:w-48 md:rounded-none" src={rotc} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-white">ROTC Attendance and Merit System</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">ROTC Attendance and Merit System is used to manage grades by recording attendance and merits of the cadets.</p>
                        <p className='text-white text-[13px]'>Username: Admin</p>
                        <p className='text-white text-[13px]'>Password: Admin</p>
                    </div>
                </a>
            </div>
            <div className='flex gap-3 justify-center mt-3'>
                <a target='_blank' href="http://alexander-novo.free.nf/ClinicCapstone/views/" class="overflow-hidden pl-5 flex w-[50%] flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" >
                    <img class="object-cover w-full rounded-t-lg md:w-48 md:rounded-none" src={clinic} alt="" />
                    <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-[16px] font-bold tracking-tight text-gray-900 dark:text-white">Dental Clinic System</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Dental Clinic System is used to manage dental health care and record what tooth/teeths have been filled, extract etc.</p>
                        <p className='text-white text-[13px]'>Username: Phyllis@gmail.com</p>
                        <p className='text-white text-[13px]'>Password: Phyllis@gmail.com</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Projects
